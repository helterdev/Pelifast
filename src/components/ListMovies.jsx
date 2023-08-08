import { useState, useEffect } from "react";
import { endPoints } from "../api/api";
const ListMovies = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const [page, setPage] = useState(1);
    const {requestMovies} = endPoints;
    useEffect( () => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await requestMovies(page, abortController.signal);
                if(response.ok){
                    const data = await response.json();
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
    return (
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
            <button onClick={() => {setPage( page + 1)}}>siguiente</button>
            <button onClick={() => {setPage( page - 1)}}>Anterior</button>
        </section>
    )
}

export default ListMovies;