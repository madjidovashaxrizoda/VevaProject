import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NoPage from "./Pages/NoPage/NoPage"
import Home from "./Pages/Home/Home"
import ShopProducts from "./Pages/ShopProducts/ShopProducts"
import MyProducts from "./Pages/MyProducts/MyProducts"


function App() {
  return (
    <div class="bg-white">
      <Routes>
      <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          
          <Route path="ShopProducts" element={<ShopProducts />} />
          <Route path="MyProducts" element={<MyProducts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
