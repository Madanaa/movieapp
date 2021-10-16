import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className="logo">Discover</div>
            <div className="menus">
                <ul className="menu">
                    <li><Link to='/'>POPULAR</Link></li>
                    <li><Link to='/watchlist'>NEWEST</Link></li>
                    <li><Link to='/wontact'>TRENDING</Link></li>
                    <li><Link to='/wontact'>TOP RATED</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
