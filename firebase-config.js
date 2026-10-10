// إعدادات مشروع VIP11 STORE من Firebase Console.
// apiKey وبيانات تطبيق الويب ليست كلمات مرور. لا تضع مفاتيح Service Account هنا.
export const firebaseConfig = {
  apiKey: "AIzaSyCLNPZCN-JBNu6kfd886hReUqAOkXgmOWk",
  authDomain: "vip11-store.firebaseapp.com",
  databaseURL: "https://vip11-store-default-rtdb.firebaseio.com",
  projectId: "vip11-store",
  storageBucket: "vip11-store.firebasestorage.app",
  messagingSenderId: "944689462804",
  appId: "1:944689462804:web:8da448b9fd06c27a93f101"
};

// اكتب بريد Google الذي ستستخدمه كمدير. استخدم البريد نفسه في قواعد Realtime Database.
export const ADMIN_EMAIL = "bodo36711@gmail.com";
// اتركها false حتى تضبط البريد وتنشر قواعد الأمان، ثم غيّرها إلى true.
export const SETUP_COMPLETE = true;
