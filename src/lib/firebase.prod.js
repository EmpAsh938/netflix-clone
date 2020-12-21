import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'


const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSANGINGSENDERID,
    appId: process.env.REACT_APP_APPID
}

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase }