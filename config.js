var admin = require("firebase-admin");

var serviceAccount = require("./openfreightone-mobo-firebase-adminsdk-s8xe9-b056181661.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://openfreightone-mobo-default-rtdb.firebaseio.com"
});

export default admin;