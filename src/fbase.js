  //firebase에 연결하는 페이지
  //import에 firebase라는 이름이 너무 많으므로 파일이름은 다르게.

  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    projectId: process.env.REACT_APP_ProjectId,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId
  };

  const app = initializeApp(firebaseConfig);
  export const authService = getAuth();