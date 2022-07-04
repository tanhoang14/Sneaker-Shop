import { Link } from "react-router-dom";
import "../NavBar/navbar.css";
const NavBar = () => {
    return (
        <>
        <nav className="Navbar">
            <Link to ="/"> Home</Link>
            <Link to ="/sneakers"> Sneakers</Link>
            <Link to ="/checkout"> My Cart</Link>

        </nav>

        </>
      );
}
 
export default NavBar;