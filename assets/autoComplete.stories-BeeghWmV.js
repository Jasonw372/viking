import{j as a}from"./jsx-runtime-WdPq8kIh.js";import{I as ce}from"./input-BLjeWq4J.js";import{r as l,R as le}from"./index-BpYrhlGc.js";import{T as ie}from"./transition-CHHIqEmw.js";import{c as ue}from"./index-yDvlI-tm.js";import{I as me}from"./index-vqDB34zl.js";import{T as de}from"./index-Bi1BGtNb.js";import"./index-aNvI--WW.js";import"./index-CbU3SNpG.js";import"./button-CrNKZzB6.js";function pe(n,t){l.useEffect(()=>{const r=e=>{!n.current||n.current.contains(e.target)||t()};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[n,t])}function ge(n,t=300){const[r,e]=l.useState(n);return l.useEffect(()=>{const c=setTimeout(()=>{e(n)},t);return()=>{clearTimeout(c)}},[n,t]),r}const u=l.forwardRef((n,t)=>{const{fetchSuggestions:r,value:e,defaultValue:c,onSelect:s,onChange:h,renderOption:i,...Z}=n,[L,b]=l.useState(c||""),[d,x]=l.useState([]),[ee,p]=l.useState(!1),[g,T]=l.useState(-1),[te,A]=l.useState(!1),k=ge(e!==void 0?e:L,500),D=l.useRef(null);pe(D,()=>{p(!1)});const oe=o=>i?i(o):o.value;l.useEffect(()=>{e!==void 0&&b(e)},[e]),l.useEffect(()=>{if(!k){x([]),p(!1);return}const o=r(k);o instanceof Promise?(A(!0),o.then(m=>{A(!1),x(m),p(!0)})):(x(o),p(!0))},[k]);const ne=o=>{const m=o.target.value;e===void 0&&b(m),h&&h(o)},R=o=>{e===void 0&&b(o.value),p(!1),s&&s(o)},_=o=>{o<0&&(o=0),o>=d.length&&(o=d.length-1),T(o)},ae=o=>{T(o)},re=o=>{switch(o.key){case"Enter":d[g]&&R(d[g]);break;case"ArrowUp":_(g-1);break;case"ArrowDown":_(g+1);break;case"Escape":p(!1);break}};return a.jsxs("div",{className:"auto-complete",children:[a.jsxs("div",{className:"auto-complete-input",children:[a.jsx(ce,{ref:t,value:e!==void 0?e:L,defaultValue:"",onChange:ne,onKeyDown:re,...Z}),te&&a.jsx("div",{className:"auto-complete-loading",children:a.jsx(me,{icon:"spinner",spin:!0})})]}),a.jsx(ie,{in:ee&&d.length>0,animation:"zoom-in-top",timeout:300,wrapper:!0,children:a.jsx("ul",{className:"suggestion-list",ref:D,children:d.map((o,m)=>{const se=ue("suggestion-item",{"is-active":m===g});return a.jsx("li",{className:se,onClick:()=>R(o),onMouseMove:()=>ae(m),children:oe(o)},m)})})})]})});u.displayName="AutoComplete";u.__docgenInfo={description:"AutoComplete 自动完成组件",methods:[],displayName:"AutoComplete",props:{fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:"(keyWord: string) => DataSourceType[] | Promise<DataSourceObject[]>",signature:{arguments:[{type:{name:"string"},name:"keyWord"}],return:{name:"union",raw:"DataSourceType[] | Promise<DataSourceObject[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"DataSourceObject"}],raw:"DataSourceObject[]"}],raw:"Promise<DataSourceObject[]>"}]}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => React.ReactNode",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}},composes:["Omit"]};const Le={title:"Components/AutoComplete",component:u,parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},tags:["autodocs"],argTypes:{fetchSuggestions:{description:"fetchSuggestions 是一个函数，接受一个字符串参数 keyWord，返回一个 DataSourceType 数组或一个 Promise 对象",control:!1},onSelect:{description:"onSelect 是一个可选的回调函数，当用户选择某个选项时调用",control:!1},defaultValue:{description:"defaultValue 是一个可选的字符串，表示输入框的默认值",control:"text"},renderOption:{description:"renderOption 是一个可选的函数，用于自定义选项的渲染",control:!1}}},v={name:"受控AutoComplete",render:()=>{const[n,t]=l.useState(""),r=s=>{t(s.target.value)},e=s=>{console.log("selected:",s),t(s.value)},c=s=>(console.log("fetching",s),["dog","cat","dolphin","deer","dragon","elephant","eagle"].filter(i=>i.toLowerCase().includes(s.toLowerCase())).map(i=>({value:i})));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("p",{children:["Current value: ",n]}),a.jsx(u,{value:n,onChange:r,placeholder:"try typing 'd'",fetchSuggestions:c,onSelect:e})]})}},f={args:{defaultValue:"dog"},name:"非受控AutoComplete",render:n=>{const t=le.useRef(null),r=s=>(console.log("fetching",s),["dog","cat","dolphin","deer","dragon","elephant","eagle"].filter(i=>i.toLowerCase().includes(s.toLowerCase())).map(i=>({value:i}))),e=s=>{console.log("selected:",s)},c=()=>{var s;alert(`Current value from ref:${(s=t.current)==null?void 0:s.value}`)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(u,{ref:t,placeholder:"",fetchSuggestions:r,onSelect:e}),a.jsx(de,{onClick:c,children:"Get Current Value"})]})}},S={name:"忽略大小写的AutoComplete",render:()=>{const n=["New York","London","Tokyo","Paris","Los Angeles","Beijing","Berlin"],t=r=>n.filter(e=>e.toLowerCase().includes(r.toLowerCase())).map(e=>({value:e}));return a.jsx(u,{placeholder:"Search cities...",fetchSuggestions:t})}},C={name:"带前缀的AutoComplete",render:()=>{const n=["apple","banana","orange","pear","grape","pineapple"],t=r=>n.filter(e=>e.toLowerCase().includes(r.toLowerCase())).map(e=>({value:e}));return a.jsx(u,{placeholder:"Search fruits...",fetchSuggestions:t,prefixIcon:"search"})}},y={name:"不可用的AutoComplete",render:()=>{const n=t=>["dog","cat","fish"].filter(r=>r.includes(t)).map(r=>({value:r}));return a.jsx(u,{disabled:!0,placeholder:"This is disabled",fetchSuggestions:n})}},w={name:"异步的AutoComplete",render:()=>{const n=t=>new Promise(r=>{setTimeout(()=>{const c=[{value:"john_doe",avatar_url:"https://avatars.githubusercontent.com/u/1?v=4"},{value:"john_smith",avatar_url:"https://avatars.githubusercontent.com/u/2?v=4"},{value:"johnny123",avatar_url:"https://avatars.githubusercontent.com/u/3?v=4"},{value:"john_cena",avatar_url:"https://avatars.githubusercontent.com/u/4?v=4"},{value:"john_wick",avatar_url:"https://avatars.githubusercontent.com/u/5?v=4"}].filter(s=>s.value.toLowerCase().includes(t.toLowerCase()));r(c)},1e3)});return a.jsxs("div",{style:{width:"300px"},children:[a.jsx(u,{placeholder:"输入 GitHub 用户名搜索...",fetchSuggestions:n,onSelect:t=>{console.log("selected",t)}}),a.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"提示: 尝试输入 'john' 或其他用户名"})]})}},j={name:"带有自定义渲染的AutoComplete",render:()=>{const n=[{value:"JavaScript",icon:"📘"},{value:"TypeScript",icon:"📘"},{value:"Python",icon:"🐍"},{value:"Java",icon:"☕"},{value:"C#",icon:"📘"},{value:"Ruby",icon:"💎"},{value:"Go",icon:"🔵"},{value:"PHP",icon:"🐘"},{value:"Swift",icon:"🍎"},{value:"Kotlin",icon:"🤖"},{value:"Rust",icon:"⚙️"},{value:"Scala",icon:"🔴"},{value:"Haskell",icon:"🎯"},{value:"Dart",icon:"🎯"},{value:"R",icon:"📊"},{value:"MATLAB",icon:"🔢"},{value:"Perl",icon:"🐪"},{value:"Lua",icon:"🌙"},{value:"Shell",icon:"🐚"},{value:"SQL",icon:"💾"}],t=e=>n.filter(c=>c.value.toLowerCase().startsWith(e.toLowerCase())),r=e=>{const c=e;return a.jsxs("div",{children:[a.jsx("span",{role:"img","aria-label":"icon",children:c.icon})," ",c.value]})};return a.jsx(u,{placeholder:"搜索编程语言...",fetchSuggestions:t,renderOption:r,onChange:e=>{console.log(e.target.value)},onSelect:e=>{console.log(e)}})}};var O,P,I;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '受控AutoComplete',
  render: () => {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    const handleSelect = (item: DataSourceType) => {
      console.log('selected:', item);
      setValue(item.value);
    };
    const fetchSuggestions = (keyword: string) => {
      console.log('fetching', keyword);
      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals.filter(item => item.toLowerCase().includes(keyword.toLowerCase())).map(item => ({
        value: item
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <p>Current value: {value}</p>
        <AutoComplete value={value} onChange={handleChange} placeholder="try typing 'd'" fetchSuggestions={fetchSuggestions} onSelect={handleSelect} />
      </div>;
  }
}`,...(I=(P=v.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var V,E,N;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 'dog'
  },
  name: '非受控AutoComplete',
  render: _args => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const fetchSuggestions = (keyword: string) => {
      console.log('fetching', keyword);
      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals.filter(item => item.toLowerCase().includes(keyword.toLowerCase())).map(item => ({
        value: item
      }));
    };
    const handleSelect = (item: DataSourceType) => {
      console.log('selected:', item);
    };
    const handleClick = () => {
      alert(\`Current value from ref:\${inputRef.current?.value}\`);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <AutoComplete ref={inputRef} placeholder="" fetchSuggestions={fetchSuggestions} onSelect={handleSelect} />
        <Button onClick={handleClick}>Get Current Value</Button>
      </div>;
  }
}`,...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var W,B,H;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '忽略大小写的AutoComplete',
  render: () => {
    const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles', 'Beijing', 'Berlin'];
    const fetchSuggestions = (keyword: string) => {
      return cities.filter(city => city.toLowerCase().includes(keyword.toLowerCase())).map(city => ({
        value: city
      }));
    };
    return <AutoComplete placeholder="Search cities..." fetchSuggestions={fetchSuggestions} />;
  }
}`,...(H=(B=S.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,U,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '带前缀的AutoComplete',
  render: () => {
    const fruits = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];
    const fetchSuggestions = (keyword: string) => {
      return fruits.filter(fruit => fruit.toLowerCase().includes(keyword.toLowerCase())).map(fruit => ({
        value: fruit
      }));
    };
    return <AutoComplete placeholder="Search fruits..." fetchSuggestions={fetchSuggestions} prefixIcon="search" />;
  }
}`,...(q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '不可用的AutoComplete',
  render: () => {
    const fetchSuggestions = (keyword: string) => {
      return ['dog', 'cat', 'fish'].filter(item => item.includes(keyword)).map(item => ({
        value: item
      }));
    };
    return <AutoComplete disabled placeholder="This is disabled" fetchSuggestions={fetchSuggestions} />;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var z,F,Q;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '异步的AutoComplete',
  render: () => {
    const handleFetch = (query: string) => {
      return new Promise<DataSourceType[]>(resolve => {
        setTimeout(() => {
          const mockUsers = [{
            value: 'john_doe',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
          }, {
            value: 'john_smith',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4'
          }, {
            value: 'johnny123',
            avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4'
          }, {
            value: 'john_cena',
            avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4'
          }, {
            value: 'john_wick',
            avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4'
          }];
          const results = mockUsers.filter(user => user.value.toLowerCase().includes(query.toLowerCase()));
          resolve(results);
        }, 1000);
      });
    };
    return <div style={{
      width: '300px'
    }}>
        <AutoComplete placeholder="输入 GitHub 用户名搜索..." fetchSuggestions={handleFetch} onSelect={item => {
        console.log('selected', item);
      }} />
        <p style={{
        fontSize: '12px',
        color: '#666'
      }}>提示: 尝试输入 'john' 或其他用户名</p>
      </div>;
  }
}`,...(Q=(F=w.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var Y,$,X;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '带有自定义渲染的AutoComplete',
  render: () => {
    interface ProgrammingLanguageItem {
      value: string;
      icon: string;
    }
    const languages = [{
      value: 'JavaScript',
      icon: '📘'
    }, {
      value: 'TypeScript',
      icon: '📘'
    }, {
      value: 'Python',
      icon: '🐍'
    }, {
      value: 'Java',
      icon: '☕'
    }, {
      value: 'C#',
      icon: '📘'
    }, {
      value: 'Ruby',
      icon: '💎'
    }, {
      value: 'Go',
      icon: '🔵'
    }, {
      value: 'PHP',
      icon: '🐘'
    }, {
      value: 'Swift',
      icon: '🍎'
    }, {
      value: 'Kotlin',
      icon: '🤖'
    }, {
      value: 'Rust',
      icon: '⚙️'
    }, {
      value: 'Scala',
      icon: '🔴'
    }, {
      value: 'Haskell',
      icon: '🎯'
    }, {
      value: 'Dart',
      icon: '🎯'
    }, {
      value: 'R',
      icon: '📊'
    }, {
      value: 'MATLAB',
      icon: '🔢'
    }, {
      value: 'Perl',
      icon: '🐪'
    }, {
      value: 'Lua',
      icon: '🌙'
    }, {
      value: 'Shell',
      icon: '🐚'
    }, {
      value: 'SQL',
      icon: '💾'
    }];
    const fetchSuggestions = (keyword: string) => {
      return languages.filter(lang => lang.value.toLowerCase().startsWith(keyword.toLowerCase()));
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithIcon = item as DataSourceType<ProgrammingLanguageItem>;
      return <div>
          <span role="img" aria-label="icon">
            {itemWithIcon.icon}
          </span>{' '}
          {itemWithIcon.value}
        </div>;
    };
    return <AutoComplete placeholder="搜索编程语言..." fetchSuggestions={fetchSuggestions} renderOption={renderOption} onChange={e => {
      console.log(e.target.value);
    }} onSelect={item => {
      console.log(item);
    }} />;
  }
}`,...(X=($=j.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const Te=["Controlled","Uncontrolled","CitySearch","WithIcon","Disabled","AsyncSearch","CustomRender"];export{w as AsyncSearch,S as CitySearch,v as Controlled,j as CustomRender,y as Disabled,f as Uncontrolled,C as WithIcon,Te as __namedExportsOrder,Le as default};
