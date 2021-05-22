var admin = require("firebase-admin");
var serviceAccount = require("./openfreightone-mobo-firebase-adminsdk-s8xe9-e989eadc1f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://openfreightone-mobo.firebaseio.com"
});

var message = {
  notification: {
    title: 'Customclearance task',
    body: 'Làm thủ tục hải quan cho khách hàng -cty May 10'
  },
  data: {
    msgType: 'Task',
    word: 'Hola hola!!!'
  },
  android: {
    notification: {
      sound: 'default',
      visibility: 'public'
    }
  },
  apns: {
    payload: {
      aps: {
        sound: 'default'
      }
    }
  },
  // token: 'd8YiLLH7SYK-J-lT08H1sl:APA91bHeAB_MMI0AtMJHmA15fr4CxbV_JbRmG07uucajKvwrw99FiEfPcI_Kg22afWHXJYzrgb3HN7upoZeMO3sj_QWgP06I4OMB-iItqThxCLdu5fxxWH2eW3rsXZjDuRvt33YZxGCN'
  topic: 'customclearance'
};

admin.messaging().send(message)
.then(response => {
  console.log('Successfully sent message: ', response);
})
.catch(error => {
  console.log('Error sending message: ', error);
});