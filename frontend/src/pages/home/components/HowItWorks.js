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
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sint mollitia est maxime magni veritatis reiciendis, cum maiores. Ratione tempora quis quia, ad placeat sunt quisquam repellat reiciendis numquam laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        />
                        <ContentCards
                            index="2"
                            heading="Communities"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sint mollitia est maxime magni veritatis reiciendis, cum maiores. Ratione tempora quis quia, ad placeat sunt quisquam repellat reiciendis numquam laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        />
                        <ContentCards
                            index="3"
                            heading="Donors"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sint mollitia est maxime magni veritatis reiciendis, cum maiores. Ratione tempora quis quia, ad placeat sunt quisquam repellat reiciendis numquam laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        />
                        <ContentCards
                            index="4"
                            heading="Volunteers"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sint mollitia est maxime magni veritatis reiciendis, cum maiores. Ratione tempora quis quia, ad placeat sunt quisquam repellat reiciendis numquam laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks