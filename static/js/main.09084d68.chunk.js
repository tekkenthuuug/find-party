(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){e.exports=n.p+"static/media/background-vid.013a0b2e.mp4"},108:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(101),n(56));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(53),c=n(84),i=n.n(c),l=n(85),s=n.n(l);n(91);t.a=function(e){var t=e.headTitle,n=e.formik,c=e.sections,l=e.submitButtonText,u=e.subTitle;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-box"},r.a.createElement("h1",null,t),u?r.a.createElement("p",null,u):null,r.a.createElement("form",{onSubmit:n.handleSubmit,className:"form"},n.values.error?r.a.createElement("div",{className:"form-error"},n.values.error):null,c.map((function(e,t){return r.a.createElement(a.Fragment,{key:t},e.title?r.a.createElement("h2",null,e.title):null,r.a.createElement("div",{className:"input-section"},e.fields.map((function(e){return r.a.createElement(o.a,{key:e.name,initialVal:n.values[e.name],placeholder:e.placeholder,handleChange:n.handleChange,name:e.name,error:n.errors[e.name]||null,twoColumns:e.twoColumns,multiline:e.multiline})}))))})),r.a.createElement("button",{className:"submit-button",type:"submit",disabled:n.isSubmitting},r.a.createElement("span",null,l),n.isSubmitting||n.isValidating?r.a.createElement(i.a,{style:{animation:"spin 1s linear infinite"}}):r.a.createElement(s.a,null)))))}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(110);t.a=function(e){var t=e.backgroundColor,n=void 0===t?"#1D1D21":t,a=e.spinnerSize,o=void 0===a?"100px":a,c=e.containerHeight,i=void 0===c?"100vh":c,l=e.marginTop,s=void 0===l?"0":l;return r.a.createElement("div",{style:{backgroundColor:n,height:i},className:"loading-screen"},r.a.createElement("div",{className:"spin",style:{width:o,height:o,marginTop:s}}))}},53:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(111),n(119)),c=n(62),i=n(118),l=Object(c.a)({overrides:{MuiTextField:{root:{backgroundColor:"#2ba296",borderRadius:"3px",width:"100%","& *":{color:"rgba(255,255,255, 0.8)",fontFamily:"Roboto Mono"},"& .MuiInputLabel-shrink":{color:"rgb(140, 245, 154)",fontFamily:"Roboto Mono"},"& .MuiFilledInput-underline:after":{borderColor:"rgb(140, 245, 154)"}}}}});t.a=r.a.memo((function(e){var t=e.placeholder,n=e.handleChange,a=e.inputType,c=void 0===a?"text":a,s=e.name,u=e.error,m=e.twoColumns,d=e.multiline,p=e.initialVal;return r.a.createElement("div",{style:m?{gridColumnStart:"1",gridColumnEnd:"3"}:void 0},r.a.createElement("div",{className:"error"},u||null),r.a.createElement(i.a,{theme:l},r.a.createElement(o.a,{value:p,label:t,variant:"filled",type:c,onChange:n,name:s,color:"primary",multiline:Boolean(d),rows:d})))}))},56:function(e,t,n){"use strict";var a=n(14),r=n(0),o=n.n(r),c=n(13),i=n(28),l=(n(102),n(103)),s=function(){return o.a.createElement("div",{className:"homepage"},o.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"back-vid"},o.a.createElement("source",{src:l,type:"video/mp4"})),o.a.createElement("div",{className:"homepage__container"},o.a.createElement("header",null,"Find party for the event"),o.a.createElement("div",{className:"homepage__buttons"},o.a.createElement(c.b,{to:"/events/create",className:"btn"},o.a.createElement("p",null,"Create event")),o.a.createElement(c.b,{to:"/feed",className:"btn"},o.a.createElement("p",null,"Find event")))))},u=(n(108),n(148)),m=n(152),d=n(116),p=n(154),h=n(160),f=n(79),b=n.n(f),g=n(81),E=n.n(g),v=n(78),y=n.n(v),j=n(153),O=n(80),C=n.n(O),N=Object(u.a)({list:{width:250},paper:{backgroundColor:"rgb(52, 52, 61)",color:"white"}}),k=function(e){var t=e.userID,n=e.drawerOpened,a=e.toggleDrawer,r=N(),i=[{title:"My profile",path:"/users/"+t,icon:o.a.createElement(y.a,{style:{color:"white"}})},{title:"Feed",path:"/feed",icon:o.a.createElement(b.a,{style:{color:"white"}})},{title:"Create event",path:"/events/create",icon:o.a.createElement(C.a,{style:{color:"white"}})},{title:"Settings",path:"/settings",icon:o.a.createElement(E.a,{style:{color:"white"}})}];return o.a.createElement(h.a,{open:n,onClose:a(!1),classes:{paper:r.paper}},o.a.createElement("div",{className:r.list,role:"presentation",onClick:a(!1),onKeyDown:a(!1)},o.a.createElement(m.a,null,i.map((function(e){return o.a.createElement(c.c,{to:e.path,key:e.title,activeStyle:{color:"#b1b1c7"}},o.a.createElement(d.a,{button:!0},o.a.createElement(j.a,null,e.icon),o.a.createElement(p.a,{primary:e.title})))})))))},D=n(161),I=n(155),w=n(156),x=n(157),S=n(57),T=n(88),_=n(158),M=n(82),F=n.n(M),B=n(83),L=n.n(B),z=Object(u.a)((function(e){return Object(D.a)({menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),R=function(e){var t=e.setUser,n=e.toggleDrawer,r=e.userID,l=e.news,s=void 0===l?"":l,u=Object(i.g)(),m=function(){b(null)},d=z(),p=o.a.useState(null),h=Object(a.a)(p,2),f=h[0],b=h[1],g=Boolean(f);return o.a.createElement(I.a,{position:"absolute",style:{backgroundColor:"rgb(52, 52, 61)"},variant:"outlined"},o.a.createElement(w.a,null,o.a.createElement(x.a,{edge:"start",className:d.menuButton,color:"inherit","aria-label":"menu",onClick:n(!0)},o.a.createElement(F.a,null)),o.a.createElement(S.a,{variant:"h6",className:d.title},s),o.a.createElement("div",null,o.a.createElement(x.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit"},o.a.createElement(L.a,null)),o.a.createElement(T.a,{id:"menu-appbar",anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:m},o.a.createElement(_.a,{onClick:m,component:c.b,to:"/users/"+r},"Profile"),o.a.createElement(_.a,{onClick:function(){m(),sessionStorage.removeItem("id"),sessionStorage.removeItem("username"),t({username:"",id:""}),u.push("/login")}},"Sign out")))))},P=o.a.memo((function(e){var t=e.userID,n=e.setUser,r=o.a.useState(!1),i=Object(a.a)(r,2),l=i[0],s=i[1],u=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(e)}};return t?o.a.createElement("div",{style:{flexGrow:1}},o.a.createElement(k,{userID:t,drawerOpened:l,toggleDrawer:u}),o.a.createElement(R,{userID:t,setUser:n,toggleDrawer:u})):o.a.createElement("nav",null,o.a.createElement("div",{className:"nav__account"},[{path:"/register",content:"Register"},{path:"/login",content:"Sign in"}].map((function(e,t){return o.a.createElement(c.b,{to:e.path,key:t},o.a.createElement("div",null,e.content))}))))})),U=n(47),J=n(2),V=function(e){var t=e.userID,n=e.component,a=Object(J.a)(e,["userID","component"]);return o.a.createElement(i.b,Object.assign({},a,{render:function(e){return t?o.a.createElement(n,Object.assign({},e,{userID:t})):o.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},q=n(45),A=n(46),G=[{title:"Main information",fields:[{placeholder:"Event title",name:"title"},{placeholder:"Contact",name:"contact"}]},{title:"Additional info",fields:[{placeholder:"Event description",name:"description",twoColumns:!0,multiline:6}]},{title:"Location information",fields:[{placeholder:"Country",name:"country"},{placeholder:"City",name:"city"}]}],W=function(){var e=Object(r.useContext)(re),t=Object(i.g)(),n=Object(A.a)({initialValues:{title:"",contact:"",description:"",country:"",city:""},validate:function(e){return function(e){var t=e.title,n=e.contact,a=e.country,r=e.city,o={title:"",contact:"",country:"",city:"",description:""};return e.description.length>265?o.description="Length must be 265 characters or less":delete o.description,t?t.length<5?o.title="Length must be at least 5 characters":t.length>24?o.title="Length must be 24 characters or less":delete o.title:o.title="Required field",n?n.length<5?o.contact="Length must be at least 5 characters":n.length>24?o.contact="Length must be 24 characters or less":delete o.contact:o.contact="Required field",a?a.length>24?o.country="Length must be 24 characters or less":delete o.country:o.country="Required field",r?r.length>24?o.city="Length must be 24 characters or less":delete o.city:o.city="Required field",o}(e)},onSubmit:function(n,a){var r=n.title,o=n.contact,c=n.description,i=n.country,l=n.city,s=a.setSubmitting;fetch("http://localhost:8000/api/events/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,contact:o,country:i,city:l,description:c,creatorID:e.id,creatorName:e.username})}).then((function(e){return e.json()})).then((function(e){s(!1),t.push("/events/".concat(e))}))}});return o.a.createElement(q.a,{formik:n,headTitle:"Create your own event!",submitButtonText:"Create",sections:G})},H=n(72),K=n(73),$=(n(114),function(e){var t=e.eventID,n=e.userID,c=Object(r.useState)({title:"",contact:"",description:"",country:"",city:"",creatorID:"",creatorName:"",id:""}),i=Object(a.a)(c,2),l=i[0],s=i[1],u=Object(r.useState)(!1),m=Object(a.a)(u,2),d=m[0],p=m[1];Object(r.useEffect)((function(){fetch("http://localhost:8000/api/events/info/".concat(t),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.enrolledusers.includes(n)&&p(!0),s(e)}))}),[t,n]);var h=l.title,f=l.country,b=l.city,g=l.contact,E=l.description,v=l.creatorName;return h?o.a.createElement("div",{className:"eventPage-container"},o.a.createElement("div",{className:"eventPage-box"},o.a.createElement("div",{className:"box_head"},o.a.createElement("p",null,g),o.a.createElement("div",{className:"head_title-creator"},o.a.createElement("h2",null,h),o.a.createElement("p",null,v)),o.a.createElement("p",null,f,", ",b)),o.a.createElement("div",{className:"box_description"},E),n?o.a.createElement("button",{className:"submit-button box_enroll-button",disabled:d,onClick:function(){fetch("http://localhost:8000/api/events/enroll",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventID:l.id,userID:n})}).then((function(e){return e.json()})).then((function(e){p(!0)}))}},o.a.createElement("span",null,d?"Already enrolled":"Enroll")):null,o.a.createElement(H.a,{target:{name:"events",id:t},loadingMarginTop:"50px"}))):o.a.createElement(K.default,{errorMessage:"Can't find this event!"})}),Q=[{fields:[{placeholder:"Description",name:"description",twoColumns:!0,multiline:6}]}],X=function(e){var t=e.userID,n=Object(A.a)({initialValues:{description:""},validate:function(e){return function(e){var t={description:""};return e.description.length>265?t.description="Description length must be 265 or less characters":delete t.description,t}(e)},onSubmit:function(e,n){var a=e.description,r=n.setSubmitting;fetch("http://localhost:8000/api/users/settings",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:t,description:a})}).then((function(e){return e.json()})).then((function(e){r(!1)}))}});return Object(r.useEffect)((function(){fetch("http://localhost:8000/api/users/".concat(t),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.description;n.setValues({description:t})}))}),[t]),o.a.createElement(q.a,{headTitle:"Profile settings",sections:Q,submitButtonText:"Apply",formik:n})};n.d(t,"a",(function(){return re}));var Y=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,73))})),Z=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,170))})),ee=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,168))})),te=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,164))})),ne=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,169))})),ae={id:sessionStorage.getItem("id")||"",username:sessionStorage.getItem("username")||""},re=Object(r.createContext)(ae);t.b=function(){var e=Object(r.useState)(ae),t=Object(a.a)(e,2),n=t[0],l=t[1];return o.a.createElement(c.a,{basename:"/find-party"},o.a.createElement(P,{userID:n.id,setUser:l}),o.a.createElement(r.Suspense,{fallback:o.a.createElement(U.a,null)},o.a.createElement(re.Provider,{value:n},o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",component:s}),o.a.createElement(i.b,{exact:!0,path:"/register",render:function(e){return o.a.createElement(te,Object.assign({},e,{setUser:l,user:n}))}}),o.a.createElement(i.b,{exact:!0,path:"/login",render:function(e){return o.a.createElement(ne,Object.assign({},e,{setUser:l,user:n}))}}),o.a.createElement(V,{exact:!0,path:"/feed",component:Z,userID:n.id}),o.a.createElement(V,{exact:!0,path:"/events/create",component:W,userID:n.id}),o.a.createElement(V,{exact:!0,path:"/settings",component:X,userID:n.id}),o.a.createElement(i.b,{exact:!0,path:"/events/:id",render:function(e){var t=e.match;return o.a.createElement($,{eventID:t.params.id,userID:n.id})}}),o.a.createElement(i.b,{exact:!0,path:"/users/:id",render:function(e){var t=e.match;return o.a.createElement(ee,{userID:t.params.id,user:n})}}),o.a.createElement(i.b,{exact:!0,path:"*",render:function(){return o.a.createElement(Y,{errorMessage:"Ooops... 404 NOT FOUND"})}})))))}},72:function(e,t,n){"use strict";var a=n(23),r=n(14),o=n(0),c=n.n(o),i=n(13),l=n(53),s=n(56),u=n(47);n(112);t.a=c.a.memo((function(e){var t=e.target,n=e.loadingMarginTop,m=Object(o.useContext)(s.a),d=Object(o.useState)([]),p=Object(r.a)(d,2),h=p[0],f=p[1],b=Object(o.useState)(!0),g=Object(r.a)(b,2),E=g[0],v=g[1],y=Object(o.useState)(""),j=Object(r.a)(y,2),O=j[0],C=j[1];Object(o.useEffect)((function(){fetch("http://localhost:8000/api/".concat(t.name,"/comments/").concat(t.id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){v(!1),f(e)}))}),[t]);return E?c.a.createElement(u.a,{backgroundColor:"transparent",containerHeight:"100%",spinnerSize:"50px",marginTop:n}):c.a.createElement("div",{className:"comments"},c.a.createElement("h4",null,"Comments"),c.a.createElement("div",{className:"comments_block"},h.length<1?c.a.createElement("h1",{className:"no-comments"},"No comments found"):c.a.createElement(o.Fragment,null,h.map((function(e,t){return c.a.createElement("div",{className:"comment",key:t},c.a.createElement("div",{className:"comment-content"},c.a.createElement(i.b,{to:"/users/".concat(e.senderID)},c.a.createElement("h5",null,e.senderName)),c.a.createElement("p",null,e.content)))})))),m.id?c.a.createElement(o.Fragment,null,c.a.createElement(l.a,{placeholder:"Write your comment...",handleChange:function(e){return C(e.target.value)}}),c.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"6px"}},c.a.createElement("button",{className:"comment-submit",onClick:function(){O.length<1||fetch("http://localhost:8000/api/".concat(t.name,"/comments/"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:O,senderName:m.username,senderID:m.id,targetID:t.id})}).then((function(e){return e.json()})).then((function(e){var t=Object(a.a)(h);t.unshift({senderName:m.username,content:O,senderID:m.id}),f(t)}))},disabled:O.length>265},"Send"),O.length>265?c.a.createElement("div",{className:"error",style:{marginLeft:"10px"}},"Max. comment length: 265."):null)):null)}))},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28);n(113);t.default=function(e){var t=e.errorMessage,n=Object(o.g)();return r.a.createElement("div",{className:"not_found_container"},r.a.createElement("span",{className:"not_found_error"},t),r.a.createElement("span",{onClick:function(){return n.goBack()},className:"not_found_go_home"},"Go back"))}},91:function(e,t,n){},97:function(e,t,n){e.exports=n(115)}},[[97,1,2]]]);
//# sourceMappingURL=main.09084d68.chunk.js.map