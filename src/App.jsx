import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import SimpleMap from "./Pages/SimpleMap";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/global_simple_map" element={<SimpleMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
