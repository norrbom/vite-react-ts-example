import { Link } from "react-router-dom";
import logo from '../assets/acme-low-resolution-logo-transparent.png';

export default function _() {
    return (
        <div className="topnav">
            <Link to={`/`}><img src={logo} alt="Logo" /></Link>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About</Link>
        </div>
    );
}