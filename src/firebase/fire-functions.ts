import { Post, PostsResponse, Doc } from "./../models/post";
import firebaseConfig from "./config";
import firebase from "firebase";
import "firebase/auth";
import { User, Credintials } from "../models/user";

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

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user));
    });
  }

  signUp(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addUser(user: Credintials) {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("users")
        .add({
          ...user,
        })
        .then((ref) => {
          resolve(ref);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addPost = async (post: Post) => {
    const { uid, timestamp } = this;
    const { title } = post;
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("posts")
        .add({
          uid,
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

  getUsers = async () => {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("posts")
        .get()
        .then((snapshot: any) => {
          let arr: Post[] = [];
          snapshot.forEach((doc: Doc) => {
            arr.push(doc.data());
            // console.log(doc.id, "=>", doc.data());
          });

          resolve(arr);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

const fire = new Fire();
export default fire;
