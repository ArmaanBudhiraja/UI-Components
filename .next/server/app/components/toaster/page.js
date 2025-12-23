(()=>{var a={};a.id=916,a.ids=[916],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},35798:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>n});var d=c(75338),e=c(64773),f=c(96587),g=c(71131),h=c(33841),i=c(83005),j=c(44972);function k(){return(0,d.jsx)(h.default,{code:l,language:"jsx",theme:"dark",showLineNumbers:!0})}let l=`
"use client";

import { Button } from "@/components/ui/button";
import MasteredToast from "@/components/ui/toast-mastered";
import { useToast } from "@/hooks/use-toast";

export default function Preview() {
  const { showToast, Toaster } = useToast({
    undo: true,
    position: "top-right",
  });

  return (
    <div>
      <Button onClick={() => showToast("Hello World", "This is a Toaster made in V-UI")}>
        Show Toast
      </Button>
      {Toaster}
    </div>
  );
}
`.trim();var m=c(76346);function n(){return(0,d.jsxs)("div",{className:"flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden",children:[(0,d.jsx)(f.A,{heading:o,description:p}),(0,d.jsx)(e.A,{Code:(0,d.jsx)(k,{}),Preview:(0,d.jsx)(m.default,{})}),(0,d.jsx)(g.A,{steps:q}),(0,d.jsx)(i.A,{props:r}),(0,d.jsx)(j.A,{})]})}let o="Toaster",p="The Toaster component is a customizable toast notification system that displays messages with a title, description, and optional undo button. It supports timed auto-dismissal, dynamic positioning, and progress indication, controlled via a ref for programmatic triggering.",q=[{key:1,title:"Install Dependencies",height:"8rem",content:(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`npm i motion clsx tailwind-merge
npx shadcn@latest add button
npx shadcn@latest add toast`})},{key:2,title:"Install Dependencies For Animations",height:"6rem",content:(0,d.jsx)(h.default,{theme:"dark",code:"npm install framer-motion",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]"})},{key:3,title:"Add Util File",height:"15rem",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"lib/utils.ts"}),(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`import { ClassValue, clsx } from "clsx";
  import { twMerge } from "tailwind-merge";

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  `})]})},{key:4,height:"54rem",title:"Copy The Source Code",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/toaster.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]",theme:"dark",code:`
"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useProgressTimer } from "@/hooks/use-progress-timer";

interface MasteredToastProps {
  undo?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom"
    | null
    | undefined;
}

export interface MasteredToastRef {
  showToast: (title: string, description: string) => void;
}

const MasteredToast = forwardRef<MasteredToastRef, MasteredToastProps>(
  ({ undo, position }, ref) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const toastDuration = 5000;

    const { progress, start, pause, resume, reset } = useProgressTimer({
      duration: toastDuration,
      onComplete: () => setOpen(false),
    });

    const convert = useMemo(() => {
      if (!position) return;
      else if (position.includes("right")) return "right";
      else if (position.includes("left")) return "left";
      else if (position.includes("top")) return "top";
      else return "bottom";
    }, [position]);

    const handleOpenChange = useCallback(
      (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) {
          reset();
          start();
        }
      },
      [reset, start]
    );

    const showToast = useCallback(
      (toastTitle: string, toastDescription: string) => {
        setTitle(toastTitle);
        setDescription(toastDescription);
        if (open) {
          setOpen(false);
          window.setTimeout(() => {
            handleOpenChange(true);
          }, 150);
        } else {
          handleOpenChange(true);
        }
      },
      [open, handleOpenChange]
    );

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    return (
      <ToastProvider>
        <Toast
          open={open}
          onOpenChange={handleOpenChange}
          onMouseEnter={pause}
          onMouseLeave={resume}
          position={convert}
        >
          <div className="flex w-full justify-between gap-3">
            <CircleCheck
              className="mt-0.5 shrink-0 text-emerald-500"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <div className="flex grow flex-col gap-3">
              <div className="space-y-1">
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
              </div>
              {undo && (
                <div>
                  <ToastAction altText="Undo changes" asChild>
                    <Button size="sm" className="text-primary font-semibold">
                      Undo changes
                    </Button>
                  </ToastAction>
                </div>
              )}
            </div>
            <ToastClose asChild>
              <Button
                variant="ghost"
                className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                aria-label="Close notification"
              >
                <X
                  size={16}
                  strokeWidth={2}
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Button>
            </ToastClose>
          </div>
          <div className="contents" aria-hidden="true">
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500"
              style={{
                width: \`\${(progress / toastDuration) * 100}%\`,
                transition: "width 100ms linear",
              }}
            />
          </div>
        </Toast>
        <ToastViewport position={position} />
      </ToastProvider>
    );
  }
);

MasteredToast.displayName = "MasteredToast";

export default MasteredToast;

`}),(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/use-toast.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 scrollbar-custom max-w-[980px]",theme:"dark",code:`import { useRef, useCallback } from "react";
import MasteredToast, {
  MasteredToastRef,
} from "@/components/ui/toast-mastered";

interface UseToastOptions {
  undo?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom"
    | null
    | undefined;
}

export function useToast(options: UseToastOptions) {
  const toastRef = useRef<MasteredToastRef | null>(null);

  const showToast = useCallback(
    (title: string, description: string) => {
      toastRef.current?.showToast(title, description);
    },
    []
  );
  
  const Toaster = (
    <MasteredToast
      ref={toastRef as React.RefObject<MasteredToastRef>}
      undo={options.undo}
      position={options.position}
    />
  );

  return { showToast, Toaster };
}
`})]})},{key:5,title:"Ready To Use",height:"5rem",content:(0,d.jsx)(d.Fragment,{})}],r=[{name:"position",type:"string(limited)",required:!0,default:"top-right",description:"Where the toast is displayed on screen."},{name:"undo",type:"boolean",required:!1,default:"false",description:"Undo Button to revert back."}]},39890:(a,b,c)=>{"use strict";c.d(b,{default:()=>ak});var d=c(21124),e=c(35284),f=c(38301);let g=(0,c(23339).A)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var h=c(47089),i=c(23312),j=c(87868),k=c(92808),l=c(43515),m=c(2332),n=c(7412),o=c(61611),p=c(29988),q=c(99978),r=c(71700),s=c(11720),t=c(68829),u=c(85009),v="ToastProvider",[w,x,y]=(0,l.N)("Toast"),[z,A]=(0,m.A)("Toast",[y]),[B,C]=z(v),D=a=>{let{__scopeToast:b,label:c="Notification",duration:e=5e3,swipeDirection:g="right",swipeThreshold:h=50,children:i}=a,[j,k]=f.useState(null),[l,m]=f.useState(0),n=f.useRef(!1),o=f.useRef(!1);return c.trim()||console.error(`Invalid prop \`label\` supplied to \`${v}\`. Expected non-empty \`string\`.`),(0,d.jsx)(w.Provider,{scope:b,children:(0,d.jsx)(B,{scope:b,label:c,duration:e,swipeDirection:g,swipeThreshold:h,toastCount:l,viewport:j,onViewportChange:k,onToastAdd:f.useCallback(()=>m(a=>a+1),[]),onToastRemove:f.useCallback(()=>m(a=>a-1),[]),isFocusedToastEscapeKeyDownRef:n,isClosePausedRef:o,children:i})})};D.displayName=v;var E="ToastViewport",F=["F8"],G="toast.viewportPause",H="toast.viewportResume",I=f.forwardRef((a,b)=>{let{__scopeToast:c,hotkey:e=F,label:g="Notifications ({hotkey})",...h}=a,i=C(E,c),j=x(c),l=f.useRef(null),m=f.useRef(null),o=f.useRef(null),p=f.useRef(null),r=(0,k.s)(b,p,i.onViewportChange),s=e.join("+").replace(/Key/g,"").replace(/Digit/g,""),t=i.toastCount>0;f.useEffect(()=>{let a=a=>{0!==e.length&&e.every(b=>a[b]||a.code===b)&&p.current?.focus()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e]),f.useEffect(()=>{let a=l.current,b=p.current;if(t&&a&&b){let c=()=>{if(!i.isClosePausedRef.current){let a=new CustomEvent(G);b.dispatchEvent(a),i.isClosePausedRef.current=!0}},d=()=>{if(i.isClosePausedRef.current){let a=new CustomEvent(H);b.dispatchEvent(a),i.isClosePausedRef.current=!1}},e=b=>{a.contains(b.relatedTarget)||d()},f=()=>{a.contains(document.activeElement)||d()};return a.addEventListener("focusin",c),a.addEventListener("focusout",e),a.addEventListener("pointermove",c),a.addEventListener("pointerleave",f),window.addEventListener("blur",c),window.addEventListener("focus",d),()=>{a.removeEventListener("focusin",c),a.removeEventListener("focusout",e),a.removeEventListener("pointermove",c),a.removeEventListener("pointerleave",f),window.removeEventListener("blur",c),window.removeEventListener("focus",d)}}},[t,i.isClosePausedRef]);let u=f.useCallback(({tabbingDirection:a})=>{let b=j().map(b=>{let c=b.ref.current,d=[c,...function(a){let b=[],c=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{let b="INPUT"===a.tagName&&"hidden"===a.type;return a.disabled||a.hidden||b?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;c.nextNode();)b.push(c.currentNode);return b}(c)];return"forwards"===a?d:d.reverse()});return("forwards"===a?b.reverse():b).flat()},[j]);return f.useEffect(()=>{let a=p.current;if(a){let b=b=>{let c=b.altKey||b.ctrlKey||b.metaKey;if("Tab"===b.key&&!c){let c=document.activeElement,d=b.shiftKey;if(b.target===a&&d)return void m.current?.focus();let e=u({tabbingDirection:d?"backwards":"forwards"}),f=e.findIndex(a=>a===c);$(e.slice(f+1))?b.preventDefault():d?m.current?.focus():o.current?.focus()}};return a.addEventListener("keydown",b),()=>a.removeEventListener("keydown",b)}},[j,u]),(0,d.jsxs)(n.lg,{ref:l,role:"region","aria-label":g.replace("{hotkey}",s),tabIndex:-1,style:{pointerEvents:t?void 0:"none"},children:[t&&(0,d.jsx)(K,{ref:m,onFocusFromOutsideViewport:()=>{$(u({tabbingDirection:"forwards"}))}}),(0,d.jsx)(w.Slot,{scope:c,children:(0,d.jsx)(q.sG.ol,{tabIndex:-1,...h,ref:r})}),t&&(0,d.jsx)(K,{ref:o,onFocusFromOutsideViewport:()=>{$(u({tabbingDirection:"backwards"}))}})]})});I.displayName=E;var J="ToastFocusProxy",K=f.forwardRef((a,b)=>{let{__scopeToast:c,onFocusFromOutsideViewport:e,...f}=a,g=C(J,c);return(0,d.jsx)(u.s6,{tabIndex:0,...f,ref:b,style:{position:"fixed"},onFocus:a=>{let b=a.relatedTarget;g.viewport?.contains(b)||e()}})});K.displayName=J;var L="Toast",M=f.forwardRef((a,b)=>{let{forceMount:c,open:e,defaultOpen:f,onOpenChange:g,...h}=a,[i,k]=(0,s.i)({prop:e,defaultProp:f??!0,onChange:g,caller:L});return(0,d.jsx)(p.C,{present:c||i,children:(0,d.jsx)(P,{open:i,...h,ref:b,onClose:()=>k(!1),onPause:(0,r.c)(a.onPause),onResume:(0,r.c)(a.onResume),onSwipeStart:(0,j.mK)(a.onSwipeStart,a=>{a.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,j.mK)(a.onSwipeMove,a=>{let{x:b,y:c}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","move"),a.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${b}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${c}px`)}),onSwipeCancel:(0,j.mK)(a.onSwipeCancel,a=>{a.currentTarget.setAttribute("data-swipe","cancel"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,j.mK)(a.onSwipeEnd,a=>{let{x:b,y:c}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","end"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${b}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${c}px`),k(!1)})})})});M.displayName=L;var[N,O]=z(L,{onClose(){}}),P=f.forwardRef((a,b)=>{let{__scopeToast:c,type:e="foreground",duration:g,open:h,onClose:l,onEscapeKeyDown:m,onPause:o,onResume:p,onSwipeStart:s,onSwipeMove:t,onSwipeCancel:u,onSwipeEnd:v,...x}=a,y=C(L,c),[z,A]=f.useState(null),B=(0,k.s)(b,a=>A(a)),D=f.useRef(null),E=f.useRef(null),F=g||y.duration,I=f.useRef(0),J=f.useRef(F),K=f.useRef(0),{onToastAdd:M,onToastRemove:O}=y,P=(0,r.c)(()=>{z?.contains(document.activeElement)&&y.viewport?.focus(),l()}),R=f.useCallback(a=>{a&&a!==1/0&&(window.clearTimeout(K.current),I.current=new Date().getTime(),K.current=window.setTimeout(P,a))},[P]);f.useEffect(()=>{let a=y.viewport;if(a){let b=()=>{R(J.current),p?.()},c=()=>{let a=new Date().getTime()-I.current;J.current=J.current-a,window.clearTimeout(K.current),o?.()};return a.addEventListener(G,c),a.addEventListener(H,b),()=>{a.removeEventListener(G,c),a.removeEventListener(H,b)}}},[y.viewport,F,o,p,R]),f.useEffect(()=>{h&&!y.isClosePausedRef.current&&R(F)},[h,F,y.isClosePausedRef,R]),f.useEffect(()=>(M(),()=>O()),[M,O]);let S=f.useMemo(()=>z?function a(b){let c=[];return Array.from(b.childNodes).forEach(b=>{var d;if(b.nodeType===b.TEXT_NODE&&b.textContent&&c.push(b.textContent),(d=b).nodeType===d.ELEMENT_NODE){let d=b.ariaHidden||b.hidden||"none"===b.style.display,e=""===b.dataset.radixToastAnnounceExclude;if(!d)if(e){let a=b.dataset.radixToastAnnounceAlt;a&&c.push(a)}else c.push(...a(b))}}),c}(z):null,[z]);return y.viewport?(0,d.jsxs)(d.Fragment,{children:[S&&(0,d.jsx)(Q,{__scopeToast:c,role:"status","aria-live":"foreground"===e?"assertive":"polite",children:S}),(0,d.jsx)(N,{scope:c,onClose:P,children:i.createPortal((0,d.jsx)(w.ItemSlot,{scope:c,children:(0,d.jsx)(n.bL,{asChild:!0,onEscapeKeyDown:(0,j.mK)(m,()=>{y.isFocusedToastEscapeKeyDownRef.current||P(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,d.jsx)(q.sG.li,{tabIndex:0,"data-state":h?"open":"closed","data-swipe-direction":y.swipeDirection,...x,ref:B,style:{userSelect:"none",touchAction:"none",...a.style},onKeyDown:(0,j.mK)(a.onKeyDown,a=>{"Escape"===a.key&&(m?.(a.nativeEvent),a.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,P()))}),onPointerDown:(0,j.mK)(a.onPointerDown,a=>{0===a.button&&(D.current={x:a.clientX,y:a.clientY})}),onPointerMove:(0,j.mK)(a.onPointerMove,a=>{if(!D.current)return;let b=a.clientX-D.current.x,c=a.clientY-D.current.y,d=!!E.current,e=["left","right"].includes(y.swipeDirection),f=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,g=e?f(0,b):0,h=e?0:f(0,c),i="touch"===a.pointerType?10:2,j={x:g,y:h},k={originalEvent:a,delta:j};d?(E.current=j,Y("toast.swipeMove",t,k,{discrete:!1})):Z(j,y.swipeDirection,i)?(E.current=j,Y("toast.swipeStart",s,k,{discrete:!1}),a.target.setPointerCapture(a.pointerId)):(Math.abs(b)>i||Math.abs(c)>i)&&(D.current=null)}),onPointerUp:(0,j.mK)(a.onPointerUp,a=>{let b=E.current,c=a.target;if(c.hasPointerCapture(a.pointerId)&&c.releasePointerCapture(a.pointerId),E.current=null,D.current=null,b){let c=a.currentTarget,d={originalEvent:a,delta:b};Z(b,y.swipeDirection,y.swipeThreshold)?Y("toast.swipeEnd",v,d,{discrete:!0}):Y("toast.swipeCancel",u,d,{discrete:!0}),c.addEventListener("click",a=>a.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),Q=a=>{let{__scopeToast:b,children:c,...e}=a,g=C(L,b),[h,i]=f.useState(!1),[j,k]=f.useState(!1);return function(a=()=>{}){let b=(0,r.c)(a);(0,t.N)(()=>{let a=0,c=0;return a=window.requestAnimationFrame(()=>c=window.requestAnimationFrame(b)),()=>{window.cancelAnimationFrame(a),window.cancelAnimationFrame(c)}},[b])}(()=>i(!0)),f.useEffect(()=>{let a=window.setTimeout(()=>k(!0),1e3);return()=>window.clearTimeout(a)},[]),j?null:(0,d.jsx)(o.Z,{asChild:!0,children:(0,d.jsx)(u.s6,{...e,children:h&&(0,d.jsxs)(d.Fragment,{children:[g.label," ",c]})})})},R=f.forwardRef((a,b)=>{let{__scopeToast:c,...e}=a;return(0,d.jsx)(q.sG.div,{...e,ref:b})});R.displayName="ToastTitle";var S=f.forwardRef((a,b)=>{let{__scopeToast:c,...e}=a;return(0,d.jsx)(q.sG.div,{...e,ref:b})});S.displayName="ToastDescription";var T="ToastAction",U=f.forwardRef((a,b)=>{let{altText:c,...e}=a;return c.trim()?(0,d.jsx)(X,{altText:c,asChild:!0,children:(0,d.jsx)(W,{...e,ref:b})}):(console.error(`Invalid prop \`altText\` supplied to \`${T}\`. Expected non-empty \`string\`.`),null)});U.displayName=T;var V="ToastClose",W=f.forwardRef((a,b)=>{let{__scopeToast:c,...e}=a,f=O(V,c);return(0,d.jsx)(X,{asChild:!0,children:(0,d.jsx)(q.sG.button,{type:"button",...e,ref:b,onClick:(0,j.mK)(a.onClick,f.onClose)})})});W.displayName=V;var X=f.forwardRef((a,b)=>{let{__scopeToast:c,altText:e,...f}=a;return(0,d.jsx)(q.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":e||void 0,...f,ref:b})});function Y(a,b,c,{discrete:d}){let e=c.originalEvent.currentTarget,f=new CustomEvent(a,{bubbles:!0,cancelable:!0,detail:c});b&&e.addEventListener(a,b,{once:!0}),d?(0,q.hO)(e,f):e.dispatchEvent(f)}var Z=(a,b,c=0)=>{let d=Math.abs(a.x),e=Math.abs(a.y),f=d>e;return"left"===b||"right"===b?f&&d>c:!f&&e>c};function $(a){let b=document.activeElement;return a.some(a=>a===b||(a.focus(),document.activeElement!==b))}var _=c(26691),aa=c(44943);let ab=(0,_.F)("fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px]",{variants:{position:{"top-right":"top-0 right-0","top-left":"top-0 left-0","bottom-right":"bottom-0 right-0","bottom-left":"bottom-0 left-0",top:"top-0 left-[50%] -translate-x-[50%]",bottom:"bottom-0  left-[50%] -translate-x-[50%]"}},defaultVariants:{position:"bottom-right"}}),ac=f.forwardRef(({className:a,position:b,...c},e)=>(0,d.jsx)(I,{ref:e,className:(0,aa.cn)(a,ab({position:b})),...c}));ac.displayName=I.displayName;let ad=(0,_.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"},position:{left:"data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",right:"data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",top:"data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",bottom:"data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full"}},defaultVariants:{variant:"default"}}),ae=f.forwardRef(({className:a,variant:b,position:c,...e},f)=>(0,d.jsx)(M,{ref:f,className:(0,aa.cn)(ad({variant:b}),ad({position:c}),a),...e}));ae.displayName=M.displayName;let af=f.forwardRef(({className:a,...b},c)=>(0,d.jsx)(U,{ref:c,className:(0,aa.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",a),...b}));af.displayName=U.displayName;let ag=f.forwardRef(({className:a,...b},c)=>(0,d.jsx)(W,{ref:c,className:(0,aa.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",a),"toast-close":"",...b,children:(0,d.jsx)(h.A,{className:"h-4 w-4"})}));ag.displayName=W.displayName;let ah=f.forwardRef(({className:a,...b},c)=>(0,d.jsx)(R,{ref:c,className:(0,aa.cn)("text-sm font-semibold",a),...b}));ah.displayName=R.displayName;let ai=f.forwardRef(({className:a,...b},c)=>(0,d.jsx)(S,{ref:c,className:(0,aa.cn)("text-sm opacity-90",a),...b}));ai.displayName=S.displayName;let aj=(0,f.forwardRef)(({undo:a,position:b},c)=>{let[i,j]=(0,f.useState)(!1),[k,l]=(0,f.useState)(""),[m,n]=(0,f.useState)(""),{progress:o,start:p,pause:q,resume:r,reset:s}=function({duration:a,interval:b=100,onComplete:c}){let[d,e]=(0,f.useState)(a),g=(0,f.useRef)(null),h=(0,f.useRef)({startTime:0,remaining:a,isPaused:!1}),i=(0,f.useCallback)(()=>{null!==g.current&&(window.clearInterval(g.current),g.current=null)},[]),j=(0,f.useCallback)(()=>{i(),e(a),h.current={startTime:0,remaining:a,isPaused:!1}},[a,i]),k=(0,f.useCallback)(()=>{let a=h.current;a.startTime=Date.now(),a.isPaused=!1,g.current=window.setInterval(()=>{let b=Date.now()-a.startTime,d=Math.max(0,a.remaining-b);e(d),d<=0&&(i(),c?.())},b)},[b,i,c]),l=(0,f.useCallback)(()=>{let a=h.current;a.isPaused||(i(),a.remaining=Math.max(0,a.remaining-(Date.now()-a.startTime)),a.isPaused=!0)},[i]),m=(0,f.useCallback)(()=>{let a=h.current;a.isPaused&&a.remaining>0&&k()},[k]);return{progress:d,start:k,pause:l,resume:m,reset:j}}({duration:5e3,onComplete:()=>j(!1)}),t=(0,f.useMemo)(()=>{if(b)return b.includes("right")?"right":b.includes("left")?"left":b.includes("top")?"top":"bottom"},[b]),u=(0,f.useCallback)(a=>{j(a),a&&(s(),p())},[s,p]),v=(0,f.useCallback)((a,b)=>{l(a),n(b),i?(j(!1),window.setTimeout(()=>{u(!0)},150)):u(!0)},[i,u]);return(0,f.useImperativeHandle)(c,()=>({showToast:v})),(0,d.jsxs)(D,{children:[(0,d.jsxs)(ae,{open:i,onOpenChange:u,onMouseEnter:q,onMouseLeave:r,position:t,children:[(0,d.jsxs)("div",{className:"flex w-full justify-between gap-3",children:[(0,d.jsx)(g,{className:"mt-0.5 shrink-0 text-emerald-500",size:16,strokeWidth:2,"aria-hidden":"true"}),(0,d.jsxs)("div",{className:"flex grow flex-col gap-3",children:[(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)(ah,{children:k}),(0,d.jsx)(ai,{children:m})]}),a&&(0,d.jsx)("div",{children:(0,d.jsx)(af,{altText:"Undo changes",asChild:!0,children:(0,d.jsx)(e.$n,{size:"sm",className:"text-primary font-semibold",children:"Undo changes"})})})]}),(0,d.jsx)(ag,{asChild:!0,children:(0,d.jsx)(e.$n,{variant:"ghost",className:"group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent","aria-label":"Close notification",children:(0,d.jsx)(h.A,{size:16,strokeWidth:2,className:"opacity-60 transition-opacity group-hover:opacity-100","aria-hidden":"true"})})})]}),(0,d.jsx)("div",{className:"contents","aria-hidden":"true",children:(0,d.jsx)("div",{className:"pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500",style:{width:`${o/5e3*100}%`,transition:"width 100ms linear"}})})]}),(0,d.jsx)(ac,{position:b})]})});function ak(){let{showToast:a,Toaster:b}=function(a){let b=(0,f.useRef)(null);return{showToast:(0,f.useCallback)((a,c)=>{b.current?.showToast(a,c)},[]),Toaster:(0,d.jsx)(aj,{ref:b,undo:a.undo,position:a.position})}}({undo:!0,position:"top-right"});return(0,d.jsxs)("div",{children:[(0,d.jsx)(e.$n,{onClick:()=>a("Hello World","This is a Toaster made in V-UI"),children:"Show Toast"}),b]})}aj.displayName="MasteredToast"},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},44694:(a,b,c)=>{Promise.resolve().then(c.bind(c,76346)),Promise.resolve().then(c.bind(c,33841)),Promise.resolve().then(c.bind(c,14775)),Promise.resolve().then(c.bind(c,35822))},56318:(a,b,c)=>{Promise.resolve().then(c.bind(c,39890)),Promise.resolve().then(c.bind(c,84755)),Promise.resolve().then(c.bind(c,80665)),Promise.resolve().then(c.bind(c,44928))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},76346:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/armaanbudhiraja/UI-Components/src/app/components/toaster/preview.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/armaanbudhiraja/UI-Components/src/app/components/toaster/preview.tsx","default")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},98192:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["components",{children:["toaster",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,35798)),"/Users/armaanbudhiraja/UI-Components/src/app/components/toaster/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,51472)),"/Users/armaanbudhiraja/UI-Components/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/Users/armaanbudhiraja/UI-Components/src/app/components/toaster/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/components/toaster/page",pathname:"/components/toaster",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/components/toaster/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[982,488,268,303,550,528,809],()=>b(b.s=98192));module.exports=c})();