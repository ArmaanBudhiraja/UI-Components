(()=>{var a={};a.id=880,a.ids=[880],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},22026:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/armaanbudhiraja/UI-Components/src/app/components/color-picker/preview.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/armaanbudhiraja/UI-Components/src/app/components/color-picker/preview.tsx","default")},23026:(a,b,c)=>{Promise.resolve().then(c.bind(c,22026)),Promise.resolve().then(c.bind(c,33841)),Promise.resolve().then(c.bind(c,14775)),Promise.resolve().then(c.bind(c,35822))},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},56175:(a,b,c)=>{"use strict";c.d(b,{default:()=>bl});var d=c(21124),e=c(38301),f=c(23312),g=c(854),h=c(87868),i=c(43515),j=c(92808),k=c(2332),l=c(10498),m=c(7412),n=c(70904),o=c(69998),p=c(75656),q=c(25122),r=c(61611),s=c(99978),t=Symbol("radix.slottable");function u(a){return e.isValidElement(a)&&"function"==typeof a.type&&"__radixId"in a.type&&a.type.__radixId===t}var v=c(71700),w=c(11720),x=c(68829);function y(a){let b=e.useRef({value:a,previous:a});return e.useMemo(()=>(b.current.value!==a&&(b.current.previous=b.current.value,b.current.value=a),b.current.previous),[a])}var z=c(85009),A=c(61225),B=c(36409),C=[" ","Enter","ArrowUp","ArrowDown"],D=[" ","Enter"],E="Select",[F,G,H]=(0,i.N)(E),[I,J]=(0,k.A)(E,[H,q.Bk]),K=(0,q.Bk)(),[L,M]=I(E),[N,O]=I(E),P=a=>{let{__scopeSelect:b,children:c,open:f,defaultOpen:g,onOpenChange:h,value:i,defaultValue:j,onValueChange:k,dir:m,name:n,autoComplete:o,disabled:r,required:s,form:t}=a,u=K(b),[v,x]=e.useState(null),[y,z]=e.useState(null),[A,B]=e.useState(!1),C=(0,l.jH)(m),[D,G]=(0,w.i)({prop:f,defaultProp:g??!1,onChange:h,caller:E}),[H,I]=(0,w.i)({prop:i,defaultProp:j,onChange:k,caller:E}),J=e.useRef(null),M=!v||t||!!v.closest("form"),[O,P]=e.useState(new Set),Q=Array.from(O).map(a=>a.props.value).join(";");return(0,d.jsx)(q.bL,{...u,children:(0,d.jsxs)(L,{required:s,scope:b,trigger:v,onTriggerChange:x,valueNode:y,onValueNodeChange:z,valueNodeHasChildren:A,onValueNodeHasChildrenChange:B,contentId:(0,p.B)(),value:H,onValueChange:I,open:D,onOpenChange:G,dir:C,triggerPointerDownPosRef:J,disabled:r,children:[(0,d.jsx)(F.Provider,{scope:b,children:(0,d.jsx)(N,{scope:a.__scopeSelect,onNativeOptionAdd:e.useCallback(a=>{P(b=>new Set(b).add(a))},[]),onNativeOptionRemove:e.useCallback(a=>{P(b=>{let c=new Set(b);return c.delete(a),c})},[]),children:c})}),M?(0,d.jsxs)(aA,{"aria-hidden":!0,required:s,tabIndex:-1,name:n,autoComplete:o,value:H,onChange:a=>I(a.target.value),disabled:r,form:t,children:[void 0===H?(0,d.jsx)("option",{value:""}):null,Array.from(O)]},Q):null]})})};P.displayName=E;var Q="SelectTrigger",R=e.forwardRef((a,b)=>{let{__scopeSelect:c,disabled:f=!1,...g}=a,i=K(c),k=M(Q,c),l=k.disabled||f,m=(0,j.s)(b,k.onTriggerChange),n=G(c),o=e.useRef("touch"),[p,r,t]=aC(a=>{let b=n().filter(a=>!a.disabled),c=b.find(a=>a.value===k.value),d=aD(b,a,c);void 0!==d&&k.onValueChange(d.value)}),u=a=>{l||(k.onOpenChange(!0),t()),a&&(k.triggerPointerDownPosRef.current={x:Math.round(a.pageX),y:Math.round(a.pageY)})};return(0,d.jsx)(q.Mz,{asChild:!0,...i,children:(0,d.jsx)(s.sG.button,{type:"button",role:"combobox","aria-controls":k.contentId,"aria-expanded":k.open,"aria-required":k.required,"aria-autocomplete":"none",dir:k.dir,"data-state":k.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":aB(k.value)?"":void 0,...g,ref:m,onClick:(0,h.mK)(g.onClick,a=>{a.currentTarget.focus(),"mouse"!==o.current&&u(a)}),onPointerDown:(0,h.mK)(g.onPointerDown,a=>{o.current=a.pointerType;let b=a.target;b.hasPointerCapture(a.pointerId)&&b.releasePointerCapture(a.pointerId),0===a.button&&!1===a.ctrlKey&&"mouse"===a.pointerType&&(u(a),a.preventDefault())}),onKeyDown:(0,h.mK)(g.onKeyDown,a=>{let b=""!==p.current;a.ctrlKey||a.altKey||a.metaKey||1!==a.key.length||r(a.key),(!b||" "!==a.key)&&C.includes(a.key)&&(u(),a.preventDefault())})})})});R.displayName=Q;var S="SelectValue",T=e.forwardRef((a,b)=>{let{__scopeSelect:c,className:e,style:f,children:g,placeholder:h="",...i}=a,k=M(S,c),{onValueNodeHasChildrenChange:l}=k,m=void 0!==g,n=(0,j.s)(b,k.onValueNodeChange);return(0,x.N)(()=>{l(m)},[l,m]),(0,d.jsx)(s.sG.span,{...i,ref:n,style:{pointerEvents:"none"},children:aB(k.value)?(0,d.jsx)(d.Fragment,{children:h}):g})});T.displayName=S;var U=e.forwardRef((a,b)=>{let{__scopeSelect:c,children:e,...f}=a;return(0,d.jsx)(s.sG.span,{"aria-hidden":!0,...f,ref:b,children:e||"▼"})});U.displayName="SelectIcon";var V=a=>(0,d.jsx)(r.Z,{asChild:!0,...a});V.displayName="SelectPortal";var W="SelectContent",X=e.forwardRef((a,b)=>{let c=M(W,a.__scopeSelect),[g,h]=e.useState();return((0,x.N)(()=>{h(new DocumentFragment)},[]),c.open)?(0,d.jsx)(_,{...a,ref:b}):g?f.createPortal((0,d.jsx)(Y,{scope:a.__scopeSelect,children:(0,d.jsx)(F.Slot,{scope:a.__scopeSelect,children:(0,d.jsx)("div",{children:a.children})})}),g):null});X.displayName=W;var[Y,Z]=I(W),$=function(a){let b=function(a){let b=e.forwardRef((a,b)=>{let{children:c,...d}=a;if(e.isValidElement(c)){var f;let a,g,h=(f=c,(g=(a=Object.getOwnPropertyDescriptor(f.props,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?f.ref:(g=(a=Object.getOwnPropertyDescriptor(f,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?f.props.ref:f.props.ref||f.ref),i=function(a,b){let c={...b};for(let d in b){let e=a[d],f=b[d];/^on[A-Z]/.test(d)?e&&f?c[d]=(...a)=>{let b=f(...a);return e(...a),b}:e&&(c[d]=e):"style"===d?c[d]={...e,...f}:"className"===d&&(c[d]=[e,f].filter(Boolean).join(" "))}return{...a,...c}}(d,c.props);return c.type!==e.Fragment&&(i.ref=b?(0,j.t)(b,h):h),e.cloneElement(c,i)}return e.Children.count(c)>1?e.Children.only(null):null});return b.displayName=`${a}.SlotClone`,b}(a),c=e.forwardRef((a,c)=>{let{children:f,...g}=a,h=e.Children.toArray(f),i=h.find(u);if(i){let a=i.props.children,f=h.map(b=>b!==i?b:e.Children.count(a)>1?e.Children.only(null):e.isValidElement(a)?a.props.children:null);return(0,d.jsx)(b,{...g,ref:c,children:e.isValidElement(a)?e.cloneElement(a,void 0,f):null})}return(0,d.jsx)(b,{...g,ref:c,children:f})});return c.displayName=`${a}.Slot`,c}("SelectContent.RemoveScroll"),_=e.forwardRef((a,b)=>{let{__scopeSelect:c,position:f="item-aligned",onCloseAutoFocus:g,onEscapeKeyDown:i,onPointerDownOutside:k,side:l,sideOffset:p,align:q,alignOffset:r,arrowPadding:s,collisionBoundary:t,collisionPadding:u,sticky:v,hideWhenDetached:w,avoidCollisions:x,...y}=a,z=M(W,c),[C,D]=e.useState(null),[E,F]=e.useState(null),H=(0,j.s)(b,a=>D(a)),[I,J]=e.useState(null),[K,L]=e.useState(null),N=G(c),[O,P]=e.useState(!1),Q=e.useRef(!1);e.useEffect(()=>{if(C)return(0,A.Eq)(C)},[C]),(0,n.Oh)();let R=e.useCallback(a=>{let[b,...c]=N().map(a=>a.ref.current),[d]=c.slice(-1),e=document.activeElement;for(let c of a)if(c===e||(c?.scrollIntoView({block:"nearest"}),c===b&&E&&(E.scrollTop=0),c===d&&E&&(E.scrollTop=E.scrollHeight),c?.focus(),document.activeElement!==e))return},[N,E]),S=e.useCallback(()=>R([I,C]),[R,I,C]);e.useEffect(()=>{O&&S()},[O,S]);let{onOpenChange:T,triggerPointerDownPosRef:U}=z;e.useEffect(()=>{if(C){let a={x:0,y:0},b=b=>{a={x:Math.abs(Math.round(b.pageX)-(U.current?.x??0)),y:Math.abs(Math.round(b.pageY)-(U.current?.y??0))}},c=c=>{a.x<=10&&a.y<=10?c.preventDefault():C.contains(c.target)||T(!1),document.removeEventListener("pointermove",b),U.current=null};return null!==U.current&&(document.addEventListener("pointermove",b),document.addEventListener("pointerup",c,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",c,{capture:!0})}}},[C,T,U]),e.useEffect(()=>{let a=()=>T(!1);return window.addEventListener("blur",a),window.addEventListener("resize",a),()=>{window.removeEventListener("blur",a),window.removeEventListener("resize",a)}},[T]);let[V,X]=aC(a=>{let b=N().filter(a=>!a.disabled),c=b.find(a=>a.ref.current===document.activeElement),d=aD(b,a,c);d&&setTimeout(()=>d.ref.current.focus())}),Z=e.useCallback((a,b,c)=>{let d=!Q.current&&!c;(void 0!==z.value&&z.value===b||d)&&(J(a),d&&(Q.current=!0))},[z.value]),_=e.useCallback(()=>C?.focus(),[C]),ac=e.useCallback((a,b,c)=>{let d=!Q.current&&!c;(void 0!==z.value&&z.value===b||d)&&L(a)},[z.value]),ad="popper"===f?ab:aa,ae=ad===ab?{side:l,sideOffset:p,align:q,alignOffset:r,arrowPadding:s,collisionBoundary:t,collisionPadding:u,sticky:v,hideWhenDetached:w,avoidCollisions:x}:{};return(0,d.jsx)(Y,{scope:c,content:C,viewport:E,onViewportChange:F,itemRefCallback:Z,selectedItem:I,onItemLeave:_,itemTextRefCallback:ac,focusSelectedItem:S,selectedItemText:K,position:f,isPositioned:O,searchRef:V,children:(0,d.jsx)(B.A,{as:$,allowPinchZoom:!0,children:(0,d.jsx)(o.n,{asChild:!0,trapped:z.open,onMountAutoFocus:a=>{a.preventDefault()},onUnmountAutoFocus:(0,h.mK)(g,a=>{z.trigger?.focus({preventScroll:!0}),a.preventDefault()}),children:(0,d.jsx)(m.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:k,onFocusOutside:a=>a.preventDefault(),onDismiss:()=>z.onOpenChange(!1),children:(0,d.jsx)(ad,{role:"listbox",id:z.contentId,"data-state":z.open?"open":"closed",dir:z.dir,onContextMenu:a=>a.preventDefault(),...y,...ae,onPlaced:()=>P(!0),ref:H,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:(0,h.mK)(y.onKeyDown,a=>{let b=a.ctrlKey||a.altKey||a.metaKey;if("Tab"===a.key&&a.preventDefault(),b||1!==a.key.length||X(a.key),["ArrowUp","ArrowDown","Home","End"].includes(a.key)){let b=N().filter(a=>!a.disabled).map(a=>a.ref.current);if(["ArrowUp","End"].includes(a.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(a.key)){let c=a.target,d=b.indexOf(c);b=b.slice(d+1)}setTimeout(()=>R(b)),a.preventDefault()}})})})})})})});_.displayName="SelectContentImpl";var aa=e.forwardRef((a,b)=>{let{__scopeSelect:c,onPlaced:f,...h}=a,i=M(W,c),k=Z(W,c),[l,m]=e.useState(null),[n,o]=e.useState(null),p=(0,j.s)(b,a=>o(a)),q=G(c),r=e.useRef(!1),t=e.useRef(!0),{viewport:u,selectedItem:v,selectedItemText:w,focusSelectedItem:y}=k,z=e.useCallback(()=>{if(i.trigger&&i.valueNode&&l&&n&&u&&v&&w){let a=i.trigger.getBoundingClientRect(),b=n.getBoundingClientRect(),c=i.valueNode.getBoundingClientRect(),d=w.getBoundingClientRect();if("rtl"!==i.dir){let e=d.left-b.left,f=c.left-e,h=a.left-f,i=a.width+h,j=Math.max(i,b.width),k=window.innerWidth-10,m=(0,g.q)(f,[10,Math.max(10,k-j)]);l.style.minWidth=i+"px",l.style.left=m+"px"}else{let e=b.right-d.right,f=window.innerWidth-c.right-e,h=window.innerWidth-a.right-f,i=a.width+h,j=Math.max(i,b.width),k=window.innerWidth-10,m=(0,g.q)(f,[10,Math.max(10,k-j)]);l.style.minWidth=i+"px",l.style.right=m+"px"}let e=q(),h=window.innerHeight-20,j=u.scrollHeight,k=window.getComputedStyle(n),m=parseInt(k.borderTopWidth,10),o=parseInt(k.paddingTop,10),p=parseInt(k.borderBottomWidth,10),s=m+o+j+parseInt(k.paddingBottom,10)+p,t=Math.min(5*v.offsetHeight,s),x=window.getComputedStyle(u),y=parseInt(x.paddingTop,10),z=parseInt(x.paddingBottom,10),A=a.top+a.height/2-10,B=v.offsetHeight/2,C=m+o+(v.offsetTop+B);if(C<=A){let a=e.length>0&&v===e[e.length-1].ref.current;l.style.bottom="0px";let b=Math.max(h-A,B+(a?z:0)+(n.clientHeight-u.offsetTop-u.offsetHeight)+p);l.style.height=C+b+"px"}else{let a=e.length>0&&v===e[0].ref.current;l.style.top="0px";let b=Math.max(A,m+u.offsetTop+(a?y:0)+B);l.style.height=b+(s-C)+"px",u.scrollTop=C-A+u.offsetTop}l.style.margin="10px 0",l.style.minHeight=t+"px",l.style.maxHeight=h+"px",f?.(),requestAnimationFrame(()=>r.current=!0)}},[q,i.trigger,i.valueNode,l,n,u,v,w,i.dir,f]);(0,x.N)(()=>z(),[z]);let[A,B]=e.useState();(0,x.N)(()=>{n&&B(window.getComputedStyle(n).zIndex)},[n]);let C=e.useCallback(a=>{a&&!0===t.current&&(z(),y?.(),t.current=!1)},[z,y]);return(0,d.jsx)(ac,{scope:c,contentWrapper:l,shouldExpandOnScrollRef:r,onScrollButtonChange:C,children:(0,d.jsx)("div",{ref:m,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:A},children:(0,d.jsx)(s.sG.div,{...h,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...h.style}})})})});aa.displayName="SelectItemAlignedPosition";var ab=e.forwardRef((a,b)=>{let{__scopeSelect:c,align:e="start",collisionPadding:f=10,...g}=a,h=K(c);return(0,d.jsx)(q.UC,{...h,...g,ref:b,align:e,collisionPadding:f,style:{boxSizing:"border-box",...g.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ab.displayName="SelectPopperPosition";var[ac,ad]=I(W,{}),ae="SelectViewport",af=e.forwardRef((a,b)=>{let{__scopeSelect:c,nonce:f,...g}=a,i=Z(ae,c),k=ad(ae,c),l=(0,j.s)(b,i.onViewportChange),m=e.useRef(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:f}),(0,d.jsx)(F.Slot,{scope:c,children:(0,d.jsx)(s.sG.div,{"data-radix-select-viewport":"",role:"presentation",...g,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...g.style},onScroll:(0,h.mK)(g.onScroll,a=>{let b=a.currentTarget,{contentWrapper:c,shouldExpandOnScrollRef:d}=k;if(d?.current&&c){let a=Math.abs(m.current-b.scrollTop);if(a>0){let d=window.innerHeight-20,e=Math.max(parseFloat(c.style.minHeight),parseFloat(c.style.height));if(e<d){let f=e+a,g=Math.min(d,f),h=f-g;c.style.height=g+"px","0px"===c.style.bottom&&(b.scrollTop=h>0?h:0,c.style.justifyContent="flex-end")}}}m.current=b.scrollTop})})})]})});af.displayName=ae;var ag="SelectGroup",[ah,ai]=I(ag);e.forwardRef((a,b)=>{let{__scopeSelect:c,...e}=a,f=(0,p.B)();return(0,d.jsx)(ah,{scope:c,id:f,children:(0,d.jsx)(s.sG.div,{role:"group","aria-labelledby":f,...e,ref:b})})}).displayName=ag;var aj="SelectLabel",ak=e.forwardRef((a,b)=>{let{__scopeSelect:c,...e}=a,f=ai(aj,c);return(0,d.jsx)(s.sG.div,{id:f.id,...e,ref:b})});ak.displayName=aj;var al="SelectItem",[am,an]=I(al),ao=e.forwardRef((a,b)=>{let{__scopeSelect:c,value:f,disabled:g=!1,textValue:i,...k}=a,l=M(al,c),m=Z(al,c),n=l.value===f,[o,q]=e.useState(i??""),[r,t]=e.useState(!1),u=(0,j.s)(b,a=>m.itemRefCallback?.(a,f,g)),v=(0,p.B)(),w=e.useRef("touch"),x=()=>{g||(l.onValueChange(f),l.onOpenChange(!1))};if(""===f)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,d.jsx)(am,{scope:c,value:f,disabled:g,textId:v,isSelected:n,onItemTextChange:e.useCallback(a=>{q(b=>b||(a?.textContent??"").trim())},[]),children:(0,d.jsx)(F.ItemSlot,{scope:c,value:f,disabled:g,textValue:o,children:(0,d.jsx)(s.sG.div,{role:"option","aria-labelledby":v,"data-highlighted":r?"":void 0,"aria-selected":n&&r,"data-state":n?"checked":"unchecked","aria-disabled":g||void 0,"data-disabled":g?"":void 0,tabIndex:g?void 0:-1,...k,ref:u,onFocus:(0,h.mK)(k.onFocus,()=>t(!0)),onBlur:(0,h.mK)(k.onBlur,()=>t(!1)),onClick:(0,h.mK)(k.onClick,()=>{"mouse"!==w.current&&x()}),onPointerUp:(0,h.mK)(k.onPointerUp,()=>{"mouse"===w.current&&x()}),onPointerDown:(0,h.mK)(k.onPointerDown,a=>{w.current=a.pointerType}),onPointerMove:(0,h.mK)(k.onPointerMove,a=>{w.current=a.pointerType,g?m.onItemLeave?.():"mouse"===w.current&&a.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,h.mK)(k.onPointerLeave,a=>{a.currentTarget===document.activeElement&&m.onItemLeave?.()}),onKeyDown:(0,h.mK)(k.onKeyDown,a=>{(m.searchRef?.current===""||" "!==a.key)&&(D.includes(a.key)&&x()," "===a.key&&a.preventDefault())})})})})});ao.displayName=al;var ap="SelectItemText",aq=e.forwardRef((a,b)=>{let{__scopeSelect:c,className:g,style:h,...i}=a,k=M(ap,c),l=Z(ap,c),m=an(ap,c),n=O(ap,c),[o,p]=e.useState(null),q=(0,j.s)(b,a=>p(a),m.onItemTextChange,a=>l.itemTextRefCallback?.(a,m.value,m.disabled)),r=o?.textContent,t=e.useMemo(()=>(0,d.jsx)("option",{value:m.value,disabled:m.disabled,children:r},m.value),[m.disabled,m.value,r]),{onNativeOptionAdd:u,onNativeOptionRemove:v}=n;return(0,x.N)(()=>(u(t),()=>v(t)),[u,v,t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.sG.span,{id:m.textId,...i,ref:q}),m.isSelected&&k.valueNode&&!k.valueNodeHasChildren?f.createPortal(i.children,k.valueNode):null]})});aq.displayName=ap;var ar="SelectItemIndicator",as=e.forwardRef((a,b)=>{let{__scopeSelect:c,...e}=a;return an(ar,c).isSelected?(0,d.jsx)(s.sG.span,{"aria-hidden":!0,...e,ref:b}):null});as.displayName=ar;var at="SelectScrollUpButton",au=e.forwardRef((a,b)=>{let c=Z(at,a.__scopeSelect),f=ad(at,a.__scopeSelect),[g,h]=e.useState(!1),i=(0,j.s)(b,f.onScrollButtonChange);return(0,x.N)(()=>{if(c.viewport&&c.isPositioned){let a=function(){h(b.scrollTop>0)},b=c.viewport;return a(),b.addEventListener("scroll",a),()=>b.removeEventListener("scroll",a)}},[c.viewport,c.isPositioned]),g?(0,d.jsx)(ax,{...a,ref:i,onAutoScroll:()=>{let{viewport:a,selectedItem:b}=c;a&&b&&(a.scrollTop=a.scrollTop-b.offsetHeight)}}):null});au.displayName=at;var av="SelectScrollDownButton",aw=e.forwardRef((a,b)=>{let c=Z(av,a.__scopeSelect),f=ad(av,a.__scopeSelect),[g,h]=e.useState(!1),i=(0,j.s)(b,f.onScrollButtonChange);return(0,x.N)(()=>{if(c.viewport&&c.isPositioned){let a=function(){let a=b.scrollHeight-b.clientHeight;h(Math.ceil(b.scrollTop)<a)},b=c.viewport;return a(),b.addEventListener("scroll",a),()=>b.removeEventListener("scroll",a)}},[c.viewport,c.isPositioned]),g?(0,d.jsx)(ax,{...a,ref:i,onAutoScroll:()=>{let{viewport:a,selectedItem:b}=c;a&&b&&(a.scrollTop=a.scrollTop+b.offsetHeight)}}):null});aw.displayName=av;var ax=e.forwardRef((a,b)=>{let{__scopeSelect:c,onAutoScroll:f,...g}=a,i=Z("SelectScrollButton",c),j=e.useRef(null),k=G(c),l=e.useCallback(()=>{null!==j.current&&(window.clearInterval(j.current),j.current=null)},[]);return e.useEffect(()=>()=>l(),[l]),(0,x.N)(()=>{let a=k().find(a=>a.ref.current===document.activeElement);a?.ref.current?.scrollIntoView({block:"nearest"})},[k]),(0,d.jsx)(s.sG.div,{"aria-hidden":!0,...g,ref:b,style:{flexShrink:0,...g.style},onPointerDown:(0,h.mK)(g.onPointerDown,()=>{null===j.current&&(j.current=window.setInterval(f,50))}),onPointerMove:(0,h.mK)(g.onPointerMove,()=>{i.onItemLeave?.(),null===j.current&&(j.current=window.setInterval(f,50))}),onPointerLeave:(0,h.mK)(g.onPointerLeave,()=>{l()})})}),ay=e.forwardRef((a,b)=>{let{__scopeSelect:c,...e}=a;return(0,d.jsx)(s.sG.div,{"aria-hidden":!0,...e,ref:b})});ay.displayName="SelectSeparator";var az="SelectArrow";e.forwardRef((a,b)=>{let{__scopeSelect:c,...e}=a,f=K(c),g=M(az,c),h=Z(az,c);return g.open&&"popper"===h.position?(0,d.jsx)(q.i3,{...f,...e,ref:b}):null}).displayName=az;var aA=e.forwardRef(({__scopeSelect:a,value:b,...c},f)=>{let g=e.useRef(null),h=(0,j.s)(f,g),i=y(b);return e.useEffect(()=>{let a=g.current;if(!a)return;let c=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==b&&c){let d=new Event("change",{bubbles:!0});c.call(a,b),a.dispatchEvent(d)}},[i,b]),(0,d.jsx)(s.sG.select,{...c,style:{...z.Qg,...c.style},ref:h,defaultValue:b})});function aB(a){return""===a||void 0===a}function aC(a){let b=(0,v.c)(a),c=e.useRef(""),d=e.useRef(0),f=e.useCallback(a=>{let e=c.current+a;b(e),function a(b){c.current=b,window.clearTimeout(d.current),""!==b&&(d.current=window.setTimeout(()=>a(""),1e3))}(e)},[b]),g=e.useCallback(()=>{c.current="",window.clearTimeout(d.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(d.current),[]),[c,f,g]}function aD(a,b,c){var d,e;let f=b.length>1&&Array.from(b).every(a=>a===b[0])?b[0]:b,g=c?a.indexOf(c):-1,h=(d=a,e=Math.max(g,0),d.map((a,b)=>d[(e+b)%d.length]));1===f.length&&(h=h.filter(a=>a!==c));let i=h.find(a=>a.textValue.toLowerCase().startsWith(f.toLowerCase()));return i!==c?i:void 0}aA.displayName="SelectBubbleInput";var aE=c(85351);let aF=(0,c(23339).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var aG=c(71613),aH=c(44943);let aI=e.forwardRef(({className:a,children:b,...c},e)=>(0,d.jsxs)(R,{ref:e,className:(0,aH.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...c,children:[b,(0,d.jsx)(U,{asChild:!0,children:(0,d.jsx)(aE.A,{className:"h-4 w-4 opacity-50"})})]}));aI.displayName=R.displayName;let aJ=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)(au,{ref:c,className:(0,aH.cn)("flex cursor-default items-center justify-center py-1",a),...b,children:(0,d.jsx)(aF,{className:"h-4 w-4"})}));aJ.displayName=au.displayName;let aK=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)(aw,{ref:c,className:(0,aH.cn)("flex cursor-default items-center justify-center py-1",a),...b,children:(0,d.jsx)(aE.A,{className:"h-4 w-4"})}));aK.displayName=aw.displayName;let aL=e.forwardRef(({className:a,children:b,position:c="popper",...e},f)=>(0,d.jsx)(V,{children:(0,d.jsxs)(X,{ref:f,className:(0,aH.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===c&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:c,...e,children:[(0,d.jsx)(aJ,{}),(0,d.jsx)(af,{className:(0,aH.cn)("p-1","popper"===c&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:b}),(0,d.jsx)(aK,{})]})}));aL.displayName=X.displayName,e.forwardRef(({className:a,...b},c)=>(0,d.jsx)(ak,{ref:c,className:(0,aH.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...b})).displayName=ak.displayName;let aM=e.forwardRef(({className:a,children:b,...c},e)=>(0,d.jsxs)(ao,{ref:e,className:(0,aH.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...c,children:[(0,d.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,d.jsx)(as,{children:(0,d.jsx)(aG.A,{className:"h-4 w-4"})})}),(0,d.jsx)(aq,{children:b})]}));aM.displayName=ao.displayName,e.forwardRef(({className:a,...b},c)=>(0,d.jsx)(ay,{ref:c,className:(0,aH.cn)("-mx-1 my-1 h-px bg-muted",a),...b})).displayName=ay.displayName;var aN=c(93758),aO=c(64962),aP=c(96386),aQ=["PageUp","PageDown"],aR=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],aS={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},aT="Slider",[aU,aV,aW]=(0,i.N)(aT),[aX,aY]=(0,k.A)(aT,[aW]),[aZ,a$]=aX(aT),a_=e.forwardRef((a,b)=>{let{name:c,min:f=0,max:i=100,step:j=1,orientation:k="horizontal",disabled:l=!1,minStepsBetweenThumbs:m=0,defaultValue:n=[f],value:o,onValueChange:p=()=>{},onValueCommit:q=()=>{},inverted:r=!1,form:s,...t}=a,u=e.useRef(new Set),v=e.useRef(0),x="horizontal"===k,[y=[],z]=(0,w.i)({prop:o,defaultProp:n,onChange:a=>{let b=[...u.current];b[v.current]?.focus(),p(a)}}),A=e.useRef(y);function B(a,b,{commit:c}={commit:!1}){let d=(String(j).split(".")[1]||"").length,e=function(a,b){let c=Math.pow(10,b);return Math.round(a*c)/c}(Math.round((a-f)/j)*j+f,d),h=(0,g.q)(e,[f,i]);z((a=[])=>{let d=function(a=[],b,c){let d=[...a];return d[c]=b,d.sort((a,b)=>a-b)}(a,h,b);if(!function(a,b){if(b>0)return Math.min(...a.slice(0,-1).map((b,c)=>a[c+1]-b))>=b;return!0}(d,m*j))return a;{v.current=d.indexOf(h);let b=String(d)!==String(a);return b&&c&&q(d),b?d:a}})}return(0,d.jsx)(aZ,{scope:a.__scopeSlider,name:c,disabled:l,min:f,max:i,valueIndexToChangeRef:v,thumbs:u.current,values:y,orientation:k,form:s,children:(0,d.jsx)(aU.Provider,{scope:a.__scopeSlider,children:(0,d.jsx)(aU.Slot,{scope:a.__scopeSlider,children:(0,d.jsx)(x?a2:a3,{"aria-disabled":l,"data-disabled":l?"":void 0,...t,ref:b,onPointerDown:(0,h.mK)(t.onPointerDown,()=>{l||(A.current=y)}),min:f,max:i,inverted:r,onSlideStart:l?void 0:function(a){let b=function(a,b){if(1===a.length)return 0;let c=a.map(a=>Math.abs(a-b)),d=Math.min(...c);return c.indexOf(d)}(y,a);B(a,b)},onSlideMove:l?void 0:function(a){B(a,v.current)},onSlideEnd:l?void 0:function(){let a=A.current[v.current];y[v.current]!==a&&q(y)},onHomeKeyDown:()=>!l&&B(f,0,{commit:!0}),onEndKeyDown:()=>!l&&B(i,y.length-1,{commit:!0}),onStepKeyDown:({event:a,direction:b})=>{if(!l){let c=aQ.includes(a.key)||a.shiftKey&&aR.includes(a.key),d=v.current;B(y[d]+j*(c?10:1)*b,d,{commit:!0})}}})})})})});a_.displayName=aT;var[a0,a1]=aX(aT,{startEdge:"left",endEdge:"right",size:"width",direction:1}),a2=e.forwardRef((a,b)=>{let{min:c,max:f,dir:g,inverted:h,onSlideStart:i,onSlideMove:k,onSlideEnd:m,onStepKeyDown:n,...o}=a,[p,q]=e.useState(null),r=(0,j.s)(b,a=>q(a)),s=e.useRef(void 0),t=(0,l.jH)(g),u="ltr"===t,v=u&&!h||!u&&h;function w(a){let b=s.current||p.getBoundingClientRect(),d=be([0,b.width],v?[c,f]:[f,c]);return s.current=b,d(a-b.left)}return(0,d.jsx)(a0,{scope:a.__scopeSlider,startEdge:v?"left":"right",endEdge:v?"right":"left",direction:v?1:-1,size:"width",children:(0,d.jsx)(a4,{dir:t,"data-orientation":"horizontal",...o,ref:r,style:{...o.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:a=>{let b=w(a.clientX);i?.(b)},onSlideMove:a=>{let b=w(a.clientX);k?.(b)},onSlideEnd:()=>{s.current=void 0,m?.()},onStepKeyDown:a=>{let b=aS[v?"from-left":"from-right"].includes(a.key);n?.({event:a,direction:b?-1:1})}})})}),a3=e.forwardRef((a,b)=>{let{min:c,max:f,inverted:g,onSlideStart:h,onSlideMove:i,onSlideEnd:k,onStepKeyDown:l,...m}=a,n=e.useRef(null),o=(0,j.s)(b,n),p=e.useRef(void 0),q=!g;function r(a){let b=p.current||n.current.getBoundingClientRect(),d=be([0,b.height],q?[f,c]:[c,f]);return p.current=b,d(a-b.top)}return(0,d.jsx)(a0,{scope:a.__scopeSlider,startEdge:q?"bottom":"top",endEdge:q?"top":"bottom",size:"height",direction:q?1:-1,children:(0,d.jsx)(a4,{"data-orientation":"vertical",...m,ref:o,style:{...m.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:a=>{let b=r(a.clientY);h?.(b)},onSlideMove:a=>{let b=r(a.clientY);i?.(b)},onSlideEnd:()=>{p.current=void 0,k?.()},onStepKeyDown:a=>{let b=aS[q?"from-bottom":"from-top"].includes(a.key);l?.({event:a,direction:b?-1:1})}})})}),a4=e.forwardRef((a,b)=>{let{__scopeSlider:c,onSlideStart:e,onSlideMove:f,onSlideEnd:g,onHomeKeyDown:i,onEndKeyDown:j,onStepKeyDown:k,...l}=a,m=a$(aT,c);return(0,d.jsx)(s.sG.span,{...l,ref:b,onKeyDown:(0,h.mK)(a.onKeyDown,a=>{"Home"===a.key?(i(a),a.preventDefault()):"End"===a.key?(j(a),a.preventDefault()):aQ.concat(aR).includes(a.key)&&(k(a),a.preventDefault())}),onPointerDown:(0,h.mK)(a.onPointerDown,a=>{let b=a.target;b.setPointerCapture(a.pointerId),a.preventDefault(),m.thumbs.has(b)?b.focus():e(a)}),onPointerMove:(0,h.mK)(a.onPointerMove,a=>{a.target.hasPointerCapture(a.pointerId)&&f(a)}),onPointerUp:(0,h.mK)(a.onPointerUp,a=>{let b=a.target;b.hasPointerCapture(a.pointerId)&&(b.releasePointerCapture(a.pointerId),g(a))})})}),a5="SliderTrack",a6=e.forwardRef((a,b)=>{let{__scopeSlider:c,...e}=a,f=a$(a5,c);return(0,d.jsx)(s.sG.span,{"data-disabled":f.disabled?"":void 0,"data-orientation":f.orientation,...e,ref:b})});a6.displayName=a5;var a7="SliderRange",a8=e.forwardRef((a,b)=>{let{__scopeSlider:c,...f}=a,g=a$(a7,c),h=a1(a7,c),i=e.useRef(null),k=(0,j.s)(b,i),l=g.values.length,m=g.values.map(a=>bd(a,g.min,g.max)),n=l>1?Math.min(...m):0,o=100-Math.max(...m);return(0,d.jsx)(s.sG.span,{"data-orientation":g.orientation,"data-disabled":g.disabled?"":void 0,...f,ref:k,style:{...a.style,[h.startEdge]:n+"%",[h.endEdge]:o+"%"}})});a8.displayName=a7;var a9="SliderThumb",ba=e.forwardRef((a,b)=>{let c=aV(a.__scopeSlider),[f,g]=e.useState(null),h=(0,j.s)(b,a=>g(a)),i=e.useMemo(()=>f?c().findIndex(a=>a.ref.current===f):-1,[c,f]);return(0,d.jsx)(bb,{...a,ref:h,index:i})}),bb=e.forwardRef((a,b)=>{let{__scopeSlider:c,index:f,name:g,...i}=a,k=a$(a9,c),l=a1(a9,c),[m,n]=e.useState(null),o=(0,j.s)(b,a=>n(a)),p=!m||k.form||!!m.closest("form"),q=(0,aP.X)(m),r=k.values[f],t=void 0===r?0:bd(r,k.min,k.max),u=function(a,b){return b>2?`Value ${a+1} of ${b}`:2===b?["Minimum","Maximum"][a]:void 0}(f,k.values.length),v=q?.[l.size],w=v?function(a,b,c){let d=a/2,e=be([0,50],[0,d]);return(d-e(b)*c)*c}(v,t,l.direction):0;return e.useEffect(()=>{if(m)return k.thumbs.add(m),()=>{k.thumbs.delete(m)}},[m,k.thumbs]),(0,d.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[l.startEdge]:`calc(${t}% + ${w}px)`},children:[(0,d.jsx)(aU.ItemSlot,{scope:a.__scopeSlider,children:(0,d.jsx)(s.sG.span,{role:"slider","aria-label":a["aria-label"]||u,"aria-valuemin":k.min,"aria-valuenow":r,"aria-valuemax":k.max,"aria-orientation":k.orientation,"data-orientation":k.orientation,"data-disabled":k.disabled?"":void 0,tabIndex:k.disabled?void 0:0,...i,ref:o,style:void 0===r?{display:"none"}:a.style,onFocus:(0,h.mK)(a.onFocus,()=>{k.valueIndexToChangeRef.current=f})})}),p&&(0,d.jsx)(bc,{name:g??(k.name?k.name+(k.values.length>1?"[]":""):void 0),form:k.form,value:r},f)]})});ba.displayName=a9;var bc=e.forwardRef(({__scopeSlider:a,value:b,...c},f)=>{let g=e.useRef(null),h=(0,j.s)(g,f),i=y(b);return e.useEffect(()=>{let a=g.current;if(!a)return;let c=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(i!==b&&c){let d=new Event("input",{bubbles:!0});c.call(a,b),a.dispatchEvent(d)}},[i,b]),(0,d.jsx)(s.sG.input,{style:{display:"none"},...c,ref:h,defaultValue:b})});function bd(a,b,c){return(0,g.q)(100/(c-b)*(a-b),[0,100])}function be(a,b){return c=>{if(a[0]===a[1]||b[0]===b[1])return b[0];let d=(b[1]-b[0])/(a[1]-a[0]);return b[0]+d*(c-a[0])}}bc.displayName="RadioBubbleInput";let bf=e.forwardRef(({className:a,...b},c)=>(0,d.jsxs)(a_,{ref:c,className:(0,aH.cn)("relative flex w-full touch-none select-none items-center",a),...b,children:[(0,d.jsx)(a6,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,d.jsx)(a8,{className:"absolute h-full bg-primary"})}),(0,d.jsx)(ba,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));bf.displayName=a_.displayName;let bg=({size:a,onChange:b})=>{let c=(0,e.useRef)(null),[f,g]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{let b=c.current;if(!b)return;let d=b.getContext("2d");if(!d)return;let e=a/2,f=a/2,g=a/2;for(let b=0;b<a;b++)for(let c=0;c<a;c++){let a=b-e,h=c-f,i=Math.sqrt(a*a+h*h);if(i<=g){let e=(Math.atan2(h,a)+Math.PI)/(2*Math.PI),f=i/g;d.fillStyle=`hsl(${360*e}, ${100*f}%, 50%)`,d.fillRect(b,c,1,1)}}},[a]),(0,d.jsx)("div",{className:"h-full w-full flex justify-center items-center",children:(0,d.jsx)("canvas",{ref:c,width:a,height:a,onMouseDown:()=>{g(!0)},onMouseUp:()=>{g(!1)},onMouseMove:a=>{if(!f)return;let d=c.current;if(!d)return;let e=d.getBoundingClientRect(),g=a.clientX-e.left,h=a.clientY-e.top,i=d.getContext("2d");if(!i)return;let[j,k,l]=i.getImageData(g,h,1,1).data;b(`#${j.toString(16).padStart(2,"0")}${k.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`)},style:{cursor:"crosshair"}})})};var bh=c(47089),bi=c(35284);let bj=({isOpen:a,onClose:b,children:c})=>a?(0,d.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:(0,d.jsxs)("div",{className:"bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,d.jsx)("h2",{className:"text-xl font-bold",children:"Color Options"}),(0,d.jsx)(bi.$n,{variant:"ghost",size:"icon",onClick:b,"aria-label":"Close",children:(0,d.jsx)(bh.A,{className:"h-6 w-6"})})]}),c]})}):null,bk=({color:a,setColor:b})=>{let[c,f]=(0,e.useState)("hex"),[g,h]=(0,e.useState)([255,0,0]),[i,j]=(0,e.useState)([0,100,50]),[k,l]=(0,e.useState)([0,100,100,0]),[m,n]=(0,e.useState)(!1),o=(0,e.useCallback)(a=>{let[c,d,e]=a;h(a),b("#"+[c,d,e].map(a=>a.toString(16).padStart(2,"0")).join("")),j(function(a,b,c){let d=Math.max(a/=255,b/=255,c/=255),e=Math.min(a,b,c),f=0,g,h=(d+e)/2;if(d===e)f=g=0;else{let i=d-e;switch(g=h>.5?i/(2-d-e):i/(d+e),d){case a:f=(b-c)/i+6*(b<c);break;case b:f=(c-a)/i+2;break;case c:f=(a-b)/i+4}f/=6}return[Math.round(360*f),Math.round(100*g),Math.round(100*h)]}(c,d,e)),l(function(a,b,c){let d=1-a/255,e=1-b/255,f=1-c/255,g=Math.min(d,e,f);return[Math.round(100*(d=(d-g)/(1-g))),Math.round(100*(e=(e-g)/(1-g))),Math.round(100*(f=(f-g)/(1-g))),Math.round(100*g)]}(c,d,e))},[b]);(0,e.useEffect)(()=>{o(g)},[g,o]);let p=a=>{/^#[0-9A-Fa-f]{6}$/.test(a)&&o(function(a){let b=parseInt(a.slice(1,3),16);return[b,parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]}(a))};return(0,d.jsxs)("div",{className:"flex gap-4",children:[(0,d.jsxs)(P,{onValueChange:a=>{f(a),n(!0)},children:[(0,d.jsx)(aI,{className:"w-48",children:(0,d.jsx)(T,{placeholder:"Select color format"})}),(0,d.jsxs)(aL,{children:[(0,d.jsx)(aM,{value:"hex",children:"Hexadecimal"}),(0,d.jsx)(aM,{value:"rgb",children:"RGB"}),(0,d.jsx)(aM,{value:"hsl",children:"HSL"}),(0,d.jsx)(aM,{value:"cmyk",children:"CMYK"}),(0,d.jsx)(aM,{value:"wheel",children:"Color Wheel"})]})]}),(0,d.jsxs)(bj,{isOpen:m,onClose:()=>n(!1),children:[(0,d.jsx)("div",{className:"min-w-10 min-h-10 rounded-md my-4",style:{backgroundColor:a}}),"hex"===c&&(0,d.jsxs)("div",{children:[(0,d.jsx)(aO.J,{htmlFor:"hex",children:"Hex Color"}),(0,d.jsx)(aN.p,{id:"hex",onChange:a=>p(a.target.value),placeholder:"#RRGGBB"})]}),"rgb"===c&&(0,d.jsx)("div",{className:"space-y-2",children:["Red","Green","Blue"].map((a,b)=>(0,d.jsxs)("div",{children:[(0,d.jsx)(aO.J,{htmlFor:a.toLowerCase(),children:a}),(0,d.jsx)(bf,{id:a.toLowerCase(),min:0,max:255,step:1,value:[g[b]],onValueChange:a=>((a,b)=>{let c=[...g];c[a]=b,o(c)})(b,a[0])}),(0,d.jsx)("span",{children:g[b]})]},a))}),"hsl"===c&&(0,d.jsx)("div",{className:"space-y-2",children:["Hue","Saturation","Lightness"].map((a,b)=>(0,d.jsxs)("div",{children:[(0,d.jsx)(aO.J,{htmlFor:a.toLowerCase(),children:a}),(0,d.jsx)(bf,{id:a.toLowerCase(),min:0,max:0===b?360:100,step:1,value:[i[b]],onValueChange:a=>((a,b)=>{let c=[...i];c[a]=b,o(function(a,b,c){let d,e,f;if(a/=360,c/=100,0==(b/=100))d=e=f=c;else{let g=(a,b,c)=>(c<0&&(c+=1),c>1&&(c-=1),c<1/6)?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a,h=c<.5?c*(1+b):c+b-c*b,i=2*c-h;d=g(i,h,a+1/3),e=g(i,h,a),f=g(i,h,a-1/3)}return[Math.round(255*d),Math.round(255*e),Math.round(255*f)]}(c[0],c[1],c[2]))})(b,a[0])}),(0,d.jsxs)("span",{children:[i[b],0===b?"\xb0":"%"]})]},a))}),"cmyk"===c&&(0,d.jsx)("div",{className:"space-y-2",children:["Cyan","Magenta","Yellow","Black"].map((a,b)=>(0,d.jsxs)("div",{children:[(0,d.jsx)(aO.J,{htmlFor:a.toLowerCase(),children:a}),(0,d.jsx)(bf,{id:a.toLowerCase(),min:0,max:100,step:1,value:[k[b]],onValueChange:a=>((a,b)=>{let c=[...k];c[a]=b,o(function(a,b,c,d){return[Math.round(255*(1-(a/=100))*(1-(d/=100))),Math.round(255*(1-(b/=100))*(1-d)),Math.round(255*(1-(c/=100))*(1-d))]}(c[0],c[1],c[2],c[3]))})(b,a[0])}),(0,d.jsxs)("span",{children:[k[b],"%"]})]},a))}),"wheel"===c&&(0,d.jsx)("div",{children:(0,d.jsx)(bg,{size:200,onChange:a=>{p(a)}})})]}),(0,d.jsx)("div",{className:"min-w-10 min-h-10 rounded-full",style:{backgroundColor:a}})]})};function bl(){let[a,b]=(0,e.useState)("");return(0,d.jsx)(bk,{color:a,setColor:b})}},62938:(a,b,c)=>{Promise.resolve().then(c.bind(c,56175)),Promise.resolve().then(c.bind(c,84755)),Promise.resolve().then(c.bind(c,80665)),Promise.resolve().then(c.bind(c,44928))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64962:(a,b,c)=>{"use strict";c.d(b,{J:()=>j});var d=c(21124),e=c(38301);c(23312);var f=c(96425),g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((a,b)=>{let c=(0,f.TL)(`Primitive.${b}`),g=e.forwardRef((a,e)=>{let{asChild:f,...g}=a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,d.jsx)(f?c:b,{...g,ref:e})});return g.displayName=`Primitive.${b}`,{...a,[b]:g}},{}),h=e.forwardRef((a,b)=>(0,d.jsx)(g.label,{...a,ref:b,onMouseDown:b=>{b.target.closest("button, input, select, textarea")||(a.onMouseDown?.(b),!b.defaultPrevented&&b.detail>1&&b.preventDefault())}}));h.displayName="Label";var i=c(44943);let j=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)(h,{ref:c,className:(0,i.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",a),...b}));j.displayName=h.displayName},85351:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(23339).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},94044:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["components",{children:["color-picker",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,99974)),"/Users/armaanbudhiraja/UI-Components/src/app/components/color-picker/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,51472)),"/Users/armaanbudhiraja/UI-Components/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/Users/armaanbudhiraja/UI-Components/src/app/components/color-picker/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/components/color-picker/page",pathname:"/components/color-picker",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/components/color-picker/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},99974:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>n});var d=c(75338),e=c(64773),f=c(96587),g=c(71131),h=c(33841),i=c(83005),j=c(44972);function k(){return(0,d.jsx)(h.default,{code:l,language:"jsx",theme:"dark",showLineNumbers:!0})}let l=`
"use client"

import ColorPicker from "@/components/ui/color-picker/color-picker";
import { useState } from "react";

export default function Preview() {
  const [color, setColor] = useState<string>("");

  return <ColorPicker color={color} setColor={setColor} />;
}
`.trim();var m=c(22026);function n(){return(0,d.jsxs)("div",{className:"flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden",children:[(0,d.jsx)(f.A,{heading:o,description:p}),(0,d.jsx)(e.A,{Code:(0,d.jsx)(k,{}),Preview:(0,d.jsx)(m.default,{})}),(0,d.jsx)(g.A,{steps:q}),(0,d.jsx)(i.A,{props:r}),(0,d.jsx)(j.A,{})]})}let o="Color Picker",p="The ColorPicker component provides a user-friendly interface for selecting and manipulating colors in various formats (Hex, RGB, HSL, CMYK, or a color wheel). It dynamically updates and synchronizes the color across all formats, offering real-time visual feedback.",q=[{key:1,title:"Install Dependencies",height:"5rem",content:(0,d.jsx)(h.default,{theme:"dark",code:"npm i motion clsx tailwind-merge",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]"})},{key:2,title:"Install Dependencies For Tailwind",height:"8rem",content:(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`npm install tailwindcss @tailwindcss/cli
npx shadcn@latest add slider
npx shadcn@latest add button`})},{key:3,title:"Add Util File",height:"15rem",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"lib/utils.ts"}),(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`})]})},{key:4,height:"116rem",title:"Copy The Source Code",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"lib/color-conversions.ts"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 w-[16rem] md:max-w-[812px] xl:w-[980px] mb-12",theme:"dark",code:`export function hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
  
  export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  
  export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s;
    const l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  
  export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
  export function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    const k = Math.min(c, m, y);
  
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
  
    return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)];
  }
  
  export function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
    c /= 100;
    m /= 100;
    y /= 100;
    k /= 100;
  
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);
  
    return [Math.round(r), Math.round(g), Math.round(b)];
  }
  `}),(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/color-picker/color-picker.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 w-[16rem] md:max-w-[812px] xl:w-[980px] mb-12",theme:"dark",code:`"use client";

import React, { useState, useEffect, SetStateAction, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  rgbToCmyk,
  cmykToRgb,
} from "@/lib/color-conversion";
import ColorWheel from "./color-wheel";
import PopUp from "./pop-up";

type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk" | "wheel";

interface ColorPickerProps {
  color: string;
  setColor: React.Dispatch<SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }: ColorPickerProps) => {
  const [format, setFormat] = useState<ColorFormat>("hex");
  const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
  const [hsl, setHsl] = useState<[number, number, number]>([0, 100, 50]);
  const [cmyk, setCmyk] = useState<[number, number, number, number]>([
    0, 100, 100, 0,
  ]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const updateAllFormats = useCallback(
    (rgbValues: [number, number, number]) => {
      const [r, g, b] = rgbValues;
      setRgb(rgbValues);
      setColor(rgbToHex(r, g, b));
      setHsl(rgbToHsl(r, g, b));
      setCmyk(rgbToCmyk(r, g, b));
    },
    [setColor]
  );

  useEffect(() => {
    updateAllFormats(rgb);
  }, [rgb, updateAllFormats]);

  const handleHexChange = (value: string) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      const rgbValues = hexToRgb(value);
      updateAllFormats(rgbValues);
    }
  };

  const handleRgbChange = (index: number, value: number) => {
    const newRgb = [...rgb] as [number, number, number];
    newRgb[index] = value;
    updateAllFormats(newRgb);
  };

  const handleHslChange = (index: number, value: number) => {
    const newHsl = [...hsl] as [number, number, number];
    newHsl[index] = value;
    const rgbValues = hslToRgb(newHsl[0], newHsl[1], newHsl[2]);
    updateAllFormats(rgbValues);
  };

  const handleCmykChange = (index: number, value: number) => {
    const newCmyk = [...cmyk] as [number, number, number, number];
    newCmyk[index] = value;
    const rgbValues = cmykToRgb(newCmyk[0], newCmyk[1], newCmyk[2], newCmyk[3]);
    updateAllFormats(rgbValues);
  };

  const handleWheelChange = (hexColor: string) => {
    handleHexChange(hexColor);
  };

  return (
    <div className="flex gap-4">
      <Select
        onValueChange={(value) => {
          setFormat(value as ColorFormat);
          setIsPopUpOpen(true);
        }}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select color format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hex">Hexadecimal</SelectItem>
          <SelectItem value="rgb">RGB</SelectItem>
          <SelectItem value="hsl">HSL</SelectItem>
          <SelectItem value="cmyk">CMYK</SelectItem>
          <SelectItem value="wheel">Color Wheel</SelectItem>
        </SelectContent>
      </Select>

      <PopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <div
          className="min-w-10 min-h-10 rounded-md my-4"
          style={{ backgroundColor: color }}
        />
        {format === "hex" && (
          <div>
            <Label htmlFor="hex">Hex Color</Label>
            <Input
              id="hex"
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#RRGGBB"
            />
          </div>
        )}

        {format === "rgb" && (
          <div className="space-y-2">
            {["Red", "Green", "Blue"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={255}
                  step={1}
                  value={[rgb[index]]}
                  onValueChange={(value) => handleRgbChange(index, value[0])}
                />
                <span>{rgb[index]}</span>
              </div>
            ))}
          </div>
        )}

        {format === "hsl" && (
          <div className="space-y-2">
            {["Hue", "Saturation", "Lightness"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={index === 0 ? 360 : 100}
                  step={1}
                  value={[hsl[index]]}
                  onValueChange={(value) => handleHslChange(index, value[0])}
                />
                <span>
                  {hsl[index]}
                  {index === 0 ? "\xb0" : "%"}
                </span>
              </div>
            ))}
          </div>
        )}

        {format === "cmyk" && (
          <div className="space-y-2">
            {["Cyan", "Magenta", "Yellow", "Black"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={100}
                  step={1}
                  value={[cmyk[index]]}
                  onValueChange={(value) => handleCmykChange(index, value[0])}
                />
                <span>{cmyk[index]}%</span>
              </div>
            ))}
          </div>
        )}

        {format === "wheel" && (
          <div>
            <ColorWheel size={200} onChange={handleWheelChange} />
          </div>
        )}
      </PopUp>

      <div
        className="min-w-10 min-h-10 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;

`}),(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/color-picker/color-wheel.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"w-[16rem] md:max-w-[812px] xl:w-[980px] h-96 scrollbar-custom mb-12",theme:"dark",code:`import React, { useRef, useEffect, useState } from "react";

interface ColorWheelProps {
  size: number;
  onChange: (color: string) => void;
}

const ColorWheel: React.FC<ColorWheelProps> = ({ size, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= radius) {
          const hue = (Math.atan2(dy, dx) + Math.PI) / (Math.PI * 2);
          const sat = distance / radius;
          const lightness = 0.5;

          ctx.fillStyle = \`hsl(\${hue * 360}, \${sat * 100}%, \${
            lightness * 100
          }%)\`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, [size]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b] = imageData.data;
    const color = \`#\${r.toString(16).padStart(2, "0")}\${g
      .toString(16)
      .padStart(2, "0")}\${b.toString(16).padStart(2, "0")}\`;
    onChange(color);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: "crosshair" }}
      />
    </div>
  );
};

export default ColorWheel;
`}),(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/color-pciker/pop-up.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"w-[16rem] md:max-w-[812px] xl:w-[980px] h-96 scrollbar-custom",theme:"dark",code:`import React, { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Color Options</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-6 w-6" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;

`})]})},{key:5,title:"Ready To Use",height:"5rem",content:(0,d.jsx)(d.Fragment,{})}],r=[{name:"color",type:"string",required:!0,default:"",description:"Color Selected."},{name:"setColor",type:"string",required:!0,default:"state action",description:"State Action to change color selected."}]}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[982,488,268,303,550,528,809],()=>b(b.s=94044));module.exports=c})();