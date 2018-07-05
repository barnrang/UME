if (self.CavalryLogger) { CavalryLogger.start_js(["i5ss3"]); }

__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAttachmentID=function(a){this.$1.attachment_id=a;return this};a.prototype.setAttachmentType=function(a){this.$1.attachment_type=a;return this};a.prototype.setIsFromViewer=function(a){this.$1.is_from_viewer=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={attachment_id:!0,attachment_type:!0,is_from_viewer:!0,vc:!0};e.exports=a}),null);
__d("ChatPhotoForwardButton.react",["cx","fbt","Link.react","MessagingForwardAttachmentDialog.react","MessengerForwardChatFlowSharedAttachmentsTypedLogger","MessengerPhotoForwardConfig","React","TooltipData"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={dialogShown:!1},this.$2=function(){this.props.attachmentIDs[0]&&this.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(this.props.attachmentIDs[0]).setIsFromViewer(this.props.isFromViewer).setAttachmentType(this.props.attachmentTypes[0]).log(),this.setState({dialogShown:!0})}.bind(this),this.$3=function(){this.setState({dialogShown:!1})}.bind(this),c}a.prototype.render=function(){var a=h._("\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d"),c=this.props.isFromViewer?"left":"right";c=Object.assign({"data-tooltip-alignh":c},b("TooltipData").propsFor(a,c));var d=b("MessengerPhotoForwardConfig").showArrowIcon?"_3xqa":"_2t5t";return b("React").createElement("div",null,this.$1(),b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$2,ref:"forwardButton",role:"button",className:"_2t5q"+(this.props.isFromViewer?"":" _1_47")+(this.props.isFromViewer?" _1_48":"")}),b("React").createElement("div",{className:d})))};a.prototype.$1=function(){if(!this.state.dialogShown)return null;var a=h._("\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e41\u0e22\u0e01\u0e08\u0e32\u0e01\u0e01\u0e31\u0e19");return b("React").createElement(b("MessagingForwardAttachmentDialog.react"),{attachmentID:this.props.attachmentIDs[0],onClose:this.$3,shown:this.state.dialogShown,title:a})};a.propTypes={attachmentIDs:c.arrayOf(c.string).isRequired,isFromViewer:c.bool.isRequired};e.exports=a}),null);
__d("MessengerPhotoForwardButton.react",["cx","fbt","Link.react","MessengerDialogs.bs","MessengerForwardAttachmentDialogReact.bs","MessengerForwardChatFlowSharedAttachmentsTypedLogger","React","TooltipData"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MessengerForwardAttachmentDialogReact.bs").jsComponent;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){var a=h._("\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e41\u0e22\u0e01\u0e08\u0e32\u0e01\u0e01\u0e31\u0e19");this.props.attachmentIDs[0]&&this.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(this.props.attachmentIDs[0]).setIsFromViewer(this.props.isFromViewer).setAttachmentType(this.props.attachmentTypes[0]).log();b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(j,{attachmentID:this.props.attachmentIDs[0],onClose:this.$2,shown:!0,title:a})}.bind(this))}.bind(this),c}a.prototype.render=function(){var a=h._("\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d"),c=this.props.isFromViewer?"left":"right";c=Object.assign({"data-tooltip-alignh":c},b("TooltipData").propsFor(a,c));return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$1,ref:"forwardButton",role:"button",className:"_2t5t"}))};a.prototype.$2=function(){b("MessengerDialogs.bs").removeDialog()};a.propTypes={attachmentIDs:c.arrayOf(c.string).isRequired,isFromViewer:c.bool.isRequired};e.exports=a}),null);