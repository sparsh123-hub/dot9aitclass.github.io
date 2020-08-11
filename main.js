const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active')
);


// backend

// function will work whenever auth state is changed ie logged in or logged out
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("container").style.display = "none";

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("container").style.display = "block";

  }
});


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  

}