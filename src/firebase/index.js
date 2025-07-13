// src/firebase/index.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ 這邊是你的 Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDfVlK9ov5eGei1FI0NV_cXBqckLQqg3bo",
  authDomain: "space-message-board.firebaseapp.com",
  projectId: "space-message-board",
  storageBucket: "space-message-board.firebasestorage.app",
  messagingSenderId: "750121910222",
  appId: "1:750121910222:web:7dc79e5657d75b354ab59f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
