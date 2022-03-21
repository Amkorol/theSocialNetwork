import React from "react";
import {Link} from "react-router-dom";
import '../css/Nav.css'

const Nav = () => {

    return(

<header >
    <div><ul className="nav" >
    <div><li><Link to ="/home">Home</Link></li></div>
    <div><li><Link to ="/creation">Creation</Link></li></div>
    <div><li><Link to ="/connexion">Connexion</Link></li></div>
    </ul>
    </div>
</header>
    );
}
export default Nav;