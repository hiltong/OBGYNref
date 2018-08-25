self.addEventListener('install', (event) => {
    if (!('caches' in self)) return;
    event.waitUntil(
      caches.open('version1').then((cache) => {
        return cache.addAll(
          [
            '/index_ob.html',
            '/index_gyn.html'
          ]);
      })
    );
  });

/*self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('updated service worker installed', event);
  });*/
  
  /*self.addEventListener('activate', (event) => {
    console.log('updated service worker activated', event);
  });*/

  /*self.addEventListener('fetch', (event) => {
    event.respondWith(new Response('arrrgh!'));
  });*/

