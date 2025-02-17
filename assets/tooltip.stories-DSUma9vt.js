import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{T as e}from"./tooltip-zFGY3gFz.js";import{T as o}from"./index-BH1eLiMc.js";import"./index-D2MAbzvX.js";import"./index-DEBVq0NN.js";import"./setPrototypeOf-B3dupTve.js";import"./index-BOhM_sJI.js";import"./index-CTOC-uzv.js";import"./index-DIbT3vot.js";import"./button-DeVFMoh8.js";const D={title:"Components/Tooltip",component:e,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"这是一个提示文本",children:t.jsx(o,{children:"鼠标悬停查看提示"})}},l={render:()=>t.jsxs("div",{style:{padding:"60px",display:"flex",gap:"20px"},children:[t.jsx(e,{placement:"top",title:"顶部提示",children:t.jsx(o,{children:"上"})}),t.jsx(e,{placement:"bottom",title:"底部提示",children:t.jsx(o,{children:"下"})}),t.jsx(e,{placement:"left",title:"左侧提示",children:t.jsx(o,{children:"左"})}),t.jsx(e,{placement:"right",title:"右侧提示",children:t.jsx(o,{children:"右"})})]})},i={render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(e,{trigger:"hover",title:"悬停触发",children:t.jsx(o,{children:"悬停"})}),t.jsx(e,{trigger:"click",title:"点击触发",children:t.jsx(o,{children:"点击"})}),t.jsx(e,{trigger:"focus",title:"聚焦触发",children:t.jsx(o,{children:"聚焦"})})]})},s={render:()=>t.jsx(e,{title:"自定义样式",style:{backgroundColor:"red",color:"yellow",border:"1px solid #f50",borderRadius:"4px"},placement:"top",children:t.jsx(o,{children:"自定义样式"})})},n={render:()=>t.jsx(e,{title:"这是一段很长的提示文本，用来测试文本换行的情况。这是一段很长的提示文本，用来测试文本换行的情况。",placement:"top",children:t.jsx(o,{children:"长文本"})})},p={render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(e,{title:"默认颜色",placement:"top",children:t.jsx(o,{children:"默认"})}),t.jsx(e,{title:"自定义红色",placement:"top",color:"#ff4d4f",children:t.jsx(o,{children:"红色"})}),t.jsx(e,{title:"自定义蓝色",placement:"top",color:"#1890ff",children:t.jsx(o,{children:"蓝色"})}),t.jsx(e,{title:"自定义绿色",placement:"top",color:"#52c41a",children:t.jsx(o,{children:"绿色"})})]})};var c,a,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '这是一个提示文本',
    children: <Button>鼠标悬停查看提示</Button>
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,u,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '60px',
    display: 'flex',
    gap: '20px'
  }}>
      <Tooltip placement="top" title="顶部提示">
        <Button>上</Button>
      </Tooltip>
      <Tooltip placement="bottom" title="底部提示">
        <Button>下</Button>
      </Tooltip>
      <Tooltip placement="left" title="左侧提示">
        <Button>左</Button>
      </Tooltip>
      <Tooltip placement="right" title="右侧提示">
        <Button>右</Button>
      </Tooltip>
    </div>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <Tooltip trigger="hover" title="悬停触发">
        <Button>悬停</Button>
      </Tooltip>
      <Tooltip trigger="click" title="点击触发">
        <Button>点击</Button>
      </Tooltip>
      <Tooltip trigger="focus" title="聚焦触发">
        <Button>聚焦</Button>
      </Tooltip>
    </div>
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var j,B,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Tooltip title="自定义样式" style={{
    backgroundColor: 'red',
    color: 'yellow',
    border: '1px solid #f50',
    borderRadius: '4px'
  }} placement="top">
      <Button>自定义样式</Button>
    </Tooltip>
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,v,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tooltip title="这是一段很长的提示文本，用来测试文本换行的情况。这是一段很长的提示文本，用来测试文本换行的情况。" placement="top">
      <Button>长文本</Button>
    </Tooltip>
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,S,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <Tooltip title="默认颜色" placement="top">
        <Button>默认</Button>
      </Tooltip>
      <Tooltip title="自定义红色" placement="top" color="#ff4d4f">
        <Button>红色</Button>
      </Tooltip>
      <Tooltip title="自定义蓝色" placement="top" color="#1890ff">
        <Button>蓝色</Button>
      </Tooltip>
      <Tooltip title="自定义绿色" placement="top" color="#52c41a">
        <Button>绿色</Button>
      </Tooltip>
    </div>
}`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const F=["Basic","Placement","TriggerTypes","CustomStyle","LongContent","CustomColors"];export{r as Basic,p as CustomColors,s as CustomStyle,n as LongContent,l as Placement,i as TriggerTypes,F as __namedExportsOrder,D as default};
