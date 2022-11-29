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

const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}></Route>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;