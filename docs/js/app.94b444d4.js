(function(t){function e(e){for(var r,i,c=e[0],l=e[1],s=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"162a":function(t,e,n){"use strict";n("9b59")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Canvas")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info",attrs:{id:"canvas"}},[t._m(0),n("h1",{attrs:{id:t.showScore?"":"score"}},[t._v("Score: "+t._s(t.score))])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info",staticStyle:{"list-style-type":"none"}},[n("span",{attrs:{id:"command"}},[t._v("Left Mouse Click:")]),t._v(" "),n("span",{attrs:{id:"description"}},[t._v("Select Guess")]),n("br"),n("span",{attrs:{id:"command"}},[t._v("H: ")]),t._v(" "),n("span",{attrs:{id:"description"}},[t._v("Toggle Showing colours")]),n("br"),n("span",{attrs:{id:"command"}},[t._v("R: ")]),t._v(" "),n("span",{attrs:{id:"description"}},[t._v("Reset Selection")]),n("br"),n("span",{attrs:{id:"command"}},[t._v("Enter: ")]),t._v(" "),n("span",{attrs:{id:"description"}},[t._v("Show Score")]),n("br"),n("span",{attrs:{id:"command"}},[t._v("Left Arrow: ")]),t._v(" "),n("span",{attrs:{id:"description"}},[t._v("Next round")])])}],l=(n("cb29"),n("3425")),s=n.n(l),u={name:"App",components:{},data:function(){return{score:0,showScore:!1}},methods:{},mounted:function(){var t=this,e=function(e){var n=!1,r=0,o=!0,a=!1,i=0,c=1e3,l=1e3,s=Math.PI,u=.9,p=l/2-.5*l*(1-u),d=.04,f=-s*d*5/2,m=-.5*s+f,v=[s,2*s-s*d*5],h=[[-s*(-3*d+d/2)+m+.5*s-f,-s*(-2*d+d/2)+m+.5*s-f],[-s*(1*d+d/2)+m+.5*s-f,-s*(2*d+d/2)+m+.5*s-f]],_=[[-s*(-2*d+d/2)+m+.5*s-f,-s*(-1*d+d/2)+m+.5*s-f],[-s*(0*d+d/2)+m+.5*s-f,-s*(1*d+d/2)+m+.5*s-f]],y=[[-s*(-1*d+d/2)+m+.5*s-f,-s*(0*d+d/2)+m+.5*s-f]];e.setup=function(){e.createCanvas(c,l)},e.draw=function(){e.clear(),e.fill(230),e.stroke(0),e.strokeWeight(15),e.arc(c/2,l/2,l*u,l*u,s,0,"CHORD"),e.stroke(0),o&&e.arc_range(m,d),e.fill(e.color(0,0,0)),e.line(l/2*(1-u),c/2+1,.5*c*(u+1),c/2+1),e.strokeWeight(1),e.arc(c/2+1,l/2+1,l*u*.05,l*u*.05,s,0,"CHORD"),e.untilClick()},e.untilClick=function(){0==n&&0==a?e.drawMouse():e.circleLine(r)},e.mouseClicked=function(){n=!0},e.keyPressed=function(){82==e.keyCode&&(n=!1),72==e.keyCode&&(o=!o),13==e.keyCode&&(i=e.determinePoints(r,h,_,y),a=!0,o=!0,t.score=i,t.showScore=!0),39==e.keyCode&&(o=!1,i=0,a=!1,n=!1,t.showScore=!1,t.score=0,m=e.random(v[0],v[1]),e.updateAngleArrays())},e.arc_range=function(t,n){var r=e.color(255,196,3),o=e.color(255,124,52),a=e.color(184,213,231);e.fill(r),e.custom_arc(t,n),e.fill(o),e.custom_arc(t+n*s,n),e.fill(a),e.custom_arc(t+n*s*2,n),e.fill(o),e.custom_arc(t+n*s*3,n),e.fill(r),e.custom_arc(t+n*s*4,n)},e.custom_arc=function(t,n){var r=t+n*s;e.arc(c/2,l/2,l*u,l*u,t,r)},e.drawMouse=function(){r=e.calculateAngle(),e.circleLine(r)},e.circleLine=function(t){var n=-p*Math.sin(t)+l/2,r=-p*Math.cos(t)+c/2;e.line(n,r,l/2,c/2)},e.calculateAngle=function(){var t=e.mouseX/l-.5;return t>.5?.5*-s:t<-.5?-.5*-s:-s*t},e.determinePoints=function(t,n,r,o){return e.determine4Points(t,o)?4:e.determine3Points(t,r)?3:e.determine2Points(t,n)?2:0},e.determine4Points=function(t,e){var n=Math.min.apply(null,e[0]),r=Math.max.apply(null,e[0]);return t>n&&t<r},e.determine3Points=function(t,e){var n=Math.min.apply(null,e[0]),r=Math.max.apply(null,e[0]),o=Math.min.apply(null,e[1]),a=Math.max.apply(null,e[1]);return t>n&&t<r||t>o&&t<a},e.determine2Points=function(t,e){var n=Math.min.apply(null,e[0]),r=Math.max.apply(null,e[0]),o=Math.min.apply(null,e[1]),a=Math.max.apply(null,e[1]);return t>n&&t<r||t>o&&t<a},e.updateAngleArrays=function(){var t=-m-.5*s-5*d*s/2+2*s;h=[[-s*(-3*d+d/2)+t,-s*(-2*d+d/2)+t],[-s*(1*d+d/2)+t,-s*(2*d+d/2)+t]],_=[[-s*(-2*d+d/2)+t,-s*(-1*d+d/2)+t],[-s*(0*d+d/2)+t,-s*(1*d+d/2)+t]],y=[[-s*(-1*d+d/2)+t,-s*(0*d+d/2)+t]]}};new s.a(e,"canvas")}},p=u,d=(n("162a"),n("2877")),f=Object(d["a"])(p,i,c,!1,null,null,null),m=f.exports,v={name:"App",components:{Canvas:m}},h=v,_=Object(d["a"])(h,o,a,!1,null,null,null),y=_.exports,b=n("2f62");r["a"].use(b["a"]);var g=new b["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:g,render:function(t){return t(y)}}).$mount("#app")},"9b59":function(t,e,n){}});
//# sourceMappingURL=app.94b444d4.js.map