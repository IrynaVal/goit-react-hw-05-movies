"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[467],{2467:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,c,o,s,u=t(9439),l=t(2791),p=t(7689),d=t(7670),f=t(8730),h=t(168),x=t(3077),g=t(1087),b=(0,x.ZP)(g.rU)(r||(r=(0,h.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: black;\n"]))),v=t(8185),m=t(184),j=function(n){var e=n.to,t=n.children;return(0,m.jsxs)(b,{to:e,children:[(0,m.jsx)(v.i1r,{}),t]})},w=x.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: solid grey 2px;\n"]))),k=x.ZP.div(i||(i=(0,h.Z)(["\n  width: 400px;\n"]))),y=x.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),Z=x.ZP.div(o||(o=(0,h.Z)(["\n  padding-bottom: 20px;\n  border-bottom: solid grey 2px;\n"]))),_=(0,x.ZP)(g.rU)(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: blue;\n  }\n"]))),S=function(n){var e=n.film,t=e.title,r=e.original_title,a=e.release_date,i=e.vote_average,c=e.overview,o=e.genres,s=e.poster_path,u="https://image.tmdb.org/t/p/w780".concat(s);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(w,{children:[(0,m.jsx)(k,{children:(0,m.jsx)("img",{src:u,alt:t})}),(0,m.jsxs)(y,{children:[(0,m.jsxs)("h2",{children:[r," (",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return n?n.slice(0,4):"year n/a"}(),")"]}),(0,m.jsxs)("p",{children:["User score: ",(10*i).toFixed(0),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),""!==c?(0,m.jsx)("p",{children:c}):(0,m.jsx)("p",{children:"n/a"}),(0,m.jsx)("h4",{children:"Genres"}),(0,m.jsx)("p",{children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return n&&0!==n.length?n.map((function(n){return n.name})).join(" "):"n/a"}()})]})]}),(0,m.jsxs)(Z,{children:[(0,m.jsx)("p",{children:"Additional Information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(_,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(_,{to:"reviews",children:"Reviews"})})]})]})]})},U=function(){var n,e,t=(0,p.UO)().movieId,r=(0,l.useState)({}),a=(0,u.Z)(r,2),i=a[0],c=a[1],o=(0,l.useState)(!1),s=(0,u.Z)(o,2),h=s[0],x=s[1],g=(0,p.TH)(),b=(0,l.useRef)(null!==(n=null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,l.useEffect)((function(){x(!0),(0,f.ts)(t).then((function(n){if(!n)return Promise.reject(new Error);c(n)})).catch((function(n){console.log("error")})).finally((function(){x(!1)}))}),[t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{to:b.current,children:"Go back"}),(0,m.jsx)(S,{film:i}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)(d.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),children:(0,m.jsx)(p.j3,{})}),h&&(0,m.jsx)(d.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})}},8730:function(n,e,t){t.d(e,{Q_:function(){return f},Zh:function(){return u},cI:function(){return x},kh:function(){return b},ts:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1243),o="https://api.themoviedb.org/3/",s="4b190e449f27cff49b7be3cb0384f9d7";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=467.618c9063.chunk.js.map