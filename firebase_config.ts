import * as firebase from "firebase";
import getEnvVars from "./environment";
const {firebaseConfig} = getEnvVars();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export async function loginAnonymously() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      console.log("We signed in anonymously!")
    })
    .catch((error) => {
      console.log(`Error signing in: ${JSON.stringify(error)}`)
    })
}

let callbacks: ((user: firebase.User) => void)[] = [];

firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log("We are authenticated now!");
    callbacks.forEach(cb => cb(user));
  }
})

export function registerLoginCallback(callback: (user: firebase.User) => void) {
  callbacks.push(callback);
}