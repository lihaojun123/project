/*
Copyright 2014, KISSY v1.49
MIT Licensed
build time: May 22 12:19
*/
KISSY.add("editor/plugin/bubble",["overlay","editor"],function(g,f){function r(k){var j=null,a=k.get("editor").getControls();g.each(a,function(a){var c;if(c=a.isKeBubble)if(c=a!==k)if(c=a.get("visible")){c=k.get("y");var g=c+k.get("el").outerHeight(),h=a.get("y"),d=h+a.get("el").outerHeight();c=c<=d&&g>=d||c<=h&&g>=h}c&&(j?j.get("y")<a.get("y")&&(j=a):j=a)});return j}var s=f("overlay"),n=f("editor"),t={zIndex:n.baseZIndex(n.ZIndexManager.BUBBLE_VIEW),elCls:"{prefixCls}editor-bubble",prefixCls:"{prefixCls}editor-",
effect:{effect:"fade",duration:0.3}};n.prototype.addBubble=function(k,j,a){function f(){e.hide();var b=d.get("window");b&&(b.detach("scroll",o),p.stop())}function c(){var b;var a=e;if(b=a.get("editorSelectedEl")){var c=a.get("editor"),d=c.get("window"),l=c.get("iframe").offset(),a=l.top,l=l.left,j=l+d.width(),d=a+d.height(),i=b.offset(),i=n.Utils.getXY(i,c),c=i.top,i=i.left,k=i+b.width(),f=c+b.height(),m,h;g.UA.ie&&"img"===b[0].nodeName.toLowerCase()&&f>d?b=void 0:(f>d&&c<d?h=d-30:f>a&&f<d&&(h=f),
k>l&&i<l?m=l:i>l&&i<j&&(m=i),b=void 0!==m&&void 0!==h?[m,h]:void 0)}else b=void 0;if(b){e.move(b[0],b[1]);if(m=r(e))b[1]=m.get("y")+m.get("el").outerHeight(),e.move(b[0],b[1]);e.get("visible")||e.show()}}function o(){e.get("editorSelectedEl")&&(e.hide(),p())}function h(){d.get("window").on("scroll",o);c()}var d=this,q=d.get("prefixCls"),e,a=a||{};a.editor=d;g.mix(a,t);a.elCls=g.substitute(a.elCls,{prefixCls:q});a.prefixCls=g.substitute(a.prefixCls,{prefixCls:q});e=new s(a);e.isKeBubble=1;d.addControl(k+
"/bubble",e);d.on("selectionChange",function(b){var b=b.path,a=b.elements;if(b&&a&&(b=b.lastElement))(b=j(b))?(e.set("editorSelectedEl",b),e.hide(),g.later(h,10)):f()});d.on("sourceMode",f);var p=g.buffer(c,350)}});
