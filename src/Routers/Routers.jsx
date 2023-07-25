import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Form from "../pages/Form/Form";
import NewPost from "../pages/NewPost/NewPost";
import Login from "../pages/login/Login";

export const AppContext = createContext({});

const Routers = () => {

  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('user')) || {};
    if(dataUser?.name){
      setUser(dataUser);
    }else{
      setUser(false);
    }
    console.log(dataUser)
  },[isLogin]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(!isLogin);
  }

  return (
    <AppContext.Provider value={{user, isLogin, setIsLogin, handleLogout}}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="new/:articleId" element={<NewPost />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
