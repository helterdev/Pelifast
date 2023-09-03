import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { endPoints } from "../api/api";
const MovieInfo = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    const {infoMovie} = endPoints;
    useEffect(() => {
        const abortController = new AbortController();
        const getData = async () => {
            try {
                const response = await infoMovie(id, abortController.signal);
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
    console.log(data);
    const {poster_path, original_title, title, overview} = data;
    return (
        <section className="container-info">
            <div className="container-info__poster">
                <img className="container-info__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title}`} />
            </div>
            <div className="container-info__meta">
                <article className="container-info__overview">
                    <div className="container-info__head">
                        <h2 className="container-info__title">{title}</h2>
                    </div>
                    <aside className="container-info__description">
                        <p className="container-info__paragraph">{overview}</p>
                    </aside>
                </article>
            </div>
        </section>
    )
}

export default MovieInfo;