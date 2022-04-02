import React, { useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // currentUser메소드 호출 : 로그인 여부 확인
  //기본값으로 false가 설정되어야 미로그인
  return (
    <>
     <AppRouter isLoggedIn={isLoggedIn}/>
     <footer>&copy; {new Date().getFullYear()} hi</footer>
    </>
  )
 
}

export default App;
