import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC26v9bHNXI6I6THsShFWA2GJtSvhbjuRM",
  authDomain: "automart-f6787.firebaseapp.com",
  projectId: "automart-f6787",
  storageBucket: "automart-f6787.appspot.com",
  messagingSenderId: "694745223138",
  appId: "1:694745223138:web:0f523281c806b8b29bb3bb",
  measurementId: "G-J25L1K6GR1"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };