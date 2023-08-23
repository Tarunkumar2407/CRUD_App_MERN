import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { BrowserRouter } from "react-router-dom";
import Edit from './Components/Edit';
import { Routes, Route } from "react-router-dom"
import View from "./Components/View";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
