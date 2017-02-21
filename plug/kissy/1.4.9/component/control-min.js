/*
Copyright 2014, KISSY v1.49
MIT Licensed
build time: Aug 20 14:23
*/
KISSY.add("component/control/process",["base","promise"],function(f,c){function h(d){d.fire("beforeSyncUI");d.syncUI();d.__callPluginsMethod("pluginSyncUI");d.fire("afterSyncUI")}var k=c("base"),m=c("promise").Defer,g=k.prototype.__getHook,e=f.noop,i=k.extend({bindInternal:e,syncInternal:e,initializer:function(){this._renderedDefer=new m},renderUI:e,syncUI:e,bindUI:e,onRendered:function(d){return this._renderedDefer.promise.then(d)},create:function(){this.get("created")||(this.fire("beforeCreateDom"),
this.createInternal(),this.__callPluginsMethod("pluginCreateDom"),this.fire("afterCreateDom"),this.setInternal("created",!0));return this},createInternal:function(){this.createDom()},render:function(){this.get("rendered")||(this.create(),this.fire("beforeRenderUI"),this.renderUI(),this.__callPluginsMethod("pluginRenderUI"),this.fire("afterRenderUI"),this.fire("beforeBindUI"),i.superclass.bindInternal.call(this),this.bindUI(),this.__callPluginsMethod("pluginBindUI"),this.fire("afterBindUI"),i.superclass.syncInternal.call(this),
h(this),this.setInternal("rendered",!0));return this},sync:function(){h(this)},plug:function(d){var c=this.get("plugins");this.callSuper(d);d=c[c.length-1];this.get("rendered")?(d.pluginCreateDom&&d.pluginCreateDom(this),d.pluginRenderUI&&d.pluginCreateDom(this),d.pluginBindUI&&d.pluginBindUI(this),d.pluginSyncUI&&d.pluginSyncUI(this)):this.get("created")&&d.pluginCreateDom&&d.pluginCreateDom(this);return this}},{__hooks__:{createDom:g("__createDom"),renderUI:g("__renderUI"),bindUI:g("__bindUI"),
syncUI:g("__syncUI")},name:"ComponentProcess",ATTRS:{rendered:{value:!1,setter:function(c){c&&this._renderedDefer.resolve(this)}},created:{value:!1}}});return i});
KISSY.add("component/control/render-xtpl",[],function(){return function(f){var c,h=this;c=this.config.utils;var k=c.runBlockCommand,m=c.renderOutput,g=c.getProperty,e=c.runInlineCommand,i=c.getPropertyOrRunCommand;c='<div id="';var d=i(h,f,{},"id",0,1);c+=m(d,!0);c+='"\n class="';var d={},n=[];n.push("");d.params=n;e=e(h,f,d,"getBaseCssClasses",2);c+=m(e,!0);c+="\n";e={};d=[];n=g(h,f,"elCls",0,3);d.push(n);e.params=d;e.fn=function(a){var b;b="\n ";a=i(h,a,{},".",0,4);b+=m(a,!0);return b+"  \n"};c+=
k(h,f,e,"each",3);c+='\n"\n\n';e={};d=[];n=g(h,f,"elAttrs",0,8);d.push(n);e.params=d;e.fn=function(a){var b;b=" \n ";var c=i(h,a,{},"xindex",0,9);b+=m(c,!0);b+='="';a=i(h,a,{},".",0,9);b+=m(a,!0);return b+'"\n'};c+=k(h,f,e,"each",8);c+='\n\nstyle="\n';e={};d=[];g=g(h,f,"elStyle",0,13);d.push(g);e.params=d;e.fn=function(a){var b;b=" \n ";var c=i(h,a,{},"xindex",0,14);b+=m(c,!0);b+=":";a=i(h,a,{},".",0,14);b+=m(a,!0);return b+";\n"};c+=k(h,f,e,"each",13);return c+'\n">'}});
KISSY.add("component/control/render",["node","xtemplate/runtime","./process","./render-xtpl","component/manager"],function(f,c){function h(j){"number"===typeof j&&(j+="px");return j}function k(j){j||(j=[""]);"string"===typeof j&&(j=j.split(/\s+/));return j}function m(j,a,b){for(var c="",d=0,f=b.length,a=j+a;d<f;d++)j=(j=b[d])?"-"+j:j,c+=" "+a+j;return c}function g(j){var a;j.target===this.control&&(a=this[o+j.type.slice(5).slice(0,-6)],a.call(this,j.newVal,j))}function e(a,l){return this.config.view.getBaseCssClasses(l.params[0])}
function i(a,l){return this.config.view.getBaseCssClass(l.params[0])}var d=c("node"),n=c("xtemplate/runtime"),a=c("./process"),b=c("./render-xtpl"),q=c("component/manager"),o="_onSet",p=f.trim,r=d.all,s=f.UA,t=f.Env.host.document;return a.extend({isRender:!0,createInternal:function(){var a=this.control.get("srcNode");a?this.decorateDom(a):this.callSuper()},beforeCreateDom:function(a){var l=this.control,b,c,d,f=l.get("elAttrs"),e=l.get("elCls"),g;b=l.getAttrs();g=l.get("elStyle");var m=l.get("elCls");
for(c in b)d=b[c],d.view&&(a[c]=l.get(c));b=a.width;c=a.height;d=a.visible;a=a.zIndex;b&&(g.width=h(b));c&&(g.height=h(c));a&&(g["z-index"]=a);d||m.push(this.getBaseCssClasses("hidden"));if(g=l.get("disabled"))e.push(this.getBaseCssClasses("disabled")),f["aria-disabled"]="true";l.get("highlighted")&&e.push(this.getBaseCssClasses("hover"));l.get("focusable")&&(9>s.ieMode&&(f.hideFocus="true"),f.tabindex=g?"-1":"0")},createDom:function(){this.beforeCreateDom(this.renderData={},this.childrenElSelectors=
{},this.renderCommands={getBaseCssClasses:e,getBaseCssClass:i});var a=this.control,l;l=this.renderTpl(b)+this.renderTpl(this.get("contentTpl"))+"</div>";a.setInternal("el",this.$el=r(l));this.el=this.$el[0];this.fillChildrenElsBySelectors()},decorateDom:function(a){var b=this.control;a.attr("id")||a.attr("id",b.get("id"));var c=this.constructor.HTML_PARSER,d,e;for(d in c)e=c[d],"function"===typeof e?(e=e.call(this,a),void 0!==e&&b.setInternal(d,e)):"string"===typeof e?b.setInternal(d,a.one(e)):f.isArray(e)&&
e[0]&&b.setInternal(d,a.all(e[0]));b.setInternal("el",this.$el=a);this.el=a[0]},renderUI:function(){var a=this.control,b=this.$el;if(!a.get("srcNode")){var c=a.get("render");(a=a.get("elBefore"))?b.insertBefore(a,void 0):c?b.appendTo(c,void 0):b.appendTo(t.body,void 0)}},bindUI:function(){var a=this.control,b=a.getAttrs(),c,d;for(c in b){d=b[c];var e=f.ucfirst(c),h=this[o+e];if(d.view&&h)a.on("after"+e+"Change",g,this)}},destructor:function(){this.$el&&this.$el.remove()},$:function(a){return this.$el.all(a)},
fillChildrenElsBySelectors:function(a){var b=this.$el,c=this.control,d,e,a=a||this.childrenElSelectors;for(d in a)e=a[d],"function"===typeof e?c.setInternal(d,e(b)):c.setInternal(d,this.$(f.substitute(e,this.renderData))),delete a[d]},renderTpl:function(a,b,c){b=b||this.renderData;c=c||this.renderCommands;return(new (this.get("xtemplate"))(a,{control:this.control,view:this,commands:c})).render(b)},getComponentConstructorByNode:function(a,b){var c=b[0].className;if(c){for(var c=c.split(/\s+/),d=[],
e=0,h=c.length;e<h;e++){var g=f.trim(c[e]);g&&f.startsWith(g,a)&&d.push(g.substring(a.length))}c=d.join(" ");return q.getConstructorByXClass(c)}return null},getComponentCssClasses:function(){if(this.componentCssClasses)return this.componentCssClasses;for(var a=this.control.constructor,b,c=[];a&&!a.prototype.hasOwnProperty("isControl");)(b=a.xclass)&&c.push(b),a=a.superclass&&a.superclass.constructor;return this.componentCssClasses=c},getBaseCssClasses:function(a){for(var a=k(a),b=this.getComponentCssClasses(),
c=0,d=this.get("control"),e="",f=b.length,d=d.get("prefixCls");c<f;c++)e+=m(d,b[c],a);return p(e)},getBaseCssClass:function(a){return p(m(this.control.get("prefixCls"),this.getComponentCssClasses()[0],k(a)))},getKeyEventTarget:function(){return this.$el},_onSetWidth:function(a){this.$el.width(a)},_onSetHeight:function(a){this.$el.height(a)},_onSetContent:function(a){var b=this.$el;b.html(a);this.get("allowTextSelection")||b.unselectable()},_onSetVisible:function(a){var b=this.$el,c=this.getBaseCssClasses("hidden");
a?b.removeClass(c):b.addClass(c)},_onSetHighlighted:function(a){var b=this.getBaseCssClasses("hover");this.$el[a?"addClass":"removeClass"](b)},_onSetDisabled:function(a){var b=this.control,c=this.getBaseCssClasses("disabled");this.$el[a?"addClass":"removeClass"](c).attr("aria-disabled",a);b.get("focusable")&&this.getKeyEventTarget().attr("tabindex",a?-1:0)},_onSetActive:function(a){var b=this.getBaseCssClasses("active");this.$el[a?"addClass":"removeClass"](b).attr("aria-pressed",!!a)},_onSetFocused:function(a){var b=
this.$el,c=this.getBaseCssClasses("focused");b[a?"addClass":"removeClass"](c)},_onSetZIndex:function(a){this.$el.css("z-index",a)}},{__hooks__:{decorateDom:a.prototype.__getHook("__decorateDom"),beforeCreateDom:a.prototype.__getHook("__beforeCreateDom")},extend:function l(b,c,d){var e,g={};e=a.extend.apply(this,arguments);e.HTML_PARSER=e.HTML_PARSER||{};f.isArray(b)&&(f.each(b.concat(e),function(a){a&&f.each(a.HTML_PARSER,function(a,b){g[b]=a})}),e.HTML_PARSER=g);f.mix(e.HTML_PARSER,this.HTML_PARSER,
!1);e.extend=l;return e},ATTRS:{control:{setter:function(a){this.control=a}},xtemplate:{value:n},contentTpl:{value:function(a){return a.get("content")||""}}},HTML_PARSER:{id:function(a){return(a=a[0].id)?a:void 0},content:function(a){return a.html()},disabled:function(a){return a.hasClass(this.getBaseCssClass("disabled"))}},name:"render"})});
KISSY.add("component/control",["node","./control/process","component/manager","./control/render"],function(f,c){function h(){var a,b=this;do a=b.ATTRS,b=b.superclass;while(!a||!a.xrender);return a.xrender.value}var k=c("node"),m=c("./control/process"),g=c("component/manager"),e=c("./control/render"),i=f.UA.ieMode,d=k.Gesture,n=f.Features.isTouchGestureSupported(),e=m.extend({isControl:!0,createDom:function(){var a=this.get("xrender"),b=this.get("view"),c=this.get("id");b?b.set("control",this):this.set("view",
this.view=b=new a({control:this}));b.create();a=b.getKeyEventTarget();this.get("allowTextSelection")||a.unselectable();g.addComponent(c,this)},renderUI:function(){this.view.render()},bindUI:function(){var a=this.view.getKeyEventTarget();if(this.get("focusable"))a.on("focus",this.handleFocus,this).on("blur",this.handleBlur,this).on("keydown",this.handleKeydown,this);if(this.get("handleMouseEvents")){a=this.$el;a.on("mouseenter",this.handleMouseEnter,this).on("mouseleave",this.handleMouseLeave,this).on("contextmenu",
this.handleContextMenu,this);a.on(d.start,this.handleMouseDown,this).on(d.end,this.handleMouseUp,this).on(d.tap,this.handleClick,this);if(d.cancel)a.on(d.cancel,this.handleMouseUp,this);if(9>i)a.on("dblclick",this.handleDblClick,this)}},sync:function(){this.fire("beforeSyncUI");this.syncUI();this.view.sync();this.__callPluginsMethod("pluginSyncUI");this.fire("afterSyncUI")},createComponent:function(a,b){return g.createComponent(a,b||this)},_onSetFocused:function(a){var b=this.view.getKeyEventTarget()[0];
a?b.focus():b.ownerDocument.activeElement===b&&b.ownerDocument.body.focus()},_onSetX:function(a){this.$el.offset({left:a})},_onSetY:function(a){this.$el.offset({top:a})},_onSetVisible:function(a){this.fire(a?"show":"hide")},show:function(){this.render();this.set("visible",!0);return this},hide:function(){this.set("visible",!1);return this},focus:function(){this.get("focusable")&&this.set("focused",!0)},blur:function(){this.get("focusable")&&this.set("focused",!1)},move:function(a,b){this.set({x:a,
y:b})},handleDblClick:function(a){this.get("disabled")||this.handleDblClickInternal(a)},handleDblClickInternal:function(a){this.handleClickInternal(a)},handleMouseEnter:function(a){this.get("disabled")||this.handleMouseEnterInternal(a)},handleMouseEnterInternal:function(a){this.set("highlighted",!!a)},handleMouseLeave:function(a){this.get("disabled")||this.handleMouseLeaveInternal(a)},handleMouseLeaveInternal:function(a){this.set("active",!1);this.set("highlighted",!a)},handleMouseDown:function(a){this.get("disabled")||
this.handleMouseDownInternal(a)},handleMouseDownInternal:function(a){var b;if(1===a.which||n)if(this.get("activeable")&&this.set("active",!0),this.get("focusable")&&this.focus(),b=a.originalEvent.type.toLowerCase(),!this.get("allowTextSelection")&&(-1!==b.indexOf("mouse")||-1!==b.indexOf("pointer")))b=(b=a.target.nodeName)&&b.toLowerCase(),"input"!==b&&"textarea"!==b&&"button"!==b&&a.preventDefault()},handleMouseUp:function(a){this.get("disabled")||this.handleMouseUpInternal(a)},handleMouseUpInternal:function(a){this.get("active")&&
(1===a.which||n)&&this.set("active",!1)},handleContextMenu:function(a){this.get("disabled")||this.handleContextMenuInternal(a)},handleContextMenuInternal:function(){},handleFocus:function(){this.get("disabled")||this.handleFocusInternal()},handleFocusInternal:function(){this.focus();this.fire("focus")},handleBlur:function(){this.get("disabled")||this.handleBlurInternal()},handleBlurInternal:function(){this.blur();this.fire("blur")},handleKeydown:function(a){if(!this.get("disabled")&&this.handleKeyDownInternal(a))return a.halt(),
!0},handleKeyDownInternal:function(a){if(a.keyCode===k.KeyCode.ENTER)return this.handleClickInternal(a)},handleClick:function(a){this.get("disabled")||this.handleClickInternal(a)},handleClickInternal:function(){this.get("focusable")&&this.focus()},destructor:function(){g.removeComponent(this.get("id"));this.view?this.view.destroy():this.get("srcNode")&&this.get("srcNode").remove()}},{name:"control",ATTRS:{id:{view:1,valueFn:function(){return f.guid("ks-component")}},content:{view:1,value:""},width:{view:1},
height:{view:1},elCls:{view:1,value:[],setter:function(a){"string"===typeof a&&(a=a.split(/\s+/));return a||[]}},elStyle:{view:1,value:{}},elAttrs:{view:1,value:{}},elBefore:{},el:{setter:function(a){this.$el=a;this.el=a[0]}},x:{},y:{},xy:{setter:function(a){var b=f.makeArray(a);b.length&&(void 0!==b[0]&&this.set("x",b[0]),void 0!==b[1]&&this.set("y",b[1]));return a},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:1},render:{},visible:{sync:0,value:!0,view:1},srcNode:{setter:function(a){return k.all(a)}},
handleMouseEvents:{value:!0},focusable:{value:!0,view:1},allowTextSelection:{value:!1},activeable:{value:!0},focused:{view:1},active:{view:1,value:!1},highlighted:{view:1,value:!1},prefixCls:{view:1,value:f.config("component/prefixCls")||"ks-"},prefixXClass:{},parent:{setter:function(a,b){(b=this.get("parent"))&&this.removeTarget(b);a&&this.addTarget(a)}},disabled:{view:1,value:!1},xrender:{value:e},view:{setter:function(a){this.view=a}}}});e.getDefaultRender=h;e.extend=function b(c,d,e){var i=f.makeArray(arguments),
k,n=i[i.length-1];if(k=n.xclass)n.name=k;i=m.extend.apply(this,i);k&&g.setConstructorByXClass(k,i);i.extend=b;i.getDefaultRender=h;return i};return e});