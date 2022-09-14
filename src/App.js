
import Header from "./Component/Header";
import About from  "./pages/About";
import  Contact from"./pages/Contact";
import Home from  "./pages/Home";
import Login from "./pages/login";

import { Routes, Route, Link } from "react-router-dom";





function App() {
    return (
        <div>
            <Header />
            
            
            <Routes>
                 <Route path="/Home" element={<Home />} />
                 <Route path="About" element={<About />} />
                 <Route path="Contact" element={<Contact />} />
                 <Route path="login" element={<Login />} />
            </Routes>
           
        </div>
    );
}
export default App