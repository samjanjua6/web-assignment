import { NavLink } from "react-router-dom";
function Header(){
    return(
        <header className="head">
            <h2>UOG DATACENTER</h2>
            <ul>
                <li>
                    <NavLink to={'/'} className="Buttons">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className="Buttons">About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className="Buttons">Contact</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Header;