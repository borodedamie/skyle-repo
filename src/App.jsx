import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "../src/css/main.css";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <main >
      <Router>
      <ScrollToTop />

        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
             <Route exact path="/portfolio" element={<Works />} />
             <Route exact path="/contact" element={<Contact />} />
             <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
    </main>
  );
}

export default App;
