import React from 'react'
import { useNavigate } from 'react-router-dom'

import { appImages } from '../constants/Images';

const Error = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen flex p-8 items-center justify-between gap-4">
                <span className='flex-1 grid place-content-center'>
                    <img src={appImages.errorImg} alt="Error" className='rounded' />
                </span>
                <div className='flex-1 flex flex-col items-center'>
                    <h1 className='text-[12rem] text-theme-orange/80 leading-none font-roboto-slab font-semibold'>404</h1>
                    <p className='w-max text-theme-yellow text-4xl font-medium font-open-sans mb-8'>Oh no! Page Not Found</p>
                    <p className='text-theme-text-primary text-lg text-center leading-snug'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <button onClick={() => (navigate('/'))} className='mt-8 w-max bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full' >Back To Home</button>
                </div>
            </div>
        </>
    )
}

export default Error