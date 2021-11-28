import React, { Suspense } from "react";

/*import ToDoListPage from "./components/pages/ToDoListPage";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import LoginPage from "./components/pages/LoginPage";
import CreateProfilePage from "./components/pages/CreateProfilePage";
*/
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const LoginPage = React.lazy(() => import("./components/pages/LoginPage"));
const ChangePasswordPage = React.lazy(() =>
  import("./components/pages/ChangePasswordPage")
);
const ToDoListPage = React.lazy(() =>
  import("./components/pages/ToDoListPage")
);
const CreateProfilePage = React.lazy(() =>
  import("./components/pages/CreateProfilePage")
);

/* */

function App() {
  const loggedIn = useSelector((state) => {
    return state.auth.loggedIn;
  });

  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        {!loggedIn && (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/new" element={<CreateProfilePage />} />
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
      </Suspense>
    </React.Fragment>
  );
}

export default App;
