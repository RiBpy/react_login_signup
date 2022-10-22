import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Regiter from "./components/Regiter";
import Home from "./components/Home"
import { useSelector } from "react-redux";
function App() {
  const userData=useSelector(state=>state.users)
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home userData={userData}/>}/>
        <Route path="/register" element={<Regiter />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
     </div>
  );
}

export default App;
