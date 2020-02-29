(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[5,13],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://find-party-api.herokuapp.com"},129:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(130),n(174)),c=n(65),l=n(169),i=Object(c.a)({overrides:{MuiTextField:{root:{backgroundColor:"#2ba296",borderRadius:"3px",width:"100%","& *":{color:"rgba(255,255,255, 0.8)",fontFamily:"Roboto Mono"},"& .MuiInputLabel-shrink":{color:"rgb(140, 245, 154)",fontFamily:"Roboto Mono"},"& .MuiFilledInput-underline:after":{borderColor:"rgb(140, 245, 154)"}}}}});t.a=r.a.memo((function(e){var t=e.placeholder,n=e.handleChange,a=e.inputType,c=void 0===a?"text":a,s=e.name,m=e.error,u=e.twoColumns,d=e.multiline,p=e.initialVal;return r.a.createElement("div",{style:u?{gridColumnStart:"1",gridColumnEnd:"3"}:void 0},r.a.createElement("div",{className:"error"},m||null),r.a.createElement(l.a,{theme:i},r.a.createElement(o.a,{value:p,label:t,variant:"filled",type:c,onChange:n,name:s,color:"primary",multiline:Boolean(d),rows:d})))}))},130:function(e,t,n){},135:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24);n(135);t.default=function(e){var t=e.errorMessage,n=Object(o.g)();return r.a.createElement("div",{className:"not_found_container"},r.a.createElement("span",{className:"not_found_error"},t),r.a.createElement("span",{onClick:function(){return n.goBack()},className:"not_found_go_home"},"Go back"))}},143:function(e,t,n){"use strict";var a=n(30),r=n(28),o=n(0),c=n.n(o),l=n(20),i=n(129),s=n(48),m=n(47),u=(n(144),n(128));t.a=c.a.memo((function(e){var t=e.target,n=e.loadingMarginTop,d=Object(o.useContext)(s.a),p=Object(o.useState)([]),f=Object(r.a)(p,2),h=f[0],b=f[1],g=Object(o.useState)(!0),E=Object(r.a)(g,2),v=E[0],y=E[1],N=Object(o.useState)(""),j=Object(r.a)(N,2),C=j[0],O=j[1];Object(o.useEffect)((function(){fetch(u.a+"/api/".concat(t.name,"/comments/").concat(t.id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){y(!1),b(e)}))}),[t]);return v?c.a.createElement(m.a,{backgroundColor:"transparent",containerHeight:"100%",spinnerSize:"50px",marginTop:n}):c.a.createElement("div",{className:"comments"},c.a.createElement("h4",null,"Comments"),c.a.createElement("div",{className:"comments_block"},h.length<1?c.a.createElement("h1",{className:"no-comments"},"No comments found"):c.a.createElement(o.Fragment,null,h.map((function(e,t){return c.a.createElement("div",{className:"comment",key:t},c.a.createElement("div",{className:"comment-content"},c.a.createElement(l.b,{to:"/users/".concat(e.senderID)},c.a.createElement("h5",null,e.senderName)),c.a.createElement("p",null,e.content)))})))),d.id?c.a.createElement(o.Fragment,null,c.a.createElement(i.a,{placeholder:"Write your comment...",handleChange:function(e){return O(e.target.value)}}),c.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"6px"}},c.a.createElement("button",{className:"comment-submit",onClick:function(){C.length<1||fetch(u.a+"/api/".concat(t.name,"/comments/"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:C,senderName:d.username,senderID:d.id,targetID:t.id})}).then((function(e){return e.json()})).then((function(e){var t=Object(a.a)(h);t.unshift({senderName:d.username,content:C,senderID:d.id}),b(t)}))},disabled:C.length>265},"Send"),C.length>265?c.a.createElement("div",{className:"error",style:{marginLeft:"10px"}},"Max. comment length: 265."):null)):null)}))},144:function(e,t,n){},157:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(0),o=n.n(r),c=n(143),l=n(139),i=(n(157),n(128));t.default=function(e){var t=e.eventID,n=e.userID,s=Object(r.useState)({title:"",contact:"",description:"",country:"",city:"",creatorID:"",creatorName:"",id:""}),m=Object(a.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(!1),f=Object(a.a)(p,2),h=f[0],b=f[1];Object(r.useEffect)((function(){fetch(i.a+"/api/events/info/".concat(t),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.enrolledusers.includes(n)&&b(!0),d(e)}))}),[t,n]);var g=u.title,E=u.country,v=u.city,y=u.contact,N=u.description,j=u.creatorName;return g?o.a.createElement("div",{className:"eventPage-container"},o.a.createElement("div",{className:"eventPage-box"},o.a.createElement("div",{className:"box_head"},o.a.createElement("p",null,y),o.a.createElement("div",{className:"head_title-creator"},o.a.createElement("h2",null,g),o.a.createElement("p",null,j)),o.a.createElement("p",null,E,", ",v)),o.a.createElement("div",{className:"box_description"},N),n?o.a.createElement("button",{className:"submit-button box_enroll-button",disabled:h,onClick:function(){fetch(i.a+"/api/events/enroll",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventID:u.id,userID:n})}).then((function(e){return e.json()})).then((function(e){b(!0)}))}},o.a.createElement("span",null,h?"Already enrolled":"Enroll")):null,o.a.createElement(c.a,{target:{name:"events",id:t},loadingMarginTop:"50px"}))):o.a.createElement(l.default,{errorMessage:"Can't find this event!"})}}}]);
//# sourceMappingURL=5.174fbf7e.chunk.js.map