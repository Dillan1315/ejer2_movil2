import React from 'react'
import {Link, NavLink} from "react-router-dom";

export const NavBarApp = () => {
return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to='/' className="navbar-brand" href="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to='/Contacto' className="nav-link active" aria-current="page" href="#">Contacto</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/experiencia' className="nav-link" href="#">Experiencia</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/formacion' className="nav-link" href="#">Formacion</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/perfil' className="nav-link disabled" aria-disabled="true">Perfil</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to='/portafolio' className="nav-link disabled" aria-desabled="true">Portafolio</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
    )
}