import React from 'react'

import CauseCard from '../../components/CauseCard'

const Causes = (props) => {
    return (
        <>
            <section className={`home_urgentCauses py-12 flex flex-col gap-12 ${(props.causeType === "Recent Causes") ? "bg-alabaster" : ""}`}>
                <h1 className="urgentCauses_sectionHeading w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">{props.causeType}</h1>
                <div className="urgentCauses_mainContainer w-11/12 max-w-6xl mx-auto flex gap-8">
                    {(props.data).slice(0, 3).map((item, index) => {
                        return (
                            <CauseCard
                                img={item.img}
                                title={item.heading}
                                description={item.description}
                                btnType = {(props.causeType === "Urgent Causes") ? "Donate" : "View Cause"}
                            />
                        )
                    })}
                </div>
                <button className={`urgentCauses_viewMoreBtn w-max mx-auto rounded px-4 py-2 uppercase font-semibold font-open-sans text-white ${(props.causeType === "Urgent Causes" ? "bg-theme-yellow" : "bg-theme-orange")}`}>{props.btnType}</button>
            </section>
        </>
    )
}

export default Causes