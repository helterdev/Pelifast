const Title = (props) => {
    const {title} = props;
    return (
        <div className="container-home">
                <h2 className="container-home__title">{title}</h2>
        </div>
    )
}

export default Title;