import{S}from"./SectionWithDecor-c59dae3e.js";import{_ as h,o as g,c as V,a as _,t as x,b as y,n as F,w as N,d as w,r as n,e as I,f as s,g as c,F as U,u as T,T as C,h as u}from"./index-9d60598c.js";const b={class:"form__label",htmlFor:"surname"},A=["placeholder","type","value"],$=!1,k={__name:"FormTextArea",props:{modelValue:String,label:String,value:String,placeholder:String,typeInput:{type:String,default:"text"}},emits:["update:modelValue"],setup(l){return(t,e)=>(g(),V("label",b,[_(x(l.label)+" ",1),y("textarea",{class:F([{form__field_error:$},"form__field"]),placeholder:l.placeholder,type:l.typeInput,value:l.modelValue,onInput:e[0]||(e[0]=r=>t.$emit("update:modelValue",r.target.value)),onKeyup:e[1]||(e[1]=N(r=>t.$emit("input-enter"),["enter"]))},`\r
            `,42,A)]))}},B=h(k,[["__scopeId","data-v-dd7d74d8"]]);let E=(l=21)=>crypto.getRandomValues(new Uint8Array(l)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");const f="message",z=w(f,()=>{const l=n(JSON.parse(localStorage.getItem(f)||"[]")),t=e=>l.value.push({id:E(),...e});return I(l,e=>{localStorage.setItem(f,JSON.stringify(e))},{deep:!0}),{add:t}}),M={__name:"ContactView",setup(l){const t=z(),{add:e}=t,r=n(""),d=n(""),m=n(""),i=n(""),p=n(""),v={name:r,lastName:d,email:m,phone:i,text:p};return(D,a)=>(g(),V("main",null,[s(S,{title:"Send us a message"},{default:c(()=>[s(U,{textConfirm:"submit",onSubmit:()=>T(e)(v)},{default:c(()=>[s(C,{class:"text_large-size text_large-height"},{default:c(()=>[_(" Feel free to fill out the form and reach to us. We will get back to you shortly. ")]),_:1}),s(u,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=o=>r.value=o),placeholder:"First Name"},null,8,["modelValue"]),s(u,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=o=>d.value=o),placeholder:"Last Name"},null,8,["modelValue"]),s(u,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=o=>m.value=o),placeholder:"Email",type:"email"},null,8,["modelValue"]),s(u,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=o=>i.value=o),placeholder:"Phone",type:"phone"},null,8,["modelValue"]),s(B,{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=o=>p.value=o),placeholder:"Message"},null,8,["modelValue"])]),_:1},8,["onSubmit"])]),_:1})]))}};export{M as default};
