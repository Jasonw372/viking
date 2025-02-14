import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{c as U}from"./index-DIbT3vot.js";import{r as X}from"./index-DEBVq0NN.js";import{I as r}from"./index-bZBKYLb1.js";import{T as h}from"./index-BH1eLiMc.js";import{F as Y}from"./flex-E4Sj-Pba.js";import"./index-D2MAbzvX.js";import"./button-DeVFMoh8.js";const Z=p=>{switch(p){case"success":return e.jsx(r,{icon:"check-circle"});case"info":return e.jsx(r,{icon:"info-circle"});case"error":return e.jsx(r,{icon:"exclamation-circle"});case"warning":return e.jsx(r,{icon:"exclamation-triangle"});default:return null}},H=p=>{const{title:u,message:J,type:s="info",closable:d=!1,showIcon:K=!1,onClose:g,action:f}=p,[y,L]=X.useState(!0),M=Q=>{Q.preventDefault(),L(!1),g&&g()},P=U("alert",{"alert-success":s==="success","alert-info":s==="info","alert-danger":s==="error","alert-warning":s==="warning","alert-dismissible":d,"alert-hidden":!y});return y?e.jsxs("div",{className:P,children:[K&&e.jsx("span",{className:"alert-icon",children:Z(s)}),e.jsxs("div",{className:"alert-message",children:[u&&e.jsx("div",{className:"alert-title",children:u}),e.jsx("div",{className:"alert-content",children:J})]}),d&&e.jsx("span",{className:"alert-close",onClick:M,children:e.jsx(r,{icon:"times",className:"close-icon"})}),f&&e.jsx("div",{className:"alert-action",children:f})]}):null};H.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'success' | 'info' | 'error' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ce={title:"Components/Alert",component:H,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClose:{description:"关闭按钮的回调函数"}}},o={args:{message:"这是一条默认的信息提示",type:"info",title:"提示"}},a={args:{message:"恭喜！操作成功",type:"success",showIcon:!0}},n={args:{title:"警告",message:"当前页面存在异常，请刷新",type:"warning",showIcon:!0}},t={args:{message:"错误！操作失败",type:"error",showIcon:!0}},c={args:{message:"这是一条可以关闭的提示",type:"info",closable:!0,showIcon:!0,onClose:()=>{console.log("Alert被关闭了！"),alert("Alert被关闭了！")}}},i={args:{message:"这是一条不带图标的提示",type:"info",showIcon:!1}},l={args:{message:"点击关闭按钮试试看,点击关闭按钮试试看,点击关闭按钮试试看",type:"success",closable:!0,showIcon:!0,title:"提示",onClose:()=>{console.log("触发了onClose回调"),alert("触发了onClose回调！")}},parameters:{docs:{description:{story:"这个示例展示了如何使用 onClose 回调函数"}}}},m={args:{message:"这是一条带操作按钮的提示",action:e.jsxs(Y,{direction:"column",gap:"sm",children:[e.jsx(h,{size:"sm",btnType:"primary",children:"查看详情"}),e.jsx(h,{size:"sm",btnType:"default",children:"关闭"})]}),type:"info"}};var w,x,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: '这是一条默认的信息提示',
    type: 'info',
    title: '提示'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var I,b,j;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: '恭喜！操作成功',
    type: 'success',
    showIcon: true
  }
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var T,v,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '警告',
    message: '当前页面存在异常，请刷新',
    type: 'warning',
    showIcon: true
  }
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,A,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    message: '错误！操作失败',
    type: 'error',
    showIcon: true
  }
}`,...(W=(A=t.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var q,B,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: '这是一条可以关闭的提示',
    type: 'info',
    closable: true,
    showIcon: true,
    onClose: () => {
      console.log('Alert被关闭了！');
      alert('Alert被关闭了！');
    }
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var R,k,z;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: '这是一条不带图标的提示',
    type: 'info',
    showIcon: false
  }
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var F,_,D;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    message: '点击关闭按钮试试看,点击关闭按钮试试看,点击关闭按钮试试看',
    type: 'success',
    closable: true,
    showIcon: true,
    title: '提示',
    onClose: () => {
      console.log('触发了onClose回调');
      alert('触发了onClose回调！');
    }
  },
  parameters: {
    docs: {
      description: {
        story: '这个示例展示了如何使用 onClose 回调函数'
      }
    }
  }
}`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var O,V,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    message: '这是一条带操作按钮的提示',
    action: <Flex direction="column" gap="sm">
        <Button size="sm" btnType="primary">
          查看详情
        </Button>
        <Button size="sm" btnType="default">
          关闭
        </Button>
      </Flex>,
    type: 'info'
  }
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ie=["Default","Success","Warning","Error","Closable","WithoutIcon","WithCloseCallback","WithAction"];export{c as Closable,o as Default,t as Error,a as Success,n as Warning,m as WithAction,l as WithCloseCallback,i as WithoutIcon,ie as __namedExportsOrder,ce as default};
