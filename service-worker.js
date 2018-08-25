self.addEventListener('install', (event) => {
    self.skipwaiting();
    console.log('updated service worker installed', event);
});

self.addEventListener('activate', (event) => {
  console.log('service worker activated', event);
});
