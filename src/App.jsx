import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TVseries from "./pages/TVseries";
import Header from "./components/Header";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/Movie_Info";
import Footer from "./components/Footer";
import Switch_Theme from "./components/Switch_Theme";
import { useThemeCustom } from "./context/Theme";

function App() {
  const {theme} = useThemeCustom();  
  return (
    <div className={theme}>
      <Switch_Theme/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/series" element={<TVseries/>}/>
          <Route path="/infoMovie/:id" element={<MovieInfo/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
