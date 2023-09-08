import { useState } from "react";
import ListMovies from "../components/ListData";
import Title from "../components/Title";
const TVseries = () => {
    // const {requestTVSeries} = endPoints;
    const [tvSeries, setTVSeries] = useState([]);
    const namePoint = {
        movie : "tv",
        category: "popular"
    }
    return(
        <div>
            <Title title={"Series TV"}/>
            <ListMovies dataList={tvSeries} setDataList={setTVSeries} namePoint={namePoint}/>
        </div>
    )
}

export default TVseries;