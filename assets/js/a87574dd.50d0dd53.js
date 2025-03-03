"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8221],{1197:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(8225);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}},2551:(e,n,s)=>{s.d(n,{eu:()=>I,$n:()=>k,Sc:()=>N,so:()=>$,xA:()=>P,In:()=>u,pd:()=>h,W1:()=>q,$x:()=>U,m_:()=>ne});var t=s(7096),i=s(3158),l=s(8225),a=s(5652),c=s(3698),r=s.n(c),o=s(7557);const d=e=>{const{className:n,theme:s,...t}=e,i=r()("icon",n,{[`icon-${s}`]:s});return(0,o.jsx)(a.g,{className:i,...t,"data-testid":"icon"})};t.Yv.add(i.X7I);const u=d,h=(0,l.forwardRef)(((e,n)=>{const{disabled:s,size:t,prefixIcon:i,suffixIcon:a,prepend:c,append:d,style:h,onChange:p,value:m,defaultValue:x,...f}=e,[v,j]=(0,l.useState)(x||""),g=r()("input-wrapper",{[`input-size-${t}`]:t,"is-disabled":s,"input-group":c||d,"input-group-append":!!d,"input-group-prepend":!!c,"input-prefix":!!i,"input-suffix":!!a});return(0,o.jsxs)("div",{className:g,style:h,children:[c&&(0,o.jsx)("div",{className:"nested-prepend",children:c}),(0,o.jsxs)("div",{className:"input-inner-wrapper",children:[i&&(0,o.jsx)("div",{className:"icon-prefix",children:(0,o.jsx)(u,{icon:i})}),(0,o.jsx)("input",{ref:n,className:"input-inner",disabled:s,value:void 0!==m?m:v,onChange:e=>{p&&p(e),void 0===m&&j(e.target.value)},...f}),a&&(0,o.jsx)("div",{className:"icon-suffix",children:(0,o.jsx)(u,{icon:a})})]}),d&&(0,o.jsx)("div",{className:"nested-append",children:d})]})}));var p=s(1683);const m=e=>{const{children:n,classNames:s,animation:t,wrapper:i,unmountOnExit:a=!0,appear:c=!0,...r}=e,d=l.useRef(null);return(0,o.jsx)(p.A,{classNames:s||t,unmountOnExit:a,appear:c,nodeRef:d,addEndListener:()=>{},...r,children:i?(0,o.jsx)("div",{ref:d,children:n}):l.cloneElement(n,{ref:d})})};const x=(0,l.forwardRef)(((e,n)=>{const{fetchSuggestions:s,value:t,defaultValue:i,onSelect:a,onChange:c,renderOption:d,...p}=e,[x,f]=(0,l.useState)(i||""),[v,j]=(0,l.useState)([]),[g,y]=(0,l.useState)(!1),[b,N]=(0,l.useState)(-1),[w,I]=(0,l.useState)(!1),k=function(e,n){void 0===n&&(n=300);const[s,t]=(0,l.useState)(e);return(0,l.useEffect)((()=>{const s=setTimeout((()=>{t(e)}),n);return()=>{clearTimeout(s)}}),[e,n]),s}(void 0!==t?t:x,500),C=(0,l.useRef)(null);!function(e,n){(0,l.useEffect)((()=>{const s=s=>{e.current&&!e.current.contains(s.target)&&n()};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}}),[e,n])}(C,(()=>{y(!1)}));const $=e=>d?d(e):e.value;(0,l.useEffect)((()=>{void 0!==t&&f(t)}),[t]),(0,l.useEffect)((()=>{if(!k)return j([]),void y(!1);const e=s(k);e instanceof Promise?(I(!0),e.then((e=>{I(!1),j(e),y(!0)}))):(j(e),y(!0))}),[k]);const S=e=>{void 0===t&&f(e.value),y(!1),a&&a(e)},z=e=>{e<0&&(e=0),e>=v.length&&(e=v.length-1),N(e)};return(0,o.jsxs)("div",{className:"auto-complete",children:[(0,o.jsxs)("div",{className:"auto-complete-input",children:[(0,o.jsx)(h,{ref:n,value:void 0!==t?t:x,defaultValue:"",onChange:e=>{const n=e.target.value;void 0===t&&f(n),c&&c(e)},onKeyDown:e=>{switch(e.key){case"Enter":v[b]&&S(v[b]);break;case"ArrowUp":z(b-1);break;case"ArrowDown":z(b+1);break;case"Escape":y(!1)}},...p}),w&&(0,o.jsx)("div",{className:"auto-complete-loading",children:(0,o.jsx)(u,{icon:"spinner",spin:!0})})]}),(0,o.jsx)(m,{in:g&&v.length>0,animation:"zoom-in-top",timeout:300,wrapper:!0,children:(0,o.jsx)("ul",{className:"suggestion-list",ref:C,children:v.map(((e,n)=>{const s=r()("suggestion-item",{"is-active":n===b});return(0,o.jsx)("li",{className:s,onClick:()=>S(e),onMouseMove:()=>(e=>{N(e)})(n),children:$(e)},n)}))})})]})}));x.displayName="AutoComplete";const f=(0,l.forwardRef)(((e,n)=>{const{label:s,checked:t,defaultChecked:i,disabled:a,children:c,onChange:d,className:u,...h}=e,p=void 0!==t,[m,x]=(0,l.useState)(i||!1),f=r()("checkbox",{"is-disabled":a}),v=r()("checkbox-inner",u);(0,l.useEffect)((()=>{p&&x(t)}),[t,p]);const j=(0,l.useRef)(null);return(0,l.useImperativeHandle)(n,(()=>({focus:()=>{j.current?.focus()},blur:()=>{j.current?.blur()}}))),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("input",{...h,type:"checkbox",checked:p?t:m,onChange:e=>{const n=e.target.checked;a||(p||x(n),d?.(n))},className:v,ref:j,disabled:a}),(c||s)&&(0,o.jsx)("div",{className:"checkbox-label",children:c||s})]})}));f.displayName="Checkbox";const v=f,j=(0,l.createContext)({}),g=e=>{let{options:n,value:s,defaultValue:t,onChange:i,children:a,disabled:c=!1,className:d,style:u}=e;const h=void 0!==s,[p,m]=(0,l.useState)(t||[]),x=(e,n)=>{const s=n?[...p||[],e]:(p||[]).filter((n=>n!==e));h||m(s),i?.(s)};(0,l.useEffect)((()=>{h&&s&&m(s)}),[s,h]);const f={value:h?s:p,onChange:x},g=r()("check-group",d);return(0,o.jsx)(j.Provider,{value:f,children:(0,o.jsx)("div",{className:g,style:u,children:n?n.map((e=>(0,o.jsx)(v,{value:e.value,label:e.label,disabled:c||e.disabled,checked:(f.value||[]).includes(e.value),onChange:n=>x(e.value,n)},e.value))):a})})};g.displayName="CheckboxGroup";const y=g,b=v;b.Group=y;const N=b,w=["large","default","small","xl","2xl"],I=e=>{const{size:n="default",shape:s="circle",src:t,alt:i,children:a,className:c,onError:d}=e,u=r()("avatar",c,{[`avatar-${n}`]:"string"==typeof n&&w.includes(n),[`avatar-${s}`]:s}),[h,p]=l.useState(!0);return(0,o.jsx)("span",{className:u,style:{width:"number"==typeof n?`${n}px`:void 0,height:"number"==typeof n?`${n}px`:void 0},children:t&&h?(0,o.jsx)("img",{src:t,alt:i,onError:()=>{p(!1),d?.()},style:{width:"100%",height:"100%",objectFit:"cover"}}):"string"==typeof a?(0,o.jsx)("span",{style:{whiteSpace:"nowrap"},children:a}):a})},k=e=>{const{className:n,disabled:s=!1,size:t,btnType:i="default",circle:l=!1,plain:a=!1,children:c,href:d,...u}=e,h=r()("btn",n,{[`btn-${i}`]:i,[`btn-${t}`]:t,"btn-circle":l,"btn-plain":a,disabled:"link"===i&&s});return"link"===i?(0,o.jsx)("a",{className:h,href:d,...u,children:"string"==typeof c?c.trim():c}):(0,o.jsx)("button",{className:h,disabled:s,...u,children:"string"==typeof c?c.trim():c})},C=l.forwardRef(((e,n)=>{const{prefixCls:s="flex",className:t,style:i,children:a,flex:c,direction:o,wrap:d,align:u,justify:h,gap:p,vertical:m=!1,component:x="div",...f}=e,v={...i};if(c&&(v.flex=c),p){const e=e=>"number"==typeof e?e:{sm:8,md:16,lg:24}[e]||0;if(Array.isArray(p)){const[n,s]=p;v.rowGap=e(n),v.columnGap=e(s)}else v.gap=e(p)}const j=r()(s,{[`${s}-${o}`]:o,[`${s}-wrap-${d}`]:d,[`${s}-align-${u}`]:u,[`${s}-justify-${h}`]:h,[`${s}-vertical`]:m},t);return l.createElement(x,{ref:n,className:j,style:v,...f},a)}));C.displayName="Flex";const $=C;var S=s(3726),z=s(9500),F=s(3094);function V(e,n){const{name:s,value:t}=n.payload;switch(n.type){case"addField":return{...e,[s]:{name:s,...t}};case"updateValue":return{...e,[s]:{...e[s],value:t}};case"updateValidateResult":{const{isValid:n,errors:i}=t;return{...e,[s]:{...e[s],isValid:n,errors:i}}}case"updateField":return{...e,[s]:{...e[s],...t}};default:return e}}const A=function(e){const[n,s]=(0,l.useState)({isValid:!1,isSubmitting:!1,errors:{}}),[t,i]=(0,l.useReducer)(V,{}),a=e=>t[e]?.value,c=e=>e.map((e=>"function"==typeof e?e({getFieldValue:a}):e));return{form:n,fields:t,dispatch:i,validateField:async e=>{const{value:n,rules:s}=t[e],l=c(s),a={[e]:l},r={[e]:n},o=new S.A(a);try{await o.validate(r,{first:!0}),i({type:"updateValidateResult",payload:{name:e,value:{isValid:!0,errors:[]}}})}catch(d){const{errors:n}=d;i({type:"updateValidateResult",payload:{name:e,value:{isValid:!1,errors:Array.isArray(n)?n:[]}}})}},validateAllFields:async()=>{let e=!0,l={};const a=(0,F.A)(t,(e=>e.value)),r=(0,F.A)(t,(e=>c(e.rules))),o=new S.A(r);s({...n,isSubmitting:!0});try{await o.validate(a)}catch(d){e=!1;l=d.fields,(0,z.A)(t,((e,n)=>{if(l[n]){const e=l[n];i({type:"updateValidateResult",payload:{name:n,value:{isValidate:!1,errors:e}}})}else e.rules.length>0&&!l[n]&&i({type:"updateValidateResult",payload:{name:n,value:{isValidate:!0}}})}))}finally{return s({...n,isSubmitting:!1,isValid:e,errors:l}),{isValid:e,errors:l,values:a}}},getFieldValue:a,getFieldsValue:()=>(0,F.A)(t,(e=>e.value)),setFieldValue:(e,n)=>{t[e]&&i({type:"updateValue",payload:{name:e,value:{value:n}}})},resetFields:()=>{e&&((0,z.A)(t,((n,s)=>{i({type:"updateField",payload:{name:s,value:{value:e[s]||"",isValid:!0,errors:[]}}})})),setTimeout((()=>{s({isValid:!1,isSubmitting:!0,errors:{}})}),0))}}},E=(0,l.createContext)({}),R=e=>{const{label:n,name:s,children:t,valuePropName:i="value",trigger:a="onChange",getValueFromEvent:c=e=>e.target.value,rules:d=[],validateTrigger:u="onBlur"}=e,{dispatch:h,fields:p,initialValues:m,validateField:x}=(0,l.useContext)(E),f=r()("row",{"no-label":!n}),v=p[s],j=v?.value,g=v?.errors,y=d?.some((e=>"function"!=typeof e&&e.required)),b=g&&g.length>0,N=r()({"form-item-required":y}),w=r()("form-item-control",{"form-item-has-error":b}),I={};I[i]=j??"",I[a]=e=>{const n=c(e);h({type:"updateValue",payload:{name:s,value:n}})},d.length>0&&(I[u]=async()=>{await x(s)});const k=l.Children.toArray(t);if(k.length>1)return console.warn("FormItem only accepts one child."),null;if(!k.length)return console.error("FormItem must have one child."),null;const C=k[0];l.isValidElement(C)||console.error("Child Component must be a valid React element.");const $=l.cloneElement(C,{...C.props,...I}),S=m?.[s]??"";return(0,l.useEffect)((()=>{h({type:"addField",payload:{name:s,value:{label:n,name:s,value:S,rules:d,errors:[],isValid:!0}}})}),[]),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("div",{className:"form-item-label",children:n&&(0,o.jsx)("label",{title:n,className:N,children:n})}),(0,o.jsxs)("div",{className:"form-item",children:[(0,o.jsx)("div",{className:w,children:$}),b&&(0,o.jsx)("div",{className:"form-item-explain",children:(0,o.jsx)("span",{children:g[0].message})})]})]})},M=(0,l.forwardRef)(((e,n)=>{const{name:s="form",children:t,initialValues:i,onFinish:a,onFinishFailed:c,...r}=e,{form:d,fields:u,dispatch:h,...p}=A(i),{validateField:m,validateAllFields:x}=p,f={dispatch:h,fields:u,initialValues:i,validateField:m};let v;v="function"==typeof t?t(d):t;return(0,l.useImperativeHandle)(n,(()=>({...p}))),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(E.Provider,{value:f,children:(0,o.jsx)("form",{name:s,...r,className:"form",onSubmit:async e=>{e.preventDefault(),e.stopPropagation();const{isValid:n,errors:s,values:t}=await x();n&&a?a(t):!n&&c&&c(t,s)},children:v})})})}));M.Item=R;const P={Row:e=>{let{children:n,gutter:s=0,justify:t="start",align:i="top",className:a,...c}=e;const d=r()("el-row",{[`is-justify-${t}`]:t,[`is-align-${i}`]:i},a),u={...c.style||{},display:"flex",flexWrap:"wrap"};if(Array.isArray(s)){const[e,n]=s.map(Math.abs);u.marginLeft=`-${e/2}px`,u.marginRight=`-${e/2}px`,u.rowGap=`${n}px`}else"number"==typeof s&&(u.marginLeft=`-${s/2}px`,u.marginRight=`-${s/2}px`);return(0,o.jsx)("div",{className:d,style:u,...c,children:l.Children.map(n,(e=>{if(!l.isValidElement(e))return e;const n={...e.props.style||{}};if(Array.isArray(s)){const[e]=s;n.paddingLeft=e/2+"px",n.paddingRight=e/2+"px"}else"number"==typeof s&&(n.paddingLeft=s/2+"px",n.paddingRight=s/2+"px");return l.cloneElement(e,{...e.props,style:n})}))})},Col:e=>{let{children:n,span:s,offset:t,pull:i,push:l,xs:a,sm:c,md:d,lg:u,xl:h,className:p,...m}=e;const x=r()("el-col",{[`el-col-${s}`]:s,[`el-col-offset-${t}`]:t,[`el-col-pull-${i}`]:i,[`el-col-push-${l}`]:l},p);s&&(s<0||s>24)&&console.warn("span should be between 0 and 24"),t&&(t<0||t>24)&&console.warn("offset should be between 0 and 24");const f=["xs","sm","md","lg","xl"].reduce(((e,n)=>{const s={xs:a,sm:c,md:d,lg:u,xl:h}[n];if(!s)return e;if("number"==typeof s)e[`el-col-${n}-${s}`]=!0;else if("object"==typeof s){const t=s;t.span&&(e[`el-col-${n}-${t.span}`]=!0),t.offset&&(e[`el-col-${n}-offset-${t.offset}`]=!0)}return e}),{});return(0,o.jsx)("div",{className:r()(x,f),...m,children:n})}},O=(0,l.createContext)({index:"0"}),T=e=>l.Children.map(e,((e,n)=>{const s=e,{displayName:t}=s.type;if("Menu.Item"===t||"Menu.SubMenu"===t)return l.cloneElement(s,{index:n.toString()});console.error("Warning: Menu has a child which is not a MenuItem or SubMenu component")})),D=e=>{const{className:n,mode:s="horizontal",style:t,children:i,defaultIndex:a="0",selectedIndex:c,defaultOpenSubMenus:d=[],onSelect:u,onClick:h,...p}=e,[m,x]=(0,l.useState)(a),f={index:void 0!==c?c:m,onSelect:e=>{void 0===c&&x(e),u?.(e)},onClick:h,mode:s,defaultOpenSubMenus:d},v=r()("menu",n,{"menu-vertical":"vertical"===s,"menu-horizontal":"horizontal"===s});return(0,o.jsx)("ul",{className:v,style:t,"data-testid":"test-menu",...p,children:(0,o.jsx)(O.Provider,{value:f,children:T(i)})})};D.displayName="Menu";const L=D,X=e=>{const{className:n,index:s,disabled:t,style:i,children:a}=e,{index:c,onSelect:d,onClick:u}=(0,l.useContext)(O),h=r()("menu-item",n,{"is-disabled":t,"is-active":s===c});return(0,o.jsx)("li",{className:h,style:i,onClick:()=>{d&&!t&&"string"==typeof s&&d(s),u&&s&&u(s)},children:a})};X.displayName="Menu.Item";const Y=X,B=e=>{const{index:n,title:s,className:t,children:i}=e,{mode:a,index:c,defaultOpenSubMenus:d}=(0,l.useContext)(O),h=!(!n||"vertical"!==a)&&d.includes(n),[p,x]=(0,l.useState)(h),f=r()("menu-item submenu-item",t,{"is-active":c.startsWith(n||""),"is-vertical":"vertical"===a});let v;const j=(e,n)=>{clearTimeout(v),e.preventDefault(),v=setTimeout((()=>{x(n)}),300)},g="vertical"===a?{onClick:e=>{e.preventDefault(),x(!p)}}:{},y="vertical"!==a?{onMouseEnter:e=>{j(e,!0)},onMouseLeave:e=>{j(e,!1)}}:{};return(0,o.jsxs)("li",{className:f,...y,children:[(0,o.jsxs)("div",{className:"submenu-title",...g,children:[s,(0,o.jsx)(u,{className:"arrow-icon",icon:"angle-down"})]}),(e=>{const s=r()("submenu-container",{"menu-opened":p}),t=l.Children.map(e,((e,s)=>{const t=e;if("Menu.Item"===t.type.displayName)return l.cloneElement(t,{index:`${n}-${s}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")}));return(0,o.jsx)(m,{in:p,timeout:300,classNames:"zoom-in-top",appear:!0,unmountOnExit:!0,children:(0,o.jsx)("ul",{className:s,children:t})})})(i)]},n)};B.displayName="Menu.SubMenu";const G=B,W=L;W.Item=Y,W.SubMenu=G;const q=W,H={sm:8,md:16,lg:24},_=e=>{const{className:n,style:s,size:t="sm",align:i,direction:a="horizontal",wrap:c=!1,split:d,children:u,compact:h=!1}=e,p=(e=>"string"==typeof e?H[e]:e)(t),m={"--space-gap":`${p}px`},x=r()("space",n,`space-${a}`,{[`space-align-${i}`]:i,"space-wrap":c,"space-compact":h}),f=l.Children.toArray(u).filter((e=>null!==e&&""!==e));return(0,o.jsx)("div",{className:x,style:{...s,...m},children:f.map(((e,n)=>(0,o.jsxs)("div",{className:"space-item",children:[e,n<f.length-1&&d&&(0,o.jsx)("div",{className:"space-split-wrapper",children:(0,o.jsx)("div",{className:"space-split",children:d})})]},n)))})};_.displayName="Space";const U=_,J=(0,l.forwardRef)(((e,n)=>{const{className:s,style:t,checked:i,defaultChecked:a=!1,disabled:c=!1,size:d="default",loading:u=!1,onChange:h,checkedChildren:p,unCheckedChildren:m,autoFocus:x=!1}=e,f=(0,l.useRef)(null),[v,j]=l.useState(a),g=void 0!==i?i:v;l.useImperativeHandle(n,(()=>({focus:()=>{f.current?.focus()},blur:()=>{f.current?.blur()}})));const y=r()("switch",s,{"switch-checked":g,"switch-disabled":c,"switch-loading":u,[`switch-${d}`]:"default"!==d});return(0,o.jsxs)("button",{ref:f,autoFocus:x,type:"button",role:"switch","aria-checked":g,disabled:c,className:y,style:t,onClick:()=>{c||u||(void 0===i&&j(!v),h?.(!g))},children:[(0,o.jsx)("div",{className:"switch-handle",children:u&&(0,o.jsx)("div",{className:"switch-loading-icon"})}),(0,o.jsx)("div",{className:"switch-inner",children:g?p:m})]})}));J.displayName="Switch";const K=e=>{const{defaultIndex:n=0,activeIndex:s,onSelect:t,className:i,style:a,type:c="line",children:d}=e,[u,h]=(0,l.useState)(n),p=void 0!==s?s:u;return(0,o.jsxs)("div",{className:`tabs ${i}`,"data-testid":"test-tab",children:[(0,o.jsx)("ul",{className:r()("tabs-nav",{"nav-line":"line"===c,"nav-card":"card"===c}),style:a,children:(e=>l.Children.map(e,((e,n)=>{const i=e,{label:l,disabled:a}=i.props;return(0,o.jsx)("li",{className:r()("tabs-nav-item",{"is-active":p===n,"is-disabled":a}),onClick:()=>{a||(e=>{void 0===s&&h(e),t?.(e)})(n)},children:l})})))(d)}),function(e){return l.Children.map(e,((e,n)=>{if(n===p){const n=e;return l.isValidElement(n)?(0,o.jsx)("div",{className:"tabs-content",children:n}):null}return null}))}(d)]})},Q=e=>{let{children:n}=e;return n};Q.displayName="Tab.Item";const Z=K;Z.Item=Q;var ee=s(6756);const ne=e=>{let{title:n,trigger:s="hover",placement:t="top",children:i,className:a,style:c={},visible:d,mouseEnterDelay:u=.1,mouseLeaveDelay:h=.1,onVisibleChange:p,color:m}=e;const x=m||c.backgroundColor,f=(0,o.jsx)("div",{className:r()("tooltip-content",a),style:x?{"--tooltip-color":x,...c}:c,children:n}),[v,j]=(0,l.useState)(!1);return(0,o.jsx)(ee.A,{action:[s],popup:f,popupPlacement:t,popupClassName:"tooltip-popup",mouseEnterDelay:u,mouseLeaveDelay:h,popupVisible:void 0!==d?d:v,destroyPopupOnHide:!0,getPopupContainer:()=>document.body,onPopupVisibleChange:e=>{j(e),p?.(e),console.log(`Tooltip visibility changed: ${e}`)},builtinPlacements:{top:{points:["bc","tc"],offset:[0,-10],overflow:{adjustX:!0,adjustY:!0},targetOffset:[0,0]},bottom:{points:["tc","bc"],offset:[0,10],overflow:{adjustX:!0,adjustY:!0},targetOffset:[0,0]},left:{points:["cr","cl"],offset:[-10,0],overflow:{adjustX:!0,adjustY:!0},targetOffset:[0,0]},right:{points:["cl","cr"],offset:[10,0],overflow:{adjustX:!0,adjustY:!0},targetOffset:[0,0]}},children:i})};t.Yv.add(i.X7I)},7250:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"common/icon","title":"Icon \u56fe\u6807","description":"Icon \u56fe\u6807\u7ec4\u4ef6\uff0c\u57fa\u4e8e FontAwesome \u56fe\u6807\u5e93\uff0c\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u56fe\u6807\u9009\u62e9","source":"@site/docs/common/icon.md","sourceDirName":"common","slug":"/common/icon","permalink":"/viking/docs/common/icon","draft":false,"unlisted":false,"editUrl":"#/docs/common/icon.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Icon \u56fe\u6807"},"sidebar":"tutorialSidebar","previous":{"title":"Button \u6309\u94ae","permalink":"/viking/docs/common/button"},"next":{"title":"\u5e03\u5c40","permalink":"/viking/docs/category/\u5e03\u5c40"}}');var i=s(7557),l=s(1197),a=s(2551);const c={sidebar_position:2,title:"Icon \u56fe\u6807"},r="Icon \u56fe\u6807",o={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"\u9ed8\u8ba4\u56fe\u6807",id:"\u9ed8\u8ba4\u56fe\u6807",level:3},{value:"\u4e0d\u540c\u4e3b\u9898\u7684\u56fe\u6807",id:"\u4e0d\u540c\u4e3b\u9898\u7684\u56fe\u6807",level:3},{value:"\u81ea\u5b9a\u4e49\u56fe\u6807\u6548\u679c",id:"\u81ea\u5b9a\u4e49\u56fe\u6807\u6548\u679c",level:3},{value:"API",id:"api",level:2},{value:"Icon Props",id:"icon-props",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"icon-\u56fe\u6807",children:"Icon \u56fe\u6807"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Icon"})," \u56fe\u6807\u7ec4\u4ef6\uff0c\u57fa\u4e8e ",(0,i.jsx)(n.code,{children:"FontAwesome"})," \u56fe\u6807\u5e93\uff0c\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u56fe\u6807\u9009\u62e9"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Icon } from 'viking-design';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4ee3\u7801\u6f14\u793a",children:"\u4ee3\u7801\u6f14\u793a"}),"\n",(0,i.jsx)(n.h3,{id:"\u9ed8\u8ba4\u56fe\u6807",children:"\u9ed8\u8ba4\u56fe\u6807"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Icon, Flex, Button } from \'viking-design\';\n\n<Flex gap={20} align="center">\n  <Icon icon="check" size="2x" />\n  <Icon icon="times" size="2x" />\n  <Icon icon="anchor" size="2x" />\n  <Icon icon="trash" size="2x" />\n  <Button btnType="primary">\n    <Space>\n      <Icon icon="check"></Icon>check\n    </Space>\n  </Button>\n</Flex>;\n'})}),"\n",(0,i.jsxs)(a.so,{gap:20,align:"center",children:[(0,i.jsx)(a.In,{icon:"check",size:"2x"}),(0,i.jsx)(a.In,{icon:"times",size:"2x"}),(0,i.jsx)(a.In,{icon:"anchor",size:"2x"}),(0,i.jsx)(a.In,{icon:"trash",size:"2x"}),(0,i.jsx)(a.$n,{btnType:"primary",children:(0,i.jsxs)(a.$x,{children:[(0,i.jsx)(a.In,{icon:"check"}),"check"]})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e0d\u540c\u4e3b\u9898\u7684\u56fe\u6807",children:"\u4e0d\u540c\u4e3b\u9898\u7684\u56fe\u6807"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Icon, Flex } from \'viking-design\';\n\n<Flex gap={20}>\n  <Icon icon="coffee" size="2x" theme="primary" />\n  <Icon icon="info-circle" size="2x" theme="info" />\n  <Icon icon="check" size="2x" theme="success" />\n  <Icon icon="exclamation-circle" size="2x" theme="warning" />\n  <Icon icon="times" size="2x" theme="danger" />\n  <Icon icon="question-circle" size="2x" theme="secondary" />\n  <Icon icon="moon" size="2x" theme="dark" />\n  <Icon icon="sun" size="2x" theme="light" />\n</Flex>;\n'})}),"\n",(0,i.jsxs)(a.so,{gap:20,children:[(0,i.jsx)(a.In,{icon:"coffee",size:"2x",theme:"primary"}),(0,i.jsx)(a.In,{icon:"info-circle",size:"2x",theme:"info"}),(0,i.jsx)(a.In,{icon:"check",size:"2x",theme:"success"}),(0,i.jsx)(a.In,{icon:"exclamation-circle",size:"2x",theme:"warning"}),(0,i.jsx)(a.In,{icon:"times",size:"2x",theme:"danger"}),(0,i.jsx)(a.In,{icon:"question-circle",size:"2x",theme:"secondary"}),(0,i.jsx)(a.In,{icon:"moon",size:"2x",theme:"dark"}),(0,i.jsx)(a.In,{icon:"sun",size:"2x",theme:"light"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u56fe\u6807\u6548\u679c",children:"\u81ea\u5b9a\u4e49\u56fe\u6807\u6548\u679c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Icon, Flex } from \'viking-design\';\n\n<Flex gap={20}>\n  <Icon icon="spinner" size="2x" theme="primary" spin />\n  <Icon icon="spinner" size="2x" theme="success" pulse />\n</Flex>;\n'})}),"\n",(0,i.jsxs)(a.so,{gap:20,children:[(0,i.jsx)(a.In,{icon:"spinner",size:"2x",theme:"primary",spin:!0}),(0,i.jsx)(a.In,{icon:"spinner",size:"2x",theme:"success",pulse:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"icon-props",children:"Icon Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5c5e\u6027"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"theme"}),(0,i.jsx)(n.td,{children:"\u56fe\u6807\u4e3b\u9898\u8272"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icon"}),(0,i.jsx)(n.td,{children:"\u56fe\u6807\u540d\u79f0"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IconProp"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"\u56fe\u6807\u5927\u5c0f"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"spin"}),(0,i.jsx)(n.td,{children:"\u662f\u5426\u65cb\u8f6c\u56fe\u6807"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pulse"}),(0,i.jsx)(n.td,{children:"\u662f\u5426\u8109\u51b2\u5f0f\u65cb\u8f6c"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"flip"}),(0,i.jsx)(n.td,{children:"\u7ffb\u8f6c\u56fe\u6807"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'horizontal' | 'vertical' | 'both'"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rotation"}),(0,i.jsx)(n.td,{children:"\u56fe\u6807\u65cb\u8f6c\u89d2\u5ea6"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"90 | 180 | 270"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"className"}),(0,i.jsx)(n.td,{children:"\u81ea\u5b9a\u4e49\u7c7b\u540d"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u9664\u4e86\u4e0a\u8ff0\u5c5e\u6027\u5916\uff0cIcon \u7ec4\u4ef6\u8fd8\u652f\u6301 FontAwesome \u56fe\u6807\u5e93\u7684\u6240\u6709\u5c5e\u6027\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://fontawesome.com/docs",children:"FontAwesome \u6587\u6863"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);