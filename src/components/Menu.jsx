import { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Link to="/" className="logo">My Tutorial</Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
            </div>
        );
    }
}
 
export default Menu;
