var staticCacheName = 'interactive-office-assistant';
var staticCacheAssets = [
    '/',
    '/index.html',
    '/Styles/querries.css',
    '/Styles/style.css',
    '/JS files/index.js',
    '/JS files/form-submit.js',
    '/JS files/img-roll-sound.js',
    '/JS files/modal-add-activity.js',
    '/JS files/nav-sound.js',
    '/JS files/slider.js',
    '/JS files/speech-recognition.js',
    '/JS files/weekly-stats.js',
    '/JS files/your-activities.js',
    '/media/images/diana.jpg',
    '/media/images/nick.jpeg',
    '/media/images/smoto.jpeg',
    '/media/images/header-background.jpg',
    '/media/images/logo.png',
    '/media/sounds/clicksound.mp3',
    '/media/sounds/clicksound.mp3',
    '/media/sounds/dropSound.mp3',
    '/media/sounds/imgRollSound.mp3',
    '/media/videos/sample_contact_us.mp4',
    '/media/videos/sample_woman_office.mp4'
]

self.addEventListener('install', function (e) { 
  console.log('Inside the install handler:', e);
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
        console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(staticCacheAssets);
    })
  );
}); 

self.addEventListener('activate', (e) => {
  console.log('Inside the activate handler:', e);
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== staticCacheName) {
          return caches.delete(key);
        }
      })).then(() => skipWaiting());
    })
  );
});
    
self.addEventListener('fetch', (e) => {
  console.log('Inside the fetch handler:', e);
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(staticCacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

  
