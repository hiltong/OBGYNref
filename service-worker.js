/*self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('updated service worker installed', event);
  });*/

  
/*var cacheName = 'app-shell-cache-v1';
var filesToCache = ['/', '/index_ob.html'];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
        return cache.addAll(filesToCache);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});*/

/*self.addEventListener('install', (event) => {

    event.waitUntil(
  
      caches.open('version1').then((cache) => {
  
        return cache.addAll(
  
          [
  
            'OBGYNref/index_gyn.html'
  
          ]);
  
      })
  
    );
  
  });*/

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('mysite-static-v3').then(function(cache) {
        return cache.addAll([
          
          'index_gyn.html'
          // etc
        ]);
      })
    );
  });


  /*self.addEventListener('activate', (event) => {
    console.log('updated service worker activated', event);
  });*/

  /*self.addEventListener('fetch', (event) => {
    event.respondWith(new Response('arrrgh!'));
  });*/

