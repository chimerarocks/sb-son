define('firebase-db', ['firebase'], function (Firebase) {
    var firebaseApp = Firebase.initializeApp({
        apiKey: "AIzaSyAC_Af6dKSoix70CQfBnCM_msIbK8XtqJY",
        authDomain: "realtime-vue-firebase.firebaseapp.com",
        databaseURL: "https://realtime-vue-firebase.firebaseio.com",
        storageBucket: "realtime-vue-firebase.appspot.com",
        messagingSenderId: "894581905276"
    })

    module.exports = firebaseApp.database()
})

