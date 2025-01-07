import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
 
function App() {
  return (
    <div className="flex flex-col text-re  overflow-hidden bg-white">
      <Routes>
       <Route path="/" element={<Login/>} />
       </Routes>
    </div>
  );
}

export default App;
