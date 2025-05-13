import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageFirst } from "./pages/PageFirst";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<PageFirst/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
