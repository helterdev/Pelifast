import { useState, useEffect } from "react";
import { endPoints } from "../api/api";
const ListMovies = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const [page, setPage] = useState(1);
    const {requestMovies} = endPoints;
    useEffect( () => {
        requestMovies(page)
        .then(response => {
            console.log(response);
            if(response.ok){
                return response.json()
            }else{
                throw new Error(response.status)
            }
        })
        .then(data => setCurrentMovies(data.results))
        .catch(error => console.error(error))
    },[page])
    console.log(currentMovies);
    return (
        <section>
            <button onClick={() => {setPage(page+ 1)}}>+</button>
        </section>
    )
}

export default ListMovies;