import { Link } from "react-router-dom";
const Button = (props) => {
    const {icon} = props;
    return  <Link to={'/'}>
                <button className="button">{icon}</button>
            </Link>
}

export default Button;