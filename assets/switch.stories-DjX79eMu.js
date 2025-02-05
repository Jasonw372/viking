import{j as a}from"./jsx-runtime-WdPq8kIh.js";import{r as w,R}from"./index-BpYrhlGc.js";import{c as se}from"./index-yDvlI-tm.js";const u=w.forwardRef((p,h)=>{const{className:s,style:Q,checked:f,defaultChecked:U=!1,disabled:g=!1,size:S="default",loading:k=!1,onChange:C,checkedChildren:V,unCheckedChildren:X,autoFocus:Y=!1}=p,b=w.useRef(null),[y,Z]=R.useState(U),r=f!==void 0?f:y;R.useImperativeHandle(h,()=>({focus:()=>{var e;(e=b.current)==null||e.focus()},blur:()=>{var e;(e=b.current)==null||e.blur()}}));const ee=()=>{g||k||(f===void 0&&Z(!y),C==null||C(!r))},ae=se("switch",s,{"switch-checked":r,"switch-disabled":g,"switch-loading":k,[`switch-${S}`]:S!=="default"});return a.jsxs("button",{ref:b,autoFocus:Y,type:"button",role:"switch","aria-checked":r,disabled:g,className:ae,style:Q,onClick:ee,children:[a.jsx("div",{className:"switch-handle",children:k&&a.jsx("div",{className:"switch-loading-icon"})}),a.jsx("div",{className:"switch-inner",children:r?V:X})]})});u.displayName="Switch";u.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Switch",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'default'"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},checkedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},unCheckedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const ce={title:"Components/Switch",component:u,parameters:{layout:"centered",docs:{description:{component:"开关组件，用于切换状态。"}}},tags:["autodocs"]},n={name:"默认开关",args:{defaultChecked:!1}},t={name:"默认选中开关",args:{defaultChecked:!0}},c={name:"已禁用开关",args:{disabled:!0}},o={name:"加载中的开关",args:{loading:!0}},d={name:"小号开关",args:{size:"sm"}},i={name:"大号开关",args:{size:"lg"}},l={name:"带有自定义文案",args:{checkedChildren:"开",unCheckedChildren:"关"}},m={name:"受控组件",render:()=>{const[p,h]=w.useState(!1);return a.jsx(u,{checked:p,onChange:s=>{alert(`switch to:${s}`),h(s)}})}};var N,q,v;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '默认开关',
  args: {
    defaultChecked: false
  }
}`,...(v=(q=n.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var T,x,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '默认选中开关',
  args: {
    defaultChecked: true
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var z,D,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '已禁用开关',
  args: {
    disabled: true
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var _,E,I;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '加载中的开关',
  args: {
    loading: true
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var $,F,W;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '小号开关',
  args: {
    size: 'sm'
  }
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,O,P;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '大号开关',
  args: {
    size: 'lg'
  }
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var A,B,G;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '带有自定义文案',
  args: {
    checkedChildren: '开',
    unCheckedChildren: '关'
  }
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '受控组件',
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={checked => {
      alert(\`switch to:\${checked}\`);
      setChecked(checked);
    }} />;
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const oe=["Default","Checked","Disabled","Loading","Small","Large","WithChildren","Controled"];export{t as Checked,m as Controled,n as Default,c as Disabled,i as Large,o as Loading,d as Small,l as WithChildren,oe as __namedExportsOrder,ce as default};
