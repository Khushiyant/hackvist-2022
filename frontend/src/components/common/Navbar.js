import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'

import { toast } from 'react-toastify';
import { navLinks } from '../../constants/Navlinks';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useAuthContext();

    const handleDonationClick = () => {
        if (user) {
            navigate('/explore');
        } else {
            navigate('/login');
            toast.warning("Please Login First To Make a Donation.");
        }
    }

    const handleregistrationClick = () => {
        if (user.user_type === "NGO") {
            navigate('/registration/ngo');
        } else {
            navigate('/registration/community');
        }
    }

    const handleLogoutClick = () => {
        logoutUser();
        toast.info("You Logged Out Successfully.")
    }

    return (
        <header className="flex flex-col">
            <div className="w-11/12 max-w-6xl mx-auto py-3 flex justify-between items-center">
                <span className="px-4 text-theme-orange text-2xl font-roboto-slab font-bold">YOGDAN</span>
                <div className="flex gap-6">
                    <button onClick={handleDonationClick} className='bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                        Please Make Your<br />
                        <span className="text-base">Donations</span>
                    </button>
                    {(user) && (
                        <>
                            {((user.user_type !== "INDIVIDUAL") && !user.is_registeration_complete) && (
                                <button onClick={handleregistrationClick} className='bg-theme-yellow px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                                    Do Complete Your<br />
                                    <span className="text-base">Registration</span>
                                </button>
                            )}
                            {(!user.premium_user_at) && (
                                <button className='bg-theme-orange px-3 py-1 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white'>
                                    Time To Take Our<br />
                                    <span className="text-base">Subscription</span>
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="bg-alabaster">
                <nav className="bg-alabaster w-11/12 max-w-6xl mx-auto py-3 flex items-center justify-between">
                    <ul className="flex items-center">
                        {(navLinks).map((item, index) => {
                            return (
                                <li key={index} className="grid place-content-center text-sm uppercase text-theme-text-secondary font-bold px-4 border-r-2 border-r-[#6A6A6A]/30">
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    {(user) && (
                        <button onClick={handleLogoutClick} className="grid place-content-center uppercase text-theme-text-primary font-bold">Logout</button>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar