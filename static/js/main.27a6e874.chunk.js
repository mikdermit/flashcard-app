(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=c(4),d=c(12),j=c(5),o=c(2),l=c(11),b=c(20),u=c(6),h=c.n(u),O=["cards"],m=Object({NODE_ENV:"production",PUBLIC_URL:"/flashcard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",x=new Headers;function p(e){e.cards;return Object(b.a)(e,O)}function f(e,t,c){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(h.a.mark((function e(t,c,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function N(){return(N=Object(l.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(m,"/decks?_embed=cards"),e.next=3,f(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(l.a)(h.a.mark((function e(t,c){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks"),r={method:"POST",headers:x,body:JSON.stringify(p(t)),signal:c},e.next=4,f(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t,"?_embed=cards"),e.next=3,f(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(h.a.mark((function e(t,c){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:x,body:JSON.stringify(p(t)),signal:c},e.next=4,f(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(l.a)(h.a.mark((function e(t,c){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,f(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(l.a)(h.a.mark((function e(t,c,n){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/cards"),c.deckId=Number(t),a={method:"POST",headers:x,body:JSON.stringify(c),signal:n},e.next=5,f(r,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(l.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards/").concat(t),e.next=3,f(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(l.a)(h.a.mark((function e(t,c){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards/").concat(t.id),r={method:"PUT",headers:x,body:JSON.stringify(t)},e.next=4,f(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(l.a)(h.a.mark((function e(t,c){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,f(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.append("Content-Type","application/json");var D=c(3),_=c(0);function A(e){var t=e.navTitles,c=e.id,n=t.map((function(e,n){return n===t.length-1?Object(_.jsx)("li",{className:"breadcrumb-item","aria-current":"page",children:e},n):Object(_.jsx)("li",{className:"breadcrumb-item",children:Object(_.jsx)(D.b,{to:"/decks/".concat(c),children:e})},n)}));return Object(_.jsx)("nav",{"aria-label":"breadcrumb",children:Object(_.jsxs)("ol",{className:"breadcrumb",children:[Object(_.jsx)("li",{className:"breadcrumb-item",children:Object(_.jsx)(D.b,{to:"/",children:"Home"})}),n]})})}function R(){var e=Object(n.useState)(Object(j.a)({},{name:"",description:""})),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(i.f)(),s=function(e){var t=e.target;r(Object(j.a)(Object(j.a)({},c),{},Object(d.a)({},t.name,t.value)))};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{navTitles:["Create Deck"]}),Object(_.jsx)("div",{className:"container w-75",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){return y.apply(this,arguments)}(c).then(g).then((function(e){return a.push("/decks/".concat(e.id))})).catch(console.error)},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name"}),Object(_.jsx)("input",{id:"name",type:"text",className:"form-control",name:"name",placeholder:"Deck Name",onChange:s,value:c.name})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"description",children:"Description"}),Object(_.jsx)("textarea",{id:"description",type:"text",className:"form-control",name:"description",placeholder:"Brief description of the deck",onChange:s,value:c.description})]}),Object(_.jsx)("button",{type:"button",className:"btn btn-secondary m-2",onClick:function(){return a.push("/")},children:"Cancel"}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Submit"})]})})]})}function P(e){var t=e.error,c=e.children;return Object(_.jsxs)("main",{className:"container",children:[Object(_.jsxs)("p",{style:{color:"red"},children:["ERROR: ",t.message]}),c]})}function B(){return Object(_.jsx)("div",{className:"LoadingMessage",children:Object(_.jsx)("h1",{children:"Loading"})})}function L(e){var t=e.deckId,c={front:"",back:""},r=Object(n.useState)({}),a=Object(o.a)(r,2),s=a[0],l=a[1],b=Object(n.useState)(void 0),u=Object(o.a)(b,2),h=u[0],O=u[1],m=Object(n.useState)(Object(j.a)({},c)),x=Object(o.a)(m,2),p=x[0],f=x[1],v=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return k(t,e.signal).then(l).catch(O),function(){return e.abort()}}),[t]);var N=function(e){var t=e.target;f(Object(j.a)(Object(j.a)({},p),{},Object(d.a)({},t.name,t.value)))};return h?Object(_.jsx)(P,{error:h}):p&&s?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{id:s.id,navTitles:[s.name,"Add Card"]}),Object(_.jsx)("div",{className:"container w-75",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,c){return I.apply(this,arguments)}(s.id,p).then(f(Object(j.a)({},c))).catch(console.error)},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"front",children:"Front"}),Object(_.jsx)("textarea",{id:"front",type:"text",className:"form-control",name:"front",placeholder:"Front side of card",onChange:N,value:p.front})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"back",children:"Back"}),Object(_.jsx)("textarea",{id:"back",type:"text",className:"form-control",name:"back",placeholder:"Back side of card",onChange:N,value:p.back})]}),Object(_.jsx)("button",{type:"button",className:"btn btn-secondary m-2",onClick:function(){return v.push("/decks/".concat(s.id))},children:"Done"}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Save"})]})})]}):Object(_.jsx)(B,{})}function J(e){var t=e.deckId,c=Object(n.useState)({}),r=Object(o.a)(c,2),a=r[0],s=r[1],l=Object(n.useState)(void 0),b=Object(o.a)(l,2),u=b[0],h=b[1],O=Object(i.g)().cardId,m=Object(n.useState)({}),x=Object(o.a)(m,2),p=x[0],f=x[1],v=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return function(e,t){return E.apply(this,arguments)}(O,e.signal).then(f).catch(h),k(t,e.signal).then(s).catch(h),function(){return e.abort()}}),[O,t]);var N=function(e){var t=e.target;f(Object(j.a)(Object(j.a)({},p),{},Object(d.a)({},t.name,t.value)))};return u?Object(_.jsx)(P,{error:u}):p&&a?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{id:t,navTitles:[a.name,"Edit Card ".concat(O)]}),Object(_.jsx)("div",{className:"container w-75",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){return F.apply(this,arguments)}(p).then((function(){return v.push("/flashcard-app/decks/".concat(t))}))},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"front",children:"Front"}),Object(_.jsx)("textarea",{id:"name",type:"text",className:"form-control",name:"front",onChange:N,value:p.front})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"description",children:"Back"}),Object(_.jsx)("textarea",{id:"back",type:"text",className:"form-control",name:"back",onChange:N,value:p.back})]}),Object(_.jsx)("button",{type:"button",className:"btn btn-secondary m-2",onClick:function(){return v.push("/flashcard-app")},children:"Cancel"}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Submit"})]})})]}):Object(_.jsx)(B,{})}function H(){return Object(_.jsx)("div",{className:"NotFound",children:Object(_.jsx)("h1",{children:"Not Found"})})}function U(e){var t=e.deckId,c=Object(i.h)().url;return Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{path:"".concat(c,"/:cardId/edit"),children:Object(_.jsx)(J,{deckId:t})}),Object(_.jsx)(i.a,{path:"".concat(c,"/new"),children:Object(_.jsx)(L,{deckId:t})}),Object(_.jsx)(H,{})]})}function K(e){var t=e.deckId,c=e.cardId;return"deck"===e.type?Object(_.jsx)("button",{className:"btn btn-secondary mx-1",style:{width:"7rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/".concat(t,"/edit"),className:"text-white",children:"Edit"})}):Object(_.jsx)("button",{className:"btn btn-secondary mx-1",style:{width:"7rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/".concat(t,"/cards/").concat(c,"/edit"),className:"text-white",children:"Edit"})})}function W(e){var t=e.id,c=e.type,n=Object(i.f)();return Object(_.jsx)("button",{className:"btn btn-danger float-right mx-1",style:{width:"7rem"},type:"delete",onClick:function(){window.confirm("Delete this ".concat(c,"\n\nYou will not be able to recover it"))&&("deck"===c?function(e,t){return C.apply(this,arguments)}(t).then(n.push("/")):function(e,t){T.apply(this,arguments)}(t)),n.go()},children:"Delete"})}function M(e){var t=e.card,c=e.deckId;return Object(_.jsx)("div",{className:"col-6 d-flex align-items-stretch",children:Object(_.jsxs)("div",{className:"card m-2",style:{width:"33rem"},children:[Object(_.jsxs)("div",{className:"card-body row",children:[Object(_.jsxs)("div",{className:"col",children:[Object(_.jsx)("h4",{className:"card-title",children:"Front"}),Object(_.jsx)("p",{className:"card-text",children:t.front})]}),Object(_.jsxs)("div",{className:"col",children:[Object(_.jsx)("h4",{className:"card-title",children:"Back"}),Object(_.jsx)("p",{className:"card-text",children:t.back})]})]}),Object(_.jsx)("div",{className:"card-footer",children:Object(_.jsxs)("div",{className:"btn-wrapper",children:[Object(_.jsx)(K,{cardId:t.id,deckId:c,type:"card"}),Object(_.jsx)(W,{id:t.id,type:"card"})]})})]},t.id)})}function V(e){var t=e.deckId;return"deck"===e.type?Object(_.jsx)("div",{className:"text-right",children:Object(_.jsx)("button",{className:"btn btn-secondary",style:{width:"12rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/new",className:"text-white",children:"Create Deck"})})}):Object(_.jsx)("button",{className:"btn btn-primary mx-1",style:{width:"7rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/".concat(t,"/cards/new"),className:"text-white",children:"Add Cards"})})}function Y(e){var t=e.id;return Object(_.jsx)("button",{className:"btn btn-primary mx-1",style:{width:"7rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/".concat(t,"/study"),className:"text-white",children:"Study"})})}function q(e){var t=e.deckId,c=Object(n.useState)({}),r=Object(o.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)([]),d=Object(o.a)(i,2),j=d[0],l=d[1],b=Object(n.useState)(void 0),u=Object(o.a)(b,2),h=u[0],O=u[1];Object(n.useEffect)((function(){var e=new AbortController;return k(t,e.signal).then((function(e){s(e),l(e.cards)})).catch(O),function(){return e.abort()}}),[t]);var m=j.map((function(e){return Object(_.jsx)(M,{card:e,deckId:a.id})}));return h?Object(_.jsx)(P,{error:h}):a&&j?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{id:a.id,navTitles:[a.name]}),Object(_.jsxs)("div",{className:"card",children:[Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsx)("h3",{className:"card-title",children:a.name}),Object(_.jsx)("p",{className:"card-text",children:a.description})]}),Object(_.jsx)("div",{className:"card-footer",children:Object(_.jsxs)("div",{className:"btn-wrapper text-left",children:[Object(_.jsx)(K,{deckId:a.id,type:"deck"}),Object(_.jsx)(Y,{id:a.id}),Object(_.jsx)(V,{deckId:a.id,type:"card"}),Object(_.jsx)(W,{id:a.id,type:"deck"})]})})]}),Object(_.jsx)("h2",{className:"mb-2 mt-4 ml-2",children:"Cards"}),Object(_.jsx)("div",{className:"row",children:m}),";"]}):Object(_.jsx)(B,{})}function z(e){var t=e.deckId,c=Object(n.useState)({}),r=Object(o.a)(c,2),a=r[0],s=r[1],l=Object(n.useState)({}),b=Object(o.a)(l,2),u=b[0],h=b[1],O=Object(n.useState)(void 0),m=Object(o.a)(O,2),x=m[0],p=m[1],f=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return k(t,e.signal).then((function(e){h(e),s(e)})).catch(p),function(){return e.abort()}}),[t]);var v=function(e){var t=e.target;h(Object(j.a)(Object(j.a)({},u),{},Object(d.a)({},t.name,t.value)))};return x?Object(_.jsx)(P,{error:x}):u?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{id:t,navTitles:[a.name,"Edit Deck"]}),Object(_.jsx)("div",{className:"container w-75",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(u).then((function(){return f.push("/decks/".concat(t))}))},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name"}),Object(_.jsx)("input",{id:"name",type:"text",className:"form-control",name:"name",onChange:v,value:u.name})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"description",children:"Description"}),Object(_.jsx)("textarea",{id:"description",type:"text",className:"form-control",name:"description",onChange:v,value:u.description})]}),Object(_.jsx)("button",{type:"button",className:"btn btn-secondary m-2",onClick:function(){return f.push("/")},children:"Cancel"}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Submit"})]})})]}):Object(_.jsx)(B,{})}function G(e){var t=e.numCards,c=e.deckId;return Object(_.jsxs)("div",{className:"container text-center",children:[Object(_.jsx)("h3",{children:"Not enough cards."}),Object(_.jsxs)("p",{children:["You need at least 3 cards to study. There are ",t," cards in this deck."]}),Object(_.jsx)(V,{deckId:c,type:"card"})]})}function Q(e){var t=e.cards,c={index:0,flipped:!1,viewed:!1},r=Object(n.useState)(Object(j.a)({},c)),a=Object(o.a)(r,2),s=a[0],d=a[1],l=Object(i.f)();return Object(_.jsx)("div",{className:"card-deck justify-content-center text-center mt-4",children:Object(_.jsx)("div",{className:"w-75",children:Object(_.jsxs)("div",{className:"card",children:[Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsxs)("h4",{className:"card-title",children:["Card ",s.index+1," of ",t.length]}),Object(_.jsx)("p",{className:"card-text",children:s.flipped?t[s.index].back:t[s.index].front})]}),Object(_.jsx)("div",{className:"card-footer",children:Object(_.jsxs)("div",{className:"btn-wrapper",children:[Object(_.jsx)("button",{className:"btn btn-secondary mx-1 float-left",style:{width:"5rem"},onClick:function(e){d(Object(j.a)(Object(j.a)({},s),{},{flipped:!s.flipped,viewed:!0}))},children:"Flip"}),s.viewed&&s.index<t.length-1?Object(_.jsx)("button",{className:"btn btn-primary mx-1 float-right",style:{width:"5rem"},onClick:function(){d(Object(j.a)(Object(j.a)({},s),{},{index:s.index+1,flipped:!1,viewed:!1}))},children:"Next"}):s.viewed&&Object(_.jsx)("button",{className:"btn btn-primary mx-1 float-right",style:{width:"5rem"},onClick:function(){window.confirm('Restart cards?\n\nClick "cancel" to return to the homepage')?d(c):l.push("/flashcard-app")},children:"Reset"})]})})]})})})}function X(e){var t=e.deckId,c=Object(n.useState)({}),r=Object(o.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(),d=Object(o.a)(i,2),j=d[0],l=d[1],b=Object(n.useState)(void 0),u=Object(o.a)(b,2),h=u[0],O=u[1];return Object(n.useEffect)((function(){var e=new AbortController;return k(t,e.signal).then((function(e){s(e),l(e.cards)})).catch(O),function(){return e.abort()}}),[t]),h?Object(_.jsx)(P,{error:h}):a&&j?j.length<3?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("h2",{className:"text-center",children:["Study: ",a.name]}),Object(_.jsx)(G,{numCards:j.length,deckId:t})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{id:t,navTitles:[a.name,"Study"]}),Object(_.jsxs)("h2",{className:"text-center",children:["Study: ",a.name]}),Object(_.jsx)(Q,{deckId:t,cards:j})]}):Object(_.jsx)(B,{})}function Z(){var e=Object(i.h)(),t=e.url,c=e.params.deckId;return Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{path:"".concat(t,"/study"),children:Object(_.jsx)(X,{deckId:c})}),Object(_.jsx)(i.a,{path:"".concat(t,"/edit"),children:Object(_.jsx)(z,{deckId:c})}),Object(_.jsx)(i.a,{path:"".concat(t,"/cards"),children:Object(_.jsx)(U,{deckId:c})}),Object(_.jsx)(i.a,{exact:!0,path:t,children:Object(_.jsx)(q,{deckId:c})})]})}function $(e){var t=e.id;return Object(_.jsx)("button",{className:"btn btn-secondary mx-1",style:{width:"7rem"},type:"button",children:Object(_.jsx)(D.b,{to:"/decks/".concat(t),className:"text-white",children:"View"})})}function ee(e){var t=e.deck;return Object(_.jsx)("div",{className:"col-6 d-flex align-items-stretch",children:Object(_.jsxs)("div",{className:"card m-2",style:{width:"33rem"},children:[Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsx)("h6",{className:"card-subtitle mb-2 text-muted float-right",children:t.cards.length}),Object(_.jsx)("h5",{className:"card-title",children:t.name}),Object(_.jsx)("p",{className:"card-text",children:t.description})]}),Object(_.jsx)("div",{className:"card-footer",children:Object(_.jsxs)("div",{className:"btn-wrapper",children:[Object(_.jsx)($,{id:t.id}),Object(_.jsx)(Y,{id:t.id}),Object(_.jsx)(W,{id:t.id,type:"deck"})]})})]},t.id)})}function te(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(void 0),s=Object(o.a)(a,2),i=s[0],d=s[1];Object(n.useEffect)((function(){var e=new AbortController;return function(e){return N.apply(this,arguments)}(e.signal).then(r).catch(d),function(){return e.abort()}}),[]);var j=c.map((function(e){return Object(_.jsx)(ee,{deck:e})}));return i?Object(_.jsx)(P,{error:i}):c?Object(_.jsxs)("main",{children:[Object(_.jsx)(V,{type:"deck"}),Object(_.jsx)("div",{className:"row",children:j})]}):Object(_.jsx)(B,{})}var ce=function(){return Object(_.jsx)("header",{className:"jumbotron bg-dark",children:Object(_.jsxs)("div",{className:"container text-white",children:[Object(_.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(_.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};function ne(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ce,{}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{exact:!0,path:"/",children:Object(_.jsx)(te,{})}),Object(_.jsx)(i.a,{exact:!0,path:"/decks/new",children:Object(_.jsx)(R,{})}),Object(_.jsx)(i.a,{path:"/decks/:deckId",children:Object(_.jsx)(Z,{})}),Object(_.jsx)(H,{})]})})]})}var re=function(){return Object(_.jsx)("div",{className:"app-routes",children:Object(_.jsx)(i.c,{children:Object(_.jsx)(i.a,{path:"/",children:Object(_.jsx)(ne,{})})})})};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(D.a,{children:Object(_.jsx)(re,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.27a6e874.chunk.js.map