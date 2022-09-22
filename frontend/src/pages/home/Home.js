import React from 'react'

import Carousel from './Carousel'
import About from './About'
import Causes from './Causes'

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
            </main>
        </>
    )
}

export default Home