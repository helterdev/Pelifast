import { useState } from "react";
import ListMovies from "../components/ListData";
const TVseries = () => {
    // const {requestTVSeries} = endPoints;
    const [tvSeries, setTVSeries] = useState([]);
    const namePoint = {
        movie : "tv",
        category: "popular"
    }
    return(
        <div>
            <ListMovies dataList={tvSeries} setDataList={setTVSeries} namePoint={namePoint}/>
        </div>
    )
}

export default TVseries;