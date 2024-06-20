import "./App.css";
import Bpage from "./Bpage";
import CardList from "./CardList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { cards } from "./constant";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardList cards={cards} text="A-page" />} />
          <Route path="/Bpage" element={<Bpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
