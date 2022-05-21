importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBJ0kdtIEy1SA5P4RGcuWAfFBLV6J6dga8",
  authDomain: "top-test-a18cb.firebaseapp.com",
  projectId: "top-test-a18cb",
  storageBucket: "top-test-a18cb.appspot.com",
  messagingSenderId: "529178301635",
  appId: "1:529178301635:web:e668be670c2eaae758be76",
  measurementId: "G-9NGB54VTPF"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
    const notificationTitle = message.data.popup_title.replaceAll('"', '');
    const notificationOptions = {
        body: message.data.popup_description.replaceAll('"', ''),
        image: message.data.url.replaceAll('"', ''),

    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
    console.log(self.registration.showNotification);
});

// messaging.onMessage((message) => {
//     console.log("onBackgroundMessage", message);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });