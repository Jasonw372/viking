import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{R as N}from"./index-DEBVq0NN.js";import{c as I}from"./index-DIbT3vot.js";import"./index-D2MAbzvX.js";const S=["large","default","small","xl","2xl"],s=T=>{const{size:a="default",shape:p="circle",src:i,alt:L,children:D,className:C,onError:n}=T,O=I("avatar",C,{[`avatar-${a}`]:typeof a=="string"&&S.includes(a),[`avatar-${p}`]:p}),[H,V]=N.useState(!0),Y=()=>{V(!1),n==null||n()};return e.jsx("span",{className:O,style:{width:typeof a=="number"?`${a}px`:void 0,height:typeof a=="number"?`${a}px`:void 0},children:i&&H?e.jsx("img",{src:i,alt:L,onError:Y}):D})};s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'xl' | '2xl' | number",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"number"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $={title:"Components/Avatar",component:s,parameters:{layout:"centered",controls:{disabled:!1},actions:{disable:!0}}},l={args:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"用户头像"},name:"基础头像"},r=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{size:"small",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{size:"large",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{size:"xl",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{size:"2xl",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{size:100,src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})]});r.storyName="不同尺寸";const t=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{shape:"circle",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),e.jsx(s,{shape:"square",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})]});t.storyName="不同形状";const o=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{children:"BL"}),e.jsx(s,{children:"SN"}),e.jsx(s,{children:"JL"})]});o.storyName="文字头像";const c=()=>e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:e.jsx(s,{src:"invalid-image.png",onError:()=>console.warn("图片加载失败"),children:"err"})});c.storyName="图片加载失败";r.__docgenInfo={description:"",methods:[],displayName:"Sizes"};t.__docgenInfo={description:"",methods:[],displayName:"Shapes"};o.__docgenInfo={description:"",methods:[],displayName:"TextAvatar"};c.__docgenInfo={description:"",methods:[],displayName:"FallbackAvatar"};var m,d,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    alt: '用户头像'
  },
  name: '基础头像'
}`,...(x=(d=l.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var v,g,u;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="xl" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="2xl" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </div>`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var j,y,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <Avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </div>`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,b,A;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <Avatar>BL</Avatar>
    <Avatar>SN</Avatar>
    <Avatar>JL</Avatar>
  </div>`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var X,z,q;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <Avatar src="invalid-image.png" onError={() => console.warn('图片加载失败')}>
      err
    </Avatar>
  </div>`,...(q=(z=c.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const k=["Default","Sizes","Shapes","TextAvatar","FallbackAvatar"];export{l as Default,c as FallbackAvatar,t as Shapes,r as Sizes,o as TextAvatar,k as __namedExportsOrder,$ as default};
