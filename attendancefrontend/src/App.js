import { Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage"
import Homepage from "./Pages/Homepage"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="wrapper h-screen w-screen flex justify-center items-center bg-teal-950">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
