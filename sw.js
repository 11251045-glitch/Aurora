self.addEventListener('install', (e) => {
  console.log('Service Worker: 已安裝');
});

self.addEventListener('fetch', (e) => {
  // 這裡未來可以做離線瀏覽功能
});
