import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { toast } from 'react-toastify';
import { navLinks } from '../../constants/Navlinks';

const Navbar = () => {

    return (
        <header className="flex flex-col">
            <div className="w-11/12 max-w-6xl mx-auto py-3 flex justify-between items-center">
                <span className="px-4 text-theme-orange text-2xl font-roboto-slab font-bold">YOGDAN</span>
                <div className="flex gap-6">
                    <button className='bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Please Make Your<br />
                        <span className="text-base">Donations</span>
                    </button>
                    <button className='bg-theme-yellow px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Do Complete Your<br />
                        <span className="text-base">Registration</span>
                    </button>
                    <button className='bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Time To Take Our<br />
                        <span className="text-base">Subscription</span>
                    </button>
                </div>
            </div>
            <nav className="bg-alabaster">
                <ul className="w-11/12 max-w-6xl mx-auto py-4 flex">
                    {(navLinks).map((item, index) => {
                        return (
                            <li key={index} className="text-sm uppercase text-theme-text-secondary font-bold px-4 border-r-2 border-r-[#6A6A6A]/30">
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar