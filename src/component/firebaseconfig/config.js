import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";



function GetFirebase(){
    const firebaseConfig = {
        apiKey : "AIzaSyCFTYxx4cxnlNIQQJraR44196Glq10U4as",
        authDomain : "raspberry-pi-dude.firebaseapp.com",
        databaseURL : "https://raspberry-pi-dude-default-rtdb.firebaseio.com",
        projectId : "raspberry-pi-dude",
        storageBucket : "raspberry-pi-dude.appspot.com",
        messagingSenderId : "40535492795",
        appId : "1:40535492795:web:21ddf0d63a6b0b02d5c19e",
        measurementId : "G-SNE5DDFKCQ"
    };
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default GetFirebase;