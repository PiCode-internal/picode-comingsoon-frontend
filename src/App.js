import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComingsoonPage2 from "./jsx/pages/comingsoon_page2";
import ComingsoonPage from "./jsx/pages/comingsoon_page";

function App() {

  let email = localStorage.getItem("email")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ComingsoonPage} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
