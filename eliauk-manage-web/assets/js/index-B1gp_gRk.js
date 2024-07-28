import{b as G,c as Xe,i as We,a as Z,d as L,e as O,u as B,r as E,f as v,g as Q,h as Ue,w as se,o as _,j as P,n as ze,k as T,l as j,m as $,p as Se,E as ve,q as x,s as ne,_ as K,t as $e,v as we,x as et,T as Fe,y as ae,z as le,A as he,B as Te,C as D,D as de,F as ye,G as tt,H as Oe,I as nt,J as ot,K as Ne,L as S,M as qe,N as st,O as re,P as He,Q as at,R as lt,S as rt,U as it,V as ut,W as Re,X as ct,Y as dt,Z as Ge,$ as N,a0 as ke,a1 as ie,a2 as xe,a3 as pt,a4 as De,a5 as ft,a6 as mt,a7 as vt,a8 as F,a9 as ht,aa as bt,ab as gt,ac as yt,ad as _t,ae as Mt,af as je}from"./index-CMGkgHM_.js";import{u as Ee,a as R,t as pe,E as Pe,C as Ct,M as It}from"./index-D0jel1Y-.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as St}from"./index-B0OxDiwq.js";import{t as me}from"./event-CelxogyL.js";import{f as Et}from"./index-BarHcIlO.js";import"./index-KMSFr1j0.js";const $t=G({size:{type:[Number,String],values:Xe,default:"",validator:e=>We(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:Z},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:L(String),default:"cover"}}),wt={error:e=>e instanceof Event},Tt=["src","alt","srcset"],Ot=O({name:"ElAvatar"}),Nt=O({...Ot,props:$t,emits:wt,setup(e,{emit:o}){const n=e,s=B("avatar"),t=E(!1),b=v(()=>{const{size:l,icon:p,shape:f}=n,y=[s.b()];return Q(l)&&y.push(s.m(l)),p&&y.push(s.m("icon")),f&&y.push(s.m(f)),y}),d=v(()=>{const{size:l}=n;return We(l)?s.cssVarBlock({size:Ue(l)||""}):void 0}),h=v(()=>({objectFit:n.fit}));se(()=>n.src,()=>t.value=!1);function a(l){t.value=!0,o("error",l)}return(l,p)=>(_(),P("span",{class:ne(T(b)),style:ze(T(d))},[(l.src||l.srcSet)&&!t.value?(_(),P("img",{key:0,src:l.src,alt:l.alt,srcset:l.srcSet,style:ze(T(h)),onError:a},null,44,Tt)):l.icon?(_(),j(T(ve),{key:1},{default:$(()=>[(_(),j(Se(l.icon)))]),_:1})):x(l.$slots,"default",{key:2})],6))}});var kt=K(Nt,[["__file","avatar.vue"]]);const xt=$e(kt),Pt=O({name:"ElCollapseTransition"}),Bt=O({...Pt,setup(e){const o=B("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,b)=>(_(),j(Fe,we({name:T(o).b()},et(s)),{default:$(()=>[x(t.$slots,"default")]),_:3},16,["name"]))}});var fe=K(Bt,[["__file","collapse-transition.vue"]]);fe.install=e=>{e.component(fe.name,fe)};const At=fe,Lt=O({inheritAttrs:!1});function zt(e,o,n,s,t,b){return x(e.$slots,"default")}var Ht=K(Lt,[["render",zt],["__file","collection.vue"]]);const Rt=O({name:"ElCollectionItem",inheritAttrs:!1});function Dt(e,o,n,s,t,b){return x(e.$slots,"default")}var jt=K(Rt,[["render",Dt],["__file","collection-item.vue"]]);const Vt="data-el-collection-item",Wt=e=>{const o=`El${e}Collection`,n=`${o}Item`,s=Symbol(o),t=Symbol(n),b={...Ht,name:o,setup(){const h=E(null),a=new Map;ae(s,{itemMap:a,getItems:()=>{const p=T(h);if(!p)return[];const f=Array.from(p.querySelectorAll(`[${Vt}]`));return[...a.values()].sort((w,V)=>f.indexOf(w.ref)-f.indexOf(V.ref))},collectionRef:h})}},d={...jt,name:n,setup(h,{attrs:a}){const l=E(null),p=le(s,void 0);ae(t,{collectionItemRef:l}),he(()=>{const f=T(l);f&&p.itemMap.set(f,{ref:f,...a})}),Te(()=>{const f=T(l);p.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:s,COLLECTION_ITEM_INJECTION_KEY:t,ElCollection:b,ElCollectionItem:d}},_e=G({trigger:Ee.trigger,effect:{...R.effect,default:"light"},type:{type:L(String)},placement:{type:L(String),default:"bottom"},popperOptions:{type:L(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:L([Number,String]),default:0},maxHeight:{type:L([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:L(Object)},teleported:R.teleported});G({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Z}});G({onKeydown:{type:L(Function)}});Wt("Dropdown");let Ut=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case D.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case D.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case D.tab:{pe(o,"mouseleave");break}case D.enter:case D.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},Ft=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new Ut(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case D.down:{pe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case D.up:{pe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case D.tab:{pe(o.currentTarget,"mouseleave");break}case D.enter:case D.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},qt=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new Ft(s,o)})}};const Gt=O({name:"ElMenuCollapseTransition",setup(){const e=B("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){de(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){ye(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),tt(n,e.m("collapse"))?(ye(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),de(n,e.m("collapse"))):(de(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ye(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){de(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Kt(e,o,n,s,t,b){return _(),j(Fe,we({mode:"out-in"},e.listeners),{default:$(()=>[x(e.$slots,"default")]),_:3},16)}var Jt=K(Gt,[["render",Kt],["__file","menu-collapse-transition.vue"]]);function Ke(e,o){const n=v(()=>{let t=e.parent;const b=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&b.unshift(t.props.index),t=t.parent;return b});return{parentMenu:v(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Yt(e){return v(()=>{const n=e.backgroundColor;return n?new St(n).shade(20).toString():""})}const Je=(e,o)=>{const n=B("menu");return v(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Yt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},Zt=G({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:Z},expandOpenIcon:{type:Z},collapseCloseIcon:{type:Z},collapseOpenIcon:{type:Z}}),Me="ElSubMenu";var Ae=O({name:Me,props:Zt,setup(e,{slots:o,expose:n}){const s=Oe(),{indexPath:t,parentMenu:b}=Ke(s,v(()=>e.index)),d=B("menu"),h=B("sub-menu"),a=le("rootMenu");a||me(Me,"can not inject root menu");const l=le(`subMenu:${b.value.uid}`);l||me(Me,"can not inject sub menu");const p=E({}),f=E({});let y;const w=E(!1),V=E(),q=E(null),i=v(()=>Y.value==="horizontal"&&A.value?"bottom-start":"right-start"),W=v(()=>Y.value==="horizontal"&&A.value||Y.value==="vertical"&&!a.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?z.value?e.expandOpenIcon:e.expandCloseIcon:nt:e.collapseCloseIcon&&e.collapseOpenIcon?z.value?e.collapseOpenIcon:e.collapseCloseIcon:ot),A=v(()=>l.level===0),J=v(()=>{const c=e.teleported;return c===void 0?A.value:c}),be=v(()=>a.props.collapse?`${d.namespace.value}-zoom-in-left`:`${d.namespace.value}-zoom-in-top`),ge=v(()=>Y.value==="horizontal"&&A.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),z=v(()=>a.openedMenus.includes(e.index)),X=v(()=>{let c=!1;return Object.values(p.value).forEach(g=>{g.active&&(c=!0)}),Object.values(f.value).forEach(g=>{g.active&&(c=!0)}),c}),Y=v(()=>a.props.mode),ee=Ne({index:e.index,indexPath:t,active:X}),oe=Je(a.props,l.level+1),ue=v(()=>{var c;return(c=e.popperOffset)!=null?c:a.props.popperOffset}),te=v(()=>{var c;return(c=e.popperClass)!=null?c:a.props.popperClass}),ce=v(()=>{var c;return(c=e.showTimeout)!=null?c:a.props.showTimeout}),r=v(()=>{var c;return(c=e.hideTimeout)!=null?c:a.props.hideTimeout}),u=()=>{var c,g,I;return(I=(g=(c=q.value)==null?void 0:c.popperRef)==null?void 0:g.popperInstanceRef)==null?void 0:I.destroy()},m=c=>{c||u()},C=()=>{a.props.menuTrigger==="hover"&&a.props.mode==="horizontal"||a.props.collapse&&a.props.mode==="vertical"||e.disabled||a.handleSubMenuClick({index:e.index,indexPath:t.value,active:X.value})},M=(c,g=ce.value)=>{var I;if(c.type!=="focus"){if(a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"||e.disabled){l.mouseInChild.value=!0;return}l.mouseInChild.value=!0,y==null||y(),{stop:y}=He(()=>{a.openMenu(e.index,t.value)},g),J.value&&((I=b.value.vnode.el)==null||I.dispatchEvent(new MouseEvent("mouseenter")))}},H=(c=!1)=>{var g;if(a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"){l.mouseInChild.value=!1;return}y==null||y(),l.mouseInChild.value=!1,{stop:y}=He(()=>!w.value&&a.closeMenu(e.index,t.value),r.value),J.value&&c&&((g=l.handleMouseleave)==null||g.call(l,!0))};se(()=>a.props.collapse,c=>m(!!c));{const c=I=>{f.value[I.index]=I},g=I=>{delete f.value[I.index]};ae(`subMenu:${s.uid}`,{addSubMenu:c,removeSubMenu:g,handleMouseleave:H,mouseInChild:w,level:l.level+1})}return n({opened:z}),he(()=>{a.addSubMenu(ee),l.addSubMenu(ee)}),Te(()=>{l.removeSubMenu(ee),a.removeSubMenu(ee)}),()=>{var c;const g=[(c=o.title)==null?void 0:c.call(o),S(ve,{class:h.e("icon-arrow"),style:{transform:z.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&a.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>Q(W.value)?S(s.appContext.components[W.value]):S(W.value)})],I=a.isMenuPopup?S(Pe,{ref:q,visible:z.value,effect:"light",pure:!0,offset:ue.value,showArrow:!1,persistent:!0,popperClass:te.value,placement:i.value,teleported:J.value,fallbackPlacements:ge.value,transition:be.value,gpuAcceleration:!1},{content:()=>{var k;return S("div",{class:[d.m(Y.value),d.m("popup-container"),te.value],onMouseenter:U=>M(U,100),onMouseleave:()=>H(!0),onFocus:U=>M(U,100)},[S("ul",{class:[d.b(),d.m("popup"),d.m(`popup-${i.value}`)],style:oe.value},[(k=o.default)==null?void 0:k.call(o)])])},default:()=>S("div",{class:h.e("title"),onClick:C},g)}):S(re,{},[S("div",{class:h.e("title"),ref:V,onClick:C},g),S(At,{},{default:()=>{var k;return qe(S("ul",{role:"menu",class:[d.b(),d.m("inline")],style:oe.value},[(k=o.default)==null?void 0:k.call(o)]),[[st,z.value]])}})]);return S("li",{class:[h.b(),h.is("active",X.value),h.is("opened",z.value),h.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:z.value,onMouseenter:M,onMouseleave:()=>H(),onFocus:M},[I])}}});const Qt=G({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:L(Array),default:()=>at([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:Z,default:()=>lt},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),Ce=e=>Array.isArray(e)&&e.every(o=>Q(o)),Xt={close:(e,o)=>Q(e)&&Ce(o),open:(e,o)=>Q(e)&&Ce(o),select:(e,o,n,s)=>Q(e)&&Ce(o)&&ut(n)&&(s===void 0||s instanceof Promise)};var en=O({name:"ElMenu",props:Qt,emits:Xt,setup(e,{emit:o,slots:n,expose:s}){const t=Oe(),b=t.appContext.config.globalProperties.$router,d=E(),h=B("menu"),a=B("sub-menu"),l=E(-1),p=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),f=E(e.defaultActive),y=E({}),w=E({}),V=v(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),q=()=>{const r=f.value&&y.value[f.value];if(!r||e.mode==="horizontal"||e.collapse)return;r.indexPath.forEach(m=>{const C=w.value[m];C&&i(m,C.indexPath)})},i=(r,u)=>{p.value.includes(r)||(e.uniqueOpened&&(p.value=p.value.filter(m=>u.includes(m))),p.value.push(r),o("open",r,u))},W=r=>{const u=p.value.indexOf(r);u!==-1&&p.value.splice(u,1)},A=(r,u)=>{W(r),o("close",r,u)},J=({index:r,indexPath:u})=>{p.value.includes(r)?A(r,u):i(r,u)},be=r=>{(e.mode==="horizontal"||e.collapse)&&(p.value=[]);const{index:u,indexPath:m}=r;if(!(Re(u)||Re(m)))if(e.router&&b){const C=r.route||u,M=b.push(C).then(H=>(H||(f.value=u),H));o("select",u,m,{index:u,indexPath:m,route:C},M)}else f.value=u,o("select",u,m,{index:u,indexPath:m})},ge=r=>{const u=y.value,m=u[r]||f.value&&u[f.value]||u[e.defaultActive];m?f.value=m.index:f.value=r},z=r=>{const u=getComputedStyle(r),m=Number.parseInt(u.marginLeft,10),C=Number.parseInt(u.marginRight,10);return r.offsetWidth+m+C||0},X=()=>{var r,u;if(!d.value)return-1;const m=Array.from((u=(r=d.value)==null?void 0:r.childNodes)!=null?u:[]).filter(U=>U.nodeName!=="#comment"&&(U.nodeName!=="#text"||U.nodeValue)),C=64,M=getComputedStyle(d.value),H=Number.parseInt(M.paddingLeft,10),c=Number.parseInt(M.paddingRight,10),g=d.value.clientWidth-H-c;let I=0,k=0;return m.forEach((U,Qe)=>{I+=z(U),I<=g-C&&(k=Qe+1)}),k===m.length?-1:k},Y=r=>w.value[r].indexPath,ee=(r,u=33.34)=>{let m;return()=>{m&&clearTimeout(m),m=setTimeout(()=>{r()},u)}};let oe=!0;const ue=()=>{if(l.value===X())return;const r=()=>{l.value=-1,ct(()=>{l.value=X()})};oe?r():ee(r)(),oe=!1};se(()=>e.defaultActive,r=>{y.value[r]||(f.value=""),ge(r)}),se(()=>e.collapse,r=>{r&&(p.value=[])}),se(y.value,q);let te;rt(()=>{e.mode==="horizontal"&&e.ellipsis?te=it(d,ue).stop:te==null||te()});const ce=E(!1);{const r=M=>{w.value[M.index]=M},u=M=>{delete w.value[M.index]};ae("rootMenu",Ne({props:e,openedMenus:p,items:y,subMenus:w,activeIndex:f,isMenuPopup:V,addMenuItem:M=>{y.value[M.index]=M},removeMenuItem:M=>{delete y.value[M.index]},addSubMenu:r,removeSubMenu:u,openMenu:i,closeMenu:A,handleMenuItemClick:be,handleSubMenuClick:J})),ae(`subMenu:${t.uid}`,{addSubMenu:r,removeSubMenu:u,mouseInChild:ce,level:0})}return he(()=>{e.mode==="horizontal"&&new qt(t.vnode.el,h.namespace.value)}),s({open:u=>{const{indexPath:m}=w.value[u];m.forEach(C=>i(C,m))},close:W,handleResize:ue}),()=>{var r,u;let m=(u=(r=n.default)==null?void 0:r.call(n))!=null?u:[];const C=[];if(e.mode==="horizontal"&&d.value){const g=Et(m),I=l.value===-1?g:g.slice(0,l.value),k=l.value===-1?[]:g.slice(l.value);k!=null&&k.length&&e.ellipsis&&(m=I,C.push(S(Ae,{index:"sub-menu-more",class:a.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>S(ve,{class:a.e("icon-more")},{default:()=>S(e.ellipsisIcon)}),default:()=>k})))}const M=Je(e,0),H=e.closeOnClickOutside?[[Ct,()=>{p.value.length&&(ce.value||(p.value.forEach(g=>o("close",g,Y(g))),p.value=[]))}]]:[],c=qe(S("ul",{key:String(e.collapse),role:"menubar",ref:d,style:M.value,class:{[h.b()]:!0,[h.m(e.mode)]:!0,[h.m("collapse")]:e.collapse}},[...m,...C]),H);return e.collapseTransition&&e.mode==="vertical"?S(Jt,()=>c):c}}});const tn=G({index:{type:L([String,null]),default:null},route:{type:L([String,Object])},disabled:Boolean}),nn={click:e=>Q(e.index)&&Array.isArray(e.indexPath)},Ie="ElMenuItem",on=O({name:Ie,components:{ElTooltip:Pe},props:tn,emits:nn,setup(e,{emit:o}){const n=Oe(),s=le("rootMenu"),t=B("menu"),b=B("menu-item");s||me(Ie,"can not inject root menu");const{parentMenu:d,indexPath:h}=Ke(n,dt(e,"index")),a=le(`subMenu:${d.value.uid}`);a||me(Ie,"can not inject sub menu");const l=v(()=>e.index===s.activeIndex),p=Ne({index:e.index,indexPath:h,active:l}),f=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:h.value,route:e.route}),o("click",p))};return he(()=>{a.addSubMenu(p),s.addMenuItem(p)}),Te(()=>{a.removeSubMenu(p),s.removeMenuItem(p)}),{parentMenu:d,rootMenu:s,active:l,nsMenu:t,nsMenuItem:b,handleClick:f}}});function sn(e,o,n,s,t,b){const d=Ge("el-tooltip");return _(),P("li",{class:ne([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...h)=>e.handleClick&&e.handleClick(...h))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(_(),j(d,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:$(()=>[x(e.$slots,"title")]),default:$(()=>[N("div",{class:ne(e.nsMenu.be("tooltip","trigger"))},[x(e.$slots,"default")],2)]),_:3},8,["effect"])):(_(),P(re,{key:1},[x(e.$slots,"default"),x(e.$slots,"title")],64))],2)}var Ye=K(on,[["render",sn],["__file","menu-item.vue"]]);const an={title:String},ln="ElMenuItemGroup",rn=O({name:ln,props:an,setup(){return{ns:B("menu-item-group")}}});function un(e,o,n,s,t,b){return _(),P("li",{class:ne(e.ns.b())},[N("div",{class:ne(e.ns.e("title"))},[e.$slots.title?x(e.$slots,"title",{key:1}):(_(),P(re,{key:0},[ke(ie(e.title),1)],64))],2),N("ul",null,[x(e.$slots,"default")])],2)}var Ze=K(rn,[["render",un],["__file","menu-item-group.vue"]]);const cn=$e(en,{MenuItem:Ye,MenuItemGroup:Ze,SubMenu:Ae}),dn=xe(Ye),pn=xe(Ze),fn=xe(Ae),mn=G({trigger:Ee.trigger,placement:_e.placement,disabled:Ee.disabled,visible:R.visible,transition:R.transition,popperOptions:_e.popperOptions,tabindex:_e.tabindex,content:R.content,popperStyle:R.popperStyle,popperClass:R.popperClass,enterable:{...R.enterable,default:!0},effect:{...R.effect,default:"light"},teleported:R.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),vn={"update:visible":e=>pt(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},hn="onUpdate:visible",bn=O({name:"ElPopover"}),gn=O({...bn,props:mn,emits:vn,setup(e,{expose:o,emit:n}){const s=e,t=v(()=>s[hn]),b=B("popover"),d=E(),h=v(()=>{var i;return(i=T(d))==null?void 0:i.popperRef}),a=v(()=>[{width:Ue(s.width)},s.popperStyle]),l=v(()=>[b.b(),s.popperClass,{[b.m("plain")]:!!s.content}]),p=v(()=>s.transition===`${b.namespace.value}-fade-in-linear`),f=()=>{var i;(i=d.value)==null||i.hide()},y=()=>{n("before-enter")},w=()=>{n("before-leave")},V=()=>{n("after-enter")},q=()=>{n("update:visible",!1),n("after-leave")};return o({popperRef:h,hide:f}),(i,W)=>(_(),j(T(Pe),we({ref_key:"tooltipRef",ref:d},i.$attrs,{trigger:i.trigger,placement:i.placement,disabled:i.disabled,visible:i.visible,transition:i.transition,"popper-options":i.popperOptions,tabindex:i.tabindex,content:i.content,offset:i.offset,"show-after":i.showAfter,"hide-after":i.hideAfter,"auto-close":i.autoClose,"show-arrow":i.showArrow,"aria-label":i.title,effect:i.effect,enterable:i.enterable,"popper-class":T(l),"popper-style":T(a),teleported:i.teleported,persistent:i.persistent,"gpu-acceleration":T(p),"onUpdate:visible":T(t),onBeforeShow:y,onBeforeHide:w,onShow:V,onHide:q}),{content:$(()=>[i.title?(_(),P("div",{key:0,class:ne(T(b).e("title")),role:"title"},ie(i.title),3)):De("v-if",!0),x(i.$slots,"default",{},()=>[ke(ie(i.content),1)])]),default:$(()=>[i.$slots.reference?x(i.$slots,"reference",{key:0}):De("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var yn=K(gn,[["__file","popover.vue"]]);const Ve=(e,o)=>{const n=o.arg||o.value,s=n==null?void 0:n.popperRef;s&&(s.triggerRef=e)};var _n={mounted(e,o){Ve(e,o)},updated(e,o){Ve(e,o)}};const Mn="popover",Cn=ft(_n,Mn),In=$e(yn,{directive:Cn}),Sn="/assets/png/logo-x1cHSLm8.png",Le=e=>(gt("data-v-f597a793"),e=e(),yt(),e),En={class:"header"},$n=Le(()=>N("img",{src:Sn,alt:""},null,-1)),wn=Le(()=>N("span",{class:"title"},"Vue3-Ts-Vite-Pina",-1)),Tn=[$n,wn],On={class:"right"},Nn=Le(()=>N("div",{class:"user-name"}," 用户信息 ",-1)),kn=O({__name:"PageHeader",setup(e){const o=mt(),n=vt(),s=()=>{o.push(ht)},t=()=>{It.ShowConfirmBox({type:"warning",confirmTitle:"确认退出登录？",confirmContent:"退出后数据将被清空，需重新登录后才能查看系统页面！",callBack:()=>{n.setToken(""),o.push(bt)}})};return(b,d)=>{const h=xt,a=In;return _(),P("div",En,[N("div",{class:"left",onClick:s},Tn),N("div",On,[F(h,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),F(a,{placement:"bottom",width:80,trigger:"hover","popper-class":"username-popover"},{reference:$(()=>[Nn]),default:$(()=>[N("div",{class:"operation"},[N("div",{class:"login-out",onClick:t}," 退出登录 ")])]),_:1})])])}}}),xn=Be(kn,[["__scopeId","data-v-f597a793"]]),Pn={class:"aside"},Bn={class:"menu"},An={__name:"LeftAsideMenu",setup(e){const o=_t(),n=E(!1),s=Mt(),t=v(()=>o.authMenuListGetter),b=v(()=>s.path?s.path:"/useDialog/index"),d=v(()=>t.value.map(l=>l.path)),h=()=>{},a=()=>{};return(l,p)=>{const f=ve,y=dn,w=pn,V=fn,q=cn;return _(),P("div",Pn,[N("div",Bn,[F(q,{class:"el-menu","default-active":b.value,"default-openeds":d.value,collapse:n.value,"active-text-color":"#894811",router:"",onOpen:h,onClose:a},{default:$(()=>[(_(!0),P(re,null,je(t.value,(i,W)=>(_(),j(V,{key:W,index:i.path},{title:$(()=>[F(f,null,{default:$(()=>[(_(),j(Se(i.meta.menuIcon)))]),_:2},1024),N("span",null,ie(i.meta.menuName),1)]),default:$(()=>[F(w,null,{default:$(()=>[(_(!0),P(re,null,je(i.children,(A,J)=>(_(),j(y,{key:J,index:A.path},{default:$(()=>[F(f,null,{default:$(()=>[(_(),j(Se(A.meta.menuIcon)))]),_:2},1024),ke(" "+ie(A.meta.menuName),1)]),_:2},1032,["index"]))),128))]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active","default-openeds","collapse"])])])}}},Ln=Be(An,[["__scopeId","data-v-1f10a83d"]]),zn={class:"layout"},Hn={class:"body"},Rn={class:"main"},Dn=O({__name:"index",setup(e){return(o,n)=>{const s=Ge("router-view");return _(),P("div",zn,[F(xn),N("div",Hn,[F(Ln,{class:"aside-menu"}),N("div",Rn,[F(s)])])])}}}),Zn=Be(Dn,[["__scopeId","data-v-547b14a6"]]);export{Zn as default};
