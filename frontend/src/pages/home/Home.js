import React from 'react'
import useAppContext from '../../hooks/useAppContext'

import Carousel from './components/Carousel'
import About from './components/About';
import Causes from './components/Causes';
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import GetInvolved from './components/GetInvolved'

import { carouselData } from '../../constants/HomeCarouselData';

const Home = () => {
    const { events, projects } = useAppContext();

    return (
        <>
            <main className="app_home">
                <Carousel data={carouselData} />
                <About />
                <Causes
                    causeType={[ "Urgent Causes" ]}
                    data={events}
                    btnType={"Explore More"}
                />
                <Causes
                    causeType={[ "Explore Our Recent Causes", "That We Works" ]}
                    data={projects}
                    btnType={"View More"}
                />
                <Stats />
                <HowItWorks />
                <GetInvolved />
            </main>
        </>
    )
}

export default Home