var admin = require("firebase-admin");
var serviceAccount = require("./openfreightone-mobo-firebase-adminsdk-s8xe9-b056181661.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://openfreightone-mobo.firebaseio.com"
});

var message = {
  notification: {
    title: 'Test from node',
    body: 'FCM test from NODE'
  },
  data: {
    msgType: 'Task',
    word: 'Hola hola!!!'
  },
  android: {
    notification: {
      sound: 'default',
      visibility: 'public',
      priority: 'high',
    }
  },
  apns: {
    payload: {
      aps: {
        // Required for background/quit data-only messages on iOS
        contentAvailable: true,
        sound: 'default'
      }
    }
  },
  token: 'fvHEDTVkjUhzkc3qFVEMk6:APA91bFxLZX_ZCeDIHBf8VYFqR_TvbFSJ2n306j9pBNiSyo0mWKfO5y70J2TdZeSZqvwLY8NcngdRogqKpFlPqmNS_mpo0JFuUxqOHVcHQng8c6HYd6kYwKBDazq5y_aTdNbhL_fo0Dp'
  // topic: 'customclearance'
};
// admin.messaging().sendToDevice
admin.messaging().send(message)
.then(response => {
  console.log('Successfully sent message: ', response);
})
.catch(error => {
  console.log('Error sending message: ', error);
});