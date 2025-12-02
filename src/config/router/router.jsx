import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from '../../firebase/firebase'
import { Flex, Spin } from 'antd';
import SettingPage from "../../components/Setting";
import UsersPage from "../../components/Users";








function AppRouter() {

    let [isUser, setIsUser] = useState(false)
    let [loader, setLoader] = useState(true)








    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true)
            }
            else {
                setIsUser(false)
            }

            setLoader(false)
        })
    }, []);
















    return (

        // <Spin/> 
        <div>

            {
                loader ?


                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <Spin tip="Loading" size="large">

                        </Spin>
                    </div>

                    :

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={isUser ? <Profile /> : <Login />} />
                            <Route path="/signup" element={isUser ? <Profile /> : <Signup />} />


                            <Route path="/profile" element={isUser ? <Profile /> : <Navigate to={'/'} />} >

                    //nested routing with help of Outlet

                                <Route path="setting" element={<SettingPage />} />


                            </Route>


                            <Route path="/users" element={isUser ? <UsersPage /> : <Navigate to={'/'} />} ></Route>






                        </Routes>

                    </BrowserRouter>
            }
        </div>

    )
}


export default AppRouter;