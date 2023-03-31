import{k as r}from"./index.43c4ffc0.js";function f(){const e=r.exports.useRef(!1);return r.exports.useEffect(()=>()=>{e.current=!0},[]),e}function a(){const e=f();function n(u,s){return new Promise(async(o,c)=>{try{const t=await u;e.current||o(t)}catch(t){e.current?s&&s(t):c(t)}})}return r.exports.useCallback(n,[e])}export{a as u};
//# sourceMappingURL=lifecycle.32153b61.js.map
