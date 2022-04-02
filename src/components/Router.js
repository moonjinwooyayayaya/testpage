import React, { useState } from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";


const AppRouter = ({isLoggedIn}) => {
     //Routes 안 isLoggedIn에서 로그인이 되어있지 않다면 앞(show home), 되어 있다면 뒤(show login page)
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                <>
                <Route exact path ="/" element={ <Home />}>
                </Route> 
                </> 
                ) : (
                <Route exact path ="/" element={ <Auth />}>
                    </Route>
                    )}
            </Routes>
        </Router>
    );
};

export default AppRouter;