'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7dae20a337145059b131e731866c859e",
"index.html": "534e18626de44eb93968c495272eb486",
"/": "534e18626de44eb93968c495272eb486",
"main.dart.js": "7cfe768e939ab3f260e78fee65fb5a87",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87957ca6ad9d10a9f70c0067a64aaf60",
"assets/AssetManifest.json": "e849229bd2e2b1fa5cd5db2856ee8a81",
"assets/NOTICES": "523f2ed5d8e7ca9772d90c8c25b10fb1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "abff92931f5b04288c4abe54bfe0cf20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7a514568e34240b4a78db17ca17da46f",
"assets/fonts/MaterialIcons-Regular.otf": "d1cf26bb610e0b62ea30a07e1b0354c2",
"assets/assets/smile-ringtone.mp3": "740f413e7054184b93f06133ac1b0414",
"assets/assets/pawel-czerwinski-FAlYVtV1kRg-unsplash.jpg": "ec7f6fbee16ce8e7d737514507e43082",
"assets/assets/Group%252071.png": "13f1aed36e8fdd1d99990daf00852022",
"assets/assets/scanner.m4v": "ac8d15f6d576f266fc25a60524d079ab",
"assets/assets/Group%252070.png": "c7ac479b841b7a01b70f89de18b3b191",
"assets/assets/restaurants_v5.json": "1ce976689758898bc4ffb01d8fdc0f44",
"assets/assets/Mask%2520group.png": "cf48f9a527eeb5fc6dd1ae4d45cd3fc0",
"assets/assets/red_48.png": "1727601674cbdd55aabda8ffebb011ff",
"assets/assets/DYNR_Tag.png": "d5f8047169de899f46b02bdca3b9377a",
"assets/assets/john-aledia-_wBJ0cvKhIE-unsplash.jpg": "fd7988481a98c79c51ab9e0ca983a49b",
"assets/assets/IMG_7379-portrait.png": "cc22b247f37c70d8acd822098808238c",
"assets/assets/rezha-ramadhan-sV8M_Lkg60Y-unsplash.jpg": "d557b4e93cd04b79b8a5c2226030abd3",
"assets/assets/artem-beliaikin-EoY2OIeiU1c-unsplash.jpg": "f15d8d210850ab34eb3760fc7361569d",
"assets/assets/springrolls.jpg": "5563e6b76a30ca49c0ce2647c5c1a0bf",
"assets/assets/IMG_7378-portrait.png": "5a6e33b17c5a064bffd247f1802fe829",
"assets/assets/app_icon.png": "686ddccca9390ba4a868307db905a8fb",
"assets/assets/milad-fakurian-7wUorDiCMSU-unsplash.jpg": "581ebe55336cd66bb8749aefc3d6f289",
"assets/assets/25201.jpg": "d27399ff4726053eec0353130dd8d2af",
"assets/assets/Group%252075.png": "2e4cdf92c65f440a931bfa89d5284cd9",
"assets/assets/o.jpg": "7727b7ce67aac9180d8d703d25e1d983",
"assets/assets/restaurants/steins_beer_garden.json": "c02c77f6f0cf109d8e39b6da94f91ddc",
"assets/assets/restaurants/upload.json": "64512b6bd53d5fc005ef01a2b0b35185",
"assets/assets/restaurants/amarin_thai_2.json": "69959254e0ad818a1dbc4ac90f99e7de",
"assets/assets/restaurants/amarin_thai_2_new.json": "6652b6212daada2b163dc3fd56f4f13c",
"assets/assets/restaurants/vina_enoteca.json": "6f19cc5d038eccf44dbea1803ee7344d",
"assets/assets/restaurants/cascal.json": "977268d2c5b5b869358fb029d7728c84",
"assets/assets/amarin_thai_full.json": "a0eb27bd212445ccec01e576d5db07b8",
"assets/assets/upload%2520copy.json": "98a8a04328202d7b36c567b0385569a8",
"assets/assets/bruna-branco-0wn-DdavPa4-unsplash.jpg": "4e596844ea8a20665ae628cd62417a41",
"assets/assets/dan-gold-4_jhDO54BYg-unsplash.jpg": "a0b1a152f9dbaad2b4250c4e4b43b869",
"assets/assets/3d-illustration-payment-confirmation-bill.jpg": "64442fc5ce1f0c5877c5f287ac46ed87",
"assets/assets/waiter_guide.png": "be96d18f9e5289b1ef556294ad4fa392",
"assets/assets/scanner_demo_two.mov": "e314c6c484478012c3fa9560db36706a",
"assets/assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg": "01b225799798a96abba354b46b00ab7e",
"assets/assets/white_full.png": "22178badff2f50af85c64d78945a3aee",
"assets/assets/background.jpg": "a3ed8b4448d65710c9b979edc10a4520",
"assets/assets/placeholder.png": "eef3a91fcb354ede348f33e3661e374e",
"assets/assets/IMG_7376-portrait.png": "4dbb54e30d71d362031b3055e0a265a9",
"assets/assets/sanket-shah-eEWlcfydzQ4-unsplash.jpg": "fe9add9daebd95051f52df1094687173",
"assets/assets/pexels-mister-mister-3434523.jpg": "1383fd86a81ec8b2f3680659db872b20",
"assets/assets/spencer-davis-5dsZnCVDHd0-unsplash.jpg": "a136b76459a7570f1ccd23f1a132c672",
"assets/assets/black_logo.png": "3744142df3628966a5b3ffc3c87d47c0",
"assets/assets/logo.jpg": "cf10fdbb673843863ba19b94d3af9454",
"assets/assets/White_Background.png": "45f59d1b4f0d0b7ce9baad93bd1bdc53",
"assets/assets/emergence-ringtone.mp3": "2814fb0ccf9369ebb5c18e9496a2f4b9",
"assets/assets/IMG_7377-portrait.png": "472df31ac3972eff61372e5621c4a5fc",
"assets/assets/nfc_video.mov": "a2bc6c4b20c8fb950a26b1772251831b",
"assets/assets/profile.jpeg": "d0e2fda176fd4227949a38d2a167feea",
"assets/assets/olena-sergienko-4btFJNMeZO4-unsplash.heic": "77c09541b0dafa8b7f34bc46ef5f4eb9",
"assets/assets/dynrSplashLogo.png": "7b4b9ef1c6e0d3136c2be99b6712c7dd",
"assets/assets/istockphoto-943483254-612x612.jpg": "4569154e754afc70e0a02f1634eb5089",
"assets/assets/pexels-miss-fauzia-10756648.jpg": "e7f88312a7916e5ef53c8aec5b5344b0",
"assets/assets/ales-nesetril-ex_p4AaBxbs-unsplash.jpg": "27b54e7eff165240a70414bfa10ff70a",
"assets/assets/max-griss-otLqpb9LK70-unsplash.jpg": "29907a8e64a05097d98ea1438089249e",
"assets/assets/image1.jpg": "6b07ecfded4d26f69c13a348dca73b32",
"assets/assets/Full_White.png": "b5c47e3199fb4486f07a30df546fef8d",
"assets/assets/scan_demo.m4v": "2366cf0595dcbcd6dc3d0fae6bc864bb",
"assets/assets/red_full.png": "09fc850e2a8d31085e6b8a8112079644",
"assets/assets/scanner_demo.m4v": "55ce41b11d2b558e7e8a640fb9d3e353",
"assets/assets/white.png": "748cee419d957449318d0f7d455a0dc6",
"assets/assets/louis-hansel-7d6ERT38Mf4-unsplash.jpg": "844d0fa5a27aca6464467b88adc2dd49",
"assets/assets/red.png": "7bf3651ba11174d2566b8085f9d0cfe2",
"assets/assets/Group%252068.png": "5f008bf00fbd08398c4d7e1af93b498f",
"assets/assets/CC.png": "ade899d45b09de36b409303a0e8510c1",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
