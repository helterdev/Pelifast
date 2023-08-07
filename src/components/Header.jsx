const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <a className="navigation__logo" href="#">
                    <img className="navigation__img" src="/public/logo.jpg" alt="logo_cats-pages" />
                </a>
                <ul className="navigation__menu">
                    <li className="navigation__option"><a className="navigation__link navigation__link--home" href="#">Home</a></li>
                    <li className="navigation__option"><a className="navigation__link" href="#">Populares</a></li>
                    <li className="navigation__option"><a className="navigation__link" href="#">TV Series</a></li>
                </ul>
            </nav>
            
        </header>
        
    )
}

export default Header;