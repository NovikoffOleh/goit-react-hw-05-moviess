"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{289:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(439),c=t(689),o=t(791),a="ReviewsItem_review__zGM5r",u="ReviewsItem_author__BphUu",i=t(184),s=function(e){var n=e.author,t=e.content;return(0,i.jsxs)("li",{className:a,children:[(0,i.jsxs)("h3",{className:u,children:[" ",n]}),(0,i.jsx)("p",{children:t})]})},f="ReviewsList_reviews__bDSJU",h="ReviewsList_sorry__S57iQ",v=function(e){var n=e.reviews;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:f,children:n&&(n.length>0?n.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,i.jsx)(s,{id:n,author:t,content:r},n)})):(0,i.jsx)("p",{className:h,children:"We don't have any reviews for this movie."}))})})},l=t(855);function d(){var e=(0,c.UO)(),n=Number(e.movieId),t=(0,o.useState)([]),a=(0,r.Z)(t,2),u=a[0],s=a[1],f=(0,o.useState)(null),h=(0,r.Z)(f,2)[1];return(0,o.useEffect)((function(){l.Jh(n).then((function(e){return s(e.results)})).catch((function(e){return h(e)}))}),[n]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(v,{reviews:u})})}},855:function(e,n,t){function r(e,n,t,r,c,o,a){try{var u=e[o](a),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,o){var a=e.apply(n,t);function u(e){r(a,c,o,u,i,"next",e)}function i(e){r(a,c,o,u,i,"throw",e)}u(void 0)}))}}t.d(n,{ef:function(){return v},kP:function(){return l},Jh:function(){return d},v9:function(){return m},JS:function(){return h}});var o=t(757),a=t.n(o),u="https://api.themoviedb.org/3",i="api_key=eb8158c708d801ebc7494af7f42d91eb";function s(){return f.apply(this,arguments)}function f(){return f=c(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("404 Page not found :("));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e){return s("".concat(u,"/trending/movie/day?").concat(i,"&page=").concat(e))}function v(e){return s("".concat(u,"/movie/").concat(e,"?").concat(i))}function l(e){return s("".concat(u,"/movie/").concat(e,"/credits?").concat(i))}function d(e){return s("".concat(u,"/movie/").concat(e,"/reviews?").concat(i))}function m(e,n){return s("".concat(u,"/search/movie?").concat(i,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"))}}}]);
//# sourceMappingURL=289.0931939f.chunk.js.map