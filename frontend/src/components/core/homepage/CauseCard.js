import React from 'react'

/*========== 'CauseCard' Function Starts Here ==========*/
const CauseCard = (props) => {

    // ========== 'return' Starts Here ==========
    return (
        <>
            <div className="bg-white shadow-md rounded overflow-hidden flex-1 flex flex-col">
                <span className="grid place-content-center w-full">
                    <img src={props.img} alt={props.title} className="w-[380px] h-[260px] object-cover" />
                </span>
                <div className="h-full px-4 py-8 flex flex-col items-center">
                    <h1 className="w-fit mx-auto font-open-sans text-center text-xl text-theme-text-primary font-bold uppercase">{props.title}</h1>
                    <p className="mt-4 mb-8 text-theme-text-secondary text-center">{props.description}</p>
                    <button className="mt-auto bg-theme-green-dark px-4 py-2 rounded font-open-sans font-semibold text-white uppercase">{props.btnType}</button>
                </div>
            </div>
        </>
    )
}

export default CauseCard