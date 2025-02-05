import{R as o}from"./index-BpYrhlGc.js";import{c as G}from"./index-yDvlI-tm.js";const p=o.forwardRef((c,d)=>{const{prefixCls:e="flex",className:v,style:f,children:w,flex:t,direction:s,wrap:m,align:i,justify:u,gap:n,vertical:y=!1,component:g="div",...x}=c,a={...f};if(t&&(a.flex=t),n){const r=l=>typeof l=="number"?l:{sm:8,md:16,lg:24}[l]||0;if(Array.isArray(n)){const[l,F]=n;a.rowGap=r(l),a.columnGap=r(F)}else a.gap=r(n)}const b=G(e,{[`${e}-${s}`]:s,[`${e}-wrap-${m}`]:m,[`${e}-align-${i}`]:i,[`${e}-justify-${u}`]:u,[`${e}-vertical`]:y},v);return o.createElement(g,{ref:d,className:b,style:a,...x},w)});p.displayName="Flex";p.__docgenInfo={description:"Flex组件",methods:[],displayName:"Flex",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""},wrap:{required:!1,tsType:{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:`| 'start'
| 'end'
| 'center'
| 'space-around'
| 'space-between'
| 'space-evenly'`,elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"}]},description:""},flex:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:"FlexGap | [FlexGap, FlexGap]",elements:[{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},{name:"tuple",raw:"[FlexGap, FlexGap]",elements:[{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]}]}]},description:""},component:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:""}}};export{p as F};
