(this["webpackJsonpfind-party"]=this["webpackJsonpfind-party"]||[]).push([[10],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://find-party-api.herokuapp.com"},129:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=(n(130),n(174)),o=n(65),l=n(169),s=Object(o.a)({overrides:{MuiTextField:{root:{backgroundColor:"#2ba296",borderRadius:"3px",width:"100%","& *":{color:"rgba(255,255,255, 0.8)",fontFamily:"Roboto Mono"},"& .MuiInputLabel-shrink":{color:"rgb(140, 245, 154)",fontFamily:"Roboto Mono"},"& .MuiFilledInput-underline:after":{borderColor:"rgb(140, 245, 154)"}}}}});t.a=i.a.memo((function(e){var t=e.placeholder,n=e.handleChange,a=e.inputType,o=void 0===a?"text":a,u=e.name,c=e.error,m=e.twoColumns,d=e.multiline,p=e.initialVal;return i.a.createElement("div",{style:m?{gridColumnStart:"1",gridColumnEnd:"3"}:void 0},i.a.createElement("div",{className:"error"},c||null),i.a.createElement(l.a,{theme:s},i.a.createElement(r.a,{value:p,label:t,variant:"filled",type:o,onChange:n,name:u,color:"primary",multiline:Boolean(d),rows:d})))}))},130:function(e,t,n){},132:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(129),o=n(137),l=n.n(o),s=n(138),u=n.n(s);n(133);t.a=function(e){var t=e.headTitle,n=e.formik,o=e.sections,s=e.submitButtonText,c=e.subTitle;return i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"form-box"},i.a.createElement("h1",null,t),c?i.a.createElement("p",null,c):null,i.a.createElement("form",{onSubmit:n.handleSubmit,className:"form"},n.values.error?i.a.createElement("div",{className:"form-error"},n.values.error):null,o.map((function(e,t){return i.a.createElement(a.Fragment,{key:t},e.title?i.a.createElement("h2",null,e.title):null,i.a.createElement("div",{className:"input-section"},e.fields.map((function(e){return i.a.createElement(r.a,{key:e.name,inputType:e.type,initialVal:n.values[e.name],placeholder:e.placeholder,handleChange:n.handleChange,name:e.name,error:n.errors[e.name]||null,twoColumns:e.twoColumns,multiline:e.multiline})}))))})),i.a.createElement("button",{className:"submit-button",type:"submit",disabled:n.isSubmitting},i.a.createElement("span",null,s),n.isSubmitting||n.isValidating?i.a.createElement(l.a,{style:{animation:"spin 1s linear infinite"}}):i.a.createElement(u.a,null)))))}},133:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(132),o=n(136),l=n(128),s=[{fields:[{placeholder:"Description",name:"description",twoColumns:!0,multiline:6}]}];t.default=function(e){var t=e.userID,n=Object(o.a)({initialValues:{description:""},validate:function(e){return function(e){var t={description:""};return e.description.length>265?t.description="Description length must be 265 or less characters":delete t.description,t}(e)},onSubmit:function(e,n){var a=e.description,i=n.setSubmitting;fetch(l.a+"/api/users/settings",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:t,description:a})}).then((function(e){return e.json()})).then((function(e){i(!1)}))}});return Object(a.useEffect)((function(){fetch(l.a+"/api/users/".concat(t),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.description;n.setValues({description:t})}))}),[t]),i.a.createElement(r.a,{headTitle:"Profile settings",sections:s,submitButtonText:"Apply",formik:n})}}}]);
//# sourceMappingURL=10.d009f90a.chunk.js.map