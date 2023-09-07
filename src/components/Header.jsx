import { Link } from "react-router-dom";
const Header = () => {
    
    return (
        <header className="header">
           <nav className="navigation">
                <Link className="navigation__logo" to="/">
                    <img className="navigation__img" src="/logo.jpg" alt="logo_cats-pages" />
                </Link>
                <ul className="navigation__menu">
                    <li className="navigation__option"><Link  className="navigation__link " to={"/"} id="home">Home</Link></li>
                    <li className="navigation__option"><Link  className="navigation__link" to={"/popular"}id="popular">Populares</Link></li>
                    <li className="navigation__option"><Link  className="navigation__link" to={"/series"} id="tv" onClick={(e) => {console.log(e)}}>TV Series</Link></li>
                </ul>
            </nav> 
            
        </header>
        
    )
}

export default Header;