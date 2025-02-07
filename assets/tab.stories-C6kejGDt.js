import{j as e}from"./jsx-runtime-WdPq8kIh.js";import{c as j}from"./index-yDvlI-tm.js";import{r as B,R as C}from"./index-BpYrhlGc.js";const F=t=>{const{defaultIndex:m=0,activeIndex:n,onSelect:T,className:G,style:H,type:p="line",children:x}=t,[J,K]=B.useState(m),h=n!==void 0?n:J,L=r=>{n===void 0&&K(r),T==null||T(r)},M=r=>C.Children.map(r,(I,s)=>{const U=I,{label:W,disabled:f}=U.props;return e.jsx("li",{className:j("tabs-nav-item",{"is-active":h===s,"is-disabled":f}),onClick:()=>{f||L(s)},children:W})});function Q(r){return C.Children.map(r,(I,s)=>s===h?I:null)}return e.jsxs("div",{className:`tabs ${G}`,style:H,"data-testid":"test-tab",children:[e.jsx("ul",{className:j("tabs-nav",{"nav-line":p==="line","nav-card":p==="card"}),children:M(x)}),e.jsx("div",{className:"tabs-content",children:Q(x)})]})};F.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultIndex:{required:!1,tsType:{name:"number"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"selectedIndex"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'card' | 'line'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'line'"}]},description:""}}};const u=({children:t})=>e.jsx("div",{className:"tab-panel",children:t});u.displayName="Tab.Item";u.__docgenInfo={description:"",methods:[],displayName:"Tab.Item",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const a=F;a.Item=u;const ee={title:"Components/Tab",component:a,parameters:{docs:{description:{component:"标签页组件，支持卡片/线条模式。"}}},tags:["autodocs"],argTypes:{defaultIndex:{description:"默认选中的标签索引",control:"number"},type:{description:"标签类型",control:"radio",options:["line","card"],table:{type:{summary:"string"},defaultValue:{summary:"line"}}},onSelect:{description:"点击标签项触发的回调函数",action:"selected",table:{type:{summary:"(selectedIndex: number) => void"}}},className:{description:"自定义类名",control:"text"},style:{description:"自定义样式",control:"object"}}},l={name:"默认标签页",args:{defaultIndex:0},render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{label:"Tab 1",children:"Content 1"}),e.jsx(a.Item,{label:"Tab 2",children:"Content 2"}),e.jsx(a.Item,{label:"Tab 3",children:"Content 3"})]})},d={name:"卡片式标签页",args:{defaultIndex:0,type:"card"},render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{label:"Tab 1",children:"Content 1"}),e.jsx(a.Item,{label:"Tab 2",children:"Content 2"}),e.jsx(a.Item,{label:"Tab 3",children:"Content 3"})]})},i={name:"禁用标签项",args:{defaultIndex:0},render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{label:"Tab 1",children:"Content 1"}),e.jsx(a.Item,{label:"Tab 2",disabled:!0,children:"Content 2"}),e.jsx(a.Item,{label:"Tab 3",children:"Content 3"})]})},b={name:"自定义样式标签页",args:{defaultIndex:0,style:{backgroundColor:"#f7f7f7",borderRadius:"4px"}},render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{label:"Tab 1",children:"Content 1"}),e.jsx(a.Item,{label:"Tab 2",children:"Content 2"}),e.jsx(a.Item,{label:"Tab 3",children:"Content 3"})]})},o={name:"受控组件",render:()=>{const[t,m]=B.useState(0);return e.jsxs(a,{activeIndex:t,onSelect:n=>m(n),children:[e.jsx(a.Item,{label:"Tab 1",children:"Content 1"}),e.jsx(a.Item,{label:"Tab 2",children:"Content 2"}),e.jsx(a.Item,{label:"Tab 3",children:"Content 3"})]})}},c={name:"标签页展示",render:t=>e.jsxs("div",{children:[e.jsx("h2",{children:"标签页展示"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx("div",{children:e.jsxs(a,{defaultIndex:0,children:[e.jsx(a.Item,{label:"用户管理",children:"用户管理内容"}),e.jsx(a.Item,{label:"配置管理",children:"配置管理内容"}),e.jsx(a.Item,{label:"角色管理",children:"角色管理内容"})]})}),e.jsx("div",{children:e.jsxs(a,{defaultIndex:0,type:"card",children:[e.jsx(a.Item,{label:"我的音乐",children:"我的音乐列表"}),e.jsx(a.Item,{label:"最近播放",children:"最近播放记录"}),e.jsx(a.Item,{label:"推荐歌单",children:"为您推荐的音乐"})]})}),e.jsx("div",{children:e.jsxs(a,{defaultIndex:0,children:[e.jsx(a.Item,{label:"进行中",children:"当前进行的任务"}),e.jsx(a.Item,{label:"已完成",disabled:!0,children:"已完成的任务"}),e.jsx(a.Item,{label:"待处理",children:"待处理的任务"})]})}),e.jsx("div",{children:e.jsxs(a,{defaultIndex:0,style:{backgroundColor:"#f7f7f7",borderRadius:"8px",padding:"1rem"},children:[e.jsx(a.Item,{label:"项目概览",children:"项目基本信息展示"}),e.jsx(a.Item,{label:"团队成员",children:"团队成员列表"}),e.jsx(a.Item,{label:"项目进度",children:"项目进度追踪"})]})})]})]}),parameters:{controls:{disable:!0},actions:{disable:!0},docs:{source:{type:""}}}};var v,y,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '默认标签页',
  args: {
    defaultIndex: 0
  },
  render: args => <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,N,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '卡片式标签页',
  args: {
    defaultIndex: 0,
    type: 'card'
  },
  render: args => <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,D,_;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '禁用标签项',
  args: {
    defaultIndex: 0
  },
  render: args => <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2" disabled>
        Content 2
      </Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var A,k,w;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '自定义样式标签页',
  args: {
    defaultIndex: 0,
    style: {
      backgroundColor: '#f7f7f7',
      borderRadius: '4px'
    }
  },
  render: args => <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
}`,...(w=(k=b.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,P,O;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '受控组件',
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <Tab activeIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
        <Tab.Item label="Tab 1">Content 1</Tab.Item>
        <Tab.Item label="Tab 2">Content 2</Tab.Item>
        <Tab.Item label="Tab 3">Content 3</Tab.Item>
      </Tab>;
  }
}`,...(O=(P=o.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,$,z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '标签页展示',
  render: _args => <div>
      <h2>标签页展示</h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        {/* 默认标签页 */}
        <div>
          <Tab defaultIndex={0}>
            <Tab.Item label="用户管理">用户管理内容</Tab.Item>
            <Tab.Item label="配置管理">配置管理内容</Tab.Item>
            <Tab.Item label="角色管理">角色管理内容</Tab.Item>
          </Tab>
        </div>

        {/* 卡片式标签页 */}
        <div>
          <Tab defaultIndex={0} type="card">
            <Tab.Item label="我的音乐">我的音乐列表</Tab.Item>
            <Tab.Item label="最近播放">最近播放记录</Tab.Item>
            <Tab.Item label="推荐歌单">为您推荐的音乐</Tab.Item>
          </Tab>
        </div>

        {/* 禁用标签项 */}
        <div>
          <Tab defaultIndex={0}>
            <Tab.Item label="进行中">当前进行的任务</Tab.Item>
            <Tab.Item label="已完成" disabled>
              已完成的任务
            </Tab.Item>
            <Tab.Item label="待处理">待处理的任务</Tab.Item>
          </Tab>
        </div>

        {/* 自定义样式标签页 */}
        <div>
          <Tab defaultIndex={0} style={{
          backgroundColor: '#f7f7f7',
          borderRadius: '8px',
          padding: '1rem'
        }}>
            <Tab.Item label="项目概览">项目基本信息展示</Tab.Item>
            <Tab.Item label="团队成员">团队成员列表</Tab.Item>
            <Tab.Item label="项目进度">项目进度追踪</Tab.Item>
          </Tab>
        </div>
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
}`,...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const ae=["DefaultTab","CardTypeTab","DisabledTabItem","CustomStyledTab","ControlledTab","TabDisplay"];export{d as CardTypeTab,o as ControlledTab,b as CustomStyledTab,l as DefaultTab,i as DisabledTabItem,c as TabDisplay,ae as __namedExportsOrder,ee as default};
