import { useState, useEffect } from "react";
import { endPoints } from "../api/api";
import Posts from "./Posts";
import PaginationNav from "./Pagination";
const ListMovies = (props) => {
    
    const {dataList, setDataList, namePoint} = props;

    const [page, setPage] = useState(1);
    const {requestMovies} = endPoints;
    /*endPoints*/
    const endPoin = namePoint.movie;
    const category = namePoint.category;

    useEffect( () => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await requestMovies(endPoin, category, page, abortController.signal);
                if(response.ok){
                    const data = await response.json();
                    setDataList(data.results);
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
        <div className="section">
            <Posts data={dataList}/>
            <PaginationNav page={page} setPage={setPage}/>
        </div>
    )
}

export default ListMovies;