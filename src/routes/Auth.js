import React, { useState } from "react";


 const Auth= () => {
     //공백으로 두고 입력값 받기
     //입력 받은 값 각각 value에 넣기
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const onChange = (event) => {
       const {
         target: { name, value },
       } = event;
       if (name === "email") {
         setEmail(value);
       } else if (name === "password") {
         setPassword(value);
       }
     };
     const onSubmit = (event) => {
       event.preventDefault();
     };
     return (
       <div>
         <form onSubmit={onSubmit}>
           <input
             name="email"
             type="text"
             placeholder="Email"
             required
             value={email}
             onChange={onChange}
           />
           <input
             name="password"
             type="password"
             placeholder="Password"
             required
             value={password}
             onChange={onChange}
           />
           <input type="submit" value="Log In" />
         </form>
         <div>
           <button>Continue with Google</button>
           <button>Continue with Github</button>
         </div>
       </div>
     );
    }
 
 //자동으로 Router.js에 import
 export default Auth;