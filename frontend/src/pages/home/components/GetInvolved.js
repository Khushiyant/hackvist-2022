import React from 'react'

import { BsArrowRightCircleFill } from 'react-icons/bs'
import { appImages } from '../../../constants/Images'

const GetInvolved = () => {

    return (
        <>
            <section className="bg-alabaster py-12">
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Other Ways To Get Involved</h1>
                <div className="w-11/12 max-w-6xl mx-auto flex gap-4 justify-center mt-12">
                    <div className="bg-white shadow-md relative">
                        <img src={appImages.getInvolvedImgOne} alt="Get_Involved" className='aspect-square w-[300px]' />
                        <div className="p-4 absolute inset-0 grid place-content-center bg-opacity-50 bg-black text-white cursor-pointer">
                            <h2 className="text-2xl text-center">
                                Join Our <br />
                                <span className='text-4xl uppercase font-semibold'>Community</span>
                            </h2>
                            <span className="grid place-content-center mt-6 text-4xl">
                                <BsArrowRightCircleFill />
                            </span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md relative">
                        <img src={appImages.getInvolvedImgTwo} alt="Get_Involved" className='aspect-square w-[300px]' />
                        <div className="p-4 absolute inset-0 grid place-content-center bg-opacity-50 bg-black text-white cursor-pointer">
                            <h2 className="text-2xl text-center">
                                Post Your <br />
                                <span className='text-4xl uppercase font-semibold'>Ideas</span>
                            </h2>
                            <span className="grid place-content-center mt-6 text-4xl">
                                <BsArrowRightCircleFill />
                            </span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md relative">
                        <img src={appImages.getInvolvedImgTwo} alt="Get_Involved" className='aspect-square w-[300px]' />
                        <div className="p-4 absolute inset-0 grid place-content-center bg-opacity-50 bg-black text-white cursor-pointer">
                            <h2 className="text-2xl text-center">
                                Host An <br />
                                <span className='text-4xl uppercase font-semibold'>Event</span>
                            </h2>
                            <span className="grid place-content-center mt-6 text-4xl">
                                <BsArrowRightCircleFill />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInvolved