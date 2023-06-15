import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComingsoonPage from "./jsx/pages/comingsoon_page";
import Unsubscribe from "./jsx/pages/unsubscribe";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ComingsoonPage} exact />
          <Route path="/email/unsubscribe" Component={Unsubscribe} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
