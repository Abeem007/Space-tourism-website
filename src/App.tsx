
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./pages/destination";

import "./index.css";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
