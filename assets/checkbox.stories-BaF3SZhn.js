import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-Dh8cFXwY.js";import{F as R}from"./flex-Cf0epuBD.js";import{T as g}from"./index-BT2t1l9q.js";import{c as G}from"./index-DQRuViyn.js";import{R as L,C as k}from"./grid-DTfALY4p.js";import"./index-yBjzXJbu.js";import"./button-C-Ryr-Tt.js";const F=t.forwardRef((l,s)=>{const{label:o,checked:n,defaultChecked:r,disabled:p,children:h,onChange:b,className:u,...i}=l,m=n!==void 0,[f,C]=t.useState(r||!1),A=G("checkbox",{"is-disabled":p}),c=G("checkbox-inner",u);t.useEffect(()=>{m&&C(n)},[n,m]);const x=t.useRef(null),j=d=>{const S=d.target.checked;p||(m||C(S),b==null||b(S))};return t.useImperativeHandle(s,()=>({focus:()=>{var d;(d=x.current)==null||d.focus()},blur:()=>{var d;(d=x.current)==null||d.blur()}})),e.jsxs("div",{className:A,children:[e.jsx("input",{...i,type:"checkbox",checked:m?n:f,onChange:j,className:c,ref:x,disabled:p}),(h||o)&&e.jsx("div",{className:"checkbox-label",children:h||o})]})});F.displayName="Checkbox";F.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}},composes:["Omit"]};const M=t.createContext({}),E=({options:l,value:s,defaultValue:o,onChange:n,children:r,disabled:p=!1,className:h,style:b})=>{const u=s!==void 0,[i,m]=t.useState(o||[]),f=(c,x)=>{const j=x?[...i||[],c]:(i||[]).filter(d=>d!==c);u||m(j),n==null||n(j)};t.useEffect(()=>{u&&s&&m(s)},[s,u]);const C={value:u?s:i,onChange:f},A=G("check-group",h);return e.jsx(M.Provider,{value:C,children:e.jsx("div",{className:A,style:b,children:l?l.map(c=>e.jsx(F,{value:c.value,label:c.label,disabled:p||c.disabled,checked:(C.value||[]).includes(c.value),onChange:x=>f(c.value,x)},c.value)):r})})};E.displayName="CheckboxGroup";E.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const a=F;a.Group=E;const re={title:"components/Checkbox",component:a,parameters:{controls:{expanded:!0}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},y={name:"默认非受控",render:l=>e.jsx(a,{...l}),args:{defaultChecked:!0,label:"默认非受控"}},v={name:"受控组件",args:{label:"受控组件"},render:l=>{const[s,o]=t.useState(!0),[n,r]=t.useState(!1),p=()=>{o(!s)},h=()=>{r(!n)},b=`${s?"Checked":"Unchecked"}-${n?"Disabled":"Enabled"}`,u=i=>{alert(`change：${i}`),o(i)};return e.jsxs(R,{direction:"column",gap:15,children:[e.jsx(a,{...l,checked:s,disabled:n,onChange:u,children:b}),e.jsxs(R,{gap:10,children:[e.jsx(g,{btnType:"primary",size:"sm",onClick:p,children:s?"Uncheck":"Check"}),e.jsx(g,{btnType:"primary",size:"sm",onClick:h,children:n?"Enable":"Disable"}),e.jsx(g,{btnType:"primary",size:"sm",onClick:focus,children:"Focus"})]})]})}},B={name:"ref测试",render:l=>{const s=t.useRef(null),o=()=>{var r;(r=s.current)==null||r.focus()},n=()=>{var r;(r=s.current)==null||r.blur()};return e.jsxs(R,{gap:15,direction:"column",children:[e.jsx(a,{ref:s,label:"Checkbox"}),e.jsxs(R,{gap:10,children:[e.jsx(g,{onClick:o,btnType:"primary",size:"sm",children:"Focus"}),e.jsx(g,{onClick:n,btnType:"primary",size:"sm",children:"Blur"})]})]})}},T={name:"选项组",render:l=>{const s=r=>{console.log("checked = ",r)},o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],n=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(a.Group,{options:o,defaultValue:["Pear"],onChange:s}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(a.Group,{options:n,defaultValue:["Apple"],onChange:s}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(a.Group,{disabled:!0,options:o,defaultValue:["Apple"],onChange:s})]})}},D={name:"自定义选项组",render:l=>e.jsx(a.Group,{style:{width:"300px"},children:e.jsxs(L,{children:[e.jsx(k,{span:8,children:e.jsx(a,{value:"A",children:"A"})}),e.jsx(k,{span:8,children:e.jsx(a,{value:"B",children:"B"})}),e.jsx(k,{span:8,children:e.jsx(a,{value:"C",children:"C"})}),e.jsx(k,{span:8,children:e.jsx(a,{value:"D",children:"D"})}),e.jsx(k,{span:8,children:e.jsx(a,{value:"E",children:"E"})})]})})};var P,V,_;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '默认非受控',
  render: args => <Checkbox {...args} />,
  args: {
    defaultChecked: true,
    label: '默认非受控'
  }
}`,...(_=(V=y.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var N,w,z;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '受控组件',
  args: {
    label: '受控组件'
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const toggleChecked = () => {
      setChecked(!checked);
    };
    const toggleDisable = () => {
      setDisabled(!disabled);
    };
    const label = \`\${checked ? 'Checked' : 'Unchecked'}-\${disabled ? 'Disabled' : 'Enabled'}\`;
    const change = (check: boolean) => {
      alert(\`change：\${check}\`);
      setChecked(check);
    };
    return <Flex direction="column" gap={15}>
        <Checkbox {...args} checked={checked} disabled={disabled} onChange={change}>
          {label}
        </Checkbox>
        <Flex gap={10}>
          <Button btnType="primary" size="sm" onClick={toggleChecked}>
            {!checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button btnType="primary" size="sm" onClick={toggleDisable}>
            {!disabled ? 'Disable' : 'Enable'}
          </Button>
          <Button btnType="primary" size="sm" onClick={focus}>
            Focus
          </Button>
        </Flex>
      </Flex>;
  }
}`,...(z=(w=v.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var O,q,I;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'ref测试',
  render: _args => {
    const checkboxRef = useRef<CheckboxRef>(null);
    const handleFocus = () => {
      checkboxRef.current?.focus();
    };
    const handleBlur = () => {
      checkboxRef.current?.blur();
    };
    return <Flex gap={15} direction="column">
        <Checkbox ref={checkboxRef} label="Checkbox" />
        <Flex gap={10}>
          <Button onClick={handleFocus} btnType={'primary'} size={'sm'}>
            Focus
          </Button>
          <Button onClick={handleBlur} btnType={'primary'} size={'sm'}>
            Blur
          </Button>
        </Flex>
      </Flex>;
  }
}`,...(I=(q=B.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var $,U,W;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '选项组',
  render: _args => {
    const onChange = (checkedValues: Array<string | number>) => {
      console.log('checked = ', checkedValues);
    };
    const options = [{
      label: 'Apple',
      value: 'Apple'
    }, {
      label: 'Pear',
      value: 'Pear'
    }, {
      label: 'Orange',
      value: 'Orange'
    }];
    const optionsWithDisabled = [{
      label: 'Apple',
      value: 'Apple'
    }, {
      label: 'Pear',
      value: 'Pear'
    }, {
      label: 'Orange',
      value: 'Orange',
      disabled: true
    }];
    return <>
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
        <br />
        <br />
        <Checkbox.Group options={optionsWithDisabled} defaultValue={['Apple']} onChange={onChange} />
        <br />
        <br />
        <Checkbox.Group disabled options={options} defaultValue={['Apple']} onChange={onChange} />
      </>;
  }
}`,...(W=(U=T.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,J,K;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '自定义选项组',
  render: _args => {
    return <Checkbox.Group style={{
      width: '300px'
    }}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>;
  }
}`,...(K=(J=D.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const oe=["Default","Controlled","Ref","Groups","CustomStyle"];export{v as Controlled,D as CustomStyle,y as Default,T as Groups,B as Ref,oe as __namedExportsOrder,re as default};
