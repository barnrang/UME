if (self.CavalryLogger) { CavalryLogger.start_js(["23Ap0"]); }

__d("ChatEmployeeAwayWarning",["MercuryIDs","MercuryViewer","MessengerParticipants.bs"],(function(a,b,c,d,e,f){__p&&__p();a={updateEmployeeAwayWarning:function(a,c,d){__p&&__p();b("MessengerParticipants.bs").get(b("MercuryViewer").getID(),function(e){e=e.employee;e&&b("MessengerParticipants.bs").getMulti(a.participants,function(e){var f=!1,g=b("MercuryIDs").getUserIDFromThreadID(a.thread_id);if(!g)return;g="fbid:"+g;for(var h in e)g==e[h].id&&e[h].is_employee_away&&(f=!0);f?c():d()})})}};e.exports=a}),null);
__d("LinkedMentorshipProgramWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2152739548075248"};c.getQueryID=function(){"use strict";return"231780697410386"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("XNativeComponentFlowBookingRequestCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/platform/native-component-flow/booking_request_count/",{page_id:{type:"FBID",required:!0},user_id:{type:"FBID",required:!0}})}),null);
__d("FantaReducersTabSheets",["AsyncRequest","Bootloader","ChatEmployeeAwayWarning","ChatPrivacyActionController","CurrentUser","FantaGetMessageActions","FantaMessageActions","FantaTabActions","FantaTabSheetActions","FBIDCheck","ImmutableObject","MentorshipClientTypedLogger","MercuryConfig","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercurySheetPolicy","MercuryThreadInfo","MessengerParticipants.bs","MercuryViewer","MessageThreadAssociatedObjectUtils","MessengerState.bs","promiseDone","RTCCallState","WebGraphQL","LinkedMentorshipProgramWebGraphQLQuery","XNativeComponentFlowBookingRequestCountController","emptyFunction","ifRequired","setImmediate","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaTabActions").Types,h=b("FantaGetMessageActions").Types,i=b("FantaMessageActions").Types,j=b("FantaTabSheetActions").Types;function a(a,b){switch(b.type){case g.CLOSE_TAB:case g.CLOSE_AND_TAB_NEXT:b=b.tabID;var c=a.mercury.tabContents.get(b);if(!c)return a;c=c.merge({typeahead:null});a=a.setIn(["mercury","tabContents",b],c);return k(a,b)}return a}function k(a,b,c){var d=a.mercury.tabContents.get(b);if(!d)return a;if(c&&d.openSheet!==c)return a;d=d.merge({openSheet:null});a=a.setIn(["mercury","tabContents",b],d);d.thread&&(a=N(a,b,d.thread));return a}function c(a,b){__p&&__p();switch(b.type){case g.CLOSE_ALL_TABS:for(var b=a.mercury.tabContents.values(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e.id;e=e.merge({typeahead:null});a=a.setIn(["mercury","tabContents",f],e);a=k(a,f)}}return a}function d(a,b){switch(b.type){case h.ON_GET_THREAD_RESPONSE:case h.ON_GET_THREAD_PREVIEW_RESPONSE:var c=b.thread;b=b.tabID||c.thread_id;a=l(a,c,b)}return a}function l(a,c,d){var e=b("MercuryViewer").getID(),f=c.participants.filter(function(a){return a!==e});f.length<1&&!b("MessengerState.bs").isNewEmptyLocalThread(b("CurrentUser").getID(),d)&&!b("MessageThreadAssociatedObjectUtils").shouldRender(c.associated_object)?a=p(a,d,b("MercurySheetPolicy").sheets.ChatNoRecipientsTabSheet):a=k(a,d,b("MercurySheetPolicy").sheets.ChatNoRecipientsTabSheet);c.participants.length!==0&&(U(a,d),a=N(a,d,c));return a}function f(a,c){switch(c.type){case h.THREADS_UPDATED:c.threads.forEach(function(c){a=l(a,new(b("ImmutableObject"))(c),c.thread_id)})}return a}function m(a,b){switch(b.type){case g.OPEN_TAB:case g.REPLACE_TAB:b=b.tabID;var c=a.mercury.tabContents.get(b).thread;c&&(a=N(a,b,c))}return a}function n(a,c,d){if(b("MercuryThreadInfo").isMuted(d))return p(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMutedTabSheet);else return k(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMutedTabSheet)}function o(a,c,d){var e=b("CurrentUser").getID(),f=a;b("MessengerState.bs").compute(e,function(g){g=g.blocked_ids;b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(e,g,d)?f=p(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMessageBlockedSheet):f=k(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMessageBlockedSheet)});return f}function p(a,c,d){__p&&__p();var e=a.mercury.tabContents.get(c),f=a.tabGroup.tabs.get(c);if(!f||!e)return a;f=e;f=f.openSheet;if(f&&!b("MercurySheetPolicy").canReplaceOpenSheet(f,d))return a;e=e.merge({openSheet:d});a=a.setIn(["mercury","tabContents",c],e);return a}function q(a,b){return a}function r(a,c){switch(c.type){case j.OPEN_APPOINTMENT_SHEET:c=c.tabID;return p(a,c,b("MercurySheetPolicy").sheets.ChatAppointmentBanner)}return a}function s(a,c){switch(c.type){case j.OPEN_USER_FOCUS_SHEET:c=c.tabID;return p(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusSheet)}return a}function t(a,c){switch(c.type){case j.CLOSE_USER_FOCUS_AND_BYPASS_SHEET:c=c.tabID;a=k(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusSheet);a=k(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusBypassSheet)}return a}function u(a,c){switch(c.type){case j.OPEN_BYPASS_FOCUS_SHEET:c=c.tabID;return p(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusBypassSheet)}return a}function v(a,c,d){b("ChatEmployeeAwayWarning").updateEmployeeAwayWarning(d,function(){return b("setImmediate")(function(){b("FantaTabSheetActions").openEmployeeAwaySheet(c)})},b("emptyFunction"));return a}function w(a,c){switch(c.type){case j.OPEN_EMPLOYEE_AWAY_SHEET:c=c.tabID;a=p(a,c,b("MercurySheetPolicy").sheets.ChatEmployeeAwaySheet)}return a}function x(a,c){switch(c.type){case j.OPEN_NAME_CONVERSATION_TAB_SHEET:return p(a,c.tabID,b("MercurySheetPolicy").sheets.ChatNameConversationTabSheet)}return a}function y(a,c){switch(c.type){case j.CLOSE_NAME_CONVERSATION_TAB_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatNameConversationTabSheet)}return a}function z(a,b){return a}function A(a,c){switch(c.type){case j.OPEN_READ_ONLY_PERMANENT_SHEET:return p(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyPermanentTabSheet)}return a}function B(a,c){switch(c.type){case j.CLOSE_READ_ONLY_PERMANENT_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyPermanentTabSheet)}return a}function C(a,c){switch(c.type){case j.OPEN_READ_ONLY_SHEET:return p(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyTabSheet)}return a}function D(a,c){switch(c.type){case j.CLOSE_READ_ONLY_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyTabSheet)}return a}function E(a,b){return a}function F(a,b){return a}function G(a,c){switch(c.type){case j.CLOSE_ADD_FRIENDS_SHEET:c=c.tabID;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({typeahead:null});a=a.setIn(["mercury","tabContents",c],d);return k(a,c,b("MercurySheetPolicy").sheets.FantaAddFriendsSheet)}return a}function H(a,c){switch(c.type){case j.CLOSE_ADD_MORE_FRIENDS_SHEET:c=c.tabID;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({typeahead:null});a=a.setIn(["mercury","tabContents",c],d);return k(a,c,b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)}return a}function I(a,c){switch(c.type){case i.SEND_GROUP_MESSAGE:c=c.tabID||c.threadID;return k(a,c,b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)}return a}function J(a,c){switch(c.type){case i.RECEIVED_NEW_MESSAGE:c=c.tabID;var d=a.mercury.tabContents.get(c);d&&!d.isScrolledToBottom?a=p(a,c,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet):a=k(a,c,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet)}return a}function K(a,c){switch(c.type){case g.SCROLL_BOTTOM_CHANGED:var d=c.tabID;c=c.isScrolledToBottom;c&&(a=k(a,d,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet));c=a.mercury.tabContents.get(d);c&&c.thread&&(a=P(a,d,c.thread))}return a}function L(a,c){__p&&__p();switch(c.type){case h.ON_PRIVACY_STATE_CHANGE:var d=c.threadID;c=c.privacyState;switch(c){case b("ChatPrivacyActionController").OFFLINE:a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet);a=p(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);break;case b("ChatPrivacyActionController").NORMAL:a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet);a=k(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);break;case b("ChatPrivacyActionController").BLOCKED:a=k(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);c=b("MercuryIDs").getUserIDFromThreadID(d);if(c){c=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(c));c&&c.is_friend?a=p(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet):a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet)}break}}return a}function M(a,b){switch(b.type){case j.ON_IS_PAGE_TAB:var c=b.tabID;b=b.pageIndicator;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({pageIndicator:b});a=a.setIn(["mercury","tabContents",c],d)}return a}function N(a,b,c){__p&&__p();a=o(a,b,c);a=n(a,b,c);a=v(a,b,c);a=Q(a,b,c);a=T(a,b,c);a=P(a,b,c);a=O(a,b,c);a=W(a,b,c);a=X(a,b,c);return a}function O(a,c,d){var e=d.rtc_call_data;d=d.thread_fbid;e=e&&e.call_state!==b("RTCCallState").NO_ONGOING_CALL&&d;e?a=p(a,c,b("MercurySheetPolicy").sheets.ChatJoinCallSheet):a=k(a,c,b("MercurySheetPolicy").sheets.ChatJoinCallSheet);return a}function P(a,c,d){d=d.has_montage&&b("MercuryConfig").MontageThreadViewer;var e=a.mercury.tabContents.get(c),f=a.tabGroup.tabs.get(c);if(!f||!e)return a;d?e=e.merge({isMontageOpen:!0}):e=e.merge({isMontageOpen:!1});return a.setIn(["mercury","tabContents",c],e)}function Q(a,c,d){__p&&__p();b("ifRequired")("EventReminderActions",function(e){__p&&__p();var event;e.clearAllReminders(c);if(d.associated_object&&d.associated_object.room_type==="EVENT")event=d.associated_object,e.updateEventReminder(c,event,null,d.participants_event_status);else if(d.lightweight_event){event=d.lightweight_event;e.updateEventReminder(c,event);var f=d.lightweight_events;if(f&&Object.keys(f).length>0)for(var g in f)e.updateEventReminder(c,f[g],g)}event?a=p(a,c,b("MercurySheetPolicy").sheets.ChatEventReminderTabSheet):b("ifRequired")("EventReminderStateStore",function(d){d=d.getEvent(c);d&&d.exists&&e.deleteEventReminder(c);a=k(a,c,b("MercurySheetPolicy").sheets.ChatEventReminderTabSheet)},function(){return R(c)})},function(){return R(c)});return a}function R(a){b("Bootloader").loadModules(["EventReminderActions","EventReminderStateStore"],function(c,d){b("setImmediate")(function(){b("FantaTabSheetActions").onBootloadEventReminder(a)})},"FantaReducersTabSheets")}function S(a,b){switch(b.type){case j.ON_BOOTLOAD_EVENT_REMINDER:b=b.tabID;var c=a.mercury.tabContents.get(b);if(!c)return a;c=c.thread;c&&(a=Q(a,b,c))}return a}function T(a,c,d){d=d.other_user_fbid;if(d&&!b("FBIDCheck").isUser_deprecated(d)&&b("gkx")("AT6lRFQLpQZ6UWlPrB9gInaarooSpaHqBAt5ho6-RghBTrVcE-XKcrf8CtnjJLZJDFVcDhkmvsbKnTVqx76gSACvoOe9JNcrEBY54bqb1L214A")){d=b("XNativeComponentFlowBookingRequestCountController").getURIBuilder().setFBID("page_id",d).setFBID("user_id",b("CurrentUser").getID()).getURI();new(b("AsyncRequest"))().setURI(d).setHandler(function(a){a=a&&a.getPayload();a&&a.confirmed+a.pending>0&&b("FantaTabSheetActions").openAppointmentBannerSheet(c)}).send()}else a=k(a,c,b("MercurySheetPolicy").sheets.ChatAppointmentBanner);return a}function U(a,c){var d=b("MercuryIDs").getUserIDFromThreadID(c);a=a.mercury.tabContents.get(c);a=!a||a&&!a.mentorship;d&&a&&b("promiseDone")(b("WebGraphQL").exec(new(b("LinkedMentorshipProgramWebGraphQLQuery"))({id:d})),function(a){var d;d=(d=a)!=null?(d=d.message_thread)!=null?(d=d.linked_mentorship_programs)!=null?(d=d.edges)!=null?(d=d[0])!=null?(d=d.node)!=null?(d=d.mentorship_group)!=null?d.id:d:d:d:d:d:d:d;a=(a=a)!=null?(a=a.message_thread)!=null?(a=a.linked_mentorship_programs)!=null?(a=a.edges)!=null?(a=a[0])!=null?(a=a.node)!=null?(a=a.mentorship_group)!=null?a.name:a:a:a:a:a:a:a;b("FantaTabSheetActions").onMentorshipProgramResponse(c,a,d)},function(a){a.message&&new(b("MentorshipClientTypedLogger"))().setClientUserID(d).setError(String(a.message)).log()})}function V(a,c){switch(c.type){case j.ON_MENTORSHIP_PROGRAM_RESPONSE:var d=c.tabID,e=c.groupID;c=c.programName;var f=a.mercury.tabContents.get(d);if(!f)return a;c&&e&&(f=f.set("mentorship",{programName:c,groupID:e}),a=a.setIn(["mercury","tabContents",d],f),a=p(a,d,b("MercurySheetPolicy").sheets.ChatMentorshipProgramSheet));break}return a}function W(a,c,d){d=d.associated_object;b("MessageThreadAssociatedObjectUtils").shouldRender(d)&&(a=p(a,c,b("MercurySheetPolicy").sheets.ChatRoomAssociatedObjectSheet));return a}function X(a,c,d){return k(a,c,b("MercurySheetPolicy").sheets.ChatGroupsSyncTabSheet)}e.exports={closeAddFriends:G,closeAddMoreFriends:H,closeAllTabs:c,closeFocusUserSheet:t,closeNameConversationSheet:y,closePermanentReadOnlySheet:B,closeReadOnlySheet:D,closeTab:a,onBootloadEventReminder:S,onGetThreadResponse:d,onIsPageTab:M,onPrivacyStateChange:L,openAddFriendsSheet:q,openAppointmentBannerSheet:r,openBypassFocusSheet:u,openEmployeeAwaySheet:w,openFocusUserSheet:s,openNameConversationSheet:x,openNewMessagesSheet:z,openPermanentReadOnlySheet:A,openReadOnlySheet:C,openTab:m,openUploadWarningTabSheet:E,openUserFocusSheet:F,receivedNewMessage:J,scrollBottomChanged:K,sendGroupMessage:I,threadsUpdated:f,onMentorshipProgramResponse:V}}),null);