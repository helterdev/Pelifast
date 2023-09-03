import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TVseries from "./pages/TVseries";
import Header from "./components/Header";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/Movie_Info";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/series" element={<TVseries/>}/>
          <Route path="/infoMovie/:id" element={<MovieInfo/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
