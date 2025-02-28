import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as n}from"./flex-Cf0epuBD.js";import{T as t}from"./index-BT2t1l9q.js";import{S as d}from"./space-JIEV9_wK.js";import"./index-yBjzXJbu.js";import"./index-Dh8cFXwY.js";import"./index-DQRuViyn.js";import"./button-C-Ryr-Tt.js";const G={title:"Components/Flex",component:n,parameters:{layout:"centered",docs:{description:{component:"Flex布局组件，用于创建灵活的布局容器。"}},controls:{disable:!0},actions:{disable:!0}},tags:["autodocs"],argTypes:{direction:{description:"主轴方向",control:{type:"select",options:["row","column","row-reverse","column-reverse"]},defaultValue:"row"},justify:{description:"主轴对齐方式",control:{type:"select",options:["start","end","center","space-between","space-around","space-evenly"]},defaultValue:"start"},align:{description:"交叉轴对齐方式",control:{type:"select",options:["start","end","center","stretch","baseline"]},defaultValue:"start"},wrap:{description:"是否换行",control:"boolean",defaultValue:!1},gap:{description:"子元素间距",control:{type:"number",min:0,max:100,step:4},defaultValue:0},children:{description:"子元素内容",control:"text"}}},s={name:"基础Flex布局",args:{children:"基础Flex布局"},render:r=>e.jsxs(n,{...r,style:{width:"400px",height:"200px",border:"1px solid #ddd"},children:[e.jsx("div",{style:{padding:"16px",background:"#f0f0f0"},children:"Item 1"}),e.jsx("div",{style:{padding:"16px",background:"#e0e0e0"},children:"Item 2"}),e.jsx("div",{style:{padding:"16px",background:"#d0d0d0"},children:"Item 3"})]})},i={name:"不同方向",render:()=>e.jsxs(d,{direction:"vertical",size:"lg",children:[e.jsxs(n,{direction:"row",gap:8,children:[e.jsx(t,{children:"Row"}),e.jsx(t,{children:"Row"}),e.jsx(t,{children:"Row"})]}),e.jsxs(n,{direction:"column",gap:8,children:[e.jsx(t,{children:"Column"}),e.jsx(t,{children:"Column"}),e.jsx(t,{children:"Column"})]}),e.jsxs(n,{direction:"row-reverse",gap:8,children:[e.jsx(t,{children:"Row Reverse"}),e.jsx(t,{children:"Row Reverse"}),e.jsx(t,{children:"Row Reverse"})]}),e.jsxs(n,{direction:"column-reverse",gap:8,children:[e.jsx(t,{children:"Column Reverse"}),e.jsx(t,{children:"Column Reverse"}),e.jsx(t,{children:"Column Reverse"})]})]})},a={name:"主轴对齐",render:()=>e.jsx(d,{direction:"vertical",size:"lg",children:["start","end","center","space-between","space-around","space-evenly"].map(r=>e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:8},children:r}),e.jsxs(n,{justify:r,gap:8,style:{width:"400px",border:"1px solid #ddd",padding:8},children:[e.jsx(t,{children:"Button"}),e.jsx(t,{children:"Button"}),e.jsx(t,{children:"Button"})]})]},r))})},l={name:"交叉轴对齐",render:()=>e.jsx(d,{direction:"vertical",size:"lg",children:["start","end","center","stretch","baseline"].map(r=>e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:8},children:r}),e.jsxs(n,{align:r,gap:8,style:{height:"100px",border:"1px solid #ddd",padding:8},children:[e.jsx(t,{style:{height:r==="stretch"?"auto":"40px"},children:"Button"}),e.jsx(t,{style:{height:"60px"},children:"Button"}),e.jsx(t,{style:{height:"80px"},children:"Button"})]})]},r))})},c={name:"换行",render:()=>e.jsxs(d,{direction:"vertical",children:[e.jsx(n,{wrap:"wrap",gap:8,style:{width:"400px",border:"1px solid #ddd",padding:8},children:Array.from({length:10}).map((r,o)=>e.jsxs(t,{children:["Button ",o+1]},o))}),e.jsx(n,{wrap:"nowrap",gap:8,style:{width:"400px",border:"1px solid #ddd",padding:8},children:Array.from({length:10}).map((r,o)=>e.jsxs(t,{children:["Button ",o+1]},o))}),e.jsx(n,{wrap:"wrap-reverse",gap:8,style:{width:"400px",border:"1px solid #ddd",padding:8},children:Array.from({length:10}).map((r,o)=>e.jsxs(t,{children:["Button ",o+1]},o))})]})},p={name:"间距",render:()=>e.jsx(d,{direction:"vertical",size:"lg",children:[0,8,16,24,32].map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:8},children:["gap: ",r,"px"]}),e.jsxs(n,{gap:r,style:{border:"1px solid #ddd",padding:8},children:[e.jsx(t,{children:"Button"}),e.jsx(t,{children:"Button"}),e.jsx(t,{children:"Button"})]})]},r))})};var u,x,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '基础Flex布局',
  args: {
    children: '基础Flex布局'
  },
  render: args => <Flex {...args} style={{
    width: '400px',
    height: '200px',
    border: '1px solid #ddd'
  }}>
      <div style={{
      padding: '16px',
      background: '#f0f0f0'
    }}>Item 1</div>
      <div style={{
      padding: '16px',
      background: '#e0e0e0'
    }}>Item 2</div>
      <div style={{
      padding: '16px',
      background: '#d0d0d0'
    }}>Item 3</div>
    </Flex>
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,h,B;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '不同方向',
  render: () => <Space direction="vertical" size="lg">
      <Flex direction="row" gap={8}>
        <Button>Row</Button>
        <Button>Row</Button>
        <Button>Row</Button>
      </Flex>
      <Flex direction="column" gap={8}>
        <Button>Column</Button>
        <Button>Column</Button>
        <Button>Column</Button>
      </Flex>
      <Flex direction="row-reverse" gap={8}>
        <Button>Row Reverse</Button>
        <Button>Row Reverse</Button>
        <Button>Row Reverse</Button>
      </Flex>
      <Flex direction="column-reverse" gap={8}>
        <Button>Column Reverse</Button>
        <Button>Column Reverse</Button>
        <Button>Column Reverse</Button>
      </Flex>
    </Space>
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var v,y,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '主轴对齐',
  render: () => <Space direction="vertical" size="lg">
      {['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'].map(justify => <div key={justify}>
          <div style={{
        marginBottom: 8
      }}>{justify}</div>
          <Flex justify={justify as FlexJustify} gap={8} style={{
        width: '400px',
        border: '1px solid #ddd',
        padding: 8
      }}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Flex>
        </div>)}
    </Space>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,F,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '交叉轴对齐',
  render: () => <Space direction="vertical" size="lg">
      {['start', 'end', 'center', 'stretch', 'baseline'].map(align => <div key={align}>
          <div style={{
        marginBottom: 8
      }}>{align}</div>
          <Flex align={align as FlexAlign} gap={8} style={{
        height: '100px',
        border: '1px solid #ddd',
        padding: 8
      }}>
            <Button style={{
          height: align === 'stretch' ? 'auto' : '40px'
        }}>Button</Button>
            <Button style={{
          height: '60px'
        }}>Button</Button>
            <Button style={{
          height: '80px'
        }}>Button</Button>
          </Flex>
        </div>)}
    </Space>
}`,...(b=(F=l.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var f,R,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '换行',
  render: () => <Space direction="vertical">
      <Flex wrap="wrap" gap={8} style={{
      width: '400px',
      border: '1px solid #ddd',
      padding: 8
    }}>
        {Array.from({
        length: 10
      }).map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
      </Flex>

      <Flex wrap="nowrap" gap={8} style={{
      width: '400px',
      border: '1px solid #ddd',
      padding: 8
    }}>
        {Array.from({
        length: 10
      }).map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
      </Flex>

      <Flex wrap="wrap-reverse" gap={8} style={{
      width: '400px',
      border: '1px solid #ddd',
      padding: 8
    }}>
        {Array.from({
        length: 10
      }).map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
      </Flex>
    </Space>
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var C,k,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '间距',
  render: () => <Space direction="vertical" size="lg">
      {[0, 8, 16, 24, 32].map(gap => <div key={gap}>
          <div style={{
        marginBottom: 8
      }}>gap: {gap}px</div>
          <Flex gap={gap} style={{
        border: '1px solid #ddd',
        padding: 8
      }}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Flex>
        </div>)}
    </Space>
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const W=["Basic","Directions","JustifyContent","AlignItems","Wrap","Gap"];export{l as AlignItems,s as Basic,i as Directions,p as Gap,a as JustifyContent,c as Wrap,W as __namedExportsOrder,G as default};
