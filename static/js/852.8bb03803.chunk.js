"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{852:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,i,o,d,a,l,c,s,u,p,g=r(861),h=r(439),x=r(757),b=r.n(x),v=r(791),f=r(689),j=r(87),m=r(824),Z=r(168),k=r(867),w=k.ZP.button(t||(t=(0,Z.Z)(["\n  height: 20px;\n  border-radius: 3px;\n  background-color: #743ad5;\n  color: #fff;\n  border-color: #743ad5;\n  font-weight: bold;\n  &:hover {\n    color: #3b0d5e;\n    border-radius: 3px;\n    background: rgb(116, 58, 213);\n    background: linear-gradient(\n      90deg,\n      rgba(187, 188, 194, 0.258) 0%,\n      rgb(118, 78, 252) 100%\n    );\n  }\n  &:focus {\n    color: #3b0d5e;\n    border-radius: 3px;\n    background: rgb(116, 58, 213);\n    background: linear-gradient(\n      90deg,\n      rgba(187, 188, 194, 0.258) 0%,\n      rgb(118, 78, 252) 100%\n    );\n  }\n  &:active {\n    color: #3b0d5e;\n    border-radius: 3px;\n    background: rgb(116, 58, 213);\n    background: linear-gradient(\n      90deg,\n      rgba(187, 188, 194, 0.258) 0%,\n      rgb(118, 78, 252) 100%\n    );\n  }\n"]))),I=r(184),U=function(n){var e=n.text;return(0,I.jsx)(w,{type:"button",children:e})},z=r(359),N=r(492),P=k.ZP.div(i||(i=(0,Z.Z)(["\n  padding: 20px 0 0 30px;\n"]))),y=k.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n  margin-top: 15px;\n"]))),J=k.ZP.h1(d||(d=(0,Z.Z)(["\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n"]))),_=k.ZP.section(a||(a=(0,Z.Z)(["\n  padding: 0 30px 0 20px;\n  color: #3b0d5e;\n"]))),O=k.ZP.p(l||(l=(0,Z.Z)(["\n  font-weight: bold;\n"]))),M=k.ZP.p(c||(c=(0,Z.Z)(["\n  font-weight: bold;\n  color: #3b0d5e;\n"]))),Y=k.ZP.ul(s||(s=(0,Z.Z)(["\n  margin: 0;\n  padding-left: 20px;\n"]))),G=k.ZP.ul(u||(u=(0,Z.Z)(["\n  list-style: none;\n  display: flex;\n  margin-right: 5px;\n  padding-left: 0;\n  padding-bottom: 20px;\n  border-bottom: 5px solid;\n  border-image-slice: 1;\n  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);\n"]))),A=k.ZP.li(p||(p=(0,Z.Z)(["\n  margin-right: 5px;\n"]))),C=function(){var n,e=(0,f.UO)().movieId,r=(0,v.useState)(!1),t=(0,h.Z)(r,2),i=t[0],o=t[1],d=(0,v.useState)(null),a=(0,h.Z)(d,2),l=a[0],c=a[1],s=(0,f.TH)(),u=(0,v.useRef)((null===(n=s.state)||void 0===n?void 0:n.from)||"/");(0,v.useEffect)((function(){var n=function(){var n=(0,g.Z)(b().mark((function n(){var r,t,i;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e),o(!0),n.prev=2,n.next=5,(0,m.g)(r);case 5:t=n.sent,i=t.data,c(i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:return n.prev=13,o(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var p=Math.round(10*(null===l||void 0===l?void 0:l.vote_average));return(0,I.jsxs)(P,{children:[i&&(0,I.jsx)(z.Z,{}),(0,I.jsx)(j.rU,{to:u.current,children:(0,I.jsx)(U,{text:"< Go Back"})}),(0,I.jsxs)(y,{children:[(0,I.jsx)("img",{src:null!==l&&void 0!==l&&l.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(null===l||void 0===l?void 0:l.backdrop_path):N.Q,width:"400px",alt:null===l||void 0===l?void 0:l.title}),(0,I.jsxs)(_,{children:[(0,I.jsx)(J,{children:null===l||void 0===l?void 0:l.title}),(0,I.jsxs)(O,{children:["User Score : ",p,"%"]}),(0,I.jsx)("h2",{children:"Overview"}),(0,I.jsx)("p",{children:null===l||void 0===l?void 0:l.overview}),(0,I.jsx)("h2",{children:"Genres"}),(0,I.jsx)(Y,{children:null===l||void 0===l?void 0:l.genres.map((function(n){return(0,I.jsx)("li",{children:n.name},n.name)}))})]})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)(M,{children:"Additional information"}),(0,I.jsxs)(G,{children:[(0,I.jsx)(A,{children:(0,I.jsx)(j.rU,{to:"cast",children:(0,I.jsx)(U,{text:"Cast"})})}),(0,I.jsx)(A,{children:(0,I.jsx)(j.rU,{to:"reviews",children:(0,I.jsx)(U,{text:"Reviews"})})})]}),(0,I.jsx)(f.j3,{})]})]})}},824:function(n,e,r){r.d(e,{g:function(){return i}});var t=r(340),i=function(n){var e={method:"GET",url:"".concat("https://api.themoviedb.org/3").concat(n),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmU2MjNhNjM2NDU5M2UzMzJmMTVjNDNjOWFmN2VjYiIsInN1YiI6IjY1NGU0YzdjZDRmZTA0MDEzOTdlOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK_oZo1_t8pppztjX3lzPujAHltYYfjqlIqEp2mLhOQ")}};return t.Z.request(e)}},492:function(n,e,r){r.d(e,{Q:function(){return t}});var t="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"}}]);
//# sourceMappingURL=852.8bb03803.chunk.js.map