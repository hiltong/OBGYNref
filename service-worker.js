var CURRENT_CACHE = '2021-02-09-2100';

// INSTALL
self.addEventListener('install', (event) => {
  // if(!('caches' in self)) return;
  if (!'caches' in self) {
    alert('This browser does not support service worker caching!');
    return;
  }
  event.waitUntil(
    caches.open(CURRENT_CACHE).then(function (cache) {
      return cache.addAll([
        'manifest.json',
        'script.js',
        'script-aux.js',
        'css/w3.css',
        'css/hg.css',
        'index.html',
        'ob_glossary.html',
        'gyn_glossary.html'
        // etc
      ]).then(() => { return self.skipWaiting() }
      );
    })
  );
});

// ACYIVATE
// Replace cache
self.addEventListener('activate', (event) => {
  // let CURRENT_CACHE = 'version2'; 
  event.waitUntil(
    caches.keys().then((cacheKeys) => {
      return Promise.all(
        cacheKeys.map((cacheKey) => {
          if (cacheKey !== CURRENT_CACHE) {
            console.log('Deleting cache: ' + cacheKey);
            return caches.delete(cacheKey);
          }
        })
      )
    })
  );
});




// FETCH

//  Fetch from network if not in catch
/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});*/


// Fetch from network if not in cach and add to cache *****
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CURRENT_CACHE).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
}); 

  // stale-while-revalidate
  /* self.addEventListener('fetch', (event) => {
    const version = 'v1';
    event.respondWith(
     caches.open(version).then(cache => {
        return cache.match(event.request).then((response) => {
          let fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          event.waitUntil(fetchPromise);
          return response;
        })
      })
    );
  }); */



  // stale-while-revalidate (https://developers.google.com/web/tools/workbox/)   ****
    // self.addEventListener('fetch', (event) => {
    //   event.respondWith(
    //     caches.open(CURRENT_CACHE).then(cache => {
    //       return cache.match(event.request).then(cacheResponse => {
    //         const fetchPromise = fetch(event.request).then(networkResponse => {
    //           cache.put(event.request, networkResponse.clone());
    //           return networkResponse;
    //         })
    //         return cacheResponse || fetchPromise;
    //       });
    //     })
    //   );
    // });
    

    