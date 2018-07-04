const functions = require('firebase-functions');
var oneLinerJoke = require('one-liner-joke');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  var getRandomJoke = oneLinerJoke.getRandomJoke();
  response.send(
   {
     speech : getRandomJoke["body"]
   });
});
