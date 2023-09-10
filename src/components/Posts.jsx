import { Link } from "react-router-dom";
import {BsTicketPerforated} from "react-icons/bs";
import { useThemeCustom } from "../context/Theme";
const Post = (props) => {
    const {data} = props;
    const {shadowCard} = useThemeCustom();
    return(
    <section className="container">
        {data.map((dataMovie) => {
            const {title, poster_path, id, name, vote_average} = dataMovie;
            return (
                <Link to={`/infoMovie/${id}`} className={`container__card ${shadowCard}`} key={id}>
                    <div className="container__head">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className="container__img" />
                    </div>
                        <h3 className="container__title">{title ? title: name}</h3>
                    <div className="container__vote">
                        <span className="container__subtitle">Votos:</span>
                        {vote_average}
                        <BsTicketPerforated className="container__icon"/>
                    </div>

                </Link>
                
            )
        })}
    </section>
    )
}

export default Post;