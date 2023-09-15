import { useState } from "react";
import ListMovies from "../components/ListData";
import Title from "../components/Title";

const Home = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const namePoint = {
        movie : "movie",
        category : "top_rated"
    }
    return(
        <main>
            <Title title={"Mejores por Votación"}/>
            <ListMovies dataList={currentMovies} setDataList={setCurrentMovies} namePoint={namePoint}/>
        </main>
    )
}

export default Home;