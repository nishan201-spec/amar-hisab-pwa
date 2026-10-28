const CACHE_NAME = 'amar-hisab-v1';
const ASSETS = ['./','./index.html','./style.css','./script.js','./manifest.json','./icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('amar-hisab-') && key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  const req=event.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==self.location.origin) return;
  if(req.mode==='navigate'){event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));}return res;}).catch(()=>caches.match('./index.html')));return;}
  event.respondWith(caches.match(req).then(cached=>{if(cached)return cached;return fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}return res;});}));
});
