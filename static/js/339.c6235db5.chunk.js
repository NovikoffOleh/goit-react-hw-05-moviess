"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{339:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(439),c=n(689),a=n(791),o=n(61),s="CastItem_castItem__fW-Sh",i="CastItem_castDescription__dvRQz",u="CastItem_castName__VXgo9",f="CastItem_castImg__6fxLg",m=n(184),h=function(t){var e=t.name,n=t.profile,r=t.character;return(0,m.jsxs)("li",{className:s,children:[n?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"actor",width:120,className:f}):(0,m.jsx)("img",{src:o,alt:"actor",width:120,className:f}),(0,m.jsxs)("div",{className:i,children:[(0,m.jsxs)("p",{className:u,children:["Name: ",e," "]}),(0,m.jsxs)("p",{children:["Character: ",r]})]})]})},l="CastList_cast__zZp6c",d="CastList_sorry__ZW-76",p=function(t){var e=t.credits;return(0,m.jsx)("ul",{className:l,children:e.length>0?e.map((function(t){var e=t.id,n=t.name,r=t.profile_path,c=t.character;return(0,m.jsx)(h,{id:e,name:n,profile:r,character:c},e)})):(0,m.jsx)("p",{className:d,children:"Sorry, something goes wrong."})})},v=n(855);function g(){var t=(0,c.UO)(),e=Number(t.movieId),n=(0,a.useState)([]),o=(0,r.Z)(n,2),s=o[0],i=o[1],u=(0,a.useState)(null),f=(0,r.Z)(u,2),h=f[0],l=f[1];return(0,a.useEffect)((function(){v.kP(e).then((function(t){return i(t.cast)})).catch((function(t){return l(t)}))}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{credits:s}),h&&(0,m.jsxs)("h2",{children:["Sorry, something went wrong: ",h.message]})]})}},855:function(t,e,n){function r(t,e,n,r,c,a,o){try{var s=t[a](o),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,a){var o=t.apply(e,n);function s(t){r(o,c,a,s,i,"next",t)}function i(t){r(o,c,a,s,i,"throw",t)}s(void 0)}))}}n.d(e,{ef:function(){return h},kP:function(){return l},Jh:function(){return d},v9:function(){return p},JS:function(){return m}});var a=n(757),o=n.n(a),s="https://api.themoviedb.org/3",i="api_key=eb8158c708d801ebc7494af7f42d91eb";function u(){return f.apply(this,arguments)}function f(){return f=c(o().mark((function t(){var e,n,r,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("404 Page not found :("));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function m(t){return u("".concat(s,"/trending/movie/day?").concat(i,"&page=").concat(t))}function h(t){return u("".concat(s,"/movie/").concat(t,"?").concat(i))}function l(t){return u("".concat(s,"/movie/").concat(t,"/credits?").concat(i))}function d(t){return u("".concat(s,"/movie/").concat(t,"/reviews?").concat(i))}function p(t,e){return u("".concat(s,"/search/movie?").concat(i,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"))}},61:function(t,e,n){t.exports=n.p+"static/media/defaultImgActor.202f550d3617883f5a78.png"}}]);
//# sourceMappingURL=339.c6235db5.chunk.js.map