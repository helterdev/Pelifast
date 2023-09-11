import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Detail from "../components/Individual_Detail";
import {BsArrowLeft} from "react-icons/bs";
import { endPoints } from "../api/api";
const MovieInfo = () => {
    const [data, setData] = useState({genres:[],
    production_companies: [],
    poster_path: ''});
    const {infoMovie} = endPoints;
    const {id} = useParams();
    const points = {
        endPoint: "movie",
        id: id
    }
    useEffect(() => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await infoMovie(points.endPoint,points.id, abortController.signal);
                if(response.ok){
                    const result = await response.json();
                    setData(result);
                }else{
                    throw new Error(response.status);
                }
            } catch (error) {
                if(!abortController.signal.aborted){
                    console.error(error.message);
                }
            }
        }
        getData();
        return () => abortController.abort();
    }, [id])
        
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