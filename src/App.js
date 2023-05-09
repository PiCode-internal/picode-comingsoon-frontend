import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import comingsoonPage from "./jsx/pages/comingsoon_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={comingsoonPage} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
