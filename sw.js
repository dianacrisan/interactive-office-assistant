var staticCacheName = 'office-assistant';

self.addEventListener("install", function (e) { 
    e.waitUntil( 
      caches.open(staticCacheName).then(function (cache) { 
        return cache.addAll([
          './JS files/form-submit.js',
          './JS files/img-roll-sound.js',
          './JS files/index.js',
          './JS files/modal-add-activity.js',
          './JS files/nav-sound.js',
          './JS files/slider.js',
          './JS files/speech-recognition.js',
          './JS files/weekly-stats.js',
          './JS files/your-activities.js',
          './media/images/diana.jpg',
          './media/images/nick.jpeg',
          './media/images/smoto.jpeg',
          './media/images/header-background.jpg',
          './media/images/logo.png',
          './media/sounds/clicksound.mp3',
          './JS filesmedia/sounds/clicksound.mp3',
          './media/sounds/dropSound.mp3',
          './media/sounds/imgRollSound.mp3',
          './media/videos/sample_contact_us.mp4',
          './media/videos/sample_woman_office.mp4',
          './Styles/querries.css',
          './Styles/style.css',
          './index.html'
        ]); 
      }) 
    ); 
  }); 
    
  self.addEventListener("fetch", function (event) { 
    console.log(event.request.url); 
    
    event.respondWith( 
      caches.match(event.request).then(function (response) { 
        return response || fetch(event.request); 
      }) 
    ); 
  }); 