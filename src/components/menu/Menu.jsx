import  "./menu.scss"
import React from 'react'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#about">Home</a>
                </li>
                <li>
                    <a href="#showcase">Showcase</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>           
        </div>
    )
}
