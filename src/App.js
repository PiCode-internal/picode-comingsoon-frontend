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
          {/* <Route path="/" Component={() => {
            if (email) {
              return <ComingsoonPage2 />
            } else {
              return <ComingsoonPage />
            }
          }} exact /> */}
          <Route path="/" Component={ComingsoonPage} exact />
          {/* <Route path="/commingsoon2" Component={ComingsoonPage2} exact /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
