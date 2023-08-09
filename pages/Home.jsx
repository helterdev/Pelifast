import ListMovies from "../src/components/ListMovies";
const Home = () => {
    return(
        <main>
            <div className="container-home">
                <h1 className="container-home__title">En estreno</h1>
            </div>
            <ListMovies/>
        </main>
    )
}

export default Home;