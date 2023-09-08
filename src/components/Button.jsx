import { Link } from "react-router-dom";
import { useThemeCustom } from "../context/Theme";
const Button = (props) => {
    const {icon} = props;
    const {button} = useThemeCustom();
    return  <Link to={'/'}>
                <button className={`button ${button}`}>{icon}</button>
            </Link>
}

export default Button;