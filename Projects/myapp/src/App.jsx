// import { Fragment } from "react";
// import MyHeading, { MyHeadinglittle } from "./components/Header";

import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/loading.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Product from "./components/Product";

function App(){
  return <Router>
  <Header />
  <Routes>

    <Route path="/" element= {<Home />} />
    <Route path="/about" element= {<About />} />
    <Route path="/contact" element= {<Contact />} />
    <Route path="*" element= {<div>page not found 404</div>} />
  </Routes>
  {/* <Footer /> */}
  </Router>
}

export default App;