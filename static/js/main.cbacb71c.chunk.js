(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{11:function(e,t,a){e.exports=a(31)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),l=(a(16),a(10)),o=a(1),u=a(8),m=a.n(u),i=a(2),d=a.n(i),p=a(9),f="https://jsonplaceholder.typicode.com/",E=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=(a(27),function(e){var t=e.person;return c.a.createElement("div",{className:"user"},c.a.createElement("h3",{className:"user__heading"},t.name),c.a.createElement("p",{className:"user__email"},"E-mail:",c.a.createElement("span",null," ".concat(t.email))),c.a.createElement("address",{className:"user__address"},c.a.createElement("span",null,"street:"," ".concat(t.address.street)),c.a.createElement("span",null,"suite:"," ".concat(t.address.suite)),c.a.createElement("span",null,"city:"," ".concat(t.address.city)),c.a.createElement("span",null,"zipcode:"," ".concat(t.address.zipcode))))}),h=(a(28),function(e){var t=e.comment;return c.a.createElement("div",{className:"comment"},c.a.createElement("h3",{className:"comment__name"},t.name),c.a.createElement("p",{className:"comment__email"},t.email),c.a.createElement("p",{className:"comment__text"},t.body))}),v=function(e){var t=e.comments;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(h,{key:e.id,comment:e})})))},_=(a(29),function(e){var t=e.post;return c.a.createElement("div",{className:"post"},c.a.createElement(b,{person:t.user}),c.a.createElement("h2",{className:"post__heading"},t.title),c.a.createElement("p",{className:"post__text"},t.body),c.a.createElement(v,{comments:t.comments}))}),j=function(e){var t=e.postlist;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(_,{key:e.id,post:e})})))},y=(a(30),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),i=u[0],d=u[1],p=Object(n.useState)(!0),b=Object(o.a)(p,2),h=b[0],v=b[1],_=Object(n.useState)(""),y=Object(o.a)(_,2),N=y[0],O=y[1],g=Object(n.useState)(""),k=Object(o.a)(g,2),x=k[0],S=k[1],w=Object(n.useCallback)(m()(S,1e3),[]),C=Object(n.useMemo)((function(){return a.filter((function(e){return e.title.includes(x)||e.body.includes(x)}))}),[x,a]);return c.a.createElement(c.a.Fragment,null,h?c.a.createElement("button",{type:"button",className:"button button-load",disabled:i,onClick:function(){d(!0),Promise.all([E("".concat(f,"posts")),E("".concat(f,"users")),E("".concat(f,"comments"))]).then((function(e){var t=Object(o.a)(e,3),a=t[0],n=t[1],c=t[2],s=a.map((function(e){return Object(l.a)({},e,{user:n.find((function(t){return e.userId===t.id})),comments:c.filter((function(t){return e.id===t.postId}))})}));r(s),d(!1),v(!1)}))}},i?"Loading...":"Load"):c.a.createElement("div",{className:"App"},c.a.createElement("label",{htmlFor:"search-query",className:"label"},"Search",c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"search-query",value:N,className:"input",placeholder:"Title and body search",onChange:function(e){return function(e){var t=e.target.value;O(t),w(t)}(e)}}))),c.a.createElement(j,{postlist:N?C:a})))});s.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.cbacb71c.chunk.js.map