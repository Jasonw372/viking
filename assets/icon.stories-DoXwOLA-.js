import{j as e}from"./jsx-runtime-WdPq8kIh.js";import{I as s}from"./index-vqDB34zl.js";import{T as g}from"./index-Bi1BGtNb.js";import{F as r}from"./flex-1wtX-_Nn.js";import"./index-BpYrhlGc.js";import"./index-yDvlI-tm.js";import"./button-CrNKZzB6.js";const _={title:"Components/Icon",component:s,parameters:{layout:"centered",docs:{description:{component:"Icon组件，优化展示效果"}},controls:{disable:!0},actions:{disable:!0}},tags:["autodocs"],argTypes:{}},c={name:"默认图标",render:i=>e.jsxs(r,{gap:20,align:"center",children:[e.jsx(s,{icon:"check",size:"2x"}),e.jsx(s,{icon:"times",size:"2x"}),e.jsx(s,{icon:"anchor",size:"2x"}),e.jsx(s,{icon:"trash",size:"2x"}),e.jsxs(g,{size:"lg",btnType:"primary",children:[e.jsx(s,{icon:"check",style:{paddingRight:5}})," ","check"," "]})]})},n={name:"主题图标",render:i=>e.jsxs(r,{gap:20,children:[e.jsx(s,{icon:"coffee",size:"2x",theme:"primary"}),e.jsx(s,{icon:"info-circle",size:"2x",theme:"info"}),e.jsx(s,{icon:"check",size:"2x",theme:"success"}),e.jsx(s,{icon:"exclamation-circle",size:"2x",theme:"warning"}),e.jsx(s,{icon:"times",size:"2x",theme:"danger"}),e.jsx(s,{icon:"question-circle",size:"2x",theme:"secondary"}),e.jsx(s,{icon:"moon",size:"2x",theme:"dark"})]})},o={name:"自定义图标",render:i=>e.jsxs(r,{gap:20,vertical:!0,children:[e.jsx(s,{icon:"spinner",size:"2x",theme:"primary",spin:!0}),e.jsx(s,{icon:"spinner",size:"2x",theme:"success",pulse:!0})]})};var t,a,m;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '默认图标',
  render: _args => <Flex gap={20} align="center">
      <Icon icon="check" size="2x" />
      <Icon icon="times" size="2x" />
      <Icon icon="anchor" size="2x" />
      <Icon icon="trash" size="2x" />
      <Button size="lg" btnType="primary">
        <Icon icon="check" style={{
        paddingRight: 5
      }} />{' '}
        check{' '}
      </Button>
    </Flex>
}`,...(m=(a=c.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var x,p,l;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '主题图标',
  render: _args => <Flex gap={20}>
      <Icon icon="coffee" size="2x" theme="primary" />
      <Icon icon="info-circle" size="2x" theme="info" />
      <Icon icon="check" size="2x" theme="success" />
      <Icon icon="exclamation-circle" size="2x" theme="warning" />
      <Icon icon="times" size="2x" theme="danger" />
      <Icon icon="question-circle" size="2x" theme="secondary" />
      <Icon icon="moon" size="2x" theme="dark" />
    </Flex>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '自定义图标',
  render: _args => <Flex gap={20} vertical>
      <Icon icon="spinner" size="2x" theme="primary" spin />
      <Icon icon="spinner" size="2x" theme="success" pulse />
    </Flex>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const T=["DefaultIcons","ThemeIcons","CustomIcons"];export{o as CustomIcons,c as DefaultIcons,n as ThemeIcons,T as __namedExportsOrder,_ as default};
