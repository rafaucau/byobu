<?php

/*
 * This file is part of fof/byobu.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Byobu\Discussion;

use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Group\Group;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;
use Illuminate\Support\Fluent;
use Illuminate\Support\Str;

/**
 * @property Saving|null        $event
 * @property Collection|User[]  $currentUsers
 * @property Collection|Group[] $currentGroups
 * @property Collection|User[]  $users
 * @property Collection|Group[] $groups
 */
class Screener extends Fluent
{
    public static function fromDiscussion(Discussion $discussion): Screener
    {
        $screener = new Self;

        $screener->users = $screener->currentUsers = $discussion->recipientUsers()->get();
        $screener->groups = $screener->currentGroups = $discussion->recipientGroups()->get();

        return $screener;
    }

    public static function whenSavingDiscussions(Saving $event): Screener
    {
        $screener = new self();
        $screener->currentUsers = $event->discussion->recipientUsers()->get();
        $screener->currentGroups = $event->discussion->recipientGroups()->get();

        $screener->users = static::getRecipientsFromPayload($event, 'users');
        $screener->groups = static::getRecipientsFromPayload($event, 'groups');

        $screener->event = $event;

        return $screener;
    }

    public function actor(): ?User
    {
        return $this->event->actor ?? null;
    }

    public function nothingChanged(): bool
    {
        return $this->users->diff($this->currentUsers)->isEmpty()
            && $this->groups->diff($this->currentGroups)->isEmpty();
    }

    public function isPrivate(): bool
    {
        return $this->users->isNotEmpty() || $this->users->isNotEmpty();
    }
    public function wasPrivate(): bool
    {
        return $this->currentUsers->isNotEmpty() || $this->currentGroups->isNotEmpty();
    }

    protected static function getRecipientsFromPayload(Saving $event, string $type): Collection
    {
        $ids = collect(Arr::get(
            $event->data,
            'relationships.'.static::relationName($type).'.data',
            []
        ))->pluck('id');

        if ($type === 'groups') {
            return Group::query()->whereIn('id', $ids)->get();
        }

        return User::query()->whereIn('id', $ids)->get();
    }

    protected static function relationName(string $type)
    {
        return 'recipient'.Str::ucfirst($type);
    }

    public function hasBlockingUsers(): bool
    {
        return $this->users
            ->first(function (User $user) {
                return $user->getPreference('blocksPd', false);
            }) !== null;
    }

    public function deleted(string $type)
    {
        if ($type === 'groups') {
            return $this->currentGroups->diff($this->groups);
        }

        return $this->currentUsers->diff($this->users);
    }

    public function added(string $type)
    {
        if ($type === 'groups') {
            return $this->groups->diff($this->currentGroups);
        }

        return $this->users->diff($this->currentUsers);
    }

    public function actorRemoved(): bool
    {
        return $this->deleted('users')->find($this->actor) !== null;
    }
}
