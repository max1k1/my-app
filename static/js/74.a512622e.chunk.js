"use strict";(self.webpackChunkreact_social_media=self.webpackChunkreact_social_media||[]).push([[74],{6074:(s,e,a)=>{a.r(e),a.d(e,{default:()=>f});a(2791);const i="Dialogs_dialogs__nCTs4",l="Dialogs_chatWrapper__09F4I",d="Dialogs_chat__GXScF",t="Dialogs_messagesField__amjpe",c="Dialogs_message__6cFal",n="Dialogs_addMessageField__0KMgX",o="Dialogs_dialogsItems__EHDf8";var m=a(184);const r=s=>{let{id:e,message:a}=s;return(0,m.jsx)("div",{className:c,children:a})};var g=a(1087);const _="DialogItem_item__SVOHa",j="DialogItem_itemLink__lZFSd",x=s=>{let{obj:e}=s;return(0,m.jsx)("div",{className:_,children:(0,m.jsx)(g.OL,{className:j,to:"/dialogs/"+e.id,children:e.userName})})};var h=a(6139);const u=(0,a(704).Z)({form:"dialog-add-message-form"})((s=>(0,m.jsx)("form",{onSubmit:s.handleSubmit,children:(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)(h.Z,{name:"newMessageText",placeholder:"Enter your message",component:"textarea"}),(0,m.jsx)("button",{children:"Send"})]})}))),D=s=>{let{sendMessage:e,dialogsPage:a}=s;const c=a.messagesData.map((s=>(0,m.jsx)(r,{message:s.text,id:s.id},s.id))),n=a.dialogsData.map((s=>(0,m.jsx)(x,{obj:s},s.id)));return(0,m.jsxs)("div",{className:i,children:[(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("div",{className:d,children:(0,m.jsx)("div",{className:t,children:c})}),(0,m.jsx)(u,{onSubmit:s=>{e(s.newMessageText)}})]}),(0,m.jsx)("div",{className:o,children:n})]})};var v=a(8687),N=a(2932),p=a(97),b=a(8281);const f=(0,p.qC)(N.D,(0,v.$j)((s=>({dialogsPage:s.dialogsPage})),{sendMessage:b.N.sendMessage}))(D)}}]);
//# sourceMappingURL=74.a512622e.chunk.js.map