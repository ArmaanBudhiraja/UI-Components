(()=>{var a={};a.id=28,a.ids=[28],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21770:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/armaanbudhiraja/UI-Components/src/app/components/drop-down-menu/preview.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/armaanbudhiraja/UI-Components/src/app/components/drop-down-menu/preview.tsx","default")},25486:(a,b,c)=>{Promise.resolve().then(c.bind(c,21770)),Promise.resolve().then(c.bind(c,33841)),Promise.resolve().then(c.bind(c,14775)),Promise.resolve().then(c.bind(c,35822))},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27684:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["components",{children:["drop-down-menu",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,78950)),"/Users/armaanbudhiraja/UI-Components/src/app/components/drop-down-menu/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,51472)),"/Users/armaanbudhiraja/UI-Components/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/Users/armaanbudhiraja/UI-Components/src/app/components/drop-down-menu/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/components/drop-down-menu/page",pathname:"/components/drop-down-menu",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/components/drop-down-menu/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},32240:(a,b,c)=>{"use strict";c.d(b,{default:()=>s});var d=c(21124),e=c(38301),f=c.n(e),g=c(4326),h=c(44943),i=c(22577),j=c(1756),k=c(62312);function l({children:a,isValidProp:b,...c}){b&&(0,j.D)(b),(c={...(0,e.useContext)(i.Q),...c}).isStatic=(0,k.M)(()=>c.isStatic);let f=(0,e.useMemo)(()=>c,[JSON.stringify(c.transition),c.transformPagePoint,c.reducedMotion]);return(0,d.jsx)(i.Q.Provider,{value:f,children:a})}var m=c(26691);let n=(0,m.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",red:"bg-destructive text-destructive-foreground hover:bg-destructive/90",green:"bg-green-500 text-green-500-foreground hover:bg-green-500/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",transparent:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"size-10",sm:"size-8",lg:"size-12",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=(0,m.F)("",{variants:{variant:{default:"bg-white",red:"bg-white",green:"bg-white",outline:"bg-primary",transparent:"bg-primary",secondary:"bg-primary",link:"bg-primary"},size:{default:"w-6 h-0.5",sm:"w-4 h-0.5",lg:"w-8 h-0.5",icon:""}},defaultVariants:{variant:"default",size:"default"}}),p=f().forwardRef(({open:a,setOpen:b,className:c,size:e,variant:f,...i},j)=>(0,d.jsx)(l,{transition:{duration:.5,ease:"easeInOut"},children:(0,d.jsxs)(g.P.button,{initial:!1,onClick:()=>b(a=>!a),className:(0,h.cn)("relative",c,n({size:e,variant:f})),animate:a?"open":"closed",ref:j,...i,children:[(0,d.jsx)(g.P.span,{className:(0,h.cn)("absolute dark:bg-black",o({size:e,variant:f})),style:{left:"50%",top:"35%",x:"-50%",y:"-50%"},variants:{open:{rotate:["0deg","0deg","45deg"],top:["35%","50%","50%"]},closed:{rotate:["45deg","0deg","0deg"],top:["50%","50%","35%"]}}}),(0,d.jsx)(g.P.span,{className:(0,h.cn)("absolute dark:bg-black",o({size:e,variant:f})),style:{left:"50%",top:"50%",x:"-50%",y:"-50%"},variants:{open:{rotate:["0deg","0deg","45deg"]},closed:{rotate:["45deg","0deg","0deg"]}}}),(0,d.jsx)(g.P.span,{className:(0,h.cn)("absolute dark:bg-black",o({size:e,variant:f})),style:{left:"50%",top:"65%",x:"-50%",y:"-50%"},variants:{open:{rotate:["0deg","0deg","-45deg"],top:["65%","50%","50%"]},closed:{rotate:["-45deg","0deg","0deg"],top:["50%","50%","65%"]}}})]})}));p.displayName="Hamburger";let q=f().forwardRef(({className:a,children:b},c)=>{let[f,i]=(0,e.useState)(!1);return(0,d.jsxs)("div",{className:(0,h.cn)("relative",a),ref:c,children:[(0,d.jsx)(p,{open:f,setOpen:i,className:"absolute z-50 left-[152px]"}),(0,d.jsx)(g.P.div,{className:"absolute bg-secondary rounded-md p-4 w-48 h-64",animate:f?"open":"closed",style:{transformOrigin:"top right"},variants:{open:{scale:1},closed:{scale:0}},transition:{duration:.25,ease:"easeInOut",delay:.25},children:b})]})});p.displayName="Hamburger",q.displayName="HamburgerMenu";var r=c(6471);function s(){let a=["Item 1","Item 2","Item 3","Item 4","Item 5"];return(0,d.jsx)("div",{className:"h-[18rem] w-80 p-4",children:(0,d.jsx)(q,{children:a.map((b,c)=>(0,d.jsxs)("div",{role:"menuitem",tabIndex:0,className:"group",children:[(0,d.jsx)("div",{className:"hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-700 focus:outline-none rounded-md px-3 py-2 transition-all cursor-pointer",children:b}),c<a.length-1&&(0,d.jsx)(r.Separator,{className:"my-1"})]},c))})})}},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},65238:(a,b,c)=>{Promise.resolve().then(c.bind(c,32240)),Promise.resolve().then(c.bind(c,84755)),Promise.resolve().then(c.bind(c,80665)),Promise.resolve().then(c.bind(c,44928))},78950:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>n});var d=c(75338),e=c(64773),f=c(96587),g=c(71131),h=c(33841),i=c(83005),j=c(44972);function k(){return(0,d.jsx)(h.default,{code:l,language:"jsx",theme:"dark",showLineNumbers:!0})}let l=`
"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu/hamburger-menu";
import { Separator } from "@/components/ui/separator";

export default function Preview() {
  const menuItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="h-[18rem] w-80 p-4">
      <HamburgerMenu>
        {menuItems.map((item, index) => (
          <div key={index} role="menuitem" tabIndex={0} className="group">
            <div
              className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none rounded-md px-3 py-2 transition-all cursor-pointer"
            >
              {item}
            </div>
            {index < menuItems.length - 1 && <Separator className="my-1" />}
          </div>
        ))}
      </HamburgerMenu>
    </div>
  );
}
`.trim();var m=c(21770);function n(){return(0,d.jsxs)("div",{className:"flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden",children:[(0,d.jsx)(f.A,{heading:o,description:p}),(0,d.jsx)(e.A,{Code:(0,d.jsx)(k,{}),Preview:(0,d.jsx)(m.default,{})}),(0,d.jsx)(g.A,{steps:q}),(0,d.jsx)(i.A,{props:r}),(0,d.jsx)(j.A,{})]})}let o="Drop Down Menu",p="The DropDownMenu component provides a customizable and accessible menu for displaying a list of options or actions. It supports smooth animations, keyboard navigation, and seamless integration with other UI elements.",q=[{key:1,title:"Install Dependencies",height:"5rem",content:(0,d.jsx)(h.default,{theme:"dark",code:"npm i motion clsx tailwind-merge",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]"})},{key:2,title:"Install Dependencies For Animations",height:"6rem",content:(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`
npm install motion
`})},{key:3,title:"Add Util File",height:"15rem",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"lib/utils.ts"}),(0,d.jsx)(h.default,{theme:"dark",className:"w-[16rem] md:max-w-[812px] xl:w-[980px]",code:`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`})]})},{key:4,height:"56rem",title:"Copy The Source Code",content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md",children:"components/ui/hamburger.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]",theme:"dark",code:`
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const hamburgerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        red: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        green: "bg-green-500 text-green-500-foreground hover:bg-green-500/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        transparent: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "size-10",
        sm: "size-8",
        lg: "size-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const hamburgerLineVariants = cva("", {
  variants: {
    variant: {
      default: "bg-white",
      red: "bg-white",
      green: "bg-white",
      outline: "bg-primary",
      transparent: "bg-primary",
      secondary: "bg-primary",
      link: "bg-primary",
    },
    size: {
      default: "w-6 h-0.5",
      sm: "w-4 h-0.5",
      lg: "w-8 h-0.5",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface HamburgerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof hamburgerVariants> {
  asChild?: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = React.forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ open, setOpen, className, size, variant, ...props }, ref) => {
    return (
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button
          initial={false}
          onClick={() => setOpen((state) => !state)}
          className={cn(
            "relative",
            className,
            hamburgerVariants({ size, variant })
          )}
          animate={open ? "open" : "closed"}
          ref={ref}
          {...(props as any)}
        >
          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
              },
            }}
          />

          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "65%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                top: ["65%", "50%", "50%"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                top: ["50%", "50%", "65%"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>
    );
  }
);

Hamburger.displayName = "Hamburger";

export { Hamburger };

`}),(0,d.jsx)("p",{className:"mb-2 ml-4 font-light text-md mt-8",children:"components/ui/hamburger-menu.tsx"}),(0,d.jsx)(h.default,{showLineNumbers:!0,className:"h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]",theme:"dark",code:`"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hamburger } from "./hamburger";

interface HamburgerMenuProps {
  className?: string;
  children?: ReactNode;
}

export const HamburgerMenu = React.forwardRef<
  HTMLDivElement,
  HamburgerMenuProps
>(({ className, children }, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <Hamburger
        open={open}
        setOpen={setOpen}
        className="absolute z-50 left-[152px]"
      />
      <motion.div
        className="absolute bg-secondary rounded-md p-4 w-48 h-64"
        animate={open ? "open" : "closed"}
        style={{ transformOrigin: "top right" }}
        variants={{
          open: { scale: 1 },
          closed: { scale: 0 },
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});
Hamburger.displayName = "Hamburger";

HamburgerMenu.displayName = "HamburgerMenu";
`})]})},{key:5,title:"Ready To Use",height:"5rem",content:(0,d.jsx)(d.Fragment,{})}],r=[{name:"className",type:"string",required:!1,default:"",description:"Tailwind classes to extend support."},{name:"children",type:"any",required:!1,default:"",description:"Children Prop."}]},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[982,488,268,303,550,528,809],()=>b(b.s=27684));module.exports=c})();