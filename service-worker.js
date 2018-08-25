/*self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('updated service worker installed', event);
  });*/

  
  self.addEventListener('install', (event) => {

    event.waitUntil(
  
      caches.open('version1').then((cache) => {
  
        return cache.addAll(
  
          [
  
            '/pirates.html',
  
            '/styles/pirates.css',
  
            '/styles/pirate.ttf',
  
            '/images/i-love-pirates.jpg'
  
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

