import { useState } from "react";
import ListMovies from "../components/ListMovies";

const Popular = () => {
    // const {requestPopularMovies} = endPoints
    const [popularMovies, setPopularMovies] = useState([]);
    const namePoint = {
        movie: "movie",
        category: "popular"
    }
    return (
        <div>
            <ListMovies dataList={popularMovies} setDataList={setPopularMovies} namePoint={namePoint}/>
        </div>
    )
}

export default Popular;