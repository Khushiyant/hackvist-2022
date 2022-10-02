import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useAppContext from '../../hooks/useAppContext';

import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { appImages } from '../../constants/Images';

const SingleEvent = () => {
    const location = useLocation();
    const { id } = useParams();
    const { events, projects, ngo } = useAppContext();

    const pathname = (location.pathname).split('/')[1];
    let currentCardInfo = null;
    let currentNgo = null;

    if (pathname === "events") {
        currentCardInfo = (events.filter((event) => (parseInt(event.id) === parseInt(id))))[0];
        currentNgo = (ngo.filter((item) => (parseInt(item.id) === parseInt(currentCardInfo.organiser))))[0]
    } else {
        currentCardInfo = (projects.filter((project) => (parseInt(project.id) === parseInt(id))))[0]
        currentNgo = (ngo.filter((item) => (parseInt(item.id) === parseInt(currentCardInfo.maintainer))))[0]
    }


    if (events.length && projects.length && ngo.length && currentNgo) {
        return (
            <>
                <Navbar />
                <main className="py-8">
                    <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">Event Overview</h1>
                    <div className="mt-4 flex flex-col gap-4">
                        <span className="grid place-content-center w-[500px] mx-auto rounded overflow-hidden">
                            <img src={appImages.recentCauseImgOne} alt="Event" />
                        </span>
                        <div className="w-4/5 mx-auto p-8 bg-white shadow-md rounded-md flex flex-col gap-4">
                            <h2 className="flex flex-col gap-1">
                                <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">Event Name</p>
                                <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentCardInfo.name}</p>
                            </h2>
                            <span className="flex flex-col gap-1">
                                <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">Event Description</p>
                                <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentCardInfo.description}</p>
                            </span>
                            <div className="flex gap-12">
                                <span className="flex flex-col gap-1">
                                    <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">Start Date</p>
                                    <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentCardInfo.start_date}</p>
                                </span>
                                <span className="flex flex-col gap-1">
                                    <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">End Date</p>
                                    <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentCardInfo.end_date}</p>
                                </span>
                            </div>
                            <span className="flex flex-col gap-1">
                                <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">Location</p>
                                <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentCardInfo.location}</p>
                            </span>
                            <span className="flex flex-col gap-1">
                                <p className="text-theme-text-primary font-open-sans font-bold border-b-2 border-b-theme-text-secondary w-max uppercase">Organised By</p>
                                <p className="text-theme-text-secondary text-base font-normal font-roboto">{currentNgo.name}</p>
                            </span>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    } else {
        <div className="">Loading...</div>
    }
}

export default SingleEvent