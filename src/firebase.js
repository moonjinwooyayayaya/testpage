  //firebase에 연결하는 페이지

  import * as firebase from 'firebase/app';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBrOgOKPfqhYzxCCBHjxft47ayqVCgzjWA",
    authDomain: "testpage-84c2b.firebaseapp.com",
    projectId: "testpage-84c2b",
    storageBucket: "testpage-84c2b.appspot.com",
    messagingSenderId: "242587425768",
    appId: "1:242587425768:web:22d7440088d04d3813625d"
  };

  export default firebase.initializeApp(firebaseConfig);

