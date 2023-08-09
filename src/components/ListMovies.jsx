import { useState, useEffect } from "react";
import { endPoints } from "../api/api";
import  Pagination  from "@mui/material/Pagination";
import  Stack  from "@mui/material/Stack";
const ListMovies = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const {requestMovies} = endPoints;
    useEffect( () => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await requestMovies(page, abortController.signal);
                if(response.ok){
                    const data = await response.json();
                    setCount(data.total_pages);
                    setCurrentMovies(data.results);
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
    /* onChange */
    const handleClick = (e, value) => {
        setPage(value);
    }
    return (
        <div className="section">
           <section className="container">
                {currentMovies.map((movie) => {
                    const {title, poster_path, id} = movie;
                    return (
                        <a href="#" className="container__card" key={id}>
                            <div className="container__head">
                                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="container__img" />
                            </div>
                            <h3 className="container__title">{title}</h3>
                        </a>
                        
                    )
                })}
            </section>
            <div>
                <Stack spacing={2}>
                    <Pagination count={count} color="secondary" page={page} onChange={handleClick}/>
                </Stack>
            </div>
        </div>
    )
}

export default ListMovies;