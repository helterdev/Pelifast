import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';    
const Footer = () => {
    
    return (
        <footer className='footer'>
            <div className='footer__title'>
                <p>Developed Helter Velez</p>
            </div>
            <div className='footer__redes'>
                <a href="https://github.com/helterdev/Pelifast" target='_blank' className='footer__link' rel='github' title='github'><AiFillGithub className='footer__icon'/></a>
                <a href="https://www.linkedin.com/in/helter-conforme-velez-59848218b/" target='_blank' className='footer__link' rel='linkedin' title='linkedin'><AiFillLinkedin className='footer__icon'/></a>
            </div>
        </footer>
    )
}

export default Footer;