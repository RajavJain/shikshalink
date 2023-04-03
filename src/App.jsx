import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./pages/Home/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
