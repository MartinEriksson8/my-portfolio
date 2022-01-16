import React from 'react'
import "./topbar.scss"
import {Person, Mail, Phone} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#about' className='logo'>Martin.</a>
                    <div className="itemContainer">

                        <Person className='icon'/>
                        <span>
                            +46737862279
                        </span>
                    <div/>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>
                            martineriksson8@gmail.com
                        </span>
                    </div>
                </div>
                </div>
                
                <div className="right">
                    <div className='hambugerMenu' onClick={()=>setMenuOpen(!menuOpen)} >
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
