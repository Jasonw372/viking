"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5386],{9463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>m,frontMatter:()=>p,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"dataEntry/autoComplete","title":"AutoComplete \u81ea\u52a8\u5b8c\u6210","description":"AutoComplete \u7ec4\u4ef6\u63d0\u4f9b\u81ea\u52a8\u5b8c\u6210\u529f\u80fd\uff0c\u6839\u636e\u7528\u6237\u7684\u8f93\u5165\u5efa\u8bae\u9009\u9879\u3002","source":"@site/docs/dataEntry/autoComplete.mdx","sourceDirName":"dataEntry","slug":"/dataEntry/autoComplete","permalink":"/viking/docs/dataEntry/autoComplete","draft":false,"unlisted":false,"editUrl":"#/docs/dataEntry/autoComplete.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636e\u5f55\u5165","permalink":"/viking/docs/category/\u6570\u636e\u5f55\u5165"},"next":{"title":"Checkbox \u590d\u9009\u6846","permalink":"/viking/docs/dataEntry/checkbox"}}');var l=t(7557),o=t(1197),i=t(8225),r=t(1275);const s=[{value:"JavaScript",icon:"\ud83d\udcd8"},{value:"TypeScript",icon:"\ud83d\udcd8"},{value:"Python",icon:"\ud83d\udc0d"},{value:"Java",icon:"\u2615"},{value:"C#",icon:"\ud83d\udcd8"},{value:"Ruby",icon:"\ud83d\udc8e"},{value:"Go",icon:"\ud83d\udd35"},{value:"PHP",icon:"\ud83d\udc18"},{value:"Swift",icon:"\ud83c\udf4e"},{value:"Kotlin",icon:"\ud83e\udd16"},{value:"Rust",icon:"\u2699\ufe0f"},{value:"Scala",icon:"\ud83d\udd34"},{value:"Haskell",icon:"\ud83c\udfaf"},{value:"Dart",icon:"\ud83c\udfaf"},{value:"R",icon:"\ud83d\udcca"},{value:"MATLAB",icon:"\ud83d\udd22"},{value:"Perl",icon:"\ud83d\udc2a"},{value:"Lua",icon:"\ud83c\udf19"},{value:"Shell",icon:"\ud83d\udc1a"},{value:"SQL",icon:"\ud83d\udcbe"}],c=()=>{const[e,n]=(0,i.useState)("");return(0,l.jsxs)("div",{style:{width:"300px",margin:"50px auto"},children:[(0,l.jsx)(r.j9,{placeholder:"\u641c\u7d22\u7f16\u7a0b\u8bed\u8a00...",fetchSuggestions:e=>s.filter((n=>n.value.toLowerCase().startsWith(e.toLowerCase()))),renderOption:e=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("span",{role:"img","aria-label":"icon",children:e.icon}),(0,l.jsx)("span",{children:e.value})]}),onChange:e=>n(e.target.value),onSelect:e=>console.log("\u9009\u62e9:",e)}),(0,l.jsxs)("p",{children:["\u8f93\u5165\u503c: ",e]})]})},d=["Apple","Banana","Orange"],u=()=>{const[e,n]=(0,i.useState)("");return(0,l.jsx)("div",{style:{width:"300px",margin:"50px auto"},children:(0,l.jsx)(r.j9,{placeholder:"\u8bf7\u8f93\u5165...",fetchSuggestions:e=>d.filter((n=>n.toLowerCase().includes(e.toLowerCase()))).map((e=>({value:e}))),value:e,onChange:e=>n(e.target.value),onSelect:e=>{n(e.value)}})})},p={},h="AutoComplete \u81ea\u52a8\u5b8c\u6210",v={},x=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"\u9ed8\u8ba4\u7528\u6cd5",id:"\u9ed8\u8ba4\u7528\u6cd5",level:3},{value:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6837\u5f0f",id:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6837\u5f0f",level:3},{value:"API",id:"api",level:2},{value:"AutoComplete Props",id:"autocomplete-props",level:3},{value:"DataSourceType",id:"datasourcetype",level:3}];function g(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"autocomplete-\u81ea\u52a8\u5b8c\u6210",children:"AutoComplete \u81ea\u52a8\u5b8c\u6210"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AutoComplete"})," \u7ec4\u4ef6\u63d0\u4f9b\u81ea\u52a8\u5b8c\u6210\u529f\u80fd\uff0c\u6839\u636e\u7528\u6237\u7684\u8f93\u5165\u5efa\u8bae\u9009\u9879\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { AutoComplete } from 'viking-design';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4ee3\u7801\u6f14\u793a",children:"\u4ee3\u7801\u6f14\u793a"}),"\n",(0,l.jsx)(n.h3,{id:"\u9ed8\u8ba4\u7528\u6cd5",children:"\u9ed8\u8ba4\u7528\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { AutoComplete } from 'viking-design';\nimport React, { useState } from 'react';\n\n\nconst options = ['Apple', 'Banana', 'Orange'];\n\nconst DefaultAutoComplete = () => {\n  const [value, setValue] = useState('');\n  const handleSearch = (query: string) => {\n    return options\n      .filter(option => option.toLowerCase().includes(query.toLowerCase()))\n      .map(option => ({ value: option }));\n  };\n\n  return (\n    <div style={{width: '300px', margin: '50px auto'}}>\n      <AutoComplete\n        placeholder=\"\u8bf7\u8f93\u5165...\"\n        fetchSuggestions={handleSearch}\n        value={value}\n        onChange={e => setValue(e.target.value)}\n        onSelect={item => {\n          setValue(item.value);\n        }}\n      />\n    </div>\n  );\n};\n\nexport default DefaultAutoComplete;\n"})}),"\n",(0,l.jsx)(u,{}),"\n",(0,l.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6837\u5f0f",children:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6837\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import React, { useState } from 'react';\nimport {AutoComplete} from 'viking-design';\nimport { DataSourceType } from 'viking-design/components/AutoComplete';\n\ninterface ProgrammingLanguageItem {\n  value: string;\n  icon: string;\n}\n\nconst languages: ProgrammingLanguageItem[] = [\n  { value: 'JavaScript', icon: '\ud83d\udcd8' },\n  { value: 'TypeScript', icon: '\ud83d\udcd8' },\n  { value: 'Python', icon: '\ud83d\udc0d' },\n  { value: 'Java', icon: '\u2615' },\n  { value: 'C#', icon: '\ud83d\udcd8' },\n  { value: 'Ruby', icon: '\ud83d\udc8e' },\n  { value: 'Go', icon: '\ud83d\udd35' },\n  { value: 'PHP', icon: '\ud83d\udc18' },\n  { value: 'Swift', icon: '\ud83c\udf4e' },\n  { value: 'Kotlin', icon: '\ud83e\udd16' },\n  { value: 'Rust', icon: '\u2699\ufe0f' },\n  { value: 'Scala', icon: '\ud83d\udd34' },\n  { value: 'Haskell', icon: '\ud83c\udfaf' },\n  { value: 'Dart', icon: '\ud83c\udfaf' },\n  { value: 'R', icon: '\ud83d\udcca' },\n  { value: 'MATLAB', icon: '\ud83d\udd22' },\n  { value: 'Perl', icon: '\ud83d\udc2a' },\n  { value: 'Lua', icon: '\ud83c\udf19' },\n  { value: 'Shell', icon: '\ud83d\udc1a' },\n  { value: 'SQL', icon: '\ud83d\udcbe' },\n];\n\nconst CustomAutoComplete: React.FC = () => {\n  const [inputValue, setInputValue] = useState('');\n\n  // \u83b7\u53d6\u5efa\u8bae\u9879\n  const fetchSuggestions = (keyword: string): ProgrammingLanguageItem[] => {\n    return languages.filter(lang => lang.value.toLowerCase().startsWith(keyword.toLowerCase()));\n  };\n\n  // \u6e32\u67d3\u81ea\u5b9a\u4e49\u9009\u9879\n  const renderOption = (item: DataSourceType<ProgrammingLanguageItem>) => {\n    return (\n      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>\n        <span role=\"img\" aria-label=\"icon\">{item.icon}</span>\n        <span>{item.value}</span>\n      </div>\n    );\n  };\n\n  return (\n    <div style={{ width: '300px', margin: '50px auto' }}>\n      <AutoComplete\n        placeholder=\"\u641c\u7d22\u7f16\u7a0b\u8bed\u8a00...\"\n        fetchSuggestions={fetchSuggestions}\n        renderOption={renderOption}\n        onChange={e => setInputValue(e.target.value)}\n        onSelect={item => console.log('\u9009\u62e9:', item)}\n      />\n      <p>\u8f93\u5165\u503c: {inputValue}</p>\n    </div>\n  );\n};\n\nexport default CustomAutoComplete;\n"})}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,l.jsx)(n.h3,{id:"autocomplete-props",children:"AutoComplete Props"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5c5e\u6027"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fetchSuggestions"}),(0,l.jsx)(n.td,{children:"\u8fd4\u56de\u8f93\u5165\u5efa\u8bae\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u62ff\u5230\u5f53\u524d\u7684\u8f93\u5165\uff0c\u8fd4\u56de\u540c\u6b65\u7684\u6570\u7ec4\u6216\u8005 Promise"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"(keyword: string) => DataSourceType[] | Promise<DataSourceType[]>"})}),(0,l.jsx)(n.td,{children:"-"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"onSelect"}),(0,l.jsx)(n.td,{children:"\u9009\u62e9\u9009\u9879\u65f6\u89e6\u53d1\u7684\u56de\u8c03"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"(item: DataSourceType) => void"})}),(0,l.jsx)(n.td,{children:"-"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"defaultValue"}),(0,l.jsx)(n.td,{children:"\u8f93\u5165\u6846\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:"-"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"renderOption"}),(0,l.jsx)(n.td,{children:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u4e0b\u62c9\u9879\uff0c\u652f\u6301 JSX"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"(item: DataSourceType) => ReactNode"})}),(0,l.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u9664\u4e86\u4e0a\u8ff0\u5c5e\u6027\u5916\uff0cAutoComplete \u7ec4\u4ef6\u8fd8\u652f\u6301 Input \u7ec4\u4ef6\u7684\u6240\u6709\u5c5e\u6027\uff08\u9664\u4e86 ",(0,l.jsx)(n.code,{children:"onSelect"})," \u548c ",(0,l.jsx)(n.code,{children:"defaultValue"}),"\uff09\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"datasourcetype",children:"DataSourceType"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"interface DataSourceObject {\n  value: string;\n  [key: string]: any;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"DataSourceType"})," \u662f\u4e00\u4e2a\u6cdb\u578b\u7c7b\u578b\uff0c\u5b83\u7ee7\u627f\u81ea ",(0,l.jsx)(n.code,{children:"DataSourceObject"}),"\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f20\u5165\u4efb\u4f55\u5305\u542b ",(0,l.jsx)(n.code,{children:"value"})," \u5c5e\u6027\u7684\u5bf9\u8c61\u4f5c\u4e3a\u6570\u636e\u6e90\u3002\u4f8b\u5982\uff1a"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}}}]);