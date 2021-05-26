const express = require('express');
var admin = require("firebase-admin");

var serviceAccount = require("./openfreightone-mobo-firebase-adminsdk-s8xe9-b056181661.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://openfreightone-mobo-default-rtdb.firebaseio.com"
});

/*
var message = {
  notification: {
    title: 'Customclearance task',
    body: 'sdfkshdfkjsdfjksfhkjsdfhksfhjksfhjksday 10 ajhksjfhdsfhshdkfhsdkfjshdkf'
  },
  data: {
    msgType: 'Task',
    word: 'Hola hola!!!'
  },
  android: {
    priority: 'high',
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
  token: 'eDlri3jMRyGLUa4LfXTUbD:APA91bH356UgJRAh8VYM7EvyL3F0mE0_fJcJHF3LzsRm0NtULv6L3eWWjuxCLIuK23uzs4156QnI2uWPGeK-6qX0LL8KXnQTAo4aBX5C8btie2mNpyvm4PDVgfuIVEtMkCWydNLI6KeT'
};

admin.messaging().send(message)
.then(response => {
  console.log('Successfully sent message: ', response);
})
.catch(error => {
  console.log('Error sending message: ', error);
});
console.log(admin);
*/

const app = express();
const port = 3000;
app.use(express.json());

const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};
app.post('/firebase/notification', (req, res) => {
  const  registrationToken = req.body.registrationToken
  const message = req.body.message
  const options =  notification_options

  admin.messaging().sendToDevice(registrationToken, message, options)
  .then( response => {
    console.log(response);
    res.status(200).send("Notification sent successfully")
  })
  .catch( error => {
    console.log(error);
  });

});

app.listen(port, () => {
  console.log("listening to port"+port)
})
