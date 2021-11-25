import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import ToDoListPage from "./components/pages/ToDoListPage";
import Layout from "./components/layout/Layout";
import { useState } from "react";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <React.Fragment>
      {!loggedIn && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      {loggedIn && (
        <Layout>
          <Routes>
            <Route path="/" element={<ToDoListPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      )}
    </React.Fragment>
  );
}

export default App;
