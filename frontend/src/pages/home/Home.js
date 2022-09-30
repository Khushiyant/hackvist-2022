import React from 'react'

import Carousel from './components/Carousel'
import About from './components/About';
import Causes from './components/Causes';
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import GetInvolved from './components/GetInvolved'

import { carouselData } from '../../constants/HomeCarouselData';
import { causeData } from '../../constants/CauseData'

const Home = () => {
    return (
        <>
            <main className="app_home">
                <Carousel data={carouselData} />
                <About />
                {(causeData).map((item, index) => {
                    return (
                        <Causes
                            key={index}
                            causeType={item.causeType}
                            data={item.causeDataList}
                            btnType={item.btnType}
                        />
                    )
                })}
                <Stats />
                <HowItWorks />
                <GetInvolved />
            </main>
        </>
    )
}

export default Home