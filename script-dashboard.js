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

displayVoltage();
displayCurrent();
displayFrequency();
displayPF();
displayPower_A();
displayPower_R();
displayEnergy();
displaySpeed();


function logout(){
    alert("Logout successful !!. Redirecting to Login page. \nPlease press OK.");
    window.location.href = "index.html";
}

function secCheck(){
    var nRef = firebase.database().ref("User").child("n_users");
    nRef.on('value', function(snapshot) {
        var nUsers = snapshot.val();
        if(nUsers == 0){
            alert("Access error!!!\nPlease login to access the page.");
            window.location.href = "index.html";
        }
    });
}

function displayVoltage(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("Voltage");
    firebaseRef.on('value', function(snapshot) {
    var Voltage = parseFloat(snapshot.val()).toFixed(2);
    document.querySelector(".Voltage-dashboard").innerHTML = Voltage;
   });
}

function displayCurrent(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("Current");
    firebaseRef.on('value', function(snapshot){
    var Current = parseFloat(snapshot.val()).toFixed(2);
    document.querySelector(".Current-dashboard").innerHTML = Current;
   });
}

function displayFrequency(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("frequency");
    firebaseRef.on('value', function(snapshot){
    var Frequency = parseFloat(snapshot.val())
    document.querySelector(".Frequency-dashboard").innerHTML = Frequency;
   });
}

function displayPF(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("pf");
    firebaseRef.on('value', function(snapshot){
    var PF = parseFloat(snapshot.val())
    document.querySelector(".PF-dashboard").innerHTML = PF;
   });
}

function displayPower_A(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("power_active");
    firebaseRef.on('value', function(snapshot){
    var Power_A = parseFloat(snapshot.val())
    document.querySelector(".Power_A-dashboard").innerHTML = Power_A;
   });
}

function displayPower_R(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("power_reactive");
    firebaseRef.on('value', function(snapshot){
    var Power_R = parseFloat(snapshot.val()).toFixed(2);
    document.querySelector(".Power_R-dashboard").innerHTML = Power_R;
   });
}

function displayEnergy(){
    var firebaseRef = firebase.database().ref("PZEM004T").child("Energy");
    firebaseRef.on('value', function(snapshot){
    var E = snapshot.val();
    document.querySelector(".Energy-dashboard").innerHTML = E;
   });
}

function displaySpeed(){
    var firebaseRef = firebase.database().ref("Sensors").child("Speed");
    firebaseRef.on('value', function(snapshot){
    var speed = snapshot.val();
    document.querySelector(".Speed-dashboard").innerHTML = speed;
   });
}