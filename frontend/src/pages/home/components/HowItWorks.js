import React from 'react'

// ==================================================
const ContentCards = (props) => {
    return (
        <div className="w-full shadow-md rounded col-span-1 p-6 bg-alabaster">
            <h2 className="text-theme-text-primary w-max mx-auto text-2xl font-semibold font-open-sans">{props.index}. {props.heading}</h2>
            <p className="text-center text-theme-text-secondary my-4">{props.description}</p>
        </div>
    )
}


/*========== 'HowItWorks' function Starts Here ==========*/
const HowItWorks = () => {

    // ========== 'return' Starts Here ==========
    return (
        <>
            <section className="py-12">
                <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">How It Works</h1>
                <div className="w-11/12 max-w-6xl mx-auto">
                    <div className="mt-12 grid grid-cols-4 gap-4">
                        <ContentCards
                            index="1"
                            heading="NGOs"
                            description="Kick things off with NGOs registering themselves on this platform &
                             share their Story. Its a one stop in-person and virtual platform for NGOs to raise
                              funds and donations from communities or individuals.
                              Yogdan is gradually paving its way to become the most preferred platform to raise funds."
                        />
                        <ContentCards
                            index="2"
                            heading="Communities"
                            description="Communities can host events and approach NGOs.They can find nearby authentic NGOs with all the information and send a proposal to NGO & if NGO accepts the proposal,communication between both Community and NGO happen via messenger. Once event is done, it could be a massive success. "
                        />
                        <ContentCards
                            index="3"
                            heading="Donors"  
                            description="Yogdan is a non-profitable and non-monetary organization. Any community can contribute monetarily as well as non-monetarily . Monetarily by contributing to a project or by giving money to NGOs to run and Non-Monetarily by organizing events to provide food,clothes or shelter to needy."
                        />
                        <ContentCards
                            index="4"
                            heading="Volunteers"
                            description="As an NGO volunteer, you'll help organizations that serve underprivileged communities. Your work will go a long way in expanding access to healthcare and education, improving human rights, and protecting the local environment.Become a volunteer for volunteering for a social cause."
                            />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks