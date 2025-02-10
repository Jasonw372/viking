import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{B as n}from"./button-DeVFMoh8.js";import{I as b}from"./index-bZBKYLb1.js";import{S as ae}from"./space-n1K81tqG.js";import"./index-D2MAbzvX.js";import"./index-DIbT3vot.js";import"./index-DEBVq0NN.js";const ye={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{}},tags:["autodocs"],argTypes:{disabled:{description:"是否禁用",control:"boolean",defaultValue:!1},btnType:{description:"按钮类型",control:{type:"select",options:["default","primary","info","success","danger","warning","link"]},defaultValue:"default"},size:{description:"按钮尺寸",control:{type:"select",options:["lg","sm"]}},circle:{description:"是否为圆形按钮",control:"boolean",defaultValue:!1},plain:{description:"是否为朴素样式",control:"boolean",defaultValue:!1},href:{description:"链接地址（当btnType为link时使用）",control:"text"},children:{description:"按钮内容",control:"text"}}},r={name:"默认按钮",args:{children:"默认按钮"}},t={name:"主要按钮",args:{btnType:"primary",children:"主要按钮"}},s={name:"信息按钮",args:{btnType:"info",children:"信息按钮"}},a={name:"成功按钮",args:{btnType:"success",children:"成功按钮"}},i={name:"警告按钮",args:{btnType:"warning",children:"警告按钮"}},c={name:"危险按钮",args:{btnType:"danger",children:"危险按钮"}},o={name:"链接按钮",args:{btnType:"link",children:"链接按钮",href:"#"}},l={name:"大号按钮",args:{size:"lg",children:"大号按钮"}},p={name:"小号按钮",args:{size:"sm",children:"小号按钮"}},d={name:"禁用按钮",args:{disabled:!0,children:"禁用按钮"}},u={name:"圆角按钮",args:{circle:!0,children:"圆角按钮"}},m={name:"朴素按钮",args:{plain:!0,btnType:"primary",children:"朴素按钮"}},y={name:"自定义按钮",args:{children:"自定义按钮"},render:ie=>e.jsx(n,{children:e.jsxs(ae,{size:"sm",children:[e.jsx(b,{icon:"spinner",spin:!0}),"加载中"]})})},g={name:"按钮展示页",render:ie=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{children:"默认按钮"}),e.jsx(n,{btnType:"primary",children:"主要按钮"}),e.jsx(n,{btnType:"info",children:"信息按钮"}),e.jsx(n,{btnType:"success",children:"成功按钮"}),e.jsx(n,{btnType:"warning",children:"警告按钮"}),e.jsx(n,{btnType:"danger",children:"危险按钮"}),e.jsx(n,{btnType:"link",href:"#",children:"链接按钮"})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{plain:!0,children:"朴素默认"}),e.jsx(n,{plain:!0,btnType:"primary",children:"朴素主要"}),e.jsx(n,{plain:!0,btnType:"info",children:"朴素信息"}),e.jsx(n,{plain:!0,btnType:"success",children:"朴素成功"}),e.jsx(n,{plain:!0,btnType:"warning",children:"朴素警告"}),e.jsx(n,{plain:!0,btnType:"danger",children:"朴素危险"})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{circle:!0,children:"Default"}),e.jsx(n,{circle:!0,btnType:"primary",children:"Primary"}),e.jsx(n,{circle:!0,btnType:"info",children:"Info"}),e.jsx(n,{circle:!0,btnType:"success",children:"Success"}),e.jsx(n,{circle:!0,btnType:"warning",children:"Warning"}),e.jsx(n,{circle:!0,btnType:"danger",children:"Danger"})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{disabled:!0,children:"禁用按钮"}),e.jsx(n,{disabled:!0,btnType:"primary",children:"禁用主要"}),e.jsx(n,{disabled:!0,btnType:"info",children:"禁用信息"}),e.jsx(n,{disabled:!0,btnType:"success",children:"禁用成功"}),e.jsx(n,{disabled:!0,btnType:"warning",children:"禁用警告"}),e.jsx(n,{disabled:!0,btnType:"danger",children:"禁用危险"}),e.jsx(n,{disabled:!0,btnType:"link",href:"#",children:"禁用链接"})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{size:"lg",btnType:"primary",children:"大号按钮"}),e.jsx(n,{btnType:"primary",children:"默认按钮"}),e.jsx(n,{size:"sm",btnType:"primary",children:"小号按钮"})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(n,{size:"lg",children:e.jsx(b,{icon:"coffee"})}),e.jsx(n,{children:e.jsxs(ae,{size:"sm",children:[e.jsx(b,{icon:"spinner",spin:!0}),"加载中"]})})]})]}),parameters:{controls:{disable:!0},actions:{disable:!0},docs:{source:{type:""}}}};var x,h,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '默认按钮',
  args: {
    children: '默认按钮'
  }
}`,...(B=(h=r.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var T,f,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '主要按钮',
  args: {
    btnType: 'primary',
    children: '主要按钮'
  }
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,I,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '信息按钮',
  args: {
    btnType: 'info',
    children: '信息按钮'
  }
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var z,D,w;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '成功按钮',
  args: {
    btnType: 'success',
    children: '成功按钮'
  }
}`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,P,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '警告按钮',
  args: {
    btnType: 'warning',
    children: '警告按钮'
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var C,L,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '危险按钮',
  args: {
    btnType: 'danger',
    children: '危险按钮'
  }
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,E,O;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '链接按钮',
  args: {
    btnType: 'link',
    children: '链接按钮',
    href: '#'
  }
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,q,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '大号按钮',
  args: {
    size: 'lg',
    children: '大号按钮'
  }
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '小号按钮',
  args: {
    size: 'sm',
    children: '小号按钮'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '禁用按钮',
  args: {
    disabled: true,
    children: '禁用按钮'
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '圆角按钮',
  args: {
    circle: true,
    children: '圆角按钮'
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '朴素按钮',
  args: {
    plain: true,
    btnType: 'primary',
    children: '朴素按钮'
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '自定义按钮',
  args: {
    children: '自定义按钮'
  },
  render: _args => <Button>
      <Space size="sm">
        <Icon icon="spinner" spin />
        加载中
      </Space>
    </Button>
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '按钮展示页',
  render: _args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      {/* 基础按钮组 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button>默认按钮</Button>
        <Button btnType="primary">主要按钮</Button>
        <Button btnType="info">信息按钮</Button>
        <Button btnType="success">成功按钮</Button>
        <Button btnType="warning">警告按钮</Button>
        <Button btnType="danger">危险按钮</Button>
        <Button btnType="link" href="#">
          链接按钮
        </Button>
      </div>

      {/* 朴素按钮组 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button plain>朴素默认</Button>
        <Button plain btnType="primary">
          朴素主要
        </Button>
        <Button plain btnType="info">
          朴素信息
        </Button>
        <Button plain btnType="success">
          朴素成功
        </Button>
        <Button plain btnType="warning">
          朴素警告
        </Button>
        <Button plain btnType="danger">
          朴素危险
        </Button>
      </div>

      {/* 圆角按钮组 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button circle>Default</Button>
        <Button circle btnType="primary">
          Primary
        </Button>
        <Button circle btnType="info">
          Info
        </Button>
        <Button circle btnType="success">
          Success
        </Button>
        <Button circle btnType="warning">
          Warning
        </Button>
        <Button circle btnType="danger">
          Danger
        </Button>
      </div>

      {/* 禁用状态 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button disabled>禁用按钮</Button>
        <Button disabled btnType="primary">
          禁用主要
        </Button>
        <Button disabled btnType="info">
          禁用信息
        </Button>
        <Button disabled btnType="success">
          禁用成功
        </Button>
        <Button disabled btnType="warning">
          禁用警告
        </Button>
        <Button disabled btnType="danger">
          禁用危险
        </Button>
        <Button disabled btnType="link" href="#">
          禁用链接
        </Button>
      </div>

      {/* 不同尺寸 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button size="lg" btnType="primary">
          大号按钮
        </Button>
        <Button btnType="primary">默认按钮</Button>
        <Button size="sm" btnType="primary">
          小号按钮
        </Button>
      </div>

      {/* 自定义按钮 */}
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button size="lg">
          <Icon icon="coffee"></Icon>
        </Button>
        <Button>
          <Space size="sm">
            <Icon icon="spinner" spin />
            加载中
          </Space>
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    docs: {
      source: {
        type: ''
      }
    }
  }
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ge=["Default","Primary","Info","Success","Warning","Danger","Link","Large","Small","Disabled","Circle","Plain","CustomButton","ButtonDisplay"];export{g as ButtonDisplay,u as Circle,y as CustomButton,c as Danger,r as Default,d as Disabled,s as Info,l as Large,o as Link,m as Plain,t as Primary,p as Small,a as Success,i as Warning,ge as __namedExportsOrder,ye as default};
