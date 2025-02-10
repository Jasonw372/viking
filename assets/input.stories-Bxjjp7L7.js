import{j as Z}from"./jsx-runtime-BjgbQsUx.js";import{I as Q}from"./input-BrErNrjc.js";import{r as $}from"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";import"./index-bZBKYLb1.js";import"./index-DIbT3vot.js";const te={title:"Components/Input",component:Q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["lg","sm",void 0]},prefixIcon:{control:"text"},suffixIcon:{control:"text"},prepend:{control:"text"},append:{control:"text"}}},a={args:{placeholder:"请输入内容",disabled:!1,defaultValue:"123"},name:"默认输入框"},r={args:{placeholder:"请输入内容",disabled:!1,type:"password",defaultValue:"123"},name:"密码输入框"},s={args:{disabled:!0},name:"不可用的输入框"},o={args:{size:"lg"},name:"大号输入框"},n={args:{size:"sm"},name:"小号输入框"},t={args:{prefixIcon:"search",suffixIcon:"times",placeholder:"请输入搜索内容"},name:"带前缀和后缀图标的输入框"},c={args:{suffixIcon:"search",placeholder:"带后缀图标的输入框"},name:"带后缀图标的输入框"},p={args:{prefixIcon:"user",placeholder:"带前缀图标的输入框"},name:"带前缀图标的输入框"},d={args:{prepend:"https://",append:".com"},name:"前后缀的输入框"},l={args:{prepend:"123",append:"Status",size:"lg",defaultValue:"12343142"},name:"复杂前后缀的输入框"},e=()=>{const[U,X]=$.useState("");return Z.jsx(Q,{value:U,onChange:Y=>X(Y.target.value)})};e.storyName="受控输入框";e.parameters={controls:{disable:!0},actions:{disable:!0}};const m={args:{prefixIcon:"search",suffixIcon:"keyboard",prepend:"https://",append:".com",placeholder:"请输入搜索内容",defaultValue:"baidu"},name:"带前后缀和图标的输入框"};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var u,i,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容',
    disabled: false,
    defaultValue: '123'
  },
  name: '默认输入框'
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var f,h,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容',
    disabled: false,
    type: 'password',
    defaultValue: '123'
  },
  name: '密码输入框'
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,S,b;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: '不可用的输入框'
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var V,y,C;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  name: '大号输入框'
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var W,v,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  name: '小号输入框'
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var A,P,w;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    prefixIcon: 'search',
    suffixIcon: 'times',
    placeholder: '请输入搜索内容'
  },
  name: '带前缀和后缀图标的输入框'
}`,...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,_,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    suffixIcon: 'search',
    placeholder: '带后缀图标的输入框'
  },
  name: '带后缀图标的输入框'
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,k,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    prefixIcon: 'user',
    placeholder: '带前缀图标的输入框'
  },
  name: '带前缀图标的输入框'
}`,...(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,O,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    prepend: 'https://',
    append: '.com'
  },
  name: '前后缀的输入框'
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var T,q,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    prepend: '123',
    append: 'Status',
    size: 'lg',
    defaultValue: '12343142'
  },
  name: '复杂前后缀的输入框'
}`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,G,H;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={e => setValue(e.target.value)} />;
}`,...(H=(G=e.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    prefixIcon: 'search',
    suffixIcon: 'keyboard',
    prepend: 'https://',
    append: '.com',
    placeholder: '请输入搜索内容',
    defaultValue: 'baidu'
  },
  name: '带前后缀和图标的输入框'
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ce=["Default","Password","Disabled","Large","Small","WithIcons","WithSuffixIcon","WithPrefixIcon","P","ComplexAddons","Controlled","WithIconsAndAddons"];export{l as ComplexAddons,e as Controlled,a as Default,s as Disabled,o as Large,d as P,r as Password,n as Small,t as WithIcons,m as WithIconsAndAddons,p as WithPrefixIcon,c as WithSuffixIcon,ce as __namedExportsOrder,te as default};
