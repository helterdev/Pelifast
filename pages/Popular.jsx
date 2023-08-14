import { useState, useEffect } from "react";
import { endPoints } from "../src/api/api";
import Post from "../src/components/Posts";
const Popular = () => {
    const {requestPopularMovies} = endPoints
    const [popularMovies, setPopularMovies] = useState([]);
    const [page, setPage] = useState(1);
    useEffect( () => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await requestPopularMovies(page, abortController.signal);
                if(response.ok){
                    const data = await response.json();
                    setPopularMovies(data.results);
                }else{
                    throw new Error(response.status)
                }
            } catch (error) {
                if(!abortController.signal.aborted){
                    console.error(error.message);
                }
            } 
         }
         getData();
         
    return () => abortController.abort();
    },[page])
    return (
        <div>
            <Post data={popularMovies}/>
        </div>
    )
}

export default Popular;