import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{R as n,C as e}from"./grid-BwfGiftl.js";import{F as A}from"./flex-E4Sj-Pba.js";import"./index-D2MAbzvX.js";import"./index-DEBVq0NN.js";import"./index-DIbT3vot.js";const q={title:"Components/Grid",component:n,parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},tags:["autodocs"],decorators:[d=>l.jsx("div",{style:{width:"800px"},children:l.jsx(d,{})})]},s={backgroundColor:"#0092ff",padding:"8px 0",textAlign:"center",color:"#fff"},o={backgroundColor:"#69c0ff",padding:"8px 0",textAlign:"center",color:"#fff"},t={name:"基础栅格",render:d=>l.jsxs("div",{style:{width:"100%"},children:[l.jsx(n,{children:l.jsx(e,{span:24,children:l.jsx("div",{style:s,children:"col-24"})})}),l.jsxs(n,{children:[l.jsx(e,{span:12,children:l.jsx("div",{style:s,children:"col-12"})}),l.jsx(e,{span:12,children:l.jsx("div",{style:o,children:"col-12"})})]}),l.jsxs(n,{children:[l.jsx(e,{span:8,children:l.jsx("div",{style:s,children:"col-8"})}),l.jsx(e,{span:8,children:l.jsx("div",{style:o,children:"col-8"})}),l.jsx(e,{span:8,children:l.jsx("div",{style:s,children:"col-8"})})]}),l.jsxs(n,{children:[l.jsx(e,{span:6,children:l.jsx("div",{style:s,children:"col-6"})}),l.jsx(e,{span:6,children:l.jsx("div",{style:o,children:"col-6"})}),l.jsx(e,{span:6,children:l.jsx("div",{style:s,children:"col-6"})}),l.jsx(e,{span:6,children:l.jsx("div",{style:o,children:"col-6"})})]})]})},r={name:"区块间隔",render:d=>l.jsxs(A,{direction:"column",align:"center",style:{width:"100%"},children:[l.jsx("div",{style:{marginBottom:"16px"},children:"gutter: [16, 0]"}),l.jsx(n,{gutter:[16,0],children:[...Array(12)].map((y,i)=>l.jsx(e,{span:6,children:l.jsx("div",{style:i%2?o:s,children:"col-6"})},i))}),l.jsx("div",{style:{marginBottom:"16px"},children:"gutter: [16, 24]"}),l.jsx(n,{gutter:[16,24],children:[...Array(8)].map((y,i)=>l.jsx(e,{span:6,children:l.jsx("div",{style:i%2?o:s,children:"col-6"})},i))})]})},c={name:"偏移",render:d=>l.jsxs("div",{style:{width:"100%"},children:[l.jsxs(n,{children:[l.jsx(e,{span:8,children:l.jsx("div",{style:s,children:"col-8"})}),l.jsx(e,{span:8,offset:8,children:l.jsx("div",{style:s,children:"col-8 offset-8"})})]}),l.jsx(n,{children:[6,6].map((y,i)=>l.jsx(e,{span:y,offset:6,children:l.jsx("div",{style:s,children:"col-6 offset-6"})},i))})]})},a={name:"对齐方式",render:d=>l.jsxs("div",{style:{width:"100%"},children:[l.jsxs(n,{justify:"start",children:[l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})})]}),l.jsxs(n,{justify:"center",style:{marginTop:"16px"},children:[l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})})]}),l.jsxs(n,{justify:"end",style:{marginTop:"16px"},children:[l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})})]}),l.jsxs(n,{justify:"space-between",style:{marginTop:"16px"},children:[l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})})]}),l.jsxs(n,{justify:"space-around",style:{marginTop:"16px"},children:[l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})}),l.jsx(e,{span:4,children:l.jsx("div",{style:s,children:"col-4"})})]})]})},x={name:"响应式布局",render:d=>l.jsxs(n,{children:[l.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:l.jsx("div",{style:s,children:"Col"})}),l.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:l.jsx("div",{style:o,children:"Col"})}),l.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:l.jsx("div",{style:s,children:"Col"})}),l.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:l.jsx("div",{style:o,children:"Col"})})]})};var p,v,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var j,m,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(m=r.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var g,u,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var S,w,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,_,B;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(_=x.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const z=["Basic","Gutter","Offset","Alignment","Responsive"];export{a as Alignment,t as Basic,r as Gutter,c as Offset,x as Responsive,z as __namedExportsOrder,q as default};
