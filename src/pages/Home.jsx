import { useState } from "react";
import ListMovies from "../components/ListMovies";
import Title from "../components/Title";

const Home = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const namePoint = {
        movie : "movie",
        category : "now_playing"
    }
    return(
        <main>
            <Title title={"En estreno"}/>
            <ListMovies dataList={currentMovies} setDataList={setCurrentMovies} namePoint={namePoint}/>
        </main>
    )
}

export default Home;