import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{T as e}from"./tooltip-zFGY3gFz.js";import{T as o}from"./index-BH1eLiMc.js";import{F as p}from"./flex-E4Sj-Pba.js";import"./index-D2MAbzvX.js";import"./index-DEBVq0NN.js";import"./setPrototypeOf-B3dupTve.js";import"./index-BOhM_sJI.js";import"./index-CTOC-uzv.js";import"./index-DIbT3vot.js";import"./button-DeVFMoh8.js";const G={title:"Components/Tooltip",component:e,parameters:{layout:"centered"},tags:["autodocs"]},r={name:"基本提示",args:{title:"这是一个提示文本",children:t.jsx(o,{children:"鼠标悬停查看提示"})}},l={name:"不同位置的提示",render:()=>t.jsxs(p,{direction:"column",gap:50,children:[t.jsxs(p,{gap:30,children:[t.jsx(e,{placement:"top",title:"顶部提示",children:t.jsx(o,{children:"上"})}),t.jsx(e,{placement:"bottom",title:"底部提示",children:t.jsx(o,{children:"下"})})]}),t.jsxs(p,{gap:30,children:[t.jsx(e,{placement:"left",title:"左侧提示",children:t.jsx(o,{children:"左"})}),t.jsx(e,{placement:"right",title:"右侧提示",children:t.jsx(o,{children:"右"})})]})]})},i={name:"不同触发方式的提示",render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(e,{trigger:"hover",title:"悬停触发",children:t.jsx(o,{children:"悬停"})}),t.jsx(e,{trigger:"click",title:"点击触发",children:t.jsx(o,{children:"点击"})}),t.jsx(e,{trigger:"focus",title:"聚焦触发",children:t.jsx(o,{children:"聚焦"})})]})},n={name:"自定义样式的提示",render:()=>t.jsx(e,{title:"自定义样式",style:{backgroundColor:"red",color:"yellow",border:"1px solid #f50",borderRadius:"4px"},placement:"top",children:t.jsx(o,{children:"自定义样式"})})},s={name:"长文本提示",render:()=>t.jsx(e,{title:"这是一段很长的提示文本，用来测试文本换行的情况。这是一段很长的提示文本，用来测试文本换行的情况。",placement:"top",children:t.jsx(o,{children:"长文本"})})},c={name:"自定义颜色的提示",render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(e,{title:"默认颜色",placement:"top",children:t.jsx(o,{children:"默认"})}),t.jsx(e,{title:"自定义红色",placement:"top",color:"#ff4d4f",children:t.jsx(o,{children:"红色"})}),t.jsx(e,{title:"自定义蓝色",placement:"top",color:"#1890ff",children:t.jsx(o,{children:"蓝色"})}),t.jsx(e,{title:"自定义绿色",placement:"top",color:"#52c41a",children:t.jsx(o,{children:"绿色"})})]})};var a,d,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '基本提示',
  args: {
    title: '这是一个提示文本',
    children: <Button>鼠标悬停查看提示</Button>
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,x,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '不同位置的提示',
  render: () => <Flex direction="column" gap={50}>
      <Flex gap={30}>
        <Tooltip placement="top" title="顶部提示">
          <Button>上</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="底部提示">
          <Button>下</Button>
        </Tooltip>
      </Flex>
      <Flex gap={30}>
        <Tooltip placement="left" title="左侧提示">
          <Button>左</Button>
        </Tooltip>
        <Tooltip placement="right" title="右侧提示">
          <Button>右</Button>
        </Tooltip>
      </Flex>
    </Flex>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,T,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '不同触发方式的提示',
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
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var B,f,y;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '自定义样式的提示',
  render: () => <Tooltip title="自定义样式" style={{
    backgroundColor: 'red',
    color: 'yellow',
    border: '1px solid #f50',
    borderRadius: '4px'
  }} placement="top">
      <Button>自定义样式</Button>
    </Tooltip>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,b,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '长文本提示',
  render: () => <Tooltip title="这是一段很长的提示文本，用来测试文本换行的情况。这是一段很长的提示文本，用来测试文本换行的情况。" placement="top">
      <Button>长文本</Button>
    </Tooltip>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var F,S,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '自定义颜色的提示',
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
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const H=["Basic","Placement","TriggerTypes","CustomStyle","LongContent","CustomColors"];export{r as Basic,c as CustomColors,n as CustomStyle,s as LongContent,l as Placement,i as TriggerTypes,H as __namedExportsOrder,G as default};
