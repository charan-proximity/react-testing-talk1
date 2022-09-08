import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Counter from "./pages/Counter";
import LoginSubmission from "./pages/LoginSubmission";
import EasyButton from "./pages/EasyButton";
import FetchGreetings from "./pages/FetchGreetings";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="appBody">
        <div>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/login" element={<LoginSubmission />} />
            <Route path="/easy" element={<EasyButton />} />
            <Route path="/greet" element={<FetchGreetings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
