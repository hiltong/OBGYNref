(() => {
  if ('serviceWorker' in navigator) {
    alert('sw');
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
      console.log(registration);
    }, function(err) {
        console.log(err);
      });
    });
  } else {
    alert('No service worker support in this browser');
  }
})();

