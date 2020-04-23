import { Post } from "./../models/post";
import firebaseConfig from "./config";
import firebase from "firebase";
import "firebase/auth";

class Fire {
  constructor() {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  }

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return firebase.auth().currentUser?.uid;
  }

  get timestamp() {
    return Date.now();
  }

  addPost = async (post: Post) => {
    const { uid, timestamp } = this;
    const { title } = post;
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("posts")
        .add({
          uid: "8Yl1ZKQUSFNEZOI2gcTKfA6DwkB2",
          timestamp,
          title,
        })
        .then((ref) => {
          resolve(ref);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

const fire = new Fire();
export default fire;
