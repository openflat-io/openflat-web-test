import{cw as u,bm as h,k as c}from"./index.43c4ffc0.js";function m(){const{search:a}=u(),t=h(),s=c.exports.useMemo(()=>new URLSearchParams(a),[a]),n=c.exports.useCallback(o=>{for(const e of Object.keys(o)){const r=o[e];r===void 0?s.delete(e):s.set(e,r)}t.push({search:s.toString()})},[t,s]);return[s,n]}export{m as u};
//# sourceMappingURL=hooks.a08a5162.js.map
