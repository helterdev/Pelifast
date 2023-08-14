import { useState, useEffect } from "react";
import { endPoints } from "../api/api";
import  Pagination  from "@mui/material/Pagination";
import  Stack  from "@mui/material/Stack";
import Posts from "./Posts";
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
            <Posts data={currentMovies}/>
            <div className="navigation">
                <Stack spacing={2}>
                    <Pagination sx={{display: "flex", justifyContent:"center"}} count={count} color="secondary" page={page} onChange={handleClick}/>
                </Stack>
            </div>
        </div>
    )
}

export default ListMovies;