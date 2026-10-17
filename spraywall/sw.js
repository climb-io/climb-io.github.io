// Spray Wall 已搬到 https://climbio.web.app/spraywall/。
// 舊網址加到主畫面的 App 會來更新這個檔案：換上之後移除自己、清掉快取，再把開著的頁面轉到新網址（分享連結的 ?s= 一起帶過去）。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) {
    const u = new URL(c.url);
    c.navigate('https://climbio.web.app/spraywall/' + u.search + u.hash);
  }
})()));
