import{$ as D,a as ie,g as me,b as B,c as M,S as ge,s as H,n as je,i as ue,d as oe,t as Ue,f as _e,e as Fe,r as ce,h as Ne,j as ve,k as ae,l as Ke,m as Le,o as ze,u as Re,p as Be,q as X,v as Oe,w as T,x as Pe,y as le,z as He,A as $,Q as Je,B as We,C as Ge,D as Ve,E as Xe,F as Ye,G as Ze,H as N,I as et,J as fe,K,L as tt,M as rt,N as nt,O as Y,P as st}from"./entry-client.f31ed8db.js";const J=Symbol("store-raw"),q=Symbol("store-node"),it=Symbol("store-name");function we(t,e){let r=t[D];if(!r&&(Object.defineProperty(t,D,{value:r=new Proxy(t,ct)}),!Array.isArray(t))){const n=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let i=0,u=n.length;i<u;i++){const a=n[i];s[a].get&&Object.defineProperty(t,a,{enumerable:s[a].enumerable,get:s[a].get.bind(r)})}}return r}function U(t){let e;return t!=null&&typeof t=="object"&&(t[D]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function x(t,e=new Set){let r,n,s,i;if(r=t!=null&&t[J])return r;if(!U(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let u=0,a=t.length;u<a;u++)s=t[u],(n=x(s,e))!==s&&(t[u]=n)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const u=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let o=0,l=u.length;o<l;o++)i=u[o],!a[i].get&&(s=t[i],(n=x(s,e))!==s&&(t[i]=n))}return t}function Z(t){let e=t[q];return e||Object.defineProperty(t,q,{value:e={}}),e}function W(t,e,r){return t[e]||(t[e]=Qe(r))}function ut(t,e){const r=Reflect.getOwnPropertyDescriptor(t,e);return!r||r.get||!r.configurable||e===D||e===q||e===it||(delete r.value,delete r.writable,r.get=()=>t[D][e]),r}function xe(t){if(me()){const e=Z(t);(e._||(e._=Qe()))()}}function ot(t){return xe(t),Reflect.ownKeys(t)}function Qe(t){const[e,r]=M(t,{equals:!1,internal:!0});return e.$=r,e}const ct={get(t,e,r){if(e===J)return t;if(e===D)return r;if(e===ie)return xe(t),r;const n=Z(t),s=n.hasOwnProperty(e);let i=s?n[e]():t[e];if(e===q||e==="__proto__")return i;if(!s){const u=Object.getOwnPropertyDescriptor(t,e);me()&&(typeof i!="function"||t.hasOwnProperty(e))&&!(u&&u.get)&&(i=W(n,e,i)())}return U(i)?we(i):i},has(t,e){return e===J||e===D||e===ie||e===q||e==="__proto__"?!0:(this.get(t,e,t),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ot,getOwnPropertyDescriptor:ut};function _(t,e,r,n=!1){if(!n&&t[e]===r)return;const s=t[e],i=t.length;r===void 0?delete t[e]:t[e]=r;let u=Z(t),a;(a=W(u,e,s))&&a.$(()=>r),Array.isArray(t)&&t.length!==i&&(a=W(u,"length",i))&&a.$(t.length),(a=u._)&&a.$()}function Se(t,e){const r=Object.keys(e);for(let n=0;n<r.length;n+=1){const s=r[n];_(t,s,e[s])}}function at(t,e){if(typeof e=="function"&&(e=e(t)),e=x(e),Array.isArray(e)){if(t===e)return;let r=0,n=e.length;for(;r<n;r++){const s=e[r];t[r]!==s&&_(t,r,s)}_(t,"length",n)}else Se(t,e)}function E(t,e,r=[]){let n,s=t;if(e.length>1){n=e.shift();const u=typeof n,a=Array.isArray(t);if(Array.isArray(n)){for(let o=0;o<n.length;o++)E(t,[n[o]].concat(e),r);return}else if(a&&u==="function"){for(let o=0;o<t.length;o++)n(t[o],o)&&E(t,[o].concat(e),r);return}else if(a&&u==="object"){const{from:o=0,to:l=t.length-1,by:d=1}=n;for(let c=o;c<=l;c+=d)E(t,[c].concat(e),r);return}else if(e.length>1){E(t[n],e,[n].concat(r));return}s=t[n],r=[n].concat(r)}let i=e[0];typeof i=="function"&&(i=i(s,r),i===s)||n===void 0&&i==null||(i=x(i),n===void 0||U(s)&&U(i)&&!Array.isArray(i)?Se(s,i):_(t,n,i))}function k(...[t,e]){const r=x(t||{}),n=Array.isArray(r),s=we(r);function i(...u){B(()=>{n&&u.length===1?at(r,u[0]):E(r,u)})}return[s,i]}class Ce extends ge{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),he(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return G(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return G(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const n=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),H(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();const i=this.hasListeners();i&&de(this.currentQuery,s,this.options,n)&&this.executeFetch(),this.updateResult(r),i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),e[n])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(je)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),ue||this.currentResult.isStale||!oe(this.options.staleTime))return;const r=Ue(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(ue||this.options.enabled===!1||!oe(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||_e.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const n=this.currentQuery,s=this.options,i=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,o=e!==n,l=o?e.state:this.currentQueryInitialState,d=o?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:f,error:y,errorUpdatedAt:h,fetchStatus:b,status:g}=c,R=!1,m=!1,p;if(r._optimisticResults){const w=this.hasListeners(),A=!w&&he(e,r),j=w&&de(e,n,r,s);(A||j)&&(b=Fe(e.options.networkMode)?"fetching":"paused",f||(g="loading")),r._optimisticResults==="isRestoring"&&(b="idle")}if(r.keepPreviousData&&!c.dataUpdatedAt&&d!=null&&d.isSuccess&&g!=="error")p=d.data,f=d.dataUpdatedAt,g=d.status,R=!0;else if(r.select&&typeof c.data<"u")if(i&&c.data===u?.data&&r.select===this.selectFn)p=this.selectResult;else try{this.selectFn=r.select,p=r.select(c.data),p=ce(i?.data,p,r),this.selectResult=p,this.selectError=null}catch(w){this.selectError=w}else p=c.data;if(typeof r.placeholderData<"u"&&typeof p>"u"&&g==="loading"){let w;if(i!=null&&i.isPlaceholderData&&r.placeholderData===a?.placeholderData)w=i.data;else if(w=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof w<"u")try{w=r.select(w),this.selectError=null}catch(A){this.selectError=A}typeof w<"u"&&(g="success",p=ce(i?.data,w,r),m=!0)}this.selectError&&(y=this.selectError,p=this.selectResult,h=Date.now(),g="error");const v=b==="fetching",S=g==="loading",O=g==="error";return{status:g,fetchStatus:b,isLoading:S,isSuccess:g==="success",isError:O,isInitialLoading:S&&v,data:p,dataUpdatedAt:f,error:y,errorUpdatedAt:h,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>l.dataUpdateCount||c.errorUpdateCount>l.errorUpdateCount,isFetching:v,isRefetching:v&&!S,isLoadingError:O&&c.dataUpdatedAt===0,isPaused:b==="paused",isPlaceholderData:m,isPreviousData:R,isRefetchError:O&&c.dataUpdatedAt!==0,isStale:ee(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,H(n,r))return;this.currentResult=n;const s={cache:!0},i=()=>{if(!r)return!0;const{notifyOnChangeProps:u}=this.options;if(u==="all"||!u&&!this.trackedProps.size)return!0;const a=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(o=>{const l=o;return this.currentResult[l]!==r[l]&&a.has(l)})};e?.listeners!==!1&&i()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!Ne(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){ve.batch(()=>{if(e.onSuccess){var r,n,s,i;(r=(n=this.options).onSuccess)==null||r.call(n,this.currentResult.data),(s=(i=this.options).onSettled)==null||s.call(i,this.currentResult.data,null)}else if(e.onError){var u,a,o,l;(u=(a=this.options).onError)==null||u.call(a,this.currentResult.error),(o=(l=this.options).onSettled)==null||o.call(l,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(d=>{d(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function lt(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function he(t,e){return lt(t,e)||t.state.dataUpdatedAt>0&&G(t,e,e.refetchOnMount)}function G(t,e,r){if(e.enabled!==!1){const n=typeof r=="function"?r(t):r;return n==="always"||n!==!1&&ee(t,e)}return!1}function de(t,e,r,n){return r.enabled!==!1&&(t!==e||n.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&ee(t,r)}function ee(t,e){return t.isStaleByTime(e.staleTime)}class ft extends Ce{constructor(e,r){super(e,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,r){super.setOptions({...e,behavior:ae()},r)}getOptimisticResult(e){return e.behavior=ae(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,r){var n,s,i,u,a,o;const{state:l}=e,d=super.createResult(e,r),{isFetching:c,isRefetching:f}=d,y=c&&((n=l.fetchMeta)==null||(s=n.fetchMore)==null?void 0:s.direction)==="forward",h=c&&((i=l.fetchMeta)==null||(u=i.fetchMore)==null?void 0:u.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Ke(r,(a=l.data)==null?void 0:a.pages),hasPreviousPage:Le(r,(o=l.data)==null?void 0:o.pages),isFetchingNextPage:y,isFetchingPreviousPage:h,isRefetching:f&&!y&&!h}}}class ht extends ge{constructor(e,r){super(),this.client=e,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const r=this.options;this.options=this.client.defaultMutationOptions(e),H(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const r={listeners:!0};e.type==="success"?r.onSuccess=!0:e.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:ze(),r={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(e){ve.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var r,n,s,i;(r=(n=this.mutateOptions).onSuccess)==null||r.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(s=(i=this.mutateOptions).onSettled)==null||s.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var u,a,o,l;(u=(a=this.mutateOptions).onError)==null||u.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(o=(l=this.mutateOptions).onSettled)==null||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(d=>{d(this.currentResult)})})}}function dt(t){return typeof t=="function"}function F(t,e,r){if(!dt(t)){const{queryKey:n,...s}=t;return n?{...s,queryKey:n()}:t}return typeof e=="function"?{...r,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function Ie(t,e){return typeof t=="function"?t(...e):!!t}function De(t,e){const r=Re({context:t.context}),n=Symbol("empty"),s=r.defaultQueryOptions(t);s._optimisticResults="optimistic";const i=new e(r,s),[u,a]=k(i.getOptimisticResult(s)),[o,{refetch:l,mutate:d}]=Be(()=>new Promise(h=>{u.isFetching&&u.isLoading||(x(u.data)===n&&h(void 0),h(x(u.data)))}));B(()=>{d(()=>x(u.data)),l()});let c=[];const f=i.subscribe(h=>{c.push(()=>{B(()=>{const b={...x(h)};b.data===void 0&&(b.data=n),a(x(b)),d(()=>x(h.data)),l()})}),queueMicrotask(()=>{const b=c.pop();b&&b(),c=[]})});X(()=>f()),Oe(()=>{i.setOptions(s,{listeners:!1})}),T(()=>{const h=r.defaultQueryOptions(t);i.setOptions(h)}),T(Pe(()=>u.status,()=>{if(u.isError&&!u.isFetching&&Ie(i.options.useErrorBoundary,[u.error,i.getCurrentQuery()]))throw u.error}));const y={get(h,b){return b==="data"?o():Reflect.get(h,b)}};return new Proxy(u,y)}function yt(t,e,r){const[n,s]=k(F(t,e,r));return T(()=>{const i=F(t,e,r);s(i)}),De(n,Ce)}function pt(t,e,r){const[n,s]=k(le(t,e,r)),i=Re({context:n.context}),u=new ht(i,n),a=(c,f)=>{u.mutate(c,f).catch(bt)},[o,l]=k({...u.getCurrentResult(),mutate:a,mutateAsync:u.getCurrentResult().mutate});T(()=>{const c=le(t,e,r);s(c),u.setOptions(c)}),T(Pe(()=>o.status,()=>{if(o.isError&&Ie(u.options.useErrorBoundary,[o.error]))throw o.error}));const d=u.subscribe(c=>{l({...c,mutate:a,mutateAsync:c.mutate})});return X(d),o}function bt(){}function mt(t,e,r){const[n,s]=k(F(t,e,r));return T(()=>{const i=F(t,e,r);s(i)}),De(n,ft)}function gt(t){return t}function vt(t){return t.length===0?gt:t.length===1?t[0]:function(r){return t.reduce((n,s)=>s(n),r)}}function te(t){const e={subscribe(r){let n=null,s=!1,i=!1,u=!1;function a(){if(n===null){u=!0;return}i||(i=!0,typeof n=="function"?n():n&&n.unsubscribe())}return n=t({next(o){s||r.next?.(o)},error(o){s||(s=!0,r.error?.(o),a())},complete(){s||(s=!0,r.complete?.(),a())}}),u&&a(),{unsubscribe:a}},pipe(...r){return vt(r)(e)}};return e}function Rt(t){return e=>{let r=0,n=null;const s=[];function i(){n||(n=e.subscribe({next(a){for(const o of s)o.next?.(a)},error(a){for(const o of s)o.error?.(a)},complete(){for(const a of s)a.complete?.()}}))}function u(){if(r===0&&n){const a=n;n=null,a.unsubscribe()}}return{subscribe(a){return r++,s.push(a),i(),{unsubscribe(){r--,u();const o=s.findIndex(l=>l===a);o>-1&&s.splice(o,1)}}}}}}function Ot(t){return e=>({subscribe(r){return e.subscribe({next(n){t.next?.(n),r.next?.(n)},error(n){t.error?.(n),r.error?.(n)},complete(){t.complete?.(),r.complete?.()}})}})}class re extends Error{constructor(e){super(e),this.name="ObservableAbortError",Object.setPrototypeOf(this,re.prototype)}}function Pt(t){let e;return{promise:new Promise((n,s)=>{let i=!1;function u(){i||(i=!0,s(new re("This operation was aborted.")),a.unsubscribe())}const a=t.subscribe({next(o){i=!0,n(o),u()},error(o){i=!0,s(o),u()},complete(){i=!0,u()}});e=u}),abort:e}}class Q extends Error{static from(e,r={}){return e instanceof Error?e.name==="TRPCClientError"?e:new Q(e.message,{...r,cause:e,result:null}):new Q(e.error.message??"",{...r,cause:void 0,result:e})}constructor(e,r){const n=r?.cause;super(e,{cause:n}),this.meta=r?.meta,this.cause=n,this.shape=r?.result?.error,this.data=r?.result?.error.data,this.name="TRPCClientError",Object.setPrototypeOf(this,Q.prototype)}}function wt(t,e){if("error"in t){const n=e.transformer.deserialize(t.error);return{ok:!1,error:{...t,error:n}}}return{ok:!0,result:{...t.result,...(!t.result.type||t.result.type==="data")&&{type:"data",data:e.transformer.deserialize(t.result.data)}}}}function ye(t){return!!t&&!Array.isArray(t)&&typeof t=="object"}function xt(t,e){let r;try{r=wt(t,e)}catch{throw new Q("Unable to transform response from server")}if(!r.ok&&(!ye(r.error.error)||typeof r.error.error.code!="number"))throw new Q("Badly formatted response from server");if(r.ok&&!ye(r.result))throw new Q("Badly formatted response from server");return r}function Qt(t){return te(e=>{function r(s=0,i=t.op){const u=t.links[s];if(!u)throw new Error("No more links to execute - did you forget to add an ending link?");return u({op:i,next(o){return r(s+1,o)}})}return r().subscribe(e)})}const Te=()=>{};function Me(t,e){return new Proxy(Te,{get(n,s){if(!(typeof s!="string"||s==="then"))return Me(t,[...e,s])},apply(n,s,i){return t({args:i,path:e})}})}const ne=t=>Me(t,[]),se=t=>new Proxy(Te,{get(e,r){if(!(typeof r!="string"||r==="then"))return t(r)}});function Ae(){return typeof window<"u"?window:globalThis}function St(t){return t??Ae().AbortController??null}function Ct(t){if(t)return t;const e=Ae(),r=e.fetch;if(r)return typeof r.bind=="function"?r.bind(e):r;throw new Error("No fetch implementation found")}function It(t){const e=t.headers||(()=>({}));return{url:t.url,fetch:Ct(t.fetch),AbortController:St(t.AbortController),headers:typeof e=="function"?e:()=>e}}function Dt(t){const e={};for(let r=0;r<t.length;r++){const n=t[r];e[r]=n}return e}const Tt={query:"GET",mutation:"POST"};function Ee(t){return"input"in t?t.runtime.transformer.serialize(t.input):Dt(t.inputs.map(e=>t.runtime.transformer.serialize(e)))}function $e(t){let e=t.url+"/"+t.path;const r=[];if("inputs"in t&&r.push("batch=1"),t.type==="query"){const n=Ee(t);n!==void 0&&r.push(`input=${encodeURIComponent(JSON.stringify(n))}`)}return r.length&&(e+="?"+r.join("&")),e}function Mt(t){if(t.type==="query")return;const e=Ee(t);return e!==void 0?JSON.stringify(e):void 0}function At(t){const{type:e}=t,r=t.AbortController?new t.AbortController:null;return{promise:new Promise((i,u)=>{const a=$e(t),o=Mt(t),l={};Promise.resolve(t.headers()).then(d=>{if(e==="subscription")throw new Error("Subscriptions should use wsLink");return t.fetch(a,{method:Tt[e],signal:r?.signal,body:o,headers:{"content-type":"application/json",...d}})}).then(d=>(l.response=d,d.json())).then(d=>{i({json:d,meta:l})}).catch(u)}),cancel:()=>{r?.abort()}}}const L=()=>{throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")};function z(t){let e=null,r=null;const n=()=>{clearTimeout(r),r=null,e=null};function s(a){const o=[[]];let l=0;for(;;){const d=a[l];if(!d)break;const c=o[o.length-1];if(d.aborted){d.reject(new Error("Aborted")),l++;continue}if(t.validate(c.concat(d).map(y=>y.key))){c.push(d),l++;continue}if(c.length===0){d.reject(new Error("Input is too big for a single dispatch")),l++;continue}o.push([])}return o}function i(){const a=s(e);n();for(const o of a){if(!o.length)continue;const l={items:o,cancel:L};for(const f of o)f.batch=l;const{promise:d,cancel:c}=t.fetch(l.items.map(f=>f.key));l.cancel=c,d.then(f=>{for(let y=0;y<f.length;y++){const h=f[y],b=l.items[y];b.resolve(h),b.batch=null}}).catch(f=>{for(const y of l.items)y.reject(f),y.batch=null})}}function u(a){const o={aborted:!1,key:a,batch:null,resolve:L,reject:L},l=new Promise((c,f)=>{o.reject=f,o.resolve=c,e||(e=[]),e.push(o)});return r||(r=setTimeout(i)),{promise:l,cancel:()=>{o.aborted=!0,o.batch?.items.every(c=>c.aborted)&&(o.batch.cancel(),o.batch=null)}}}return{load:u}}function Et(t){const e=It(t);return r=>{const n=t.maxURLLength||1/0,s=l=>({validate:f=>{if(n===1/0)return!0;const y=f.map(g=>g.path).join(","),h=f.map(g=>g.input);return $e({...e,runtime:r,type:l,path:y,inputs:h}).length<=n},fetch:f=>{const y=f.map(R=>R.path).join(","),h=f.map(R=>R.input),{promise:b,cancel:g}=At({...e,runtime:r,type:l,path:y,inputs:h});return{promise:b.then(R=>(Array.isArray(R.json)?R.json:f.map(()=>R.json)).map(v=>({meta:R.meta,json:v}))),cancel:g}}}),i=z(s("query")),u=z(s("mutation")),a=z(s("subscription")),o={query:i,subscription:a,mutation:u};return({op:l})=>te(d=>{const c=o[l.type],{promise:f,cancel:y}=c.load(l);return f.then(h=>{const b=xt(h.json,r);if(!b.ok){d.error(Q.from(b.error,{meta:h.meta}));return}d.next({context:h.meta,result:b.result}),d.complete()}).catch(h=>d.error(Q.from(h))),()=>{y()}})}}const $t={query:["72e3ff","3fb0d8"],mutation:["c5a3fc","904dfc"],subscription:["ff49e1","d83fbe"]},qt=(t=console)=>e=>{const{direction:r,input:n,type:s,path:i,context:u,id:a}=e,[o,l]=$t[s],d=`
    background-color: #${r==="up"?o:l}; 
    color: ${r==="up"?"black":"white"};
    padding: 2px;
  `,c=["%c",r==="up"?">>":"<<",s,`#${a}`,`%c${i}%c`,"%O"],f=[d,`${d}; font-weight: bold;`,`${d}; font-weight: normal;`];e.direction==="up"?f.push({input:n,context:u}):f.push({input:n,result:e.result,elapsedMs:e.elapsedMs,context:u});const y=e.direction==="down"&&e.result&&(e.result instanceof Error||"error"in e.result.result)?"error":"log";t[y].apply(null,[c.join(" ")].concat(f))};function kt(t={}){const{enabled:e=()=>!0}=t,{logger:r=qt(t.console)}=t;return()=>({op:n,next:s})=>te(i=>{e({...n,direction:"up"})&&r({...n,direction:"up"});const u=Date.now();function a(o){const l=Date.now()-u;e({...n,direction:"down",result:o})&&r({...n,direction:"down",elapsedMs:l,result:o})}return s(n).pipe(Ot({next(o){a(o)},error(o){a(o)}})).subscribe(i)})}class qe{$request({type:e,input:r,path:n,context:s={}}){return Qt({links:this.links,op:{id:++this.requestId,type:e,path:n,input:r,context:s}}).pipe(Rt())}requestAsPromise(e){const r=this.$request(e),{promise:n,abort:s}=Pt(r);return new Promise((u,a)=>{e.signal?.addEventListener("abort",s),n.then(o=>{u(o.result.data)}).catch(o=>{a(Q.from(o))})})}query(e,r,n){return this.requestAsPromise({type:"query",path:e,input:r,context:n?.context,signal:n?.signal})}mutation(e,r,n){return this.requestAsPromise({type:"mutation",path:e,input:r,context:n?.context,signal:n?.signal})}subscription(e,r,n){return this.$request({type:"subscription",path:e,input:r,context:n?.context}).subscribe({next(i){i.result.type==="started"?n.onStarted?.():i.result.type==="stopped"?n.onStopped?.():n.onData?.(i.result.data)},error(i){n.onError?.(i)},complete(){n.onComplete?.()}})}constructor(e){this.requestId=0;function r(){const n=e.transformer;return n?"input"in n?{serialize:n.input.serialize,deserialize:n.output.deserialize}:n:{serialize:s=>s,deserialize:s=>s}}this.runtime={transformer:r()},this.links=e.links.map(n=>n(this.runtime))}}function jt(t){return new qe(t)}const Ut={query:"query",mutate:"mutation",subscribe:"subscription"};function _t(t){return se(e=>t.hasOwnProperty(e)?t[e]:ne(({path:r,args:n})=>{const s=[e,...r],i=s.pop(),u=Ut[i],a=s.join(".");return t[u](a,...n)}))}function Ft(t){const e=new qe(t);return _t(e)}function V(t,e){return e===void 0?[t]:[t,e]}function Nt(t,e){return ne(r=>{const n=r.args,s=[t,...r.path],i=s.pop(),u=s.join(".");return i==="useMutation"?e[i](u,...n):e[i](()=>V(u,typeof n[0]=="function"?n[0]():n[0]),n[1])})}const Kt=["client","ssrContext","ssrState","abortOnUnmount"],Lt=He(null);function zt(t){return se(e=>{const r=e;return Kt.includes(r)?t[r]:ne(({path:n,args:s})=>{const i=[e,...n],u=i.pop(),a=i.join("."),o=y=>{if(["setData","setInfiniteData"].includes(y)){const[R,m,...p]=s;return{queryKey:V(a,m),updater:R,rest:p}}const[h,...b]=s;return{queryKey:V(a,h),rest:b}},{queryKey:l,rest:d,updater:c}=o(u);return{fetch:()=>t.fetchQuery(l,...d),fetchInfinite:()=>t.fetchInfiniteQuery(l,...d),prefetch:()=>t.prefetchQuery(l,...d),prefetchInfinite:()=>t.prefetchInfiniteQuery(l,...d),invalidate:()=>t.invalidateQueries(l,...d),refetch:()=>t.refetchQueries(l,...d),cancel:()=>t.cancelQuery(l,...d),setData:()=>t.setQueryData(l,c,...d),setInfiniteData:()=>t.setInfiniteQueryData(l,c,...d),getData:()=>t.getQueryData(l),getInfiniteData:()=>t.getInfiniteQueryData(l)}[u]()})})}function P(t){const e=Array.isArray(t)?t:[t],[r,...n]=e;return[typeof r!="string"||r===""?[]:r.split("."),...n]}function I(t,e){const[r,n]=t;return[r,n,e?.trpc]}function Bt(t){const e=t?.context??Lt,r=c=>jt(c),n=c=>{const{abortOnUnmount:f=!1,client:y,queryClient:h,ssrContext:b}=c,[g,R]=M(c.ssrState??!1);return Oe(()=>{R(m=>m?"mounted":!1)}),$(e.Provider,{value:{abortOnUnmount:f,queryClient:h,client:y,ssrContext:b||null,ssrState:g,fetchQuery:(m,p)=>h.fetchQuery(P(m),()=>y.query(...I(m,p)),p),fetchInfiniteQuery:(m,p)=>h.fetchInfiniteQuery(P(m),({pageParam:v})=>{const[S,O]=m,C={...O,cursor:v};return y.query(...I([S,C],p))},p),prefetchQuery:(m,p)=>h.prefetchQuery(P(m),()=>y.query(...I(m,p)),p),prefetchInfiniteQuery:(m,p)=>h.prefetchInfiniteQuery(P(m),({pageParam:v})=>{const[S,O]=m,C={...O,cursor:v};return y.query(...I([S,C],p))},p),invalidateQueries:(...m)=>{const[p,...v]=m;return h.invalidateQueries(P(p),...v)},refetchQueries:(...m)=>{const[p,...v]=m;return h.refetchQueries(P(p),...v)},cancelQuery:m=>h.cancelQueries(P(m)),setQueryData:(...m)=>{const[p,...v]=m;return h.setQueryData(P(p),...v)},getQueryData:(...m)=>{const[p,...v]=m;return h.getQueryData(P(p),...v)},setInfiniteQueryData:(...m)=>{const[p,...v]=m;return h.setQueryData(P(p),...v)},getInfiniteQueryData:(...m)=>{const[p,...v]=m;return h.getQueryData(P(p),...v)}},get children(){return $(Je,We({client:h},()=>c.queryClientOpts??{},{get children(){return c.children}}))}})};function s(){return Ge(e)}function i(c,f){const{queryClient:y,ssrState:h}=s();return h()&&h()!=="mounted"&&y.getQueryCache().find(P(c))?.state.status==="error"?{retryOnMount:!1,...f}:f}function u(c,f){const y=s();typeof window>"u"&&y.ssrState()==="prepass"&&f?.trpc?.ssr!==!1&&f?.enabled!==!1&&!y.queryClient.getQueryCache().find(P(c()))&&y.prefetchQuery(c(),f);const h=()=>f?.trpc?.abortOnUnmount??y?.abortOnUnmount??!1;return yt(()=>P(c()),b=>{const g=()=>({...f,trpc:{...f?.trpc,...h()?{signal:b.signal}:{}}});return y.client.query(...I(c(),g()))},f)}function a(c,f){const y=s();return pt(h=>{const b=Array.isArray(c)?c[0]:c;return y.client.mutation(...I([b,h],f))},f)}function o(c,f){const y=s();return Ve(()=>{if(!(f.enabled??!0))return;Xe(c());let h=!1;const b=y.client.subscription(c()[0],c()[1]??void 0,{onStarted:()=>{h||f?.onStarted?.()},onData:g=>{h||f?.onData(g)},onError:g=>{h||f?.onError?.(g)}});X(()=>{h=!0,b.unsubscribe()})})}function l(c,f){const y=s();typeof window>"u"&&y.ssrState()==="prepass"&&f?.trpc?.ssr!==!1&&f?.enabled!==!1&&!y.queryClient.getQueryCache().find(P(c()))&&y.prefetchInfiniteQuery(c,f);const h=i(c(),f),b=f?.trpc?.abortOnUnmount??y?.abortOnUnmount??!1;return mt(()=>P(c()),g=>{const R=()=>({...h,trpc:{...h?.trpc,...b?{signal:g.signal}:{}}}),m={...c()[1]??{},cursor:g.pageParam};return y.client.query(...I([c()[0],m],R()))},h)}return{Provider:n,createClient:r,useContext:s,useQuery:u,useMutation:a,useSubscription:o,useDehydratedState:(c,f)=>Ye(()=>f&&c.runtime.transformer.deserialize(f)),useInfiniteQuery:l}}function Ht(t){return se(e=>e==="useContext"?()=>{const r=t.useContext();return zt(r)}:e in t?t[e]:Nt(e,t))}function Jt(t){const e=Bt(t);return Ht(e)}new Ze;Jt({});const Wt=Ft({links:[kt(),Et({url:"/api/trpc"})]});const Gt=Y('<div class="back-button-issue" data-testid="goto-Index"> <span> back to menu </span></div>'),Vt=Y('<form><div class="container"><div class="issue-writer"><h1 class="page-title"> Add issue </h1><label class="titles"> Title </label><input class="issue-input" type="text" placeholder="Title" data-testid="issue-title-writer"><label class="titles"> Description </label><textarea class="issue-input textarea" placeholder="Description" data-testid="issue-description-writer"></textarea><button class="issue-button" type="button" data-testid="submit-button"> Submit </button></div><div class="tag-container"><label> select a tag</label><!#><!/><div class="selected-container"><label> selected tag</label><div class="tags-list tags"></div></div></div></div></form>'),Xt=Y("<div> <!#><!/> </div>");M([]);const[pe,Yt]=M(""),[be,Zt]=M("");function er(){const[t,e]=M(new Array),r={Selected:t,setSelected:e},n=["feature","rnd","bugs"],s=async i=>{i.preventDefault(),await Wt.createPost.mutate({title:pe(),content:be(),published:!0,authorEmail:"defaut@gmail.com"}).then(u=>{console.log(u)}),console.log("submitting issue",pe(),be())};return[$(et,{href:"/",get children(){return N(Gt)}}),(()=>{const i=N(Vt),u=i.firstChild,a=u.firstChild,o=a.firstChild,l=o.nextSibling,d=l.nextSibling,c=d.nextSibling,f=c.nextSibling,y=f.nextSibling,h=a.nextSibling,b=h.firstChild,g=b.nextSibling,[R,m]=fe(g.nextSibling),p=R.nextSibling,v=p.firstChild,S=v.nextSibling;return d.$$input=O=>Yt(O.target.value),f.$$input=O=>Zt(O.target.value),y.$$click=O=>s(O),K(h,$(Tags,{tags:r,tagNames:n}),R,m),K(S,$(rt,{get each(){return t()},children:O=>(()=>{const C=N(Xt),w=C.firstChild,A=w.nextSibling,[j,ke]=fe(A.nextSibling);return j.nextSibling,tt(C,"tag-element "+O),K(C,O,j,ke),C})()})),nt(),i})()]}st(["input","click"]);const rr=Object.freeze(Object.defineProperty({__proto__:null,default:er},Symbol.toStringTag,{value:"Module"}));export{rr as _,k as c};
