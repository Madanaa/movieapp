import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className="logo">Discover</div>
            <div className="menus">
                <ul className="menu">
                    <li><Link to='/'>POPULAR</Link></li>
                    <li><Link to='/newest'>NEWEST</Link></li>
                    <li><Link to='/trending'>TRENDING</Link></li>
                    <li><Link to='/toprated'>TOP RATED</Link></li>
                </ul>
            </div>
            <div className ="search">
            <button></button>
            <input type="text" placeholder ="Search"></input>
            </div>
        </div>
    )
}

export default Navbar
