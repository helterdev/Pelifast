import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import Detail from "../components/Individual_Detail";
import {BsArrowLeft} from "react-icons/bs";
const MovieInfo = () => {
    const [data, setData] = useState({genres:[],
    production_companies: [],
    poster_path: ''});
    const {id} = useParams();
    const points = {
        endPoint: "movie",
        id: id
    }
    
    return (
        <>
            <div className="container-boton">
                <Button icon={<BsArrowLeft/>}/>
            </div>
            <Detail data={data} setData={setData} points={points} />
        </>

    )
}

export default MovieInfo;