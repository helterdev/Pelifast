import ListMovies from "../src/components/ListMovies";
const Home = () => {
    return(
        <main>
            <div className="container-home">
                <h2 className="container-home__title">En estreno</h2>
            </div>
            <ListMovies/>
        </main>
    )
}

export default Home;