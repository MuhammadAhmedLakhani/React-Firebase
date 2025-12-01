import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import {auth ,onAuthStateChanged} from '../../firebase/firebase'









function AppRouter(){

    let [isUser , setIsUser] = useState(false)
    
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsUser(true)
            }
            else{
                setIsUser(false)
            }
      })
    },[]);
        















    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element = {isUser? <Profile/> :     <Home/>} />
                <Route  path="/signup"  element = { isUser? <Profile/>  :<Signup/>} />
                <Route  path="/profile"  element = {isUser?  <Profile/>: <Navigate to={'/'} />} />
            </Routes>
        
        </BrowserRouter>

    )
}


export default AppRouter;