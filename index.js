var admin = require("firebase-admin");
var serviceAccount = require("./openfreightone-mobo-firebase-adminsdk-s8xe9-e989eadc1f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://openfreightone-mobo.firebaseio.com"
});

var message = {
  notification: {
    title: 'Test nodejs via firebase',
    body: 'How to implement firebase in C#?'
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
  token: 'c3_N29gBSe2e9VZdOib0_F:APA91bGFcinkY8Idk2rwZNj_Nq0hCdwPrZBWxscJ7qykbcWDjf3ZehZssFK_IQcRtLlpCOtb-_3j2h07z-X8dglNpU5EPTQw_GiaaeDpGyoEQg6dC3t_mGd9HAwSjHXhP8VgYQMujtnR'
  // topic: 'OPs task in day.'
};

admin.messaging().send(message)
.then(response => {
  console.log('Successfully sent message: ', response);
})
.catch(error => {
  console.log('Error sending message: ', error);
});