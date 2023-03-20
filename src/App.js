import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header.js/Header";
import Home from "./page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
