import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/Homepage/AppLayout";
import AllBooks from "./pages/Homepage/AllBooks";
import Login from "./pages/Loginpage/Login";
import MyBooks from "./pages/Mybookpage/MyBooks";
import "./App.css";
import { useState } from "react";
import PrivateRoute from "./pages/Mybookpage/PrivateRoute";

const App = () => {
  const [authentic, setAuthentic] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<AppLayout auth={authentic} setAuth={setAuthentic} />}
        >
          <Route index element={<AllBooks />} />
          <Route path="/login" element={<Login setAuth={setAuthentic} />} />
          <Route path="/my-books" element={<PrivateRoute auth={authentic} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
