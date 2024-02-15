// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  Auth,
  UserCredential,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP1tvXV6CCZQa9IEVuqXXGkR_MtlcGEGQ",
  authDomain: "typescript-auth-c003c.firebaseapp.com",
  projectId: "typescript-auth-c003c",
  storageBucket: "typescript-auth-c003c.appspot.com",
  messagingSenderId: "995798810333",
  appId: "1:995798810333:web:6cd239d546e37e5ea56534",
  measurementId: "G-YRX9SVZ1BY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export const signupWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  const userCredential: UserCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};
export const signinWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  const userCredential: UserCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};
