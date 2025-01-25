import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FishLogo from "../assets/Fish-logo.png";
import Headerstyle from "../Styles/Header.module.css";

const Header = () => {
    const headerNavigation = {
        "links": [
            {
                "name": "Home",
                "url": "/"
            },
            {
                "name": "About us",
                "url": "/about"
            },
            {
                "name": "Services",
                "url": "/services"
            },
            {
                "name": "Contact",
                "url": "/contact"
            }
        ]
    };

    return (
        <div className={Headerstyle.container}>
            <div className={Headerstyle.logoContainer}>
                <img src={FishLogo} alt="Fish Logo" />
                <label className={Headerstyle.text}>Central Texas Fly Fishing</label>
            </div>
            <div>
                <ul className={Headerstyle.nav}>
                    {headerNavigation.links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.url}>{link.name}</Link> {/* Use Link component for routing */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
