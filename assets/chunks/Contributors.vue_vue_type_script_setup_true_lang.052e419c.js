import{d as f,j as y,o as s,c as i,u as k,h as v,k as t,t as p,l as m,F as $,D as x}from"./framework.27021b64.js";const D={id:"gitalk-container"},H=f({__name:"Gitalk",setup(g){return y(()=>{let n=decodeURI(window.location.pathname);n.length>48&&(n=n.slice(-48));const r={enable:!0,clientID:"570a9490e028ba1dc3c8",clientSecret:"f8bd88ce84a1cbc311a62ff13026c6e04b643874",repo:"gitalk-comments",owner:"dapandocs",admin:["dapandocs"],githubID:"dapandocs",id:n,language:"zh-CN",distractionFreeMode:!0};try{new Gitalk(r).render("gitalk-container")}catch{console.log("gitalk render fail.")}}),(n,r)=>(s(),i("div",D))}});const w={border:"1 solid [var(--vp-c-border)] opacity-50 rounded-4",p:"y-24 x-12",m:"t-24",relative:"",break:"words"},A=t("div",{i:"fa6-solid-copyright",absolute:"",top:"12",right:"16"},null,-1),C=t("span",{font:"bold"},"作 者：",-1),G=["href"],N={m:"t-8"},B=t("span",{font:"bold"},"链 接：",-1),F=["href"],b="DapanDocs",V=f({__name:"CopyRight",setup(g){var c,u;const{frontmatter:n}=k(),r=v(b);(c=n.value)!=null&&c.author&&(r.value=(u=n.value)==null?void 0:u.author);const a=location.href;function _(o){return o===b?"dapan":o}function l(o){return`https://github.com/${o}`}return(o,e)=>(s(),i("div",w,[A,t("div",null,[C,t("span",null,[t("a",{href:l(r.value),rel:"noreferrer",target:"_blank"},p(_(r.value)),9,G)])]),t("div",N,[B,t("span",null,[t("a",{href:m(a),rel:"noreferrer",target:"_blank"},p(m(a)),9,F)])])]))}}),I={key:0,display:"flex",gap:"24"},L=["href"],E=["src"],M={key:1,display:"flex",gap:"12",items:"center"},R=["href"],S=["src"],U=t("span",null,"dapan",-1),h="DapanDocs",q=f({__name:"Contributors",setup(g){var o;const{frontmatter:n}=k(),r=[(o=n.value)==null?void 0:o.author,...n.value.contributors||[]].filter(e=>e),a=v(r);function _(e){return e===h?"dapan":e}function l(e){return`https://proxy.skillgroup.cn/proxy/github.com/${e}.png`}function c(e){return`https://github.com/${e}`}function u(e){return Array.isArray(e)&&e.length}return(e,j)=>u(a.value)?(s(),i("div",I,[(s(!0),i($,null,x(a.value,d=>(s(),i("div",{key:d,display:"flex",gap:"12",items:"center"},[t("a",{href:c(d),rel:"noreferrer",target:"_blank"},[t("img",{w:"42",h:"42",border:"rounded-full",src:l(d)},null,8,E)],8,L),t("span",null,p(_(d)),1)]))),128))])):(s(),i("div",M,[t("a",{href:c(h),rel:"noreferrer",target:"_blank"},[t("img",{w:"42",h:"42",border:"rounded-full",src:l(h)},null,8,S)],8,R),U]))}});export{q as _,V as a,H as b};