import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy Loading Components
const Login = React.lazy(() => import("./pages/Login"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const ManageUser = React.lazy(() => import("./components/ManageUser"));
const UserDetail = React.lazy(() => import("./components/UserDetail"));

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<ManageUser />} /> {/* Default child route */}
            <Route path="manageuser" element={<ManageUser />} />
            <Route path="/admin/user/:id" element={<UserDetail />} />
          </Route>

          {/* User Details (Standalone Route) */}
          

          {/* Fallback for undefined routes */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
