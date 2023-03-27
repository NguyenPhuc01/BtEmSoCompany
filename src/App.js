import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header.js/Header";
import Home from "./page/Home/Home";
import ZingChart from "./page/ZingChart/ZingChart";
import PlayList from "./page/PlayList/PlayList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zingChart" element={<ZingChart />} />
        <Route path="/playList" element={<PlayList />} />
      </Routes>
      {/* <MusicPlayerSlider /> */}
    </BrowserRouter>
  );
}

export default App;
