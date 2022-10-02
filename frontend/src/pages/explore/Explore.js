import React from 'react'
import useAppContext from '../../hooks/useAppContext'

import { appImages } from '../../constants/Images'
import CauseCard from '../../components/core/homepage/CauseCard'

const Explore = () => {
    const { projects } = useAppContext();

    return (
        <>
            <main className='py-8'>
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Projects</h1>
                <div className="w-11/12 max-w-6xl mt-8 mx-auto grid grid-cols-3 gap-x-8 gap-y-12">
                    {(projects).map((item, index) => {
                        return (
                            <CauseCard
                                key={index}
                                img={appImages.recentCauseImgOne}
                                title={item.name}
                                description={item.description}
                                btnType = {"View Cause"}
                            />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Explore