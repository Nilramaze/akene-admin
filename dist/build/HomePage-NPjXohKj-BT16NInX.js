const __vite__fileDeps=["HomePage-HuAhOTRQ-CBkSzlxC.js","strapi-BXowZxcM.js","strapi-COJtagOC.css","useLicenseLimitNotification-CAQIrlP4-C60iSbNT.js","isNil-CLVBd1EQ.js","RelativeTime-BGJ1PWx_-ZFHXGJ0D.js","Ornaments-BFThxr2U-pmevFHGU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aP as M,d as S,T as c,f as g,c5 as v,j as e,bd as I,P as L,L as y,F as d,G as T,bz as R,W as w,c6 as P,b$ as f,bA as H,br as k,q as D,a5 as N,c7 as _,B as u,n as G,r as $,c8 as A,aV as O,as as W,b_ as F,a4 as V,I as B,O as U,K as q,Q as x,U as z,ba as Q,bC as J,c9 as K}from"./strapi-BXowZxcM.js";import{R as X}from"./RelativeTime-BGJ1PWx_-ZFHXGJ0D.js";import{L as Y,N as Z,V as ee,S as j}from"./Ornaments-BFThxr2U-pmevFHGU.js";const te=M.enhanceEndpoints({addTagTypes:["RecentDocumentList"]}).injectEndpoints({endpoints:s=>({getRecentDocuments:s.query({query:t=>`/admin/homepage/recent-documents?action=${t.action}`,transformResponse:t=>t.data,providesTags:(t,n,{action:o})=>[{type:"RecentDocumentList",id:o}]})})}),{useGetRecentDocumentsQuery:C}=te,se=({title:s,icon:t=A,children:n})=>{const{formatMessage:o}=g(),r=$.useId(),m=t;return e.jsxs(d,{width:"100%",hasRadius:!0,direction:"column",alignItems:"flex-start",background:"neutral0",shadow:"tableShadow",tag:"section",gap:4,padding:6,"aria-labelledby":r,children:[e.jsxs(d,{direction:"row",alignItems:"center",gap:2,tag:"header",children:[e.jsx(m,{fill:"neutral500","aria-hidden":!0}),e.jsx(c,{textColor:"neutral500",variant:"sigma",tag:"h2",id:r,children:o(s)})]}),e.jsx(u,{width:"100%",height:"261px",overflow:"auto",tag:"main",children:n})]})},ae=({children:s})=>{const{formatMessage:t}=g();return e.jsx(d,{height:"100%",justifyContent:"center",alignItems:"center",children:e.jsx(O,{children:s??t({id:"HomePage.widget.loading",defaultMessage:"Loading widget content"})})})},ne=({children:s})=>{const{formatMessage:t}=g();return e.jsxs(d,{height:"100%",direction:"column",justifyContent:"center",alignItems:"center",gap:2,children:[e.jsx(W,{width:"3.2rem",height:"3.2rem",fill:"danger600"}),e.jsx(c,{variant:"delta",children:t({id:"global.error",defaultMessage:"Something went wrong"})}),e.jsx(c,{textColor:"neutral600",children:s??t({id:"HomePage.widget.error",defaultMessage:"Couldn't load widget content."})})]})},ie=({children:s})=>{const{formatMessage:t}=g();return e.jsxs(d,{height:"100%",direction:"column",justifyContent:"center",alignItems:"center",gap:6,children:[e.jsx(F,{width:"16rem",height:"8.8rem"}),e.jsx(c,{textColor:"neutral600",children:s??t({id:"HomePage.widget.no-data",defaultMessage:"No content found."})})]})},h={Root:se,Loading:ae,Error:ne,NoData:ie},b=S(c).attrs({maxWidth:"14.4rem",display:"block"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,re=({status:s="draft"})=>{const t=s==="draft"?"secondary":s==="published"?"success":"alternative",{formatMessage:n}=g();return e.jsx(J,{variant:t,size:"XS",children:e.jsx(c,{tag:"span",variant:"omega",fontWeight:"bold",children:n({id:`content-manager.containers.List.${s}`,defaultMessage:K(s)})})})},E=({documents:s})=>{const{formatMessage:t}=g(),{trackUsage:n}=k(),o=V(),r=a=>{const i=a.kind==="singleType",l=i?"single-types":"collection-types",p=a.locale?`?plugins[i18n][locale]=${a.locale}`:"";return`/content-manager/${l}/${a.contentTypeUid}${i?"":"/"+a.documentId}${p}`},m=a=>()=>{n("willEditEntryFromHome");const i=r(a);o(i)};return e.jsx(B,{colCount:5,rowCount:s?.length??0,children:e.jsx(U,{children:s?.map(a=>e.jsxs(q,{onClick:m(a),cursor:"pointer",children:[e.jsx(x,{children:e.jsx(b,{title:a.title,variant:"omega",textColor:"neutral800",children:a.title})}),e.jsx(x,{children:e.jsx(b,{variant:"omega",textColor:"neutral600",children:a.kind==="singleType"?t({id:"content-manager.widget.last-edited.single-type",defaultMessage:"Single-Type"}):t({id:a.contentTypeDisplayName,defaultMessage:a.contentTypeDisplayName})})}),e.jsx(x,{children:e.jsx(u,{display:"inline-block",children:a.status?e.jsx(re,{status:a.status}):e.jsx(c,{textColor:"neutral600","aria-hidden":!0,children:"-"})})}),e.jsx(x,{children:e.jsx(c,{textColor:"neutral600",children:e.jsx(X,{timestamp:new Date(a.updatedAt)})})}),e.jsx(x,{onClick:i=>i.stopPropagation(),children:e.jsx(u,{display:"inline-block",children:e.jsx(z,{tag:Q,to:r(a),onClick:()=>n("willEditEntryFromHome"),label:t({id:"content-manager.actions.edit.label",defaultMessage:"Edit"}),variant:"ghost",children:e.jsx(w,{})})})})]},a.documentId))})})},oe=()=>{const{formatMessage:s}=g(),{data:t,isLoading:n,error:o}=C({action:"update"});return n?e.jsx(h.Loading,{}):o||!t?e.jsx(h.Error,{}):t.length===0?e.jsx(h.NoData,{children:s({id:"content-manager.widget.last-edited.no-data",defaultMessage:"No edited entries"})}):e.jsx(E,{documents:t})},de=()=>e.jsx(h.Root,{title:{id:"content-manager.widget.last-edited.title",defaultMessage:"Last edited entries"},icon:w,children:e.jsx(oe,{})}),le=()=>{const{formatMessage:s}=g(),{data:t,isLoading:n,error:o}=C({action:"publish"});return n?e.jsx(h.Loading,{}):o||!t?e.jsx(h.Error,{}):t.length===0?e.jsx(h.NoData,{children:s({id:"content-manager.widget.last-published.no-data",defaultMessage:"No published entries"})}):e.jsx(E,{documents:t})},ce=()=>e.jsx(h.Root,{title:{id:"content-manager.widget.last-published.title",defaultMessage:"Last published entries"},icon:P,children:e.jsx(le,{})}),ge=()=>{const s=f("GuidedTourHomepage",i=>i.guidedTourState),t=f("GuidedTourHomepage",i=>i.setSkipped),{formatMessage:n}=g(),{trackUsage:o}=k(),r=Object.entries(Y).map(([i,l])=>({key:i,title:l.home.title,content:e.jsx(D,{onClick:()=>o(l.home.trackingEvent),tag:N,to:l.home.cta.target,endIcon:e.jsx(_,{}),children:n(l.home.cta.title)}),isDone:Object.values(s[i]).every(p=>p===!0)})),m=r.findIndex(i=>!i.isDone),a=()=>{t(!0),o("didSkipGuidedtour")};return e.jsxs(u,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0",children:[e.jsxs(d,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(c,{variant:"beta",tag:"h2",children:n({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})}),e.jsx(u,{children:r.map((i,l)=>{const p=ue(m,l);return e.jsxs(u,{children:[e.jsxs(d,{children:[e.jsx(u,{minWidth:"3rem",marginRight:5,children:e.jsx(Z,{state:p,children:l+1})}),e.jsx(c,{variant:"delta",tag:"h3",children:n(i.title)})]}),e.jsxs(d,{alignItems:"flex-start",children:[e.jsx(d,{justifyContent:"center",minWidth:"3rem",marginBottom:3,marginTop:3,marginRight:5,children:l===r.length-1?null:e.jsx(ee,{state:p})}),e.jsx(u,{marginTop:2,children:p===j.IS_ACTIVE?i.content:null})]})]},i.key)})})]}),e.jsx(d,{justifyContent:"flex-end",children:e.jsx(G,{variant:"tertiary",onClick:a,children:n({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})})})]})},ue=(s,t)=>s===-1?j.IS_DONE:t<s?j.IS_DONE:t>s?j.IS_NOT_DONE:j.IS_ACTIVE,he=()=>{const s=f("HomePage",r=>r.guidedTourState),t=f("HomePage",r=>r.isGuidedTourVisible),n=f("HomePage",r=>r.isSkipped);return!Object.values(s).every(r=>Object.values(r).every(m=>m))&&t&&!n?e.jsx(ge,{}):null},me=()=>{const{formatMessage:s}=g(),t=v("HomePageCE",o=>o.user),n=t?.firstname??t?.username??t?.email;return e.jsxs(I,{children:[e.jsx(L.Title,{children:s({id:"HomePage.head.title",defaultMessage:"Homepage"})}),e.jsx(y.Header,{title:s({id:"HomePage.header.title",defaultMessage:"Hello {name}"},{name:n}),subtitle:s({id:"HomePage.header.subtitle",defaultMessage:"Welcome to your administration panel"})}),e.jsx(y.Content,{children:e.jsxs(d,{direction:"column",alignItems:"stretch",gap:8,paddingBottom:10,children:[e.jsx(he,{}),e.jsxs(T.Root,{gap:5,children:[e.jsx(T.Item,{col:6,s:12,children:e.jsx(de,{})}),e.jsx(T.Item,{col:6,s:12,children:e.jsx(ce,{})})]})]})})]})},fe=()=>{const s=R(me,async()=>(await H(()=>import("./HomePage-HuAhOTRQ-CBkSzlxC.js"),__vite__mapDeps([0,1,2,3,4,5,6]))).HomePageEE);return s?e.jsx(s,{}):null};export{fe as HomePage,me as HomePageCE};
