
var Firebase = require("firebase");
// TODO: put this into a .gitignored file
var AUTH_TOKEN = "XnWEJX7u8rbqbT2ER7Fcr309IQON5YdMrNcJZQAX";

var myFirebaseRef = new Firebase("https://league-score.firebaseio.com/");

// authenticate with secret
myFirebaseRef.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
  if (error) {
    console.log("Authentication Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

var testRef = myFirebaseRef.child('leagues').child('league-id-1');

// write some data
testRef.set({
  title: "League 1",
  author: "Kevin",
  teams: {
    0: "Liverpool FC",
    1: "Real SAM Labs",
    2: "PSG"
  }
});

var testRef2 = myFirebaseRef.child('leagues').child('league-id-2');

// write some data
testRef2.set({
  title: "League 2",
  author: "Cyrille",
  teams: {
    0: "Lyon",
    1: "Arsenal",
    2: "Real Madrid"
  }
});

// read the data written
testRef.child("location/city").on("value", function(snapshot) {
  console.log(snapshot.val());  // logs "San Francisco"
});
