import{b8 as y,cA as w,bm as k,k as s,db as P,dc as b,dd as l,q as m,cB as R,de as E,b2 as h,bc as x}from"./index.43c4ffc0.js";import{u as D,e as d}from"./routes.73fc4946.js";import{u as F}from"./lifecycle.32153b61.js";import{E as H}from"./index.1445c18d.js";import{u as L}from"./use-login-check.e01c4832.js";const V=y(function(){L();const{periodicUUID:o}=w(),c=k(),u=D(),a=F(),[p,r]=s.exports.useState(!1),[n,T]=s.exports.useState();if(s.exports.useEffect(()=>{a(P(o)).then(({periodic:e,rooms:t})=>{const i=new Date(t[0].beginTime),g=new Date(e.endTime);T({title:e.title,type:e.roomType,beginTime:i,endTime:new Date(t[0].endTime),isPeriodic:!0,region:e.region,periodic:e.rate===null||e.rate===void 0?{weeks:e.weeks,endType:"time",...b(i,e.weeks,g)}:{weeks:e.weeks,endType:"rate",rate:e.rate,endTime:l(i,e.weeks,e.rate)}})}).catch(e=>{console.error(e),d(e),c.goBack()})},[o]),!n)return m(R,{});return m(H,{initialValues:n,loading:p,type:"periodic",onSubmit:f});async function f(e){r(!0);try{await a(E({periodicUUID:o,beginTime:e.beginTime.valueOf(),endTime:e.endTime.valueOf(),title:e.title,type:e.type,periodic:e.periodic.endType==="rate"?{weeks:e.periodic.weeks,rate:e.periodic.rate}:{weeks:e.periodic.weeks,endTime:e.periodic.endTime.valueOf()}})),h.success("\u4FEE\u6539\u6210\u529F"),u(x.HomePage)}catch(t){console.error(t),d(t),r(!1)}}});export{V as ModifyPeriodicRoomPage,V as default};
//# sourceMappingURL=index.ce79cd5c.js.map
