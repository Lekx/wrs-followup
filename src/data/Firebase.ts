import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const baseName = "projects";
const proposalCoverRef = (proposalId: string) => {
  const nodeUrl = `${baseName}/${proposalId}/proposal/cover`;
  return get(ref(db, nodeUrl));
};

const proposalFullRef = (proposalId: string) => {
  const nodeUrl = `${baseName}/${proposalId}/proposal`;
  return get(ref(db, nodeUrl));
};

const proposalPinRef = (proposalId: string, pin: string) => {
  const nodeUrl = `${baseName}/${proposalId}/proposal/config/${pin}`;
  return get(ref(db, nodeUrl));
};

const followupRef = (proposalId: string) => {
  const nodeUrl = `${baseName}/${proposalId}/followup`;
  return get(ref(db, nodeUrl));
};
const resourcesRef = (proposalId: string) => {
  const nodeUrl = `${baseName}/${proposalId}/resources`;
  return get(ref(db, nodeUrl));
};

export {
  db,
  proposalCoverRef,
  proposalFullRef,
  proposalPinRef,
  followupRef,
  resourcesRef,
};
