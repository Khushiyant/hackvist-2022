import React from 'react'
import { useNavigate } from 'react-router-dom'

import CauseCard from '../../../components/core/homepage/CauseCard'

const Causes = (props) => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        (props.causeType === "Urgent Causes") ?
        (navigate('/explore')) :
        (navigate('/events'))
    }

    return (
        <>
            <section className={`py-12 flex flex-col gap-12 ${(props.causeType === "Recent Causes") ? "bg-alabaster" : ""}`}>
                <div className='flex flex-col gap-3'>
                    {(props.causeType).map((text, index) => {
                        return <h1 key={index} className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">{text}</h1>
                    })}
                </div>
                <div className="w-11/12 max-w-6xl mx-auto flex gap-8">
                    {(props.data).slice(0, 3).map((item, index) => {
                        return (
                            <CauseCard
                                key={index}
                                img={item.img}
                                title={item.heading}
                                description={item.description}
                                btnType = {(props.causeType === "Urgent Causes") ? "Donate" : "View Cause"}
                            />
                        )
                    })}
                </div>
                <button onClick={handleBtnClick} className={`w-max mx-auto rounded px-4 py-2 uppercase font-semibold font-open-sans text-white ${(props.causeType === "Urgent Causes" ? "bg-theme-yellow" : "bg-theme-orange")}`}>{props.btnType}</button>
            </section>
        </>
    )
}

export default Causes