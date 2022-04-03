import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AuthProvider from "./context/auth";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import React, { Fragment, useContext, useState } from "react";
import { auth } from "./services/firebase";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          { auth.currentUser ? (
            <Route exact path="*" element={<Login />}></Route>
          ) : (
            <>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/" element={<Home />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
