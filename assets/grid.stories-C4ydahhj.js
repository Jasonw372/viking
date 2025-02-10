import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{R as S}from"./index-DEBVq0NN.js";import{c as q}from"./index-DIbT3vot.js";import{F as J}from"./flex-E4Sj-Pba.js";import"./index-D2MAbzvX.js";const o=({children:t,gutter:l=0,justify:r="start",align:p="top",className:x,...u})=>{const R=q("el-row",{[`is-justify-${r}`]:r,[`is-align-${p}`]:p},x),d={...u.style||{},display:"flex",flexWrap:"wrap"};if(Array.isArray(l)){const[i,a]=l.map(Math.abs);d.marginLeft=`-${i/2}px`,d.marginRight=`-${i/2}px`,d.rowGap=`${a}px`}else typeof l=="number"&&(d.marginLeft=`-${l/2}px`,d.marginRight=`-${l/2}px`);return e.jsx("div",{className:R,style:d,...u,children:S.Children.map(t,i=>{if(!S.isValidElement(i))return i;const a={...i.props.style||{}};if(Array.isArray(l)){const[v]=l;a.paddingLeft=`${v/2}px`,a.paddingRight=`${v/2}px`}else typeof l=="number"&&(a.paddingLeft=`${l/2}px`,a.paddingRight=`${l/2}px`);return S.cloneElement(i,{...i.props,style:a})})})},s=({children:t,span:l,offset:r,pull:p,push:x,xs:u,sm:R,md:d,lg:i,xl:a,className:v,...W})=>{const D=q("el-col",{[`el-col-${l}`]:l,[`el-col-offset-${r}`]:r,[`el-col-pull-${p}`]:p,[`el-col-push-${x}`]:x},v);l&&(l<0||l>24)&&console.warn("span should be between 0 and 24"),r&&(r<0||r>24)&&console.warn("offset should be between 0 and 24");const H=["xs","sm","md","lg","xl"].reduce((m,f)=>{const y={xs:u,sm:R,md:d,lg:i,xl:a}[f];if(!y)return m;if(typeof y=="number")m[`el-col-${f}-${y}`]=!0;else if(typeof y=="object"){const h=y;h.span&&(m[`el-col-${f}-${h.span}`]=!0),h.offset&&(m[`el-col-${f}-offset-${h.offset}`]=!0)}return m},{});return e.jsx("div",{className:q(D,H),...W,children:t})};o.__docgenInfo={description:"栅格布局行组件",methods:[],displayName:"Row",props:{gutter:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"",defaultValue:{value:"0",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Col",props:{span:{required:!1,tsType:{name:"number"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},pull:{required:!1,tsType:{name:"number"},description:""},push:{required:!1,tsType:{name:"number"},description:""},xs:{required:!1,tsType:{name:"union",raw:"number | { span?: number; offset?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ span?: number; offset?: number }",signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}}]},description:""},sm:{required:!1,tsType:{name:"union",raw:"number | { span?: number; offset?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ span?: number; offset?: number }",signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}}]},description:""},md:{required:!1,tsType:{name:"union",raw:"number | { span?: number; offset?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ span?: number; offset?: number }",signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}}]},description:""},lg:{required:!1,tsType:{name:"union",raw:"number | { span?: number; offset?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ span?: number; offset?: number }",signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}}]},description:""},xl:{required:!1,tsType:{name:"union",raw:"number | { span?: number; offset?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ span?: number; offset?: number }",signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Y={title:"Components/Grid",component:o,parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{width:"800px"},children:e.jsx(t,{})})]},n={backgroundColor:"#0092ff",padding:"8px 0",textAlign:"center",color:"#fff"},c={backgroundColor:"#69c0ff",padding:"8px 0",textAlign:"center",color:"#fff"},j={name:"基础栅格",render:t=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(o,{children:e.jsx(s,{span:24,children:e.jsx("div",{style:n,children:"col-24"})})}),e.jsxs(o,{children:[e.jsx(s,{span:12,children:e.jsx("div",{style:n,children:"col-12"})}),e.jsx(s,{span:12,children:e.jsx("div",{style:c,children:"col-12"})})]}),e.jsxs(o,{children:[e.jsx(s,{span:8,children:e.jsx("div",{style:n,children:"col-8"})}),e.jsx(s,{span:8,children:e.jsx("div",{style:c,children:"col-8"})}),e.jsx(s,{span:8,children:e.jsx("div",{style:n,children:"col-8"})})]}),e.jsxs(o,{children:[e.jsx(s,{span:6,children:e.jsx("div",{style:n,children:"col-6"})}),e.jsx(s,{span:6,children:e.jsx("div",{style:c,children:"col-6"})}),e.jsx(s,{span:6,children:e.jsx("div",{style:n,children:"col-6"})}),e.jsx(s,{span:6,children:e.jsx("div",{style:c,children:"col-6"})})]})]})},b={name:"区块间隔",render:t=>e.jsxs(J,{direction:"column",align:"center",style:{width:"100%"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:"gutter: [16, 0]"}),e.jsx(o,{gutter:[16,0],children:[...Array(12)].map((l,r)=>e.jsx(s,{span:6,children:e.jsx("div",{style:r%2?c:n,children:"col-6"})},r))}),e.jsx("div",{style:{marginBottom:"16px"},children:"gutter: [16, 24]"}),e.jsx(o,{gutter:[16,24],children:[...Array(8)].map((l,r)=>e.jsx(s,{span:6,children:e.jsx("div",{style:r%2?c:n,children:"col-6"})},r))})]})},C={name:"偏移",render:t=>e.jsxs("div",{style:{width:"100%"},children:[e.jsxs(o,{children:[e.jsx(s,{span:8,children:e.jsx("div",{style:n,children:"col-8"})}),e.jsx(s,{span:8,offset:8,children:e.jsx("div",{style:n,children:"col-8 offset-8"})})]}),e.jsx(o,{children:[6,6].map((l,r)=>e.jsx(s,{span:l,offset:6,children:e.jsx("div",{style:n,children:"col-6 offset-6"})},r))})]})},g={name:"对齐方式",render:t=>e.jsxs("div",{style:{width:"100%"},children:[e.jsxs(o,{justify:"start",children:[e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})})]}),e.jsxs(o,{justify:"center",style:{marginTop:"16px"},children:[e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})})]}),e.jsxs(o,{justify:"end",style:{marginTop:"16px"},children:[e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})})]}),e.jsxs(o,{justify:"space-between",style:{marginTop:"16px"},children:[e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})})]}),e.jsxs(o,{justify:"space-around",style:{marginTop:"16px"},children:[e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})}),e.jsx(s,{span:4,children:e.jsx("div",{style:n,children:"col-4"})})]})]})},w={name:"响应式布局",render:t=>e.jsxs(o,{children:[e.jsx(s,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx("div",{style:n,children:"Col"})}),e.jsx(s,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx("div",{style:c,children:"Col"})}),e.jsx(s,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx("div",{style:n,children:"Col"})}),e.jsx(s,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx("div",{style:c,children:"Col"})})]})};var T,$,_;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '基础栅格',
  render: _args => <div style={{
    width: '100%'
  }}>
      <Row>
        <Col span={24}>
          <div style={boxStyle}>col-24</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={boxStyle}>col-12</div>
        </Col>
        <Col span={12}>
          <div style={lightBoxStyle}>col-12</div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={lightBoxStyle}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div style={boxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={lightBoxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={boxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={lightBoxStyle}>col-6</div>
        </Col>
      </Row>
    </div>
}`,...(_=($=j.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var k,B,A;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '区块间隔',
  render: _args => <Flex direction="column" align="center" style={{
    width: '100%'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>
        gutter: [16, 0]
      </div>
      <Row gutter={[16, 0]}>
        {[...Array(12)].map((_, index) => <Col key={index} span={6}>
            <div style={index % 2 ? lightBoxStyle : boxStyle}>col-6</div>
          </Col>)}
      </Row>

      <div style={{
      marginBottom: '16px'
    }}>
        gutter: [16, 24]
      </div>
      <Row gutter={[16, 24]}>
        {[...Array(8)].map((_, index) => <Col key={index} span={6}>
            <div style={index % 2 ? lightBoxStyle : boxStyle}>col-6</div>
          </Col>)}
      </Row>
    </Flex>
}`,...(A=(B=b.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var N,G,E;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '偏移',
  render: _args => <div style={{
    width: '100%'
  }}>
      <Row>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
        <Col span={8} offset={8}>
          <div style={boxStyle}>col-8 offset-8</div>
        </Col>
      </Row>
      <Row>
        {[6, 6].map((span, index) => <Col key={index} span={span} offset={6}>
            <div style={boxStyle}>col-6 offset-6</div>
          </Col>)}
      </Row>
    </div>
}`,...(E=(G=C.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var F,L,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '对齐方式',
  render: _args => <div style={{
    width: '100%'
  }}>
      <Row justify="start">
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="center" style={{
      marginTop: '16px'
    }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="end" style={{
      marginTop: '16px'
    }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="space-between" style={{
      marginTop: '16px'
    }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="space-around" style={{
      marginTop: '16px'
    }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
    </div>
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var O,I,M;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '响应式布局',
  render: _args => <Row>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={boxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={lightBoxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={boxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={lightBoxStyle}>Col</div>
      </Col>
    </Row>
}`,...(M=(I=w.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Z=["Basic","Gutter","Offset","Alignment","Responsive"];export{g as Alignment,j as Basic,b as Gutter,C as Offset,w as Responsive,Z as __namedExportsOrder,Y as default};
