"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[230],{230:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r,i,a,c,o=t(861),s=t(439),l=t(757),u=t.n(l),d=t(824),p=t(719),h=t(87),m=t(791),f=t(510),x=t(359),v=t(168),j=t(867),b=j.ZP.form(r||(r=(0,v.Z)(["\n  margin: 10px 0 0 60px;\n"]))),g=j.ZP.input(i||(i=(0,v.Z)(["\n  padding-left: 5px;\n  width: 300px;\n  height: 45px;\n  outline: none;\n  border-radius: 3px;\n  background-color: #eed4ed;\n  border-color: #aa709c;\n  outline-color: #f180eb;\n  &:active {\n    background-color: #c5b0c4;\n  }\n"]))),Z=j.ZP.button(a||(a=(0,v.Z)(["\n  height: 50px;\n  width: 45px;\n  border-radius: 2px;\n  background-color: #743ad5;\n  border-color: transparent;\n\n  &:hover {\n    background-color: #52305a;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),_=j.ZP.h2(c||(c=(0,v.Z)(["\n  color: #3b0d5e;\n  display: block;\n  width: 100;\n  text-align: center;\n"]))),k=t(184),N=function(){var e=(0,h.lr)(),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=(0,m.useState)([]),a=(0,s.Z)(i,2),c=a[0],l=a[1],v=(0,m.useState)(!1),j=(0,s.Z)(v,2),N=j[0],y=j[1],I=t.get("query");(0,m.useEffect)((function(){if(y(!0),I){var e=function(){var e=(0,o.Z)(u().mark((function e(){var n,t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?query=".concat(I),e.prev=1,e.next=4,(0,d.g)(n);case 4:t=e.sent,r=t.data.results,l(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[I]);return(0,k.jsxs)("div",{children:[(0,k.jsxs)(b,{onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.searchKey.value.toLowerCase().trim();r({query:n}),e.target.reset()},children:[(0,k.jsx)("label",{children:(0,k.jsx)(g,{type:"text",name:"searchKey",required:!0,placeholder:"Search films"})}),(0,k.jsx)(Z,{type:"submit",children:(0,k.jsx)(p.wnI,{})})]}),(0,k.jsxs)("div",{children:[N&&I?(0,k.jsx)(x.Z,{}):(0,k.jsx)(f.Z,{films:c}),!N&&0===c.length&&I&&(0,k.jsxs)(_,{children:['No movie found for the request "',I,'"']})]})]})}},824:function(e,n,t){t.d(n,{g:function(){return i}});var r=t(340),i=function(e){var n={method:"GET",url:"".concat("https://api.themoviedb.org/3").concat(e),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmU2MjNhNjM2NDU5M2UzMzJmMTVjNDNjOWFmN2VjYiIsInN1YiI6IjY1NGU0YzdjZDRmZTA0MDEzOTdlOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK_oZo1_t8pppztjX3lzPujAHltYYfjqlIqEp2mLhOQ")}};return r.Z.request(n)}},492:function(e,n,t){t.d(n,{Q:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},510:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(689),i=t(87),a=t(492),c="MovieList_list__yjDCC",o="MovieList_item__tDivI",s="MovieList_title__QyMtJ",l="MovieList_link__+cn-g",u=t(184),d=function(e){var n=e.films,t=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:c,children:n.map((function(e){return(0,u.jsx)("li",{className:o,children:(0,u.jsxs)(i.rU,{state:{from:t},to:"/movies/".concat(e.id),className:l,children:[(0,u.jsx)("img",{src:e.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path):a.Q,width:"200px",alt:e.name}),(0,u.jsx)("p",{className:s,children:e.title})]})},e.id)}))})})}}}]);
//# sourceMappingURL=230.eb97007a.chunk.js.map