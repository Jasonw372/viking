import{j as r}from"./jsx-runtime-WdPq8kIh.js";import{r as i}from"./index-BpYrhlGc.js";import{P as t}from"./progress-CFyO0nFG.js";const T={title:"Components/Progress",component:t,parameters:{docs:{description:{component:"进度条组件"}},layout:"centered"},tags:["autodocs"],argTypes:{percent:{control:"number",min:0,max:100},strokeHeight:{control:"number",defaultValue:15},showText:{control:"boolean",defaultValue:!0},styles:{control:"object",defaultValue:{}},theme:{control:"select",options:["primary","secondary","success","danger","warning","info"]}}},n={name:"默认进度条",args:{percent:10,strokeHeight:15,showText:!0,theme:"primary",styles:{}},render:e=>r.jsx("div",{style:{width:"300px"},children:r.jsx(t,{...e})})},s={name:"变动的进度条",args:{percent:40,strokeHeight:15,showText:!0,theme:"warning",styles:{}},render:e=>{const[P,j]=i.useState(e.percent);return i.useEffect(()=>{const k=setInterval(()=>{j(c=>c>=100?0:c+1)},100);return()=>{clearInterval(k)}},[]),r.jsx("div",{style:{width:"300px"},children:r.jsx(t,{...e,percent:P})})}},o={name:"隐藏进度条文字",args:{percent:60,strokeHeight:15,showText:!1,theme:"success",styles:{}},render:e=>r.jsx("div",{style:{width:"300px"},children:r.jsx(t,{...e})})},a={name:"自定义样式",args:{percent:70,strokeHeight:20,styles:{backgroundColor:"yellow",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}},render:e=>r.jsx("div",{style:{width:"300px"},children:r.jsx(t,{...e})})};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '默认进度条',
  args: {
    percent: 10,
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
    styles: {}
  },
  render: args => <div style={{
    width: '300px'
  }}>
      <Progress {...args}></Progress>
    </div>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '变动的进度条',
  args: {
    percent: 40,
    strokeHeight: 15,
    showText: true,
    theme: 'warning',
    styles: {}
  },
  render: args => {
    const [percent, setPercent] = useState(args.percent);
    useEffect(() => {
      const timer = setInterval(() => {
        setPercent(prevPercent => {
          if (prevPercent >= 100) {
            return 0;
          }
          return prevPercent + 1;
        });
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <div style={{
      width: '300px'
    }}>
        <Progress {...args} percent={percent}></Progress>
      </div>;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '隐藏进度条文字',
  args: {
    percent: 60,
    strokeHeight: 15,
    showText: false,
    theme: 'success',
    styles: {}
  },
  render: args => <div style={{
    width: '300px'
  }}>
      <Progress {...args}></Progress>
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,f,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    percent: 70,
    strokeHeight: 20,
    styles: {
      backgroundColor: 'yellow',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }
  },
  render: args => <div style={{
    width: '300px'
  }}>
      <Progress {...args}></Progress>
    </div>
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const C=["Default","AutoChange","HideText","CustomStyle"];export{s as AutoChange,a as CustomStyle,n as Default,o as HideText,C as __namedExportsOrder,T as default};
