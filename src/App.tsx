import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Meeting from "./pages/Meeting/Meeting";
import ManageUser from "./pages/ManageUser/ManageUser";
import AddUserPage from "./components/ManageUser/AddUserPage";
import Portfolio from "./pages/Portfolio/Portfolio";

import NoticeTable from "./components/Notice/NoticeTable";
import EditNoticePage from "./components/Notice/EditNoticePage";
import AddNoticePage from "./components/Notice/AddNoticePage";
import EditUser from "./components/ManageUser/EditUser";
// // import Result from "./pages/Result";
// // import Settings from "./pages/Settings";
import Login from "./pages/Login";
// import NoticesPage from "./pages/NoticesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="manageuser" element={<ManageUser />} />
        <Route path="/addUser" element={<AddUserPage/>}/>
        <Route path="/editUser/:userId" element={<EditUser />} />
        <Route path="/portfolio" element={<Portfolio/>}/>

        <Route path="portfolio/user/:id" element={<Portfolio />} />
        <Route path="/notice" element={<NoticeTable />} />
            <Route path="/edit/:id" element={<EditNoticePage />} />
            <Route path="/notices" element={<AddNoticePage />} />
        {/* <Route path="result" element={<Result />} />
        <Route path="settings" element={<Settings />} />
        <Route path="portfolio" element={<Portfolio />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
