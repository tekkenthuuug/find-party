(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[3],{165:function(e,t,n){},166:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var a=n(23),c=n(14),i=n(0),o=n.n(i),r=n(13),s=(n(165),function(e){var t=e.title,n=e.location,a=e.description,c=e.id;return o.a.createElement(r.b,{to:"/events/".concat(c)},o.a.createElement("div",{className:"event-card"},o.a.createElement("div",{className:"event-card_head"},o.a.createElement("h1",null,t),o.a.createElement("h3",null,n)),o.a.createElement("p",{className:"event-card_desc"},a)))});n(166),t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(i.useState)(0),u=Object(c.a)(l,2),d=u[0],f=u[1],m=function(e){fetch("http://localhost:8000/api/feed/".concat(e),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var c=Object(a.a)(n);f(e+10),r(c.concat(t))}))};return Object(i.useEffect)((function(){m(0)}),[]),o.a.createElement("div",{className:"feed-container"},o.a.createElement("div",{className:"feed-box"},n.map((function(e,t){return o.a.createElement(s,{key:t,id:e.id,description:e.description,location:e.country+", "+e.city,title:e.title})})),o.a.createElement("button",{className:"submit-button",style:{color:"white"},onClick:function(){return m(d)}},"Load more")))}}}]);
//# sourceMappingURL=3.9951507e.chunk.js.map