import{R as L,r as a}from"./jsx-runtime.489a0d3a.js";import{a3 as Q,C as U,t as X,a4 as Y,c as P}from"./EllipsisOutlined.5d421715.js";const j=L.createContext({latestIndex:0}),Z=j.Provider,ee=e=>{let{className:r,index:n,children:t,split:l,style:s}=e;const{latestIndex:p}=a.useContext(j);return t==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:r,style:s},t),n<p&&l&&a.createElement("span",{className:`${r}-split`},l))},te=ee;function w(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}var se=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n};const le=a.forwardRef((e,r)=>{var n,t;const{getPrefixCls:l,space:s,direction:p}=a.useContext(U),{size:c=(s==null?void 0:s.size)||"small",align:N,className:I,rootClassName:V,children:k,direction:S="horizontal",prefixCls:A,split:R,style:G,wrap:H=!1,classNames:f,styles:v}=e,T=se(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[d,m]=Array.isArray(c)?c:[c,c],b=w(m),$=w(d),F=E(m),M=E(d),z=X(k,{keepEmpty:!0}),O=N===void 0&&S==="horizontal"?"center":N,o=l("space",A),[W,q]=Y(o),B=P(o,s==null?void 0:s.className,q,`${o}-${S}`,{[`${o}-rtl`]:p==="rtl",[`${o}-align-${O}`]:O,[`${o}-gap-row-${m}`]:b,[`${o}-gap-col-${d}`]:$},I,V),h=P(`${o}-item`,(n=f==null?void 0:f.item)!==null&&n!==void 0?n:(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.item);let y=0;const D=z.map((i,g)=>{var x,C;i!=null&&(y=g);const K=i&&i.key||`${h}-${g}`;return a.createElement(te,{className:h,key:K,index:g,split:R,style:(x=v==null?void 0:v.item)!==null&&x!==void 0?x:(C=s==null?void 0:s.styles)===null||C===void 0?void 0:C.item},i)}),J=a.useMemo(()=>({latestIndex:y}),[y]);if(z.length===0)return null;const u={};return H&&(u.flexWrap="wrap"),!$&&M&&(u.columnGap=d),!b&&F&&(u.rowGap=m),W(a.createElement("div",Object.assign({ref:r,className:B,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),G)},T),a.createElement(Z,{value:J},D)))}),_=le;_.Compact=Q;const oe=_;export{oe as S};
