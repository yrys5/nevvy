import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import RegisterSuccess from './pages/RegisterSuccess';
import User from './pages/User';
import AddNew from './pages/AddNew';
import Post from './pages/Post';

const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}></Route>
        <Route path="/register" element={ user?.isVerified === false ? <Navigate to="/confirm-register"/> : user?.isVerified === true ? <Navigate to="/"/> : <Register/>}></Route>
        <Route path='/confirm-register' element={<RegisterSuccess/>}></Route>
        <Route path='/user-account' element={<User/>}></Route>
        <Route path='/add-new' element={!user ? <Navigate to="/"/> : <AddNew/>}></Route>
        <Route path="/post/:id" element={<Post/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;