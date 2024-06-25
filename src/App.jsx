import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Product'
import Blog from './components/pages/Blog'
import Menu from './components/Menu'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="app-header">
          <Menu />
        </div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}
