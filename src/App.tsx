import "./App.css";
import Signup from "./Components/Auth/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
