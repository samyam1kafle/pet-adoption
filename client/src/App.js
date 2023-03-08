import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React from 'react';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      );
    }
}

export default App;
