/* interact.js 1.10.27 | https://raw.github.com/taye/interact.js/main/LICENSE */

import*as arr from"../utils/arr.prod.js";import{copyAction}from"../utils/misc.prod.js";import*as pointerUtils from"../utils/pointerUtils.prod.js";import{tlbrToXywh}from"../utils/rect.prod.js";function install(e){const{Interactable:t}=e;e.actions.phases.reflow=!0,t.prototype.reflow=function(t){return doReflow(this,t,e)}}function doReflow(e,t,o){const r=e.getAllElements(),n=o.window.Promise,i=n?[]:null;for(const s of r){const r=e.getRect(s);if(!r)break;const l=arr.find(o.interactions.list,(o=>o.interacting()&&o.interactable===e&&o.element===s&&o.prepared.name===t.name));let a;if(l)l.move(),i&&(a=l._reflowPromise||new n((e=>{l._reflowResolve=e})));else{const n=tlbrToXywh(r),i={page:{x:n.x,y:n.y},client:{x:n.x,y:n.y},timeStamp:o.now()},l=pointerUtils.coordsToEvent(i);a=startReflow(o,e,s,t,l)}i&&i.push(a)}return i&&n.all(i).then((()=>e))}function startReflow(e,t,o,r,n){const i=e.interactions.new({pointerType:"reflow"}),s={interaction:i,event:n,pointer:n,eventTarget:o,phase:"reflow"};i.interactable=t,i.element=o,i.prevEvent=n,i.updatePointer(n,n,o,!0),pointerUtils.setZeroCoords(i.coords.delta),copyAction(i.prepared,r),i._doPhase(s);const{Promise:l}=e.window,a=l?new l((e=>{i._reflowResolve=e})):void 0;return i._reflowPromise=a,i.start(r,t,o),i._interacting?(i.move(s),i.end(n)):(i.stop(),i._reflowResolve()),i.removePointer(n,n),a}const reflow={id:"reflow",install:install,listeners:{"interactions:stop"(e,t){let{interaction:o}=e;"reflow"===o.pointerType&&(o._reflowResolve&&o._reflowResolve(),arr.remove(t.interactions.list,o))}}};export{reflow as default};
//# sourceMappingURL=plugin.prod.js.map
