import React from 'react'

import { appImages } from '../../constants/Images'

const About = () => {
    return (
        <section className="home_about bg-alabaster py-12 flex flex-col gap-12">
            <h1 className="about_sectionHeading w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">About Our Initiative</h1>
            <div className="about_mainContainer w-11/12 max-w-6xl mx-auto flex gap-4">
                <div className="mainContainer_contentContainers w-full">
                    <h2 className="contentContainer_contentHeadingText text-2xl font-semibold uppercase font-open-sans text-theme-text-primary">One Step Towards Our People</h2>
                    <p className="contentContainer_contentParaText text-theme-text-secondary my-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam quaerat quia quos nulla, in numquam voluptatum. Veritatis, et! Vero eius sit id, quos repudiandae explicabo ducimus? Quod dolores eaque voluptatibus, tenetur eum veniam quia rerum quam totam ipsam odit? Reprehenderit tenetur consectetur non animi tempore perferendis totam?
                    </p>
                    <p className="contentContainer_contentParaText text-theme-text-secondary my-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus molestias sunt quidem esse voluptatem mollitia! Accusantium enim nobis amet commodi, error sapiente consequatur aliquid distinctio, adipisci cumque, atque dicta quia temporibus dolore quisquam quasi impedit et iusto porro aut? Sunt corporis corrupti quis minus nobis sit necessitatibus. Esse, et sequi!
                    </p>
                </div>
                <div className="mainContainer_contentContainers w-full">
                    <span className="contentContainers_imgContainer grid place-content-center">
                        <img src={appImages.aboutImg} alt="" className='w-96 object-cover' />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About