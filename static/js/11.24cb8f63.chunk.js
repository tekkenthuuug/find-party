(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[11],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://find-party-api.herokuapp.com"},158:function(e,t,n){},159:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(28),i=n(0),r=n.n(i),o=n(20),s=(n(158),function(e){var t=e.title,n=e.location,a=e.description,c=e.id;return r.a.createElement(o.b,{to:"/events/".concat(c)},r.a.createElement("div",{className:"event-card"},r.a.createElement("div",{className:"event-card_head"},r.a.createElement("h1",null,t),r.a.createElement("h3",null,n)),r.a.createElement("p",{className:"event-card_desc"},a)))}),u=(n(159),n(128));t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(i.useState)(0),d=Object(c.a)(l,2),f=d[0],m=d[1],p=function(e){fetch(u.a+"/api/feed/".concat(e),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var c=Object(a.a)(n);m(e+10),o(c.concat(t))}))};return Object(i.useEffect)((function(){p(0)}),[]),r.a.createElement("div",{className:"feed-container"},r.a.createElement("div",{className:"feed-box"},n.map((function(e,t){return r.a.createElement(s,{key:t,id:e.id,description:e.description,location:e.country+", "+e.city,title:e.title})})),r.a.createElement("button",{className:"submit-button",style:{color:"white"},onClick:function(){return p(f)}},"Load more")))}}}]);
//# sourceMappingURL=11.24cb8f63.chunk.js.map