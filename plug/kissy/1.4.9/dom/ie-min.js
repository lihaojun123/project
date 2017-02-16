/*
Copyright 2014, KISSY v1.49
MIT Licensed
build time: May 22 12:19
*/
KISSY.add("dom/ie/create",["dom/base"],function(l,k){var e=k("dom/base");e._fixCloneAttributes=function(c,a){a.clearAttributes&&a.clearAttributes();a.mergeAttributes&&a.mergeAttributes(c);var b=a.nodeName.toLowerCase(),d=c.childNodes;if("object"===b&&!a.childNodes.length)for(b=0;b<d.length;b++)a.appendChild(d[b].cloneNode(!0));else if("input"===b&&("checkbox"===c.type||"radio"===c.type)){if(c.checked&&(a.defaultChecked=a.checked=c.checked),a.value!==c.value)a.value=c.value}else if("option"===b)a.selected=
c.defaultSelected;else if("input"===b||"textarea"===b)a.defaultValue=c.defaultValue,a.value=c.value;a.removeAttribute(e.__EXPANDO)};var m=e._creators,g=e._defaultCreator,i=/<tbody/i;8>l.UA.ieMode&&(m.table=function(c,a){var b=g(c,a);if(i.test(c))return b;var d=b.firstChild,h=l.makeArray(d.childNodes);l.each(h,function(a){"tbody"===e.nodeName(a)&&!a.childNodes.length&&d.removeChild(a)});return b})});
KISSY.add("dom/ie/insertion",["dom/base"],function(l,k){var e=k("dom/base");8>l.UA.ieMode&&(e._fixInsertionChecked=function g(i){for(var c=0;c<i.length;c++){var a=i[c];if(a.nodeType===e.NodeType.DOCUMENT_FRAGMENT_NODE)g(a.childNodes);else if("input"===e.nodeName(a)){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}else if(a.nodeType===e.NodeType.ELEMENT_NODE)for(var a=a.getElementsByTagName("input"),b=0;b<a.length;b++)g(a[b])}})});
KISSY.add("dom/ie/style",["dom/base"],function(l,k){var e=k("dom/base"),m=e._cssProps,g=l.UA,i=l.Env.host.document,i=i&&i.documentElement,c=/^(top|right|bottom|left)$/,a=e._cssHooks,b=/opacity\s*=\s*([^)]*)/,d=/alpha\([^)]*\)/i;m["float"]="styleFloat";a.backgroundPosition={get:function(a,d){return d?a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY:a.style.backgroundPosition}};try{null==i.style.opacity&&(a.opacity={get:function(a,d){return b.test((d&&a.currentStyle?a.currentStyle.filter:
a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":d?"1":""},set:function(a,b){var b=parseFloat(b),c=a.style,h=a.currentStyle,j=isNaN(b)?"":"alpha(opacity="+100*b+")",f=l.trim(h&&h.filter||c.filter||"");c.zoom=1;if((1<=b||!j)&&!l.trim(f.replace(d,"")))if(c.removeAttribute("filter"),!j||h&&!h.filter)return;c.filter=d.test(f)?f.replace(d,j):f+(f?", ":"")+j}})}catch(h){}var g=8===g.ie,j={};j.thin=g?"1px":"2px";j.medium=g?"3px":"4px";j.thick=g?"5px":"6px";l.each(["","Top","Left","Right","Bottom"],function(d){var b=
"border"+d+"Width",c="border"+d+"Style";a[b]={get:function(a,d){var h=d?a.currentStyle:0,o=h&&""+h[b]||void 0;o&&0>o.indexOf("px")&&(o=j[o]&&"none"!==h[c]?j[o]:0);return o}}});e._getComputedStyle=function(a,d){var d=m[d]||d,b=a.currentStyle&&a.currentStyle[d];if(e._RE_NUM_NO_PX.test(b)&&!c.test(d)){var h=a.style,j=h.left,f=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left="fontSize"===d?"1em":b||0;b=h.pixelLeft+"px";h.left=j;a.runtimeStyle.left=f}return""===b?"auto":b}});
KISSY.add("dom/ie/traversal",["dom/base"],function(l,k){var e=k("dom/base");e._contains=function(c,a){c.nodeType===e.NodeType.DOCUMENT_NODE&&(c=c.documentElement);a=a.parentNode;return c===a?!0:a&&a.nodeType===e.NodeType.ELEMENT_NODE?c.contains&&c.contains(a):!1};var m=document.createElement("div");m.appendChild(document.createComment(""));var g;g=m.getElementsByTagName("*").length?function(c,a){var b=a.getElementsByTagName(c),d="*"===c;if(d||"number"!==typeof b.length){for(var h=[],j=0,o;o=b[j++];)(!d||
1===o.nodeType)&&h.push(o);return h}return b}:function(c,a){return a.getElementsByTagName(c)};e._getElementsByTagName=g;var i=e._getSimpleAttr;e._getElementById=function(c,a){var b=a.getElementById(c);if(b&&i(b,"id")!==c)for(var d=g("*",a),h=0,j=d.length;h<j;h++)if(i(d[h],"id")===c)return d[h];return b}});
KISSY.add("dom/ie/transform",["dom/base"],function(l,k){function e(c){return[[c[0],c[2],c[4]],[c[1],c[3],c[5]],[0,0,1]]}function m(c,a){var b;if(2<arguments.length){var d=c;for(b=1;b<arguments.length;b++)d=m(d,arguments[b]);return d}var d=[],h=c.length,j=a.length,o=a[0].length;for(b=0;b<h;b++)for(var e=0;e<o;e++){for(var g=0,i=0;i<j;i++)g+=c[b][i]*a[i][e];var i=d,l=b,f=e;i[l]||(i[l]=[]);i[l][f]=g}return d}function g(c){return-1<c.indexOf("deg")?parseInt(c,10)*(2*Math.PI/360):parseFloat(c)}var i=/progid:DXImageTransform.Microsoft.Matrix\(([^)]*)\)/;
k("dom/base")._cssHooks.transform={get:function(c,a){var b=c[a?"currentStyle":"style"];if(b&&i.test(b.filter)){var b=RegExp.$1.split(","),d=0,h=0,j=b[4]&&b[4].split("="),e=b[5]&&b[5].split("=");j&&"dx"===j[0].toLowerCase()&&(d=parseFloat(j[1]));e&&"dy"===e[0].toLowerCase()&&(h=parseFloat(e[1]));b=[b[0].split("=")[1],b[2].split("=")[1],b[1].split("=")[1],b[3].split("=")[1],d,h]}else return a?"none":"";return"matrix("+b.join(",")+")"},set:function(c,a){var b=c.style,d,h=c.currentStyle,j,o={width:c.clientWidth,
height:c.clientHeight};j=o.width/2;var k=o.height/2,p=c.style.transformOrigin,p=(p||"50% 50%").split(/\s+/);1===p.length&&(p[1]=p[0]);for(var q=0;q<p.length;q++){var r=parseFloat(p[q]);p[q]=l.endsWith(p[q],"%")?r*o[q?"height":"width"]/100:r}o=p;b.zoom=1;if(a){d=a.split(")");for(var p=l.trim,q=-1,r=d.length-1,f,t,s=e([1,0,0,1,0,0]),n;++q<r;){f=d[q].split("(");t=p(f[0]);f=f[1];n=[1,0,0,1,0,0];switch(t){case "translateX":n[4]=parseInt(f,10);break;case "translateY":n[5]=parseInt(f,10);break;case "translate":f=
f.split(",");n[4]=parseInt(f[0],10);n[5]=parseInt(f[1]||0,10);break;case "rotate":f=g(f);n[0]=Math.cos(f);n[1]=Math.sin(f);n[2]=-Math.sin(f);n[3]=Math.cos(f);break;case "scaleX":n[0]=+f;break;case "scaleY":n[3]=+f;break;case "scale":f=f.split(",");n[0]=+f[0];n[3]=1<f.length?+f[1]:+f[0];break;case "skewX":n[2]=Math.tan(g(f));break;case "skewY":n[1]=Math.tan(g(f));break;case "skew":f=f.split(",");n[2]=Math.tan(g(f[0]));1<f.length&&(n[1]=Math.tan(g(f[1])));break;case "matrix":f=f.split(","),n[0]=+f[0],
n[1]=+f[1],n[2]=+f[2],n[3]=+f[3],n[4]=parseInt(f[4],10),n[5]=parseInt(f[5],10)}s=m(s,e(n))}a=s;d=o[0];o=o[1];d=m([[1,0,d],[0,1,o],[0,0,1]],a,[[1,0,-d],[0,1,-o],[0,0,1]],[[j],[k],[1]]);d.x=d[0][0];d.y=d[1][0];j=["progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0],"M12="+a[0][1],"M21="+a[1][0],"M22="+a[1][1],"Dx="+a[0][2],"Dy="+a[1][2],'SizingMethod="auto expand"'].join()+")"}else j="";k=h&&h.filter||b.filter||"";if(!j&&!l.trim(k.replace(i,""))&&(b.removeAttribute("filter"),!j||h&&!h.filter))return;
b.filter=i.test(k)?k.replace(i,j):k+(k?", ":"")+j;j?(h=c.offsetHeight/2,b.marginLeft=d.x-c.offsetWidth/2+"px",b.marginTop=d.y-h+"px"):b.marginLeft=b.marginTop=0}}});
KISSY.add("dom/ie/input-selection",["dom/base"],function(l,k){function e(a,b){var d=0,h=0,c=a.ownerDocument.selection.createRange(),e=m(a);e.inRange(c)&&(e.setEndPoint("EndToStart",c),d=i(a,e).length,b&&(h=d+i(a,c).length));return[d,h]}function m(a){if("textarea"===a.type){var b=a.document.body.createTextRange();b.moveToElementText(a);return b}return a.createTextRange()}function g(a,b,d){var h=Math.min(b,d),c=Math.max(b,d);return h===c?0:"textarea"===a.type?(a=a.value.substring(h,c).replace(/\r\n/g,
"\n").length,b>d&&(a=-a),a):d-b}function i(a,b){if("textarea"===a.type){var d=b.text,c=b.duplicate();if(0===c.compareEndPoints("StartToEnd",c))return d;c.moveEnd("character",-1);c.text===d&&(d+="\r\n");return d}return b.text}var c=k("dom/base")._propHooks;c.selectionStart={set:function(a,b){var d=a.ownerDocument.selection.createRange();if(m(a).inRange(d)){var c=e(a,1)[1],j=g(a,b,c);d.collapse(!1);d.moveStart("character",-j);b>c&&d.collapse(!0);d.select()}},get:function(a){return e(a)[0]}};c.selectionEnd=
{set:function(a,b){var d=a.ownerDocument.selection.createRange();if(m(a).inRange(d)){var c=e(a)[0],j=g(a,c,b);d.collapse(!0);d.moveEnd("character",j);c>b&&d.collapse(!1);d.select()}},get:function(a){return e(a,1)[1]}}});
KISSY.add("dom/ie/attr",["dom/base"],function(l,k){function e(a){var b="",j=a.nodeType;if(j===m.NodeType.ELEMENT_NODE)for(a=a.firstChild;a;a=a.nextSibling)b+=e(a);else if(j===c.TEXT_NODE||j===c.CDATA_SECTION_NODE)b+=a.nodeValue;return b}var m=k("dom/base"),g=m._attrHooks,i=m._attrNodeHook,c=m.NodeType,a=m._valHooks,b=m._propFix;8>l.UA.ieMode&&(g.style.set=function(a,b){a.style.cssText=b},l.mix(i,{get:function(a,b){var c=a.getAttributeNode(b);return c&&(c.specified||c.nodeValue)?c.nodeValue:void 0},
set:function(a,b,c){var e=a.getAttributeNode(c),g;if(e)e.nodeValue=b;else try{g=a.ownerDocument.createAttribute(c),g.value=b,a.setAttributeNode(g)}catch(i){return a.setAttribute(c,b,0)}}}),l.mix(m._attrFix,b),g.tabIndex=g.tabindex,l.each("href,src,width,height,colSpan,rowSpan".split(","),function(a){g[a]={get:function(b){b=b.getAttribute(a,2);return b===null?void 0:b}}}),a.button=g.value=i,g.placeholder={get:function(a,b){return a[b]||i.get(a,b)}},a.option={get:function(a){var b=a.attributes.value;
return!b||b.specified?a.value:a.text}});(g.href=g.href||{}).set=function(a,b,e){for(var g=a.childNodes,i,k=g.length,l=k>0,k=k-1;k>=0;k--)g[k].nodeType!==c.TEXT_NODE&&(l=0);if(l){i=a.ownerDocument.createElement("b");i.style.display="none";a.appendChild(i)}a.setAttribute(e,""+b);i&&a.removeChild(i)};m._getText=e;return m});
KISSY.add("dom/ie","./ie/create,./ie/insertion,./ie/style,./ie/traversal,./ie/transform,./ie/input-selection,./ie/attr".split(","),function(l,k){k("./ie/create");k("./ie/insertion");k("./ie/style");k("./ie/traversal");k("./ie/transform");k("./ie/input-selection");return k("./ie/attr")});
