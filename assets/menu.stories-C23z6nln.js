import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o,R as N}from"./index-Dh8cFXwY.js";import{c as T}from"./index-DQRuViyn.js";import{I as oe}from"./index-BBTfqYC4.js";import{T as Me}from"./transition-C42wkVW4.js";import"./index-yBjzXJbu.js";import"./setPrototypeOf-B3dupTve.js";import"./index-peEFkZiE.js";import"./index-IE9ObSwG.js";const E=o.createContext({index:"0"}),Ie=t=>N.Children.map(t,(r,s)=>{const u=r,{displayName:d}=u.type;if(d==="Menu.Item"||d==="Menu.SubMenu")return N.cloneElement(u,{index:s.toString()});console.error("Warning: Menu has a child which is not a MenuItem or SubMenu component")}),k=t=>{const{className:r,mode:s="horizontal",style:u,children:d,defaultIndex:l="0",selectedIndex:a,defaultOpenSubMenus:M=[],onSelect:m,onClick:I,...c}=t,[p,w]=o.useState(l),j={index:a!==void 0?a:p,onSelect:S=>{a===void 0&&w(S),m==null||m(S)},onClick:I,mode:s,defaultOpenSubMenus:M},O=T("menu",r,{"menu-vertical":s==="vertical","menu-horizontal":s==="horizontal"});return e.jsx("ul",{className:O,style:u,"data-testid":"test-menu",...c,children:e.jsx(E.Provider,{value:j,children:Ie(d)})})};k.displayName="Menu";k.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{defaultIndex:{required:!1,tsType:{name:"string"},description:""},selectedIndex:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedIndex"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: string) => void",signature:{arguments:[{type:{name:"string"},name:"index"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},defaultOpenSubMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const D=t=>{const{className:r,index:s,disabled:u,style:d,children:l}=t,{index:a,onSelect:M,onClick:m}=o.useContext(E),I=T("menu-item",r,{"is-disabled":u,"is-active":s===a}),c=()=>{M&&!u&&typeof s=="string"&&M(s),m&&s&&m(s)};return e.jsx("li",{className:I,style:d,onClick:c,children:l})};D.displayName="Menu.Item";D.__docgenInfo={description:"",methods:[],displayName:"Menu.Item",props:{index:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const R=t=>{const{index:r,title:s,className:u,children:d}=t,{mode:l,index:a,defaultOpenSubMenus:M}=o.useContext(E),I=r&&l==="vertical"?M.includes(r):!1,[c,p]=o.useState(I),w=T("menu-item submenu-item",u,{"is-active":a.startsWith(r||""),"is-vertical":l==="vertical"}),W=i=>{i.preventDefault(),p(!c)};let q;const j=(i,_)=>{clearTimeout(q),i.preventDefault(),q=setTimeout(()=>{p(_)},300)},O=l==="vertical"?{onClick:W}:{},S=l!=="vertical"?{onMouseEnter:i=>{j(i,!0)},onMouseLeave:i=>{j(i,!1)}}:{},le=i=>{const _=T("submenu-container",{"menu-opened":c}),ae=N.Children.map(i,(me,ce)=>{const z=me;if(z.type.displayName==="Menu.Item")return N.cloneElement(z,{index:`${r}-${ce}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return e.jsx(Me,{in:c,timeout:300,classNames:"zoom-in-top",appear:!0,unmountOnExit:!0,children:e.jsx("ul",{className:_,children:ae})})};return e.jsxs("li",{className:w,...S,children:[e.jsxs("div",{className:"submenu-title",...O,children:[s,e.jsx(oe,{className:"arrow-icon",icon:"angle-down"})]}),le(d)]},r)};R.displayName="Menu.SubMenu";R.__docgenInfo={description:"",methods:[],displayName:"Menu.SubMenu",props:{index:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const n=k;n.Item=D;n.SubMenu=R;const ve={title:"Components/Menu",component:n,parameters:{docs:{description:{component:"菜单组件，支持水平/垂直模式，支持下拉菜单。"}}},argTypes:{defaultIndex:{description:"默认选中的菜单项索引",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"0"}}},mode:{description:"菜单类型",control:"radio",options:["horizontal","vertical"],table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},defaultOpenSubMenus:{description:"默认展开的子菜单索引数组",control:"object",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},onSelect:{description:"点击菜单项触发的回调函数",action:"selected",table:{type:{summary:"(selectedIndex: string) => void"}}},className:{description:"自定义类名",control:"text"},style:{description:"自定义样式",control:"object"}},tags:["autodocs"]},b={args:{defaultIndex:"0"},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{children:"联系我们"})]}),name:"默认菜单"},f={args:{defaultIndex:"0",mode:"vertical"},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{children:"联系我们"})]}),name:"垂直菜单"},g={args:{defaultIndex:"0"},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"首页"}),e.jsxs(n.SubMenu,{title:"产品介绍",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"}),e.jsx(n.Item,{children:"产品3"})]}),e.jsx(n.Item,{children:"联系我们"})]}),name:"带子菜单的菜单"},y={args:{defaultIndex:"0"},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"可点击项"}),e.jsx(n.Item,{disabled:!0,children:"禁用项"}),e.jsx(n.Item,{children:"可点击项"})]}),name:"禁用菜单项"},v={args:{defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["0"]},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"首页"}),e.jsxs(n.SubMenu,{title:"产品介绍",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"}),e.jsx(n.Item,{children:"产品3"})]}),e.jsx(n.Item,{children:"联系我们"})]}),name:"垂直带子菜单的菜单"},C={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"默认水平菜单"}),e.jsxs(n,{defaultIndex:"0",children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{disabled:!0,children:"禁用项"}),e.jsxs(n.SubMenu,{title:"产品介绍",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"}),e.jsx(n.Item,{children:"产品3"})]}),e.jsx(n.Item,{children:"联系我们"})]})]}),e.jsxs("div",{style:{width:"256px"},children:[e.jsx("h3",{children:"垂直菜单"}),e.jsxs(n,{defaultIndex:"0",mode:"vertical",children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{disabled:!0,children:"禁用项"}),e.jsxs(n.SubMenu,{title:"产品介绍",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"}),e.jsx(n.Item,{children:"产品3"})]}),e.jsx(n.Item,{children:"联系我们"})]})]}),e.jsxs("div",{style:{width:"256px"},children:[e.jsx("h3",{children:"默认展开的垂直菜单"}),e.jsxs(n,{defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["3"],children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{disabled:!0,children:"禁用项"}),e.jsxs(n.SubMenu,{title:"产品介绍",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"}),e.jsx(n.Item,{children:"产品3"})]}),e.jsx(n.Item,{children:"联系我们"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"不同状态的菜单项"}),e.jsxs(n,{defaultIndex:"1",children:[e.jsx(n.Item,{children:"普通菜单项"}),e.jsx(n.Item,{disabled:!0,children:"禁用菜单项"}),e.jsxs(n.SubMenu,{title:"带子菜单",children:[e.jsx(n.Item,{children:"子菜单项1"}),e.jsx(n.Item,{children:"子菜单项2"})]})]})]}),e.jsxs("div",{style:{width:"256px"},children:[e.jsx("h3",{children:"多层嵌套的垂直菜单"}),e.jsxs(n,{defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["1","1-1"],children:[e.jsx(n.Item,{children:"首页"}),e.jsxs(n.SubMenu,{title:"产品服务",children:[e.jsx(n.Item,{children:"产品列表"}),e.jsxs(n.SubMenu,{title:"解决方案",children:[e.jsx(n.Item,{children:"企业级"}),e.jsx(n.Item,{children:"个人级"})]}),e.jsx(n.Item,{children:"产品介绍"})]}),e.jsxs(n.SubMenu,{title:"关于我们",children:[e.jsx(n.Item,{children:"公司简介"}),e.jsx(n.Item,{children:"联系方式"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"自定义样式的菜单"}),e.jsxs(n,{defaultIndex:"0",style:{backgroundColor:"#f0f2f5",color:"#333",borderRadius:"4px"},children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsxs(n.SubMenu,{title:"产品服务",children:[e.jsx(n.Item,{children:"产品1"}),e.jsx(n.Item,{children:"产品2"})]}),e.jsx(n.Item,{children:"联系我们"})]})]})]}),parameters:{controls:{disable:!0},actions:{disable:!0},docs:{source:{type:""}}}},x={render:()=>{const[t,r]=o.useState("0");return e.jsxs(n,{selectedIndex:t,onSelect:s=>r(s),children:[e.jsx(n.Item,{children:"首页"}),e.jsx(n.Item,{children:"关于我们"}),e.jsx(n.Item,{children:"联系我们"})]})},parameters:{docs:{description:{story:"这是一个受控的菜单示例，菜单的选中状态完全由父组件控制。"}}},name:"受控Menu组件"};x.storyName="受控Menu组件";const h={render:t=>{const[r,s]=o.useState("0");return e.jsxs(n,{selectedIndex:r,onSelect:u=>s(u),mode:"vertical",children:[e.jsx(n.Item,{children:"首页"}),e.jsxs(n.SubMenu,{title:"产品服务",children:[e.jsx(n.Item,{children:"产品介绍"}),e.jsx(n.Item,{children:"解决方案"}),e.jsx(n.Item,{children:"技术支持"})]}),e.jsxs(n.SubMenu,{title:"关于我们",children:[e.jsx(n.Item,{children:"公司简介"}),e.jsx(n.Item,{children:"发展历程"}),e.jsx(n.Item,{children:"联系方式"})]}),e.jsx(n.Item,{children:"帮助中心"})]})},parameters:{docs:{description:{story:"这是一个包含子菜单的受控菜单示例，展示了如何在受控组件中使用多级菜单结构。"}}},name:"带子菜单的受控组件"};h.storyName="带子菜单的受控组件";var V,P,A;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0'
  },
  render: args => <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>,
  name: '默认菜单'
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var $,L,B;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0',
    mode: 'vertical'
  },
  render: args => <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>,
  name: '垂直菜单'
}`,...(B=(L=f.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var F,G,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0'
  },
  render: args => <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品介绍">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>,
  name: '带子菜单的菜单'
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0'
  },
  render: args => <Menu {...args}>
      <Menu.Item>可点击项</Menu.Item>
      <Menu.Item disabled>禁用项</Menu.Item>
      <Menu.Item>可点击项</Menu.Item>
    </Menu>,
  name: '禁用菜单项'
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['0']
  },
  render: args => <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品介绍">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>,
  name: '垂直带子菜单的菜单'
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: _args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '50px'
  }}>
      {/* 默认水平菜单 */}
      <div>
        <h3>默认水平菜单</h3>
        <Menu defaultIndex="0">
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 垂直菜单 */}
      <div style={{
      width: '256px'
    }}>
        <h3>垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical">
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 默认展开的垂直菜单 */}
      <div style={{
      width: '256px'
    }}>
        <h3>默认展开的垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['3']}>
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 不同状态的菜单项 */}
      <div>
        <h3>不同状态的菜单项</h3>
        <Menu defaultIndex="1">
          <Menu.Item>普通菜单项</Menu.Item>
          <Menu.Item disabled>禁用菜单项</Menu.Item>
          <Menu.SubMenu title="带子菜单">
            <Menu.Item>子菜单项1</Menu.Item>
            <Menu.Item>子菜单项2</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>

      {/* 多层嵌套的菜单 */}
      <div style={{
      width: '256px'
    }}>
        <h3>多层嵌套的垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['1', '1-1']}>
          <Menu.Item>首页</Menu.Item>
          <Menu.SubMenu title="产品服务">
            <Menu.Item>产品列表</Menu.Item>
            <Menu.SubMenu title="解决方案">
              <Menu.Item>企业级</Menu.Item>
              <Menu.Item>个人级</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>产品介绍</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="关于我们">
            <Menu.Item>公司简介</Menu.Item>
            <Menu.Item>联系方式</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>

      {/* 自定义样式的菜单 */}
      <div>
        <h3>自定义样式的菜单</h3>
        <Menu defaultIndex="0" style={{
        backgroundColor: '#f0f2f5',
        color: '#333',
        borderRadius: '4px'
      }}>
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.SubMenu title="产品服务">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
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
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,se,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('0');
    return <Menu selectedIndex={selected} onSelect={index => setSelected(index)}>
        <Menu.Item>首页</Menu.Item>
        <Menu.Item>关于我们</Menu.Item>
        <Menu.Item>联系我们</Menu.Item>
      </Menu>;
  },
  parameters: {
    docs: {
      description: {
        story: '这是一个受控的菜单示例，菜单的选中状态完全由父组件控制。'
      }
    }
  },
  name: '受控Menu组件'
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ue,ie,de;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: _args => {
    const [selected, setSelected] = useState('0');
    return <Menu selectedIndex={selected} onSelect={index => setSelected(index)} mode="vertical">
        <Menu.Item>首页</Menu.Item>
        <Menu.SubMenu title="产品服务">
          <Menu.Item>产品介绍</Menu.Item>
          <Menu.Item>解决方案</Menu.Item>
          <Menu.Item>技术支持</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="关于我们">
          <Menu.Item>公司简介</Menu.Item>
          <Menu.Item>发展历程</Menu.Item>
          <Menu.Item>联系方式</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>帮助中心</Menu.Item>
      </Menu>;
  },
  parameters: {
    docs: {
      description: {
        story: '这是一个包含子菜单的受控菜单示例，展示了如何在受控组件中使用多级菜单结构。'
      }
    }
  },
  name: '带子菜单的受控组件'
}`,...(de=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ce=["DefaultMenu","VerticalMenu","WithSubMenu","DisabledMenuItem","VerticalWithSubMenu","MenuDisplay","ControlledMenu","ControlledMenuWithSubmenu"];export{x as ControlledMenu,h as ControlledMenuWithSubmenu,b as DefaultMenu,y as DisabledMenuItem,C as MenuDisplay,f as VerticalMenu,v as VerticalWithSubMenu,g as WithSubMenu,Ce as __namedExportsOrder,ve as default};
