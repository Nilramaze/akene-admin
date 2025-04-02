import{d as P,r as F,f as A,c0 as Be,c1 as Oe,j as e,P as H,g$ as ee,R as Ne,p as ue,F as b,s as xe,ar as Ue,ao as je,u as te,a4 as be,C as se,aR as ye,h0 as We,f_ as Re,h1 as Fe,g1 as He,br as Me,E as re,bd as ve,L as K,n as L,bh as Ge,et as G,B as V,b6 as _e,aU as Y,gi as Qe,W as qe,bl as Ye,h2 as Ze,bq as Ce,h3 as oe,h4 as Je,h5 as Ke,bb as le,bm as Xe,bn as Ve,g0 as Te,Y as U,$ as et,a0 as tt,k as D,l as st,ac as at,T as f,ad as nt,ak as it,h6 as rt,aZ as ot,a_ as lt,bZ as we,b_ as De,G as ge,a5 as dt,eQ as de,bo as X,h7 as ct,h8 as ut,bw as gt,gk as ht,ch as mt,h9 as pt,ha as ft,q as ze,ba as Se,S as xt,m as jt,aT as _,K as bt,Q,hb as yt,hc as ne,cw as Rt,am as O,hd as Mt,aD as vt,he as Ct,hf as ce,at as q,c6 as W,e1 as Tt,by as wt}from"./strapi-BXowZxcM.js";import{f as ie}from"./index-D4-HAHx5.js";import{t as Dt,a as zt,R as St,z as Lt}from"./schemas-DdA2ic2U-FXFh-kTZ.js";import{f as At}from"./index-Bq8UlyZW.js";import"./index-BRVyLNfZ.js";function Le(t,s,r){var a=Dt(t,r),i=zt(s,a,!0),n=new Date(a.getTime()-i),u=new Date(0);return u.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),u.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),u}const It=P(b)`
  width: 100%;
  max-width: 256px;

  & > * {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};
  }

  & > *:last-child {
    border-bottom: none;
  }
`,$t=({action:t,status:s,hasErrors:r,requiredStage:a,entryStage:i})=>{const{formatMessage:n}=A();return t==="publish"?r||a&&a.id!==i?.id?e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(ce,{fill:"danger600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{textColor:"danger600",variant:"omega",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.not-ready",defaultMessage:"Not ready to publish"})})})}):s==="draft"?e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(W,{fill:"success600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{textColor:"success600",variant:"omega",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})})}):s==="modified"?e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(Tt,{fill:"alternative600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{variant:"omega",fontWeight:"bold",textColor:"alternative600",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.modified",defaultMessage:"Ready to publish changes"})})})}):e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(W,{fill:"success600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{textColor:"success600",variant:"omega",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})})})}):s==="published"?e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(W,{fill:"success600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{textColor:"success600",variant:"omega",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})})})}):e.jsx(O.Trigger,{children:e.jsx(L,{variant:"ghost",startIcon:e.jsx(W,{fill:"success600"}),endIcon:e.jsx(q,{}),children:e.jsx(f,{textColor:"success600",variant:"omega",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})})})},Et=({hasErrors:t,errors:s,kind:r,contentTypeUid:a,documentId:i,locale:n})=>{const{formatMessage:u}=A();return e.jsxs(b,{direction:"column",gap:1,width:"100%",padding:5,children:[e.jsxs(b,{gap:2,width:"100%",children:[e.jsx(f,{fontWeight:"bold",children:u({id:"content-releases.pages.ReleaseDetails.entry-validation.fields",defaultMessage:"Fields"})}),t?e.jsx(ce,{fill:"danger600"}):e.jsx(W,{fill:"success600"})]}),e.jsx(f,{width:"100%",textColor:"neutral600",children:t?u({id:"content-releases.pages.ReleaseDetails.entry-validation.fields.error",defaultMessage:"{errors} errors on fields."},{errors:s?Object.keys(s).length:0}):u({id:"content-releases.pages.ReleaseDetails.entry-validation.fields.success",defaultMessage:"All fields are filled correctly."})}),t&&e.jsx(ze,{tag:Se,to:{pathname:`/content-manager/${r==="collectionType"?"collection-types":"single-types"}/${a}/${i}`,search:n?wt.stringify({plugins:{i18n:{locale:n}}}):""},variant:"secondary",fullWidth:!0,state:{forceValidation:!0},children:u({id:"content-releases.pages.ReleaseDetails.entry-validation.fields.see-errors",defaultMessage:"See errors"})})]})},Pt=({contentTypeHasReviewWorkflow:t,requiredStage:s,entryStage:r})=>t?s&&s.id!==r?.id?e.jsx(ce,{fill:"danger600"}):e.jsx(W,{fill:"success600"}):e.jsx(W,{fill:"neutral200"}),kt=({contentTypeHasReviewWorkflow:t,requiredStage:s,entryStage:r,formatMessage:a})=>t?s&&s.id!==r?.id?a({id:"content-releases.pages.ReleaseDetails.entry-validation.review-stage.not-ready",defaultMessage:"This entry is not at the required stage for publishing. ({stageName})"},{stageName:s?.name??""}):s&&s.id===r?.id?a({id:"content-releases.pages.ReleaseDetails.entry-validation.review-stage.ready",defaultMessage:"This entry is at the required stage for publishing. ({stageName})"},{stageName:s?.name??""}):a({id:"content-releases.pages.ReleaseDetails.entry-validation.review-stage.stage-not-required",defaultMessage:"No required stage for publication"}):a({id:"content-releases.pages.ReleaseDetails.entry-validation.review-stage.not-enabled",defaultMessage:"This entry is not associated to any workflow."}),Bt=({contentTypeHasReviewWorkflow:t,requiredStage:s,entryStage:r})=>{const{formatMessage:a}=A(),i=Pt({contentTypeHasReviewWorkflow:t,requiredStage:s,entryStage:r});return e.jsxs(b,{direction:"column",gap:1,width:"100%",padding:5,children:[e.jsxs(b,{gap:2,width:"100%",children:[e.jsx(f,{fontWeight:"bold",children:a({id:"content-releases.pages.ReleaseDetails.entry-validation.review-stage",defaultMessage:"Review stage"})}),i]}),e.jsx(f,{textColor:"neutral600",children:kt({contentTypeHasReviewWorkflow:t,requiredStage:s,entryStage:r,formatMessage:a})})]})},Ot=({schema:t,entry:s,status:r,action:a})=>{const{validate:i,isLoading:n}=Rt({collectionType:t?.kind??"",model:t?.uid??""},{skip:!0}),u=n?null:i(s),c=u?Object.keys(u).length>0:!1,p=t?.hasReviewWorkflow??!1,g=t?.stageRequiredToPublish,M=s.strapi_stage;return n?null:e.jsxs(O.Root,{children:[e.jsx($t,{action:a,status:r,hasErrors:c,requiredStage:g,entryStage:M}),e.jsx(O.Content,{children:e.jsxs(It,{direction:"column",children:[e.jsx(Et,{hasErrors:c,errors:u,contentTypeUid:t?.uid,kind:t?.kind,documentId:s.documentId,locale:s.locale}),e.jsx(Bt,{contentTypeHasReviewWorkflow:p,requiredStage:g,entryStage:M})]})})]})},Nt=["years","months","days","hours","minutes","seconds"],Ae=F.forwardRef(({timestamp:t,customIntervals:s=[],...r},a)=>{const{formatRelativeTime:i,formatDate:n,formatTime:u}=A(),c=Be({start:t,end:Date.now()}),p=Nt.find(l=>c[l]>0&&Object.keys(c).includes(l)),g=Oe(t)?-c[p]:c[p],M=s.find(l=>c[l.unit]<l.threshold),C=M?M.text:i(g,p,{numeric:"auto"});return e.jsx("time",{ref:a,dateTime:t.toISOString(),role:"time",title:`${n(t)} ${u(t)}`,...r,children:C})}),Ie=({handleClose:t,open:s,handleSubmit:r,initialValues:a,isLoading:i=!1})=>{const{formatMessage:n}=A(),{pathname:u}=je(),c=u===`/plugins/${Mt}`,{timezoneList:p,systemTimezone:g={value:"UTC+00:00-Africa/Abidjan "}}=Te(a.scheduledAt?new Date(a.scheduledAt):new Date),M=l=>{const{date:h,time:T,timezone:m}=l;if(!h||!T||!m)return null;const y=m.split("&")[1];return Lt(`${h} ${T}`,y)},C=()=>p.find(h=>h.value.split("&")[1]===a.timezone)?.value||g.value;return e.jsx(U.Root,{open:s,onOpenChange:t,children:e.jsxs(U.Content,{children:[e.jsx(U.Header,{children:e.jsx(U.Title,{children:n({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:c})})}),e.jsx(et,{onSubmit:l=>{r({...l,timezone:l.timezone?l.timezone.split("&")[1]:null,scheduledAt:l.isScheduled?M(l):null})},initialValues:{...a,timezone:a.timezone?C():g.value},validationSchema:St,validateOnChange:!1,children:({values:l,errors:h,handleChange:T,setFieldValue:m})=>e.jsxs(tt,{children:[e.jsx(U.Body,{children:e.jsxs(b,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(D.Root,{name:"name",error:h.name&&n({id:h.name,defaultMessage:h.name}),required:!0,children:[e.jsx(D.Label,{children:n({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"})}),e.jsx(st,{value:l.name,onChange:T}),e.jsx(D.Error,{})]}),e.jsx(V,{width:"max-content",children:e.jsx(at,{name:"isScheduled",checked:l.isScheduled,onCheckedChange:y=>{m("isScheduled",y),y?(m("date",a.date),m("time",a.time),m("timezone",a.timezone??g?.value)):(m("date",null),m("time",""),m("timezone",null))},children:e.jsx(f,{textColor:l.isScheduled?"primary600":"neutral800",fontWeight:l.isScheduled?"semiBold":"regular",children:n({id:"modal.form.input.label.schedule-release",defaultMessage:"Schedule release"})})})}),l.isScheduled&&e.jsxs(e.Fragment,{children:[e.jsxs(b,{gap:4,alignItems:"start",children:[e.jsx(V,{width:"100%",children:e.jsxs(D.Root,{name:"date",error:h.date&&n({id:h.date,defaultMessage:h.date}),required:!0,children:[e.jsx(D.Label,{children:n({id:"content-releases.modal.form.input.label.date",defaultMessage:"Date"})}),e.jsx(nt,{onChange:y=>{const w=y?At(y,{representation:"date"}):null;m("date",w)},clearLabel:n({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{m("date",null)},value:l.date?new Date(l.date):new Date,minDate:Le(new Date,l.timezone.split("&")[1])}),e.jsx(D.Error,{})]})}),e.jsx(V,{width:"100%",children:e.jsxs(D.Root,{name:"time",error:h.time&&n({id:h.time,defaultMessage:h.time}),required:!0,children:[e.jsx(D.Label,{children:n({id:"content-releases.modal.form.input.label.time",defaultMessage:"Time"})}),e.jsx(it,{onChange:y=>{m("time",y)},clearLabel:n({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{m("time","")},value:l.time||void 0}),e.jsx(D.Error,{})]})})]}),e.jsx(Ut,{timezoneOptions:p})]})]})}),e.jsxs(U.Footer,{children:[e.jsx(U.Close,{children:e.jsx(L,{variant:"tertiary",name:"cancel",children:n({id:"cancel",defaultMessage:"Cancel"})})}),e.jsx(L,{name:"submit",loading:i,type:"submit",children:n({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:c})})]})]})})]})})},Ut=({timezoneOptions:t})=>{const{values:s,errors:r,setFieldValue:a}=rt(),{formatMessage:i}=A(),[n,u]=F.useState(t);return F.useEffect(()=>{if(s.date){const{timezoneList:c}=Te(new Date(s.date));u(c);const p=s.timezone&&c.find(g=>g.value.split("&")[1]===s.timezone.split("&")[1]);p&&a("timezone",p.value)}},[a,s.date,s.timezone]),e.jsxs(D.Root,{name:"timezone",error:r.timezone&&i({id:r.timezone,defaultMessage:r.timezone}),required:!0,children:[e.jsx(D.Label,{children:i({id:"content-releases.modal.form.input.label.timezone",defaultMessage:"Timezone"})}),e.jsx(ot,{autocomplete:{type:"list",filter:"contains"},value:s.timezone||void 0,textValue:s.timezone?s.timezone.replace(/&/," "):void 0,onChange:c=>{a("timezone",c)},onTextValueChange:c=>{a("timezone",c)},onClear:()=>{a("timezone","")},children:n.map(c=>e.jsx(lt,{value:c.value,children:c.value.replace(/&/," ")},c.value))}),e.jsx(D.Error,{})]})},Wt=vt,$e=t=>typeof t<"u"&&t.name!==void 0,Ft=P(xe)`
  display: block;
`,Ht=P(Ae)`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`,Ee=t=>{let s;switch(t){case"ready":s="success";break;case"blocked":s="warning";break;case"failed":s="danger";break;case"done":s="primary";break;case"empty":default:s="neutral"}return{textColor:`${s}600`,backgroundColor:`${s}100`,borderColor:`${s}200`}},he=({sectionTitle:t,releases:s=[],isError:r=!1})=>{const{formatMessage:a}=A();return r?e.jsx(H.Error,{}):s?.length===0?e.jsx(we,{content:a({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:t}),icon:e.jsx(De,{width:"16rem"})}):e.jsx(ge.Root,{gap:4,children:s.map(({id:i,name:n,scheduledAt:u,status:c})=>e.jsx(ge.Item,{col:3,s:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Ft,{tag:dt,to:`${i}`,isExternal:!1,children:e.jsxs(b,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:4,children:[e.jsxs(b,{direction:"column",alignItems:"start",gap:1,children:[e.jsx(f,{textColor:"neutral800",tag:"h3",variant:"delta",fontWeight:"bold",children:n}),e.jsx(f,{variant:"pi",textColor:"neutral600",children:u?e.jsx(Ht,{timestamp:new Date(u)}):a({id:"content-releases.pages.Releases.not-scheduled",defaultMessage:"Not scheduled"})})]}),e.jsx(de,{...Ee(c),children:c})]})})},i))})},Gt=P(Ue)`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`,_t={name:"",date:ie(new Date,"yyyy-MM-dd"),time:"",isScheduled:!0,scheduledAt:null,timezone:null},Qt=()=>{const t=je(),[s,r]=F.useState(!1),{toggleNotification:a}=te(),{formatMessage:i}=A(),n=be(),{formatAPIError:u}=se(),[{query:c},p]=ye(),g=We(c),{data:M,isLoading:C}=Re(),[l,{isLoading:h}]=Fe(),{getFeature:T}=He(),{maximumReleases:m=3}=T("cms-content-releases"),{trackUsage:y}=Me(),{allowedActions:{canCreate:w}}=re(ee),{isLoading:I,isSuccess:z,isError:d}=g,N=g?.currentData?.meta?.activeTab||"pending";F.useEffect(()=>{t?.state?.errors&&(a({type:"danger",title:i({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:i({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),n("",{replace:!0,state:null}))},[i,t?.state?.errors,n,a]);const v=()=>{r(S=>!S)};if(I||C)return e.jsx(H.Loading,{});const R=z&&g.currentData?.meta?.pendingReleasesCount||0,k=R>=m,B=S=>{p({...c,page:1,pageSize:g?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:S!=="pending"}}})},$=async({name:S,scheduledAt:o,timezone:x})=>{const j=await l({name:S,scheduledAt:o,timezone:x});"data"in j?(a({type:"success",message:i({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),y("didCreateRelease"),n(j.data.data.id.toString())):X(j.error)?a({type:"danger",message:u(j.error)}):a({type:"danger",message:i({id:"notification.error",defaultMessage:"An error occurred"})})};return e.jsxs(ve,{"aria-busy":I||C,children:[e.jsx(K.Header,{title:i({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:i({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"Create and manage content updates"}),primaryAction:w?e.jsx(L,{startIcon:e.jsx(Ge,{}),onClick:v,disabled:k,children:i({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})}):null}),e.jsx(K.Content,{children:e.jsxs(e.Fragment,{children:[k&&e.jsx(Gt,{marginBottom:6,action:e.jsx(xe,{href:"https://strapi.io/pricing-cloud",isExternal:!0,children:i({id:"content-releases.pages.Releases.max-limit-reached.action",defaultMessage:"Explore plans"})}),title:i({id:"content-releases.pages.Releases.max-limit-reached.title",defaultMessage:"You have reached the {number} pending {number, plural, one {release} other {releases}} limit."},{number:m}),onClose:()=>{},closeLabel:"",children:i({id:"content-releases.pages.Releases.max-limit-reached.message",defaultMessage:"Upgrade to manage an unlimited number of releases."})}),e.jsxs(G.Root,{variant:"simple",onValueChange:B,value:N,children:[e.jsxs(V,{paddingBottom:8,children:[e.jsxs(G.List,{"aria-label":i({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),children:[e.jsx(G.Trigger,{value:"pending",children:i({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending ({count})"},{count:R})}),e.jsx(G.Trigger,{value:"done",children:i({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),e.jsx(_e,{})]}),e.jsx(G.Content,{value:"pending",children:e.jsx(he,{sectionTitle:"pending",releases:g?.currentData?.data,isError:d})}),e.jsx(G.Content,{value:"done",children:e.jsx(he,{sectionTitle:"done",releases:g?.currentData?.data,isError:d})})]}),e.jsxs(Y.Root,{...g?.currentData?.meta?.pagination,defaultPageSize:g?.currentData?.meta?.pagination?.pageSize,children:[e.jsx(Y.PageSize,{options:["8","16","32","64"]}),e.jsx(Y.Links,{})]})]})}),e.jsx(Ie,{open:s,handleClose:v,handleSubmit:$,isLoading:h,initialValues:{..._t,timezone:M?.data.defaultTimezone?M.data.defaultTimezone.split("&")[1]:null}})]})},qt=P(b)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:t})=>t.borderRadius};
  border-bottom-left-radius: ${({theme:t})=>t.borderRadius};
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,me=P(Qe)`
  svg path {
    fill: ${({theme:t,disabled:s})=>s&&t.colors.neutral500};
  }
  span {
    color: ${({theme:t,disabled:s})=>s&&t.colors.neutral500};
  }

  &:hover {
    background: ${({theme:t,$variant:s="neutral"})=>t.colors[`${s}100`]};
  }
`,Yt=P(qe)`
  width: ${({theme:t})=>t.spaces[4]};
  height: ${({theme:t})=>t.spaces[4]};
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,Zt=P(Ye)`
  width: ${({theme:t})=>t.spaces[4]};
  height: ${({theme:t})=>t.spaces[4]};
  path {
    fill: ${({theme:t})=>t.colors.danger600};
  }
`,pe=({toggleEditReleaseModal:t,toggleWarningSubmit:s,children:r})=>{const{formatMessage:a,formatDate:i,formatTime:n}=A(),{releaseId:u}=Ce(),{data:c,isLoading:p,error:g}=oe({id:u},{skip:!u}),[M,{isLoading:C}]=ct(),{toggleNotification:l}=te(),{formatAPIError:h}=se(),{allowedActions:T}=re(ee),{canUpdate:m,canDelete:y,canPublish:w}=T,I=Wt(),{trackUsage:z}=Me(),d=c?.data,N=x=>async()=>{const j=await M({id:x});if("data"in j){l({type:"success",message:a({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})});const{totalEntries:E,totalPublishedEntries:Z,totalUnpublishedEntries:J}=j.data.meta;z("didPublishRelease",{totalEntries:E,totalPublishedEntries:Z,totalUnpublishedEntries:J})}else X(j.error)?l({type:"danger",message:h(j.error)}):l({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occurred"})})},v=()=>{I(Ct.util.invalidateTags([{type:"ReleaseAction",id:"LIST"},{type:"Release",id:u}]))},R=()=>d?.createdBy?d.createdBy.username?d.createdBy.username:d.createdBy.firstname?`${d.createdBy.firstname} ${d.createdBy.lastname||""}`.trim():d.createdBy.email:null;if(p)return e.jsx(H.Loading,{});if($e(g)&&"code"in g||!d)return e.jsx(le,{to:"..",state:{errors:[{code:g?.code}]}});const k=d.actions.meta.count||0,B=!!R(),$=d.scheduledAt&&d.timezone,S=a({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:k}),o=$?a({id:"content-releases.pages.ReleaseDetails.header-subtitle.scheduled",defaultMessage:"Scheduled for {date} at {time} ({offset})"},{date:i(new Date(d.scheduledAt),{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:d.timezone}),time:n(new Date(d.scheduledAt),{timeZone:d.timezone,hourCycle:"h23"}),offset:ut(d.timezone,new Date(d.scheduledAt))}):"";return e.jsxs(ve,{"aria-busy":p,children:[e.jsx(K.Header,{title:d.name,subtitle:e.jsxs(b,{gap:2,lineHeight:6,children:[e.jsx(f,{textColor:"neutral600",variant:"epsilon",children:S+($?` - ${o}`:"")}),e.jsx(de,{...Ee(d.status),children:d.status})]}),navigationAction:e.jsx(gt,{fallback:".."}),primaryAction:!d.releasedAt&&e.jsxs(b,{gap:2,children:[e.jsxs(Jt,{label:e.jsx(ht,{}),variant:"tertiary",endIcon:null,paddingLeft:"7px",paddingRight:"7px","aria-label":a({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release edit and delete menu"}),popoverPlacement:"bottom-end",children:[e.jsx(me,{disabled:!m,onSelect:t,children:e.jsxs(b,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[e.jsx(Yt,{}),e.jsx(f,{ellipsis:!0,children:a({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]})}),e.jsx(me,{disabled:!y,onSelect:s,$variant:"danger",children:e.jsxs(b,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[e.jsx(Zt,{}),e.jsx(f,{ellipsis:!0,textColor:"danger600",children:a({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})}),e.jsxs(qt,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:4,children:[e.jsx(f,{variant:"pi",fontWeight:"bold",children:a({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),e.jsxs(f,{variant:"pi",color:"neutral300",children:[e.jsx(Ae,{timestamp:new Date(d.createdAt)}),a({id:"content-releases.header.actions.created.description",defaultMessage:"{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"},{createdBy:R(),hasCreatedByUser:B})]})]})]}),e.jsx(L,{size:"S",variant:"tertiary",onClick:v,children:a({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),w?e.jsx(L,{size:"S",variant:"default",onClick:N(d.id.toString()),loading:C,disabled:d.actions.meta.count===0,children:a({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})}):null]})}),r]})},Jt=P(Ze)`
  & > span {
    display: flex;
  }
`,Kt=["contentType","locale","action"],Xt=["contentType","action"],fe=t=>t==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:t==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},Vt=({releaseId:t})=>{const{formatMessage:s}=A(),[{query:r},a]=ye(),{toggleNotification:i}=te(),{formatAPIError:n}=se(),{data:u,isLoading:c,error:p}=oe({id:t}),{allowedActions:{canUpdate:g}}=re(ee),M=mt("ReleaseDetailsPage",o=>o.runHookWaterfall),{displayedHeaders:C,hasI18nEnabled:l}=M("ContentReleases/pages/ReleaseDetails/add-locale-in-releases",{displayedHeaders:[{label:{id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"},name:"name"}],hasI18nEnabled:!1}),h=u?.data,T=r?.groupBy||"contentType",{isLoading:m,isFetching:y,isError:w,data:I,error:z}=pt({...r,releaseId:t}),[d]=ft(),N=async(o,x,j)=>{const E=await d({params:{releaseId:t,actionId:x},body:{type:o.target.value},query:r,actionPath:j});"error"in E&&(X(E.error)?i({type:"danger",message:n(E.error)}):i({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(m||c)return e.jsx(H.Loading,{});const v=I?.data,R=I?.meta,k=R?.contentTypes||{};if(R?.components,$e(p)||!h){const o=[];return p&&"code"in p&&o.push({code:p.code}),z&&"code"in z&&o.push({code:z.code}),e.jsx(le,{to:"..",state:{errors:o}})}if(w||!v)return e.jsx(H.Error,{});if(Object.keys(v).length===0)return e.jsx(K.Content,{children:e.jsx(we,{action:e.jsx(ze,{tag:Se,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})}),icon:e.jsx(De,{width:"16rem"}),content:s({id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."})})});const B=s({id:"content-releases.pages.ReleaseDetails.groupBy.aria-label",defaultMessage:"Group by"}),$=[...C,{label:{id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"},name:"content-type"},{label:{id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"},name:"action"},...h.releasedAt?[]:[{label:{id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"},name:"status"}]],S=l?Kt:Xt;return e.jsx(K.Content,{children:e.jsxs(b,{gap:8,direction:"column",alignItems:"stretch",children:[e.jsx(b,{children:e.jsx(xt,{placeholder:B,"aria-label":B,customizeContent:o=>s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:o}),value:s(fe(T)),onChange:o=>a({groupBy:o}),children:S.map(o=>e.jsx(jt,{value:o,children:s(fe(o))},o))})}),Object.keys(v).map(o=>e.jsxs(b,{gap:4,direction:"column",alignItems:"stretch",children:[e.jsx(b,{role:"separator","aria-label":o,children:e.jsx(de,{children:o})}),e.jsx(_.Root,{rows:v[o].map(x=>({...x,id:Number(x.entry.id)})),headers:$,isLoading:m||y,children:e.jsxs(_.Content,{children:[e.jsx(_.Head,{children:$.map(({label:x,name:j})=>e.jsx(_.HeaderCell,{label:s(x),name:j},j))}),e.jsx(_.Loading,{}),e.jsx(_.Body,{children:v[o].map(({id:x,contentType:j,locale:E,type:Z,entry:J,status:Pe},ke)=>e.jsxs(bt,{children:[e.jsx(Q,{width:"25%",maxWidth:"200px",children:e.jsx(f,{ellipsis:!0,children:`${j.mainFieldValue||J.id}`})}),l&&e.jsx(Q,{width:"10%",children:e.jsx(f,{children:`${E?.name?E.name:"-"}`})}),e.jsx(Q,{width:"10%",children:e.jsx(f,{children:j.displayName||""})}),e.jsx(Q,{width:"20%",children:h.releasedAt?e.jsx(f,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:Z==="publish",b:ae=>e.jsx(f,{fontWeight:"bold",children:ae})})}):e.jsx(yt,{selected:Z,handleChange:ae=>N(ae,x,[o,ke]),name:`release-action-${x}-type`,disabled:!g})}),!h.releasedAt&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{width:"20%",minWidth:"200px",children:e.jsx(Ot,{action:Z,schema:k?.[j.uid],entry:J,status:Pe})}),e.jsx(Q,{children:e.jsx(b,{justifyContent:"flex-end",children:e.jsxs(ne.Root,{children:[e.jsx(ne.ReleaseActionEntryLinkItem,{contentTypeUid:j.uid,documentId:J.documentId,locale:E?.code}),e.jsx(ne.DeleteReleaseActionItem,{releaseId:h.id,actionId:x})]})})})]})]},x))})]})})]},`releases-group-${o}`)),e.jsxs(Y.Root,{...R?.pagination,defaultPageSize:R?.pagination?.pageSize,children:[e.jsx(Y.PageSize,{}),e.jsx(Y.Links,{})]})]})})},es=()=>{const{formatMessage:t}=A(),{releaseId:s}=Ce(),{toggleNotification:r}=te(),{formatAPIError:a}=se(),i=be(),[n,u]=F.useState(!1),[c,p]=F.useState(!1),{isLoading:g,data:M,isSuccess:C}=oe({id:s},{skip:!s}),{data:l,isLoading:h}=Re(),[T,{isLoading:m}]=Je(),[y]=Ke(),w=()=>{u(o=>!o)},I=()=>d?.timezone?d.timezone:l?.data.defaultTimezone?l.data.defaultTimezone:null,z=()=>p(o=>!o);if(g||h)return e.jsx(pe,{toggleEditReleaseModal:w,toggleWarningSubmit:z,children:e.jsx(H.Loading,{})});if(!s)return e.jsx(le,{to:".."});const d=C&&M?.data||null,N=d?.name||"",v=I(),R=d?.scheduledAt&&v?Le(d.scheduledAt,v):null,k=R?ie(R,"yyyy-MM-dd"):void 0,B=R?ie(R,"HH:mm"):"",$=async o=>{const x=await T({id:s,name:o.name,scheduledAt:o.scheduledAt,timezone:o.timezone});"data"in x?(r({type:"success",message:t({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}),w()):X(x.error)?r({type:"danger",message:a(x.error)}):r({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})},S=async()=>{const o=await y({id:s});"data"in o?i(".."):X(o.error)?r({type:"danger",message:a(o.error)}):r({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})};return e.jsxs(pe,{toggleEditReleaseModal:w,toggleWarningSubmit:z,children:[e.jsx(Vt,{releaseId:s}),e.jsx(Ie,{open:n,handleClose:w,handleSubmit:$,isLoading:g||m,initialValues:{name:N||"",scheduledAt:R,date:k,time:B,isScheduled:!!R,timezone:v}}),e.jsx(Xe.Root,{open:c,onOpenChange:z,children:e.jsx(Ve,{onConfirm:S,children:t({id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"})})})]})},rs=()=>e.jsx(H.Protect,{permissions:ee.main,children:e.jsxs(Ne,{children:[e.jsx(ue,{index:!0,element:e.jsx(Qt,{})}),e.jsx(ue,{path:":releaseId",element:e.jsx(es,{})})]})});export{rs as App};
