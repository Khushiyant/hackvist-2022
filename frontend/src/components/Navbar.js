import React from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants/Navlinks';

const Navbar = () => {
    return (
        <header className="app_header flex flex-col">
            <div className="header_topHeader w-11/12 max-w-6xl mx-auto py-3 flex justify-between items-center">
                <span className="topHeader_logoContainer px-4 text-theme-orange text-2xl font-roboto-slab font-bold">YOGDAN</span>
                <div className="topHeader_btnContainer flex gap-6">
                   
                    <button className='topHeader_btns bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Please Make Your<br />
                        <span className="text-base">Donations</span>
                    </button>
                    <button className='topHeader_btns bg-theme-yellow px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Do Complete Your<br />
                        <span className="text-base">Registration</span>
                    </button>
                    <button className='topHeader_btns bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Time To Take Our<br />
                        <span className="text-base">Subscription</span>
                    </button>
                </div>
            </div>
            <nav className="header_navBar bg-alabaster">
                <ul className="navBar_navList w-11/12 max-w-6xl mx-auto py-4 flex">
                    {(navLinks).map((item, index) => {
                        return (
                            <li key={index} className="navlist_listItems text-sm uppercase text-theme-text-secondary font-bold px-4 border-r-2 border-r-[#6A6A6A]/30">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar