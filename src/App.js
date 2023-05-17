import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import comingsoonPage from "./jsx/pages/comingsoon_page";
import ComingsoonPage2 from "./jsx/pages/comingsoon_page2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ComingsoonPage2} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
