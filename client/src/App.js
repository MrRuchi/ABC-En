import CreateComponent from "./components/CreateComponent";
import EditAlbum from "./components/EditPost";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes exact path="/" component={Landing} />
        <div className="container">
          <Routes exact path="/register" component={Register} />
          <Routes exact path="/login" component={Login} />
          <Routes exact path="/CreateComponent" component={CreateComponent} />
          <Routes exact path="/Search" component={Search} />
        </div>
      </div>
    </Router>
  );
}

export default App;
