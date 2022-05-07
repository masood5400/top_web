importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyCzwa0n9bxiRI3E8SiCRa2dYmjICiVZ5rA",
    authDomain: "novin-pardazesh.firebaseapp.com",
    projectId: "novin-pardazesh",
    storageBucket: "novin-pardazesh.appspot.com",
    messagingSenderId: "289065116462",
    appId: "1:289065116462:web:79792aaa4a042d44f490bf",
    measurementId: "G-ELVST9QF8B"
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