import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { BrowserRouter } from "react-router-dom";
import Edit from './Components/Edit';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
