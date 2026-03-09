// Firebase Messaging Service Worker for background notifications
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBaBnTmI8_YuYIRGx2mdDVJSe_k4SF_eho",
  authDomain: "sube-pies.firebaseapp.com",
  projectId: "sube-pies",
  storageBucket: "sube-pies.firebasestorage.app",
  messagingSenderId: "597414564277",
  appId: "1:597414564277:web:1f79b81f567b67166c89fc"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'Sube Pies';
  const options = {
    body: notification.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    tag: payload.data?.type || 'default',
    renotify: true
  };
  self.registration.showNotification(title, options);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  let url = '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Focus existing window if open
      for (const client of clientList) {
        if (client.url.includes('sube-pies') && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open new window
      return clients.openWindow(url);
    })
  );
});
