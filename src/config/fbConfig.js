import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD95pKZOv-yq_54qzEvTe5M1ZUn5Gi9tn0",
    authDomain: "pet-task-manager.firebaseapp.com",
    databaseURL: "https://pet-task-manager.firebaseio.com",
    projectId: "pet-task-manager",
    storageBucket: "",
    messagingSenderId: "291241174446",
    appId: "1:291241174446:web:88966956c4eb20f812543f"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
