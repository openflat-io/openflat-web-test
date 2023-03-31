import{v as L,bp as U,b6 as c,b8 as x,k as w,aZ as b,m as R,q as i,aw as _,bq as T}from"./index.43c4ffc0.js";import{s as C,e as l,l as f}from"./routes.73fc4946.js";import{u as I}from"./lifecycle.32153b61.js";const $=(n,e)=>{let t=NaN;const o=L();return(async()=>{try{await C(o)}catch(s){l(s);return}e?e.openExternalBrowser(g(o,c.GITHUB_CALLBACK)):window.open(g(o,c.GITHUB_CALLBACK));const a=async()=>{try{const s=await f(o);if(!s.name){t=window.setTimeout(a,2e3);return}n(s)}catch(s){l(s)}};a()})(),()=>{window.clearTimeout(t)}};function g(n,e){const t=encodeURIComponent(e);return`https://github.com/login/oauth/authorize?client_id=${U.CLIENT_ID}&redirect_uri=${t}&state=${n}`}const v=x(function({setLoginResult:e}){const[t,o]=w.exports.useState(""),a=I(),s=b();return w.exports.useEffect(()=>{const r=L(),u={};o(y(r));const d=(p,m)=>{p.current=window.setTimeout(async()=>{const h=await a(f(m));h.userUUID===""?d(p,m):e(h)},2e3)};return a(C(r)).then(d.bind(null,u,r)).catch(l),()=>{window.clearTimeout(u.current)}},[]),R("div",{className:"wechat-login-container",children:[i("iframe",{className:"wechat-login-iframe",frameBorder:"0",scrolling:"no",src:t,title:"wechat"}),i("div",{className:"wechat-login-spin",children:i(_,{spin:!0})}),i("span",{className:"wechat-login-text",children:s("wechat-login-tips")})]})});function y(n,e=c.WECHAT_CALLBACK){const t=encodeURIComponent(`${e}`),o=`
        .impowerBox .qrcode {
            width: 238px;
            margin: 0;
        }
        .impowerBox .title {
            display: none;
        }
        .status_icon {
            display: none;
        }
        .impowerBox .status {
            text-align: center;
        }
        .impowerBox .info {
            display: none;
        }
    `;return`https://open.weixin.qq.com/connect/qrconnect?appid=${T.APP_ID}&scope=snsapi_login&redirect_uri=${t}&state=${n}&login_type=jssdk&self_redirect=true&style=black&href=data:text/css;base64,${window.btoa(o)}`}export{v as W,y as a,g as b,$ as g};
//# sourceMappingURL=WeChatLogin.40ae371f.js.map
