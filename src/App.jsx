import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
