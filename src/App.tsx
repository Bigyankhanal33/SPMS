import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Meeting from "./pages/Meeting";
import ManageUser from "./pages/ManageUser";
import UserDetailPage from "./pages/UserDetailPage";
// import Notice from "./pages/Notice";
// import Result from "./pages/Result";
// import Settings from "./pages/Settings";
// import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="manageuser" element={<ManageUser />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        {/* <Route path="notice" element={<Notice />} />
        <Route path="result" element={<Result />} />
        <Route path="settings" element={<Settings />} />
        <Route path="portfolio" element={<Portfolio />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
