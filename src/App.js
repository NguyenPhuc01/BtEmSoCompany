import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header.js/Header";
import Home from "./page/Home/Home";
import ZingChart from "./page/ZingChart/ZingChart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zingChart" element={<ZingChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
