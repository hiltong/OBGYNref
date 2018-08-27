self.addEventListener('install', event => {
    if(!('caches' in self)) return;
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
            'index_ob.html',
            'index_gyn.html'
          // etc
        ]).then(() =>{return self.skipWaiting()}
        );
      })
    );
  });


  /*self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });*/

 /* self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
    );
  });*/


