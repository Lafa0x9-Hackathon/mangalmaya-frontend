import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginSignup from "./Components/LoginSignup.jsx";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginSignup/>} />

    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
