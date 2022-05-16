'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/fonts/iransans/IRANSansMobile(FaNum).ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Black.ttf": "b5e9092bc82a7b48d4a19fa6eb82bd6d",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Light.ttf": "3d18be052a4de0da6d0f2aaef74bbae5",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Medium.ttf": "c37aafe885d7245042a5731e96a2acd2",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_UltraLight.ttf": "35b822df0e8d7af2f66c3f3c9c4940f0",
"assets/asset/images/announcement/trash_bucket_icon.svg": "3135d0472e5e7ccf407976d8b3ef915c",
"assets/asset/images/authentication/auth.svg": "663e31ec0f2cee23f60e973599a91a9c",
"assets/asset/images/authentication/Authentication_Vector.svg": "ab61078bdde6661ca7be129bbcee8705",
"assets/asset/images/authentication/Code_SMS_Vector.svg": "f4f72a471a3d74309d00877b9babfc68",
"assets/asset/images/authentication/dark_theme.svg": "3e8bf81146857d56931c88de27d11229",
"assets/asset/images/authentication/Light_Template_Vector.svg": "d1a62743296cdcd8fa5b21fefd2b6037",
"assets/asset/images/authentication/light_theme.svg": "1d8fc4a3038fe6b028d649176d81f3e2",
"assets/asset/images/authentication/password.svg": "58360d1fc39a89af1b193ae60019fc31",
"assets/asset/images/authentication/sensor_authentication.svg": "40e5f575c2088a204de5e3c604e01a85",
"assets/asset/images/authentication/Welcom_Vector.svg": "91417aa4631f77bc824e1f654b51b770",
"assets/asset/images/bill/logos/car_fine.svg": "50220946536e8fd1ce6076e90479fdb3",
"assets/asset/images/car/iran_plate.svg": "433640a80dc23323a05925ac038d292b",
"assets/asset/images/car/plate_logo.svg": "b3ee5bd27a3efb16159c332d178ddd69",
"assets/asset/images/card_to_card/leftbanner.svg": "d2a5fd559a08ab5cacb32aa6317d5f7d",
"assets/asset/images/card_to_card/receipt.svg": "5719b9da78b03213dc85d757db2d9230",
"assets/asset/images/card_to_card/receipt_d.svg": "008cccb3d7129205161d9b55dc1e6969",
"assets/asset/images/card_to_card/rightbanner.svg": "33f4636d91bc394206cb86faad1d58a2",
"assets/asset/images/home/Advertise_Vector.png": "938c5dbfa81fc2cfc4647563aed12277",
"assets/asset/images/home/bazarMaliSarmaie.svg": "2abfbb1fbf0459cec1be9e663f5cb4e7",
"assets/asset/images/home/Bill_Vector_dark.svg": "175bb097d600e19fa6b5a98f542249ee",
"assets/asset/images/home/Bill_Vector_light.svg": "7208adc885b248d36af452b2e37a169f",
"assets/asset/images/home/hgb_title.svg": "af2c7d0a5abe69812f9d0e22817e5a32",
"assets/asset/images/home/khadamate%2520khodro.svg": "c6a0d40258ca3e430837c36d4ae4166d",
"assets/asset/images/home/wallet_to_wallet_dark.svg": "1a644076a3d6c22999e6364cd1eafeb6",
"assets/asset/images/home/wallet_to_wallet_light.svg": "51abf6fe35fb4fe6c10464da20c79550",
"assets/asset/images/icons/code_processor_dark.svg": "053d6b922a700c8d182915f15c993708",
"assets/asset/images/icons/code_processor_light.svg": "50e86bf6df541a033a81b19bf716a883",
"assets/asset/images/icons/destination_to_card__vector_dark.svg": "047823c7df2c83ca2cecae31d0fc67ea",
"assets/asset/images/icons/destination_to_card__vector_light.svg": "5a47c357537292e1b7abf51fd056cd50",
"assets/asset/images/icons/keyboard.svg": "e2d31ee4622ee31b51bad4b3368740f8",
"assets/asset/images/icons/more.svg": "f80ef1a40242528b2d2c8965ddb1a4f3",
"assets/asset/images/icons/numberKeyboard.svg": "9b54991defba593bdf364c93b5dac811",
"assets/asset/images/icons/origin_card_vector_dark.svg": "062afff7b9f190439f708bd4439db5bc",
"assets/asset/images/icons/origin_card_vector_light.svg": "fffc415355fabee8ef33ef9be5d9dc66",
"assets/asset/images/icons/Search_Icon_dark.svg": "dc0749e3ff2b9104f46ca219b4c238b5",
"assets/asset/images/icons/Search_Icon_light.svg": "19744665d40b0ff97c4e6b9dc419cc81",
"assets/asset/images/icons/support_dark.svg": "a38d9e687132818fc80a3be1296f1868",
"assets/asset/images/icons/support_light.svg": "21aec5f72e0c297ba59fcae16b1cf178",
"assets/asset/images/icons/tick_icon.svg": "aba547dc0e3fb91bc828a9c72edabc17",
"assets/asset/images/icons/transaction_down.svg": "da0fc90220489aac44b0928773a680ac",
"assets/asset/images/icons/transaction_up.svg": "7ae250baeb3f129b4a4fd406c682430b",
"assets/asset/images/icons/update_icon.svg": "0ce228322d8901304ff4f68b3465149b",
"assets/asset/images/icons/warning_icon.svg": "a9a8068d3bed3062a93e14604e44af78",
"assets/asset/images/internet_package/sim_card_dark.svg": "2b07927b9e51be60c7084acf0668a7a1",
"assets/asset/images/internet_package/sim_card_light.svg": "9164c0004c540f3233305228e62485b6",
"assets/asset/images/logos/aparat_logo.png": "8e614988a130e8192727311e76a0d894",
"assets/asset/images/logos/centerbank_dark.svg": "e9129d1ceb3508a81b35add9dc667795",
"assets/asset/images/logos/centerbank_light.svg": "e516ec36026923bbbfbac00d99003dea",
"assets/asset/images/logos/igap_logo.png": "66e9c9402bc5184a9af574b1d4d3004d",
"assets/asset/images/logos/instagram_logo.png": "7f0814866e14a35357634676c927c10b",
"assets/asset/images/logos/notification_icon.png": "c424c8754f69637dd630cf542b164f6e",
"assets/asset/images/logos/shaparak_logo_dark.svg": "90b1ee23bab78ac687c85ee353d983e2",
"assets/asset/images/logos/shaparak_logo_light.svg": "e425f3763dca7ef08b6db853b8d815b4",
"assets/asset/images/logos/telegram_logo.png": "df56fc31b68b9fd15bc9d9bc2b6eb8b8",
"assets/asset/images/logos/top_logo.svg": "e82dbcdce109a376884070e3230cc206",
"assets/asset/images/logos/top_logo_type.svg": "539b71e4b1338a6b74593ead9f3683a4",
"assets/asset/images/mobile_bank/shetab_icon.svg": "75836e11424b69e52ce75424655a33e2",
"assets/asset/images/operator_mobile/logos/mtn.png": "19d3b0ca7037855bb40baa11d796cbb1",
"assets/asset/images/operator_mobile/logos/rightel.png": "9ba509ef26bfc5959b7160c9c5c2961f",
"assets/asset/images/parsi_card/parsi_card_turn_over_icon.svg": "a9fa0f68cc92f2a7bf66a259b491c7e3",
"assets/asset/images/transactions/save_image_icon.svg": "f0add2f45dcf6d91a39ae57a18cb27e8",
"assets/asset/images/transactions/share_image_icon.svg": "ec165c73b477ea5a4c79fed1e2bcae64",
"assets/asset/images/transactions/share_text_icon.svg": "b624c7d7c1025690ee359e0956f19881",
"assets/asset/images/transactions/zigzag.svg": "752a98ab49b457b0678001a5fc92675e",
"assets/AssetManifest.json": "085777be66fe74e62a76e12ecb4d3280",
"assets/FontManifest.json": "41c4b461e78d8f2944304bf147f2e56e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "557099d0f29bd0409e32c1f1aa568f5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "08223be5dbde565abab764d5e1a0c739",
"icons/apple-touch-icon.png": "1a6aa37ab4e2d351ce031db4e24f32da",
"icons/favicon-16x16.png": "5c5cd67b3b484147fac5551296407e95",
"icons/favicon-32x32.png": "61928e1ff8b5b292dfac4eb6e06e8cfb",
"icons/favicon.ico": "20e3191032f202e0ed24643d78bb7bb9",
"icons/icon-128x128.png": "a061883b3f11f13c2baa30aac08f3fc9",
"icons/icon-144x144.png": "b45eff947a471d80654537d3a3cfbcb6",
"icons/icon-152x152.png": "920567d9891dd56c389ed7838aef687f",
"icons/icon-192x192.png": "df241a43c026f6d2862ddaef57b4b087",
"icons/icon-384x384.png": "f84f3bfd56c992e746334fa1610ade88",
"icons/icon-512x512.png": "5cb1a43bd7f1a73b4f4082a74be0fba9",
"icons/icon-72x72.png": "1ab04f66928cdbd2004b06b1aac15ac4",
"icons/icon-96x96.png": "4b0c158c661300e9b44f5a62529b7441",
"icons/safari-pinned-tab.svg": "2d955c7c6c25b4e605d8a32ce1f4b82e",
"index.html": "5d5e11a6de45c8e0617893ede4d169ef",
"/": "5d5e11a6de45c8e0617893ede4d169ef",
"main.dart.js": "02db3790e656b71361b27b14c86a140e",
"manifest.json": "aec34fef93874964b6c4b13a3552c0f1",
"splash_style.css": "0be488bcba16e79f23900cba1b657cc1",
"version.json": "78e161f81f6945049f273ab515cd3566"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
