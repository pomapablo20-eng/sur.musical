import "./App.css";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeGallery from "./pages/HomeGallery";
import Admin from "./pages/Admin";
import { Toaster } from "./components/ui/sonner";

const MainPage = () => {
  return (
    <>
      <Home />
      <HomeGallery />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
