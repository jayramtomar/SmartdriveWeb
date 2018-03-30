firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	window.alert("user is sign in");
  } else {
    // No user is signed in.
  }
});
function login(){
	var user = document.getElementById("email").value;
	var password = document.getElementById("paswd").value;
	window.alert("chutiya hai kya");
	firebase.auth().signInWithEmailAndPassword(user, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
window.alert("Error :" + errorMessage);

}