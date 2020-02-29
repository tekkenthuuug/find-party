(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[8],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="https://find-party-api.herokuapp.com"},129:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(130),a(174)),o=a(65),l=a(169),s=Object(o.a)({overrides:{MuiTextField:{root:{backgroundColor:"#2ba296",borderRadius:"3px",width:"100%","& *":{color:"rgba(255,255,255, 0.8)",fontFamily:"Roboto Mono"},"& .MuiInputLabel-shrink":{color:"rgb(140, 245, 154)",fontFamily:"Roboto Mono"},"& .MuiFilledInput-underline:after":{borderColor:"rgb(140, 245, 154)"}}}}});t.a=r.a.memo((function(e){var t=e.placeholder,a=e.handleChange,n=e.inputType,o=void 0===n?"text":n,u=e.name,c=e.error,m=e.twoColumns,d=e.multiline,p=e.initialVal;return r.a.createElement("div",{style:m?{gridColumnStart:"1",gridColumnEnd:"3"}:void 0},r.a.createElement("div",{className:"error"},c||null),r.a.createElement(l.a,{theme:s},r.a.createElement(i.a,{value:p,label:t,variant:"filled",type:o,onChange:a,name:u,color:"primary",multiline:Boolean(d),rows:d})))}))},130:function(e,t,a){},132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(129),o=a(137),l=a.n(o),s=a(138),u=a.n(s);a(133);t.a=function(e){var t=e.headTitle,a=e.formik,o=e.sections,s=e.submitButtonText,c=e.subTitle;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-box"},r.a.createElement("h1",null,t),c?r.a.createElement("p",null,c):null,r.a.createElement("form",{onSubmit:a.handleSubmit,className:"form"},a.values.error?r.a.createElement("div",{className:"form-error"},a.values.error):null,o.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},e.title?r.a.createElement("h2",null,e.title):null,r.a.createElement("div",{className:"input-section"},e.fields.map((function(e){return r.a.createElement(i.a,{key:e.name,inputType:e.type,initialVal:a.values[e.name],placeholder:e.placeholder,handleChange:a.handleChange,name:e.name,error:a.errors[e.name]||null,twoColumns:e.twoColumns,multiline:e.multiline})}))))})),r.a.createElement("button",{className:"submit-button",type:"submit",disabled:a.isSubmitting},r.a.createElement("span",null,s),a.isSubmitting||a.isValidating?r.a.createElement(l.a,{style:{animation:"spin 1s linear infinite"}}):r.a.createElement(u.a,null)))))}},133:function(e,t,a){},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(21);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"validateBase",(function(){return m}));var n=a(140),r=a(0),i=a.n(r),o=a(24),l=a(20),s=a(136),u=a(132),c=a(128),m=function(e){var t=e.username,a=e.password,n={username:"",password:""};return t?t.length<5?n.username="Length must be at least 5 characters":t.length>24?n.username="Length must be 24 characters or less":delete n.username:n.username="Required field",a?a.length<6?n.password="Length must be at least 6 characters":delete n.password:n.password="Required field",n},d=[{title:"Login information",fields:[{placeholder:"Username",name:"username"},{placeholder:"Password",name:"password",type:"password"}]},{title:"Location information",fields:[{placeholder:"Country",name:"country"},{placeholder:"City",name:"city"}]},{title:"Personal information",fields:[{placeholder:"First Name",name:"firstName"},{placeholder:"Last Name",name:"lastName"}]}];t.default=i.a.memo((function(e){var t=e.user,a=e.setUser,p=e.location,f=Object(s.a)({initialValues:{firstName:"",lastName:"",username:"",password:"",city:"",country:"",error:""},validate:function(e){return m(e)},onSubmit:function(e,t){var r=t.setSubmitting,i=t.setValues,o=e.username,l=e.country,s=e.city,u=e.password,m=e.firstName,d=e.lastName;fetch(c.a+"/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:u,country:l,city:s,firstName:m,lastName:d})}).then((function(e){return e.json()})).then((function(t){t.id?a({id:t.id,username:t.username}):t.error&&(r(!1),i(Object(n.a)({},e,{error:t.error.details})))}))}});return t.id?i.a.createElement(o.a,{to:{pathname:"/users/".concat(t.id),state:{from:p}}}):i.a.createElement(u.a,{formik:f,headTitle:"Join us now!",submitButtonText:"Register",subTitle:i.a.createElement(r.Fragment,null,"Already registered?"," ",i.a.createElement(l.b,{to:"/login"},i.a.createElement("span",null,"Sign in!"))),sections:d})}))}}]);
//# sourceMappingURL=8.8b3c4e85.chunk.js.map