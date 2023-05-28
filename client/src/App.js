import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/users/Main";
import Login from "./pages/users/Login";
import Signup from "./pages/users/Signup";
import Register from "./pages/users/Register";
import Animals from "./pages/users/Animals";
import MessageUs from "./pages/users/MessageUs";
import CareAndHealth from "./pages/users/CareAndHealth";
import PetNearMe from "./pages/users/PetNearMe";
import UserRequest from "./pages/admin/UsersRequest";
import AllAnimals from "./pages/admin/AllAnimals";
import UserMessage from "./pages/admin/UserMessage";
import HistoryPage from "./pages/admin/HistoryPage";
import React from 'react';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="register" element={<Register />} />  
          <Route path="signup" element={<Signup />} />
          <Route path="animals" element={<Animals />} />
          <Route path="careandhealth" element={<CareAndHealth />} />
          <Route path="allanimals" element={<AllAnimals />} />
          <Route path="petnearme" element={<PetNearMe />} />
          <Route path="messageus" element={<MessageUs />} />
          <Route path="historypage" element={<HistoryPage />} />
          <Route path="usermessage" element={<UserMessage />} />
          <Route path="userrequest" element={<UserRequest />} />
          <Route path="login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
      );
    }
}

export default App;
