let firebaseConfig = {
	apiKey: "AIzaSyB8UXUD5zq6yjZgqRD9wo8CknEChQNhVX4",
	authDomain: "toggle-single-22dec.firebaseapp.com",
	databaseURL: "https://toggle-single-22dec-default-rtdb.firebaseio.com",
	projectId: "toggle-single-22dec",
	storageBucket: "toggle-single-22dec.appspot.com",
	messagingSenderId: "203456689229",
	appId: "1:203456689229:web:a0787c4731d63ce6729804",
	measurementId: "G-38WVE0QQHJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(){
    var entered_email = document.querySelector("#username").value;
    var entered_pass = document.querySelector("#password").value;
    var emailRef = firebase.database().ref("User").child("userName");
    emailRef.on('value', function(snapshot){
    var email = snapshot.val();
    if (entered_email == email){
        // alert("correct email. checking pass!!!");
        var passRef = firebase.database().ref("User").child("pass");
        passRef.on('value', function(snapshot2){
            var password = snapshot2.val();
            if (password == entered_pass){
                // alert("correct pass!! logging in.");
                var nRef = firebase.database().ref("User").child("n_users");
                nRef.set(1);
                alert("Login successful !!. Redirecting to Control Panel. \nPlease press OK.");
                window.location.href = "control-panel.html";
            }
            else{
                alert("Wrong password!! Try again");
            }
        });
    }
    else{
        alert("Wrong username!!");
    }
   });
}

function setN(){
    var nRef = firebase.database().ref("User").child("n_users");
    nRef.set(0);
}