"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(9439),c=e(2791),o=e(7689),u=e(7670),i=e(168),s=e(3077).ZP.li(r||(r=(0,i.Z)(["\n  margin-bottom: 20px;\n"]))),p=e(8730),f=e(184),l=function(){var t=(0,o.UO)().movieId,n=(0,c.useState)([]),e=(0,a.Z)(n,2),r=e[0],i=e[1],l=(0,c.useState)(!1),h=(0,a.Z)(l,2),d=h[0],g=h[1];return(0,c.useEffect)((function(){g(!0),(0,p.kh)(t).then((function(t){if(console.log(t.results),!t)return Promise.reject(new Error);i(t.results)})).catch((function(t){console.log("error")})).finally((function(){g(!1)}))}),[t]),(0,f.jsxs)(f.Fragment,{children:[0!==r.length?(0,f.jsx)("ul",{children:r.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,f.jsxs)(s,{children:[(0,f.jsxs)("h4",{children:["Author: ",e]}),(0,f.jsx)("p",{children:r})]},n)}))}):(0,f.jsx)("p",{children:"We don`t have any reviews for this movie."}),d&&(0,f.jsx)(u.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})}},8730:function(t,n,e){e.d(n,{Q_:function(){return h},Zh:function(){return s},cI:function(){return g},kh:function(){return m},ts:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3/",i="4b190e449f27cff49b7be3cb0384f9d7";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.547440d3.chunk.js.map