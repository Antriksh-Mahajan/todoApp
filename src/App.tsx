import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Components/Auth/Signup";
import TicTacToe from "./Components/TicTacToe";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
