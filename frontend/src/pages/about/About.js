import React from 'react'

import { appImages } from '../../constants/Images'

const About = () => {

    return (
        <>
            <main className="py-8">
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">About Our Initiative</h1>
                <div className="w-11/12 max-w-6xl mt-4 mx-auto flex flex-col gap-8">
                    <div className="aspect-square mx-auto w-96">
                        <img src={appImages.logo} alt="Yogdan" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-semibold uppercase font-open-sans text-theme-text-primary">One Step Towards Our People</h2>
                        <div className="flex flex-col">
                            <p className="text-theme-text-secondary my-4 mx-auto text-center w-4/5">
                                Yogdan is providing one stop solution for physical event management in the world standing in the field of social work by engaging societies/individual and aim to host 100k events hosts all over the world till 2025. We are a helping society/individual to connect with NGOs by developing a social event management platform as well as providing people a plaform to post their social cause project ideas and get funded.
                            </p>
                            <p className="text-theme-text-secondary my-4 mx-auto text-center w-4/5">
                                This aims to create a platform that will link all the societies with NGOs. This approach also tries to streamline the process by supporting individuals in approaching NGOs and contributing to a larger cause.Yogdan will motivate millennials to step out and do something for the society rather than just talk about it. It will surely help organizations like us to find sincere volunteers. This led to assiting societies in their efforts to reach out to NGOs or individuals in need.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About