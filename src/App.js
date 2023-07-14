import User from "./components/User";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
// import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Login />} />
          <Route path="/user/:id" element={<Detail />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
