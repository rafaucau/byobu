(()=>{var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{components:()=>y,extend:()=>_});const s=flarum.core.compat["admin/app"];var o=t.n(s);const n=flarum.core.compat["common/models/User"];var a=t.n(n);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}const r=flarum.core.compat["admin/components/ExtensionPage"];var l=t.n(r);const c=flarum.core.compat["common/components/Badge"];var p=t.n(c);const f=flarum.core.compat["common/helpers/icon"];var u=t.n(f);const d=flarum.core.compat["common/utils/ItemList"];var b=t.n(d),g=function(t){function e(){for(var e,s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).badgeDefault="fas fa-map",e.postActionDefault="far fa-map",e}var s,n;n=t,(s=e).prototype=Object.create(n.prototype),s.prototype.constructor=s,i(s,n);var a=e.prototype;return a.content=function(){return m("div",{className:"ByobuSettingsPage"},m("div",{className:"container"},m("div",{className:"ByobuSettingsTabPage ByobuSettingsPage--settings"},m("div",{className:"Form"},this.settingsItems().toArray(),m("div",{className:"Form-group"},this.submitButton())))))},a.settingsItems=function(){var t=new(b());return t.add("general",m("div",{className:"Section"},m("h3",null,o().translator.trans("fof-byobu.admin.settings.general.heading")),m("p",{className:"helpText"},o().translator.trans("fof-byobu.admin.settings.general.help")),this.generalItems().toArray())),t.add("icon",m("div",{className:"Section"},m("h3",null,o().translator.trans("fof-byobu.admin.settings.icon.heading")),m("p",{className:"helpText"},o().translator.trans("fof-byobu.admin.settings.icon.help")),this.iconItems().toArray())),t},a.generalItems=function(){var t=new(b());return t.add("makePublic",this.buildSettingComponent({type:"boolean",setting:"fof-byobu.makePublic",label:o().translator.trans("fof-byobu.admin.settings.enable-make-public-option"),help:o().translator.trans("fof-byobu.admin.settings.enable-make-public-option-help")})),t.add("deleteEmpty",this.buildSettingComponent({type:"boolean",setting:"fof-byobu.delete_on_last_recipient_left",label:o().translator.trans("fof-byobu.admin.settings.delete_on_last_recipient_left"),help:o().translator.trans("fof-byobu.admin.settings.delete_on_last_recipient_left_help")})),t.add("hideAllDiscussions",this.buildSettingComponent({type:"boolean",setting:"fof-byobu.hide_from_all_discussions_page",label:o().translator.trans("fof-byobu.admin.settings.hide_from_all_discussions_page"),help:o().translator.trans("fof-byobu.admin.settings.hide_from_all_discussions_page_help")})),t},a.iconItems=function(){var t=new(b());return t.add("icon-badge",this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-badge",label:o().translator.trans("fof-byobu.admin.settings.badge-icon"),help:m("div",null,m(p(),{icon:this.setting("fof-byobu.icon-badge").toJSON()||this.badgeDefault})," ",this.helpText()),placeholder:this.badgeDefault})),t.add("icon-postAction",this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-postAction",label:o().translator.trans("fof-byobu.admin.settings.post-event-icon"),help:m("div",null,u()(this.setting("fof-byobu.icon-postAction").toJSON()||this.postActionDefault)," ",this.helpText()),placeholder:this.postActionDefault})),t},a.helpText=function(){return flarum.extensions["flarum-tags"]&&o().translator.trans("flarum-tags.admin.edit_tag.icon_text",{a:m("a",{href:o().refs.fontawesome,tabindex:"-1"})})},e}(l());const _=[].concat([]);var y={ByobuSettingsPage:g};o().initializers.add("fof-byobu",(function(){var t;o().store.models.recipients=a(),o().extensionData.for("fof-byobu").registerPage(g),(t=o().extensionData.for("fof-byobu")).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_users"),permission:"discussion.startPrivateDiscussionWithUsers",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.add_more_than_two_user_recipients"),permission:"discussion.addMoreThanTwoUserRecipients",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_groups"),permission:"discussion.startPrivateDiscussionWithGroups",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_blocking_users"),permission:"discussion.startPrivateDiscussionWithBlockers",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.edit_user_recipients"),permission:"discussion.editUserRecipients",tagScoped:!1},"moderate",95).registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.edit_group_recipients"),permission:"discussion.editGroupRecipients",tagScoped:!1},"moderate",95).registerPermission({icon:"fas fa-flag",label:o().translator.trans("fof-byobu.admin.permission.view_private_discussions-when-flagged"),permission:"user.viewPrivateDiscussionsWhenFlagged",tagScoped:!1},"moderate",95),o().data.settings["fof-byobu.makePublic"]&&t.registerPermission({icon:"far fa-map",label:o().translator.trans("fof-byobu.admin.permission.make_private_into_public"),permission:"discussion.makePublic",tagScoped:!1},"reply",95)}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map