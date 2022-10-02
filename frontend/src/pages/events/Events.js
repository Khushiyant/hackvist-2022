import React from 'react'
import useAppContext from '../../hooks/useAppContext'

import { appImages } from '../../constants/Images'
import CauseCard from '../../components/core/homepage/CauseCard'

const Events = () => {
    const { events } = useAppContext();

    return (
        <>
            <main className='py-8'>
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Events</h1>
                <div className="w-11/12 max-w-6xl mt-8 mx-auto grid grid-cols-3 gap-x-8 gap-y-12">
                    {(events).map((item, index) => {
                        return (
                            <CauseCard
                                key={index}
                                id={item.id}
                                type={"events"}
                                img={appImages.recentCauseImgOne}
                                title={item.name}
                                description={item.description}
                                btnType = {"Donate"}
                            />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Events