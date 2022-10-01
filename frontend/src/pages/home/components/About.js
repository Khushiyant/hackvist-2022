import React from 'react'

/*========== Constant Imports ==========*/
import { appImages } from '../../../constants/Images'

/*========== 'About' function Starts Here ==========*/
const About = () => {

    // ========== 'return' Starts Here ==========
    return (
        <section className="bg-alabaster py-12 flex flex-col gap-12">
            <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Our Initiative</h1>
            <div className="w-11/12 max-w-6xl mx-auto flex gap-4">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold uppercase font-open-sans text-theme-text-primary">One Step Towards Our People</h2>
                    <p className="text-theme-text-secondary my-4">
                    Yogdan is providing one stop solution for physical event management in the world standing in the field of social work by engaging societies/individual and aim to host 100k events hosts all over the world till 2025. We are a helping society/individual to connect with NGOs by developing a social event management platform as well as providing people a plaform to post their social cause project ideas and get funded.  </p>
                    <p className="text-theme-text-secondary my-4">
                  This aims to create a platform that will link all the societies with NGOs. This approach also tries to streamline the process by supporting individuals in approaching NGOs and contributing to a larger cause.Yogdan will motivate millennials to step out and do something for the society rather than just talk about it. It will surely help organizations like us to find sincere volunteers. This led to assiting societies in their efforts to reach out to NGOs or individuals in need.
                      </p>
                </div>
                <div className="w-full">
                    <span className="grid place-content-center">
                        <img src={appImages.aboutImg} alt="" className='w-96 object-cover' />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About