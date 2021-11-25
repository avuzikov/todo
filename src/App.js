import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import ToDoListPage from "./components/pages/ToDoListPage";
import Layout from "./components/layout/Layout";
import { useState } from "react";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <React.Fragment>
      {!loggedIn && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
      {loggedIn && (
        <Layout>
          <Routes>
            <Route path="/" element={<ToDoListPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
          </Routes>
        </Layout>
      )}
    </React.Fragment>
  );
}

export default App;
