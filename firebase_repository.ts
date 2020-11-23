import * as firebase from "firebase";
export function storeHouse(userId: string, name: string) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      house: name,
    })
}