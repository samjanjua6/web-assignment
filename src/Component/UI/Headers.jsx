import { NavLink } from "react-router-dom";
function Header(){
    return(
        <header className="head">
            <div className="Title">
                <NavLink to={'/'} className='Heading'>
                <img src="https://thvnext.bing.com/th/id/OIP.2HP1uhe0vxAAmDPKdyhY5wHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="coffee icon" className="icon"/></NavLink>
                
                <h2><NavLink to={'/'} className='Heading'>Desi Coffee</NavLink></h2>
            </div>
            <ul>
                <li>
                    <NavLink to={'/'} className="Buttons">Ghar</NavLink>
                </li>
                <li>
                    <NavLink to={'/services'} className="Buttons">Khidmaat</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className="Buttons">Hamary Baary</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className="Buttons">Raabta kro</NavLink>
                </li>
                <li>
                    <NavLink to={'/orders'} className="Buttons">Coffiyan</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Header;