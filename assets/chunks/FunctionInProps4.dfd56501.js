import{r as o,j as t}from"./jsx-runtime.489a0d3a.js";import{C as s}from"./index.ce9b523d.js";import{B as c}from"./EllipsisOutlined.5d421715.js";function i(e){const{getText:n}=e;return console.log("ChildComponent render"),t.jsx("p",{children:n()})}const m=o.memo(i);function C(){const[e,n]=o.useState(0),r=o.useCallback(()=>"我是子组件，请在控制台查看打印结果！",[]);return t.jsxs(s,{title:"案例 demo",children:[t.jsxs("p",{children:["Current count: ",e]}),t.jsx(c,{onClick:()=>n(e+1),type:"primary",children:"Increment"}),t.jsx(m,{getText:r})]})}export{C as P};