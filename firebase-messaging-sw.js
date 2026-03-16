importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyBaBnTmI8_YuYIRGx2mdDVJSe_k4SF_eho",authDomain:"sube-pies.firebaseapp.com",projectId:"sube-pies",storageBucket:"sube-pies.firebasestorage.app",messagingSenderId:"597414564277",appId:"1:597414564277:web:1f79b81f567b67166c89fc"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage((payload)=>{const n=payload.notification||{};self.registration.showNotification(n.title||'Sube Pies',{body:n.body||'',icon:'/sube-pies/icon-192.png',badge:'/sube-pies/icon-192.png',data:payload.data||{},vibrate:[200,100,200]});});
self.addEventListener('notificationclick',(event)=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then((cl)=>{for(const c of cl){if(c.url.includes('sube-pies')&&'focus' in c)return c.focus();}return clients.openWindow('https://andergonzalezortega.github.io/sube-pies/');}));});
