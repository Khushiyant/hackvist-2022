import React from 'react'

const CauseCard = (props) => {
    return (
        <>
            <div className="causeCards bg-white shadow-md rounded overflow-hidden flex-1 flex flex-col">
                <span className="causeCards_causeImgContainer grid place-content-center w-full">
                    <img src={props.img} alt={props.title} className="w-[380px] h-[260px] object-cover" />
                </span>
                <div className="causeCards_contentContainer h-full px-4 py-8 flex flex-col items-center">
                    <h1 className="causeCards_causeTitle w-fit mx-auto font-open-sans text-center text-xl text-theme-text-primary font-bold uppercase">{props.title}</h1>
                    <p className="causeCards_causeDescription mt-4 mb-8 text-theme-text-secondary text-center">{props.description}</p>
                    <button className="causeCards_donateBtn mt-auto bg-theme-green px-4 py-2 rounded font-open-sans font-semibold text-white uppercase">{props.btnType}</button>
                </div>
            </div>
        </>
    )
}

export default CauseCard