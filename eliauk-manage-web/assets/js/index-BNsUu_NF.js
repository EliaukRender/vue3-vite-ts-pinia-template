import{an as De,b as K,a as Ee,e as T,ao as ee,z as J,f as E,o as p,j as k,$ as I,q as m,s as C,k as e,a1 as P,a8 as y,m as c,l as N,p as Te,E as oe,a4 as g,n as le,_ as Z,ap as Fe,d as X,a3 as Ae,H as _e,aq as Ie,r as D,ar as Se,h as se,w as Y,X as Le,A as Re,as as Pe,P as Q,at as Me,au as te,av as ae,u as ne,y as Oe,M as re,v as ie,aw as de,N as ue,T as ce,ax as fe,t as pe,ay as ve,az as ze,a0 as V}from"./index-RkUO-6lj.js";/* empty css                  */import{F as Ne,u as He,U as me,a as qe,E as ye,b as be,c as Ve}from"./index-D-Onq40F.js";import{u as x,E as G}from"./index-9-h8w4LY.js";import{i as Ue}from"./isUndefined-DCTLXrZ8.js";import{_ as We}from"./_plugin-vue_export-helper-DlAUqK2U.js";const je=(...l)=>t=>{l.forEach(i=>{De(i)?i(t):i.value=t})},he=Symbol("dialogInjectionKey"),Ce=K({center:Boolean,alignCenter:Boolean,closeIcon:{type:Ee},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ke={close:()=>!0},Ze=["aria-level"],Ge=["aria-label"],Je=["id"],Xe=T({name:"ElDialogContent"}),Ye=T({...Xe,props:Ce,emits:Ke,setup(l){const t=l,{t:i}=ee(),{Close:b}=Fe,{dialogRef:n,headerRef:v,bodyId:d,ns:o,style:s}=J(he),{focusTrapRef:u}=J(Ne),h=E(()=>[o.b(),o.is("fullscreen",t.fullscreen),o.is("draggable",t.draggable),o.is("align-center",t.alignCenter),{[o.m("center")]:t.center}]),w=je(u,n),F=E(()=>t.draggable),B=E(()=>t.overflow);return He(n,v,F,B),(f,S)=>(p(),k("div",{ref:e(w),class:C(e(h)),style:le(e(s)),tabindex:"-1"},[I("header",{ref_key:"headerRef",ref:v,class:C([e(o).e("header"),{"show-close":f.showClose}])},[m(f.$slots,"header",{},()=>[I("span",{role:"heading","aria-level":f.ariaLevel,class:C(e(o).e("title"))},P(f.title),11,Ze)]),f.showClose?(p(),k("button",{key:0,"aria-label":e(i)("el.dialog.close"),class:C(e(o).e("headerbtn")),type:"button",onClick:S[0]||(S[0]=H=>f.$emit("close"))},[y(e(oe),{class:C(e(o).e("close"))},{default:c(()=>[(p(),N(Te(f.closeIcon||e(b))))]),_:1},8,["class"])],10,Ge)):g("v-if",!0)],2),I("div",{id:e(d),class:C(e(o).e("body"))},[m(f.$slots,"default")],10,Je),f.$slots.footer?(p(),k("footer",{key:0,class:C(e(o).e("footer"))},[m(f.$slots,"footer")],2)):g("v-if",!0)],6))}});var Qe=Z(Ye,[["__file","dialog-content.vue"]]);const ge=K({...Ce,appendToBody:Boolean,appendTo:{type:X(String),default:"body"},beforeClose:{type:X(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),we={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[me]:l=>Ae(l),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Be=(l,t)=>{var i;const n=_e().emit,{nextZIndex:v}=Ie();let d="";const o=x(),s=x(),u=D(!1),h=D(!1),w=D(!1),F=D((i=l.zIndex)!=null?i:v());let B,f;const S=Se("namespace",Pe),H=E(()=>{const $={},z=`--${S.value}-dialog`;return l.fullscreen||(l.top&&($[`${z}-margin-top`]=l.top),l.width&&($[`${z}-width`]=se(l.width))),$}),U=E(()=>l.alignCenter?{display:"flex"}:{});function q(){n("opened")}function W(){n("closed"),n(me,!1),l.destroyOnClose&&(w.value=!1)}function j(){n("close")}function A(){f==null||f(),B==null||B(),l.openDelay&&l.openDelay>0?{stop:B}=Q(()=>_(),l.openDelay):_()}function M(){B==null||B(),f==null||f(),l.closeDelay&&l.closeDelay>0?{stop:f}=Q(()=>a(),l.closeDelay):a()}function L(){function $(z){z||(h.value=!0,u.value=!1)}l.beforeClose?l.beforeClose($):M()}function r(){l.closeOnClickModal&&L()}function _(){Me&&(u.value=!0)}function a(){u.value=!1}function R(){n("openAutoFocus")}function O(){n("closeAutoFocus")}function ke($){var z;((z=$.detail)==null?void 0:z.focusReason)==="pointer"&&$.preventDefault()}l.lockScroll&&qe(u);function $e(){l.closeOnPressEscape&&L()}return Y(()=>l.modelValue,$=>{$?(h.value=!1,A(),w.value=!0,F.value=Ue(l.zIndex)?v():F.value++,Le(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):u.value&&M()}),Y(()=>l.fullscreen,$=>{t.value&&($?(d=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=d)}),Re(()=>{l.modelValue&&(u.value=!0,w.value=!0,A())}),{afterEnter:q,afterLeave:W,beforeLeave:j,handleClose:L,onModalClick:r,close:M,doClose:a,onOpenAutoFocus:R,onCloseAutoFocus:O,onCloseRequested:$e,onFocusoutPrevented:ke,titleId:o,bodyId:s,closed:h,style:H,overlayDialogStyle:U,rendered:w,visible:u,zIndex:F}},xe=["aria-label","aria-labelledby","aria-describedby"],eo=T({name:"ElDialog",inheritAttrs:!1}),oo=T({...eo,props:ge,emits:we,setup(l,{expose:t}){const i=l,b=te();ae({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},E(()=>!!b.title));const n=ne("dialog"),v=D(),d=D(),o=D(),{visible:s,titleId:u,bodyId:h,style:w,overlayDialogStyle:F,rendered:B,zIndex:f,afterEnter:S,afterLeave:H,beforeLeave:U,handleClose:q,onModalClick:W,onOpenAutoFocus:j,onCloseAutoFocus:A,onCloseRequested:M,onFocusoutPrevented:L}=Be(i,v);Oe(he,{dialogRef:v,headerRef:d,bodyId:h,ns:n,rendered:B,style:w});const r=Ve(W),_=E(()=>i.draggable&&!i.fullscreen);return t({visible:s,dialogContentRef:o}),(a,R)=>(p(),N(fe,{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},[y(ce,{name:"dialog-fade",onAfterEnter:e(S),onAfterLeave:e(H),onBeforeLeave:e(U),persisted:""},{default:c(()=>[re(y(e(ye),{"custom-mask-event":"",mask:a.modal,"overlay-class":a.modalClass,"z-index":e(f)},{default:c(()=>[I("div",{role:"dialog","aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:e(u),"aria-describedby":e(h),class:C(`${e(n).namespace.value}-overlay-dialog`),style:le(e(F)),onClick:R[0]||(R[0]=(...O)=>e(r).onClick&&e(r).onClick(...O)),onMousedown:R[1]||(R[1]=(...O)=>e(r).onMousedown&&e(r).onMousedown(...O)),onMouseup:R[2]||(R[2]=(...O)=>e(r).onMouseup&&e(r).onMouseup(...O))},[y(e(be),{loop:"",trapped:e(s),"focus-start-el":"container",onFocusAfterTrapped:e(j),onFocusAfterReleased:e(A),onFocusoutPrevented:e(L),onReleaseRequested:e(M)},{default:c(()=>[e(B)?(p(),N(Qe,ie({key:0,ref_key:"dialogContentRef",ref:o},a.$attrs,{center:a.center,"align-center":a.alignCenter,"close-icon":a.closeIcon,draggable:e(_),overflow:a.overflow,fullscreen:a.fullscreen,"show-close":a.showClose,title:a.title,"aria-level":a.headerAriaLevel,onClose:e(q)}),de({header:c(()=>[a.$slots.title?m(a.$slots,"title",{key:1}):m(a.$slots,"header",{key:0,close:e(q),titleId:e(u),titleClass:e(n).e("title")})]),default:c(()=>[m(a.$slots,"default")]),_:2},[a.$slots.footer?{name:"footer",fn:c(()=>[m(a.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):g("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,xe)]),_:3},8,["mask","overlay-class","z-index"]),[[ue,e(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var lo=Z(oo,[["__file","dialog.vue"]]);const so=pe(lo),to=K({...ge,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),ao=we,no=["aria-label","aria-labelledby","aria-describedby"],ro=["id","aria-level"],io=["aria-label"],uo=["id"],co=T({name:"ElDrawer",inheritAttrs:!1}),fo=T({...co,props:to,emits:ao,setup(l,{expose:t}){const i=l,b=te();ae({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},E(()=>!!b.title));const n=D(),v=D(),d=ne("drawer"),{t:o}=ee(),{afterEnter:s,afterLeave:u,beforeLeave:h,visible:w,rendered:F,titleId:B,bodyId:f,zIndex:S,onModalClick:H,onOpenAutoFocus:U,onCloseAutoFocus:q,onFocusoutPrevented:W,onCloseRequested:j,handleClose:A}=Be(i,n),M=E(()=>i.direction==="rtl"||i.direction==="ltr"),L=E(()=>se(i.size));return t({handleClose:A,afterEnter:s,afterLeave:u}),(r,_)=>(p(),N(fe,{to:"body",disabled:!r.appendToBody},[y(ce,{name:e(d).b("fade"),onAfterEnter:e(s),onAfterLeave:e(u),onBeforeLeave:e(h),persisted:""},{default:c(()=>[re(y(e(ye),{mask:r.modal,"overlay-class":r.modalClass,"z-index":e(S),onClick:e(H)},{default:c(()=>[y(e(be),{loop:"",trapped:e(w),"focus-trap-el":n.value,"focus-start-el":v.value,onFocusAfterTrapped:e(U),onFocusAfterReleased:e(q),onFocusoutPrevented:e(W),onReleaseRequested:e(j)},{default:c(()=>[I("div",ie({ref_key:"drawerRef",ref:n,"aria-modal":"true","aria-label":r.title||void 0,"aria-labelledby":r.title?void 0:e(B),"aria-describedby":e(f)},r.$attrs,{class:[e(d).b(),r.direction,e(w)&&"open"],style:e(M)?"width: "+e(L):"height: "+e(L),role:"dialog",onClick:_[1]||(_[1]=ve(()=>{},["stop"]))}),[I("span",{ref_key:"focusStartRef",ref:v,class:C(e(d).e("sr-focus")),tabindex:"-1"},null,2),r.withHeader?(p(),k("header",{key:0,class:C(e(d).e("header"))},[r.$slots.title?m(r.$slots,"title",{key:1},()=>[g(" DEPRECATED SLOT ")]):m(r.$slots,"header",{key:0,close:e(A),titleId:e(B),titleClass:e(d).e("title")},()=>[r.$slots.title?g("v-if",!0):(p(),k("span",{key:0,id:e(B),role:"heading","aria-level":r.headerAriaLevel,class:C(e(d).e("title"))},P(r.title),11,ro))]),r.showClose?(p(),k("button",{key:2,"aria-label":e(o)("el.drawer.close"),class:C(e(d).e("close-btn")),type:"button",onClick:_[0]||(_[0]=(...a)=>e(A)&&e(A)(...a))},[y(e(oe),{class:C(e(d).e("close"))},{default:c(()=>[y(e(ze))]),_:1},8,["class"])],10,io)):g("v-if",!0)],2)):g("v-if",!0),e(F)?(p(),k("div",{key:1,id:e(f),class:C(e(d).e("body"))},[m(r.$slots,"default")],10,uo)):g("v-if",!0),r.$slots.footer?(p(),k("div",{key:2,class:C(e(d).e("footer"))},[m(r.$slots,"footer")],2)):g("v-if",!0)],16,no)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[ue,e(w)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var po=Z(fo,[["__file","drawer.vue"]]);const vo=pe(po),mo={key:0,class:"dialog-title"},yo={key:0,class:"dialog-footer"},bo=T({name:"Dialog"}),ho=T({...bo,props:{visible:{type:Boolean,default:!1},title:{default:"标题"},customWidth:{default:800},showModal:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},showDefaultFooter:{type:Boolean,default:!0},showDefaultHeader:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1},isBeforeClose:{type:Boolean,default:!1},cancelBtnText:{default:"取消"},confirmBtnText:{default:"确定"},disabledConfirmBtn:{type:Boolean,default:!1},confirmBtnLoading:{type:Boolean,default:!1}},emits:["beforeClose","cancel","confirm"],setup(l,{emit:t}){const i=l,b=E(()=>i.customWidth),n=t,v=s=>{i.isBeforeClose?n("beforeClose",s):n("cancel")},d=()=>{n("cancel")},o=()=>{n("confirm")};return(s,u)=>{const h=G,w=so;return p(),k("div",{onClick:u[0]||(u[0]=ve(()=>{},["stop"]))},[y(w,{"model-value":s.visible,width:b.value,"show-close":s.showClose,"close-on-click-modal":s.closeOnClickModal,"close-on-press-escape":s.closeOnPressEscape,modal:s.showModal,"align-center":!0,"before-close":v,"append-to-body":"",onClose:d},{header:c(()=>[m(s.$slots,"header"),s.showDefaultHeader&&!s.$slots.header?(p(),k("div",mo,P(s.title),1)):g("",!0)]),footer:c(()=>[m(s.$slots,"footer"),s.showDefaultFooter&&!s.$slots.footer?(p(),k("span",yo,[y(h,{onClick:d},{default:c(()=>[V(P(s.cancelBtnText),1)]),_:1}),y(h,{type:"primary",disabled:s.disabledConfirmBtn,loading:s.confirmBtnLoading,onClick:o},{default:c(()=>[V(P(s.confirmBtnText),1)]),_:1},8,["disabled","loading"])])):g("",!0)]),default:c(()=>[m(s.$slots,"default")]),_:3},8,["model-value","width","show-close","close-on-click-modal","close-on-press-escape","modal"])])}}}),Co={key:0,class:"drawer-title"},go={key:0,style:{flex:"auto"}},wo=T({name:"drawer"}),Bo=T({...wo,props:{visible:{type:Boolean,default:!1},title:{default:"标题"},customWidth:{default:800},isBeforeClose:{type:Boolean,default:!1},direction:{default:"rtl"},closeOnClickModal:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!1},showModal:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},showDefaultHeader:{type:Boolean,default:!0},showDefaultFooter:{type:Boolean,default:!0},showCancelBtn:{type:Boolean,default:!0},showConfirmBtn:{type:Boolean,default:!0},cancelBtnText:{default:"取消"},confirmBtnText:{default:"确定"},confirmBtnLoading:{type:Boolean,default:!1},disabledConfirmBtn:{type:Boolean,default:!1}},emits:["beforeClose","cancel","confirm"],setup(l,{emit:t}){const i=l,b=t,n=o=>{i.isBeforeClose?b("beforeClose",o):b("cancel")},v=()=>{b("cancel")},d=()=>{b("confirm")};return(o,s)=>{const u=G,h=vo;return p(),N(h,{"model-value":o.visible,"with-header":o.showHeader,direction:o.direction,"close-on-click-modal":o.closeOnClickModal,size:o.customWidth,"close-on-press-escape":o.closeOnPressEscape,modal:o.showModal,"show-close":o.showClose,"append-to-body":!0,"before-close":n,onClose:v},de({header:c(()=>[m(o.$slots,"header",{},void 0,!0),o.showDefaultHeader&&!o.$slots.header?(p(),k("div",Co,P(o.title),1)):g("",!0)]),default:c(()=>[m(o.$slots,"default",{},void 0,!0)]),_:2},[o.showDefaultFooter&&!o.$slots.footer?{name:"footer",fn:c(()=>[m(o.$slots,"footer",{},void 0,!0),o.$slots.footer?g("",!0):(p(),k("div",go,[o.showCancelBtn?(p(),N(u,{key:0,onClick:v},{default:c(()=>[V(P(o.cancelBtnText),1)]),_:1})):g("",!0),o.showConfirmBtn?(p(),N(u,{key:1,type:"primary",loading:o.confirmBtnLoading,disabled:o.disabledConfirmBtn,onClick:d},{default:c(()=>[V(P(o.confirmBtnText),1)]),_:1},8,["loading","disabled"])):g("",!0)]))]),key:"0"}:void 0]),1032,["model-value","with-header","direction","close-on-click-modal","size","close-on-press-escape","modal","show-close"])}}}),ko=We(Bo,[["__scopeId","data-v-566e9ce7"]]),$o={class:"page-main"},Do={class:"mb10"},Eo=I("div",null,"dialog的内容",-1),To={class:"mb10"},Ro=T({__name:"index",setup(l){const t=D({visible:!1}),i=D({visible:!1}),b=()=>{t.value.visible=!0},n=()=>{t.value.visible=!1},v=()=>{i.value.visible=!0},d=()=>{i.value.visible=!1};return(o,s)=>{const u=G;return p(),k("div",$o,[I("div",Do,[y(ho,{visible:t.value.visible,onCancel:n},{default:c(()=>[Eo]),_:1},8,["visible"]),y(u,{type:"primary",onClick:b},{default:c(()=>[V(" useDialog ")]),_:1})]),I("div",To,[y(ko,{visible:i.value.visible,onCancel:d},null,8,["visible"]),y(u,{type:"primary",onClick:v},{default:c(()=>[V(" useDrawer ")]),_:1})])])}}});export{Ro as default};
