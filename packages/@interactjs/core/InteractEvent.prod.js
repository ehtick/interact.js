/* interact.js 1.10.27 | https://raw.github.com/taye/interact.js/main/LICENSE */

import extend from"../utils/extend.prod.js";import getOriginXY from"../utils/getOriginXY.prod.js";import hypot from"../utils/hypot.prod.js";import{BaseEvent}from"./BaseEvent.prod.js";import{defaults}from"./options.prod.js";class InteractEvent extends BaseEvent{constructor(t,e,i,s,o,r,n){super(t),this.relatedTarget=null,this.screenX=void 0,this.screenY=void 0,this.button=void 0,this.buttons=void 0,this.ctrlKey=void 0,this.shiftKey=void 0,this.altKey=void 0,this.metaKey=void 0,this.page=void 0,this.client=void 0,this.delta=void 0,this.rect=void 0,this.x0=void 0,this.y0=void 0,this.t0=void 0,this.dt=void 0,this.duration=void 0,this.clientX0=void 0,this.clientY0=void 0,this.velocity=void 0,this.speed=void 0,this.swipe=void 0,this.axes=void 0,this.preEnd=void 0,o=o||t.element;const h=t.interactable,a=(h&&h.options||defaults).deltaSource,p=getOriginXY(h,o,i),d="start"===s,l="end"===s,c=d?this:t.prevEvent,v=d?t.coords.start:l?{page:c.page,client:c.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;this.page=extend({},v.page),this.client=extend({},v.client),this.rect=extend({},t.rect),this.timeStamp=v.timeStamp,l||(this.page.x-=p.x,this.page.y-=p.y,this.client.x-=p.x,this.client.y-=p.y),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.buttons=e.buttons,this.target=o,this.currentTarget=o,this.preEnd=r,this.type=n||i+(s||""),this.interactable=h,this.t0=d?t.pointers[t.pointers.length-1].downTime:c.t0,this.x0=t.coords.start.page.x-p.x,this.y0=t.coords.start.page.y-p.y,this.clientX0=t.coords.start.client.x-p.x,this.clientY0=t.coords.start.client.y-p.y,this.delta=d||l?{x:0,y:0}:{x:this[a].x-c[a].x,y:this[a].y-c[a].y},this.dt=t.coords.delta.timeStamp,this.duration=this.timeStamp-this.t0,this.velocity=extend({},t.coords.velocity[a]),this.speed=hypot(this.velocity.x,this.velocity.y),this.swipe=l||"inertiastart"===s?this.getSwipe():null}getSwipe(){const t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;let e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);const i=112.5<=e&&e<247.5,s=202.5<=e&&e<337.5;return{up:s,down:!s&&22.5<=e&&e<157.5,left:i,right:!i&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}preventDefault(){}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}stopPropagation(){this.propagationStopped=!0}}Object.defineProperties(InteractEvent.prototype,{pageX:{get(){return this.page.x},set(t){this.page.x=t}},pageY:{get(){return this.page.y},set(t){this.page.y=t}},clientX:{get(){return this.client.x},set(t){this.client.x=t}},clientY:{get(){return this.client.y},set(t){this.client.y=t}},dx:{get(){return this.delta.x},set(t){this.delta.x=t}},dy:{get(){return this.delta.y},set(t){this.delta.y=t}},velocityX:{get(){return this.velocity.x},set(t){this.velocity.x=t}},velocityY:{get(){return this.velocity.y},set(t){this.velocity.y=t}}});export{InteractEvent};
//# sourceMappingURL=InteractEvent.prod.js.map