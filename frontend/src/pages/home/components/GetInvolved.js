import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../../../hooks/useAuthContext'

import { toast } from 'react-toastify'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { appImages } from '../../../constants/Images'

const GetInvolved = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()

    const handleJoinClick = () => {
        if (!user) {
            toast.warning("Please Register Yourself to Become a Member at Yogdan.", { position: "top-left" });
            navigate('/signup');
        } else {
            toast.info("You are Already a Member at Yogdan. Explore the Projects & Events to Donate.");
        }
    }

    const handleCreatePoastClick = () => {
        if (!user) {
            toast.warning("Please Login To Create a Project.")
            navigate('/login');
        } else {
            navigate('/create/project');
        }
    }

    const handleCreateProjectClick = () => {
        if (!user) {
            toast.warning("Please Login To Create a Project.")
            navigate('/login');
        } else {
            navigate('/create/project');
        }
    }

    return (
        <>
            <section className="bg-alabaster py-12">
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Ways To Get Involved</h1>
                <div className="w-11/12 max-w-6xl mx-auto flex gap-4 justify-center mt-12">
                    <div onClick={handleJoinClick} className="bg-white shadow-md relative">
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
                    <div onClick={handleCreatePoastClick} className="bg-white shadow-md relative">
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
                    {(user && user.user_type !== "INDIVIDUAL" && user.is_registeration_complete) && (
                        <div onClick={() => (navigate('/create/event'))} className="bg-white shadow-md relative">
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
                    )}
                    <div onClick={handleCreateProjectClick} className="bg-white shadow-md relative">
                        <img src={appImages.getInvolvedImgTwo} alt="Get_Involved" className='aspect-square w-[300px]' />
                        <div className="p-4 absolute inset-0 grid place-content-center bg-opacity-50 bg-black text-white cursor-pointer">
                            <h2 className="text-2xl text-center">
                                Create Your <br />
                                <span className='text-4xl uppercase font-semibold'>Project</span>
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