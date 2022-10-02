import React from 'react'
import { useNavigate } from 'react-router-dom'

const CauseCard = (props) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (props.type === "events") {
            navigate(`/events/${props.id}`)
        } else {
            navigate(`/explore/${props.id}`)
        }
    }

    return (
        <>
            <div className="bg-white shadow-md rounded overflow-hidden flex-1 flex flex-col">
                <span className="grid place-content-center w-full">
                    <img src={props.img} alt={props.title} className="w-[380px] h-[260px] object-cover" />
                </span>
                <div className="h-full px-4 py-8 flex flex-col items-center">
                    <h1 className="w-fit mx-auto font-open-sans text-center text-xl text-theme-text-primary font-bold uppercase">{props.title}</h1>
                    <p className="mt-4 mb-8 text-theme-text-secondary text-center">{props.description}</p>
                    <button onClick={handleRedirect} className="mt-auto bg-theme-green-dark px-4 py-2 rounded font-open-sans font-semibold text-white uppercase">{props.btnType}</button>
                </div>
            </div>
        </>
    )
}

export default CauseCard