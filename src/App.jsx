import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popular" element={<Popular/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
