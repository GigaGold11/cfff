import{_ as d,s as u,a as t,p as e,l as c,D as a,b as m,g as p}from"./index.30d4f562.js";import"./vue.6b76ad05.js";import{b2 as T}from"./@vue.6f8187b0.js";/* empty css                    */import"./lz-string.bfbf8ec3.js";import"./nanoevents.1080beb7.js";import"./unofficial-galaxy-sdk.21372393.js";import"./vue-textarea-autosize.35804eaf.js";import"./vuedraggable.01d33fa6.js";import"./sortablejs.b7523a7f.js";import"./vue-next-select.98ca9525.js";import"./vue-toastification.5c48360d.js";let n=null,f=null;function o(){const l=Date.now();let i=(l-e.time)/1e3;e.time=l;const r=i;if(t.lastTenTicks.push(r),t.lastTenTicks.length>10&&(t.lastTenTicks=t.lastTenTicks.slice(1)),!((f==null?void 0:f.value)&&!e.keepGoing)&&!t.hasNaN&&(i=Math.max(i,0),e.devSpeed!==0)){if(c.value=!1,e.offlineTime!=null){if(a.gt(e.offlineTime,m.offlineLimit*3600)&&(e.offlineTime=m.offlineLimit*3600),a.gt(e.offlineTime,0)&&e.devSpeed!==0){const s=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-s,i+=s}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||a.lt(e.offlineTime,0))&&(e.offlineTime=null)}i=Math.min(i,m.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),!a.eq(i,0)&&(e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308),p.emit("update",i,r),u.unthrottled?(requestAnimationFrame(o),n!=null&&(clearInterval(n),n=null)):n==null&&(n=setInterval(o,50)))}}async function L(){f=(await d(()=>import("./index.30d4f562.js").then(function(l){return l.c}),["assets/index.30d4f562.js","assets/index.5328e899.css","assets/@fontsource.f66d05e7.css","assets/vue.6b76ad05.js","assets/lz-string.bfbf8ec3.js","assets/@vue.6f8187b0.js","assets/nanoevents.1080beb7.js","assets/unofficial-galaxy-sdk.21372393.js","assets/vue-textarea-autosize.35804eaf.js","assets/vuedraggable.01d33fa6.js","assets/sortablejs.b7523a7f.js","assets/vue-next-select.98ca9525.js","assets/vue-next-select.9e6f4164.css","assets/vue-toastification.5c48360d.js","assets/vue-toastification.4b5f8ac8.css"])).hasWon,T(f,l=>{l&&p.emit("gameWon")}),u.unthrottled?requestAnimationFrame(o):n=setInterval(o,50)}setInterval(()=>{t.mouseActivity=[...t.mouseActivity.slice(-7),!1]},1e3*60*60);export{L as startGameLoop};
