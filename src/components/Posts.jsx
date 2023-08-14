import { Link } from "react-router-dom";
const Post = (props) => {
    const {data} = props;
    return(
    <section className="container">
        {data.map((dataMovie) => {
            const {title, poster_path, id, name} = dataMovie;
            return (
                <Link to={`#`} className="container__card" key={id}>
                    <div className="container__head">
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="container__img" />
                    </div>
                    <h3 className="container__title">{title ? title: name}</h3>
                </Link>
                
            )
        })}
    </section>
    )
}

export default Post;