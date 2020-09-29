import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Games App</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/games">Games</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/weather">Weather</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
