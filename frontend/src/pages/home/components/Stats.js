import React from 'react'

/*========== Icons import ==========*/
import {
    BsFillHeartFill,
    BsGlobe,
    BsFillPersonPlusFill,
    BsTrophyFill
} from 'react-icons/bs'

/*========== 'Stats' function Starts Here ==========*/
const Stats = () => {

    // ========== 'return' Starts Here ==========
    return (
        <>
            <section className="py-12 bg-theme-green">
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-white font-semibold">Difference We Are Making</h1>
                <p className="max-w-[100ch] w-11/12 mx-auto text-center text-white mt-6 mb-8">
                We have your back.

With one-quarter of our global team dedicated to trust and safety, we’ve successfully managed fundraisers worldwide for more than a decade. Don’t worry about a thing, we’ve got you covered.  </p>
                <div className="w-11/12 max-w-6xl mx-auto">
                    <div className="flex">
                        <div className="w-full p-4 flex flex-col gap-4 items-center text-white border-r border-r-white">
                            <span className="grid place-content-center text-6xl">
                                <BsFillHeartFill />
                            </span>
                            <span className="font-open-sans text-center text-4xl font-bold">
                                200
                                <p className="text-lg font-normal">Successful Causes</p>
                            </span>
                        </div>
                        <div className="w-full p-4 flex flex-col gap-4 items-center text-white border-r border-r-white">
                            <span className="grid place-content-center text-6xl">
                                <BsGlobe />
                            </span>
                            <span className="font-open-sans text-center text-4xl font-bold">
                                150
                                <p className="text-lg font-normal">Places Reached</p>
                            </span>
                        </div>
                        <div className="w-full p-4 flex flex-col gap-4 items-center text-white border-r border-r-white">
                            <span className="grid place-content-center text-6xl">
                                <BsFillPersonPlusFill />
                            </span>
                            <span className="font-open-sans text-center text-4xl font-bold">
                                250+
                                <p className="text-lg font-normal">Active Donars</p>
                            </span>
                        </div>
                        <div className="w-full p-4 flex flex-col gap-4 items-center text-white">
                            <span className="grid place-content-center text-6xl">
                                <BsTrophyFill />
                            </span>
                            <span className="font-open-sans text-center text-4xl font-bold">
                                120
                                <p className="text-lg font-normal">Successful Projects</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats