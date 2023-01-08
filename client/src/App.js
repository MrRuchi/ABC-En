import CreateComponent from "./components/CreateComponent";
import EditAlbum from "./components/EditPost";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes exact index path="/" element={<Landing />}>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createcomponent" element={<CreateComponent />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/edit" element={<EditAlbum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
