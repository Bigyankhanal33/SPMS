import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import ManageUser from "./pages/ManageUser"; 
import UserDetailPage from "./pages/UserDetailPage.tsx";
 
function App() {
  return (
    <div className="flex flex-col text-re  overflow-hidden bg-white">
      <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/manageuser" element={<ManageUser />} />
       <Route path="/user/:id" element={<UserDetailPage />} />
       
       
       </Routes>
    </div>
  );
}

export default App;
