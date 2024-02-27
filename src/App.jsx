import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import SimpleMap from "./Pages/SimpleMap";
import Header from "./components/Header";
import MyLocation from "./Pages/MyLocation";
import LayerControl from "./Pages/LayerControl";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/global_simple_map" element={<SimpleMap />} />
        <Route path="/my-location" element={<MyLocation />} />
        <Route path="/layer-control" element={<LayerControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
