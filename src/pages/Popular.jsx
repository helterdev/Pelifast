import { useState } from "react";
import ListMovies from "../components/ListData";
import Title from "../components/Title";

const Popular = () => {
    // const {requestPopularMovies} = endPoints
    const [popularMovies, setPopularMovies] = useState([]);
    const namePoint = {
        movie: "movie",
        category: "popular"
    }
    return (
        <div>
            <Title title={"Populares"}/>
            <ListMovies dataList={popularMovies} setDataList={setPopularMovies} namePoint={namePoint}/>
        </div>
    )
}

export default Popular;