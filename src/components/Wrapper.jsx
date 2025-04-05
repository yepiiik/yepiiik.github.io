import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';

function Wrapper({children}) {
    const [pageLinks, setPageLinks] = useState([
        {visibleText: "About Me", url: "/about"},
        {visibleText: "Experience & Portfolio", url: "/experience"},
        {visibleText: "Skills", url: "/skills"},
        {visibleText: "Contacts & CV", url: "/contacts"},
    ])

    let location = useLocation();
    let navigate = useNavigate();


    const [burgerActive, setBurgerActive] = useState(false);
    useEffect(() => {
        const mainNavBlock = document.getElementById("mainNavBlock");
        if (burgerActive) {
            mainNavBlock.classList.add("active");
        } else {
            mainNavBlock.classList.remove("active");
        }
    }, [burgerActive])
    
    return (
        
            <div className='container'>
                <button className='burger-menu' onClick={() => {setBurgerActive(!burgerActive)}}>{burgerActive ? "close" : "menu"}</button>
                <nav className='main__nav__block' id='mainNavBlock'>
                    {pageLinks.map((link) => (
                        <span className="main__nav">
                            { (location.pathname === link.url) && <button className='close' onClick={() => {navigate('/')}}>X</button> }
                            <NavLink to={link.url}>{link.visibleText}</NavLink>
                        </span>
                    ))}
                </nav>               
                    {children}
            </div>
    )
}

export default Wrapper