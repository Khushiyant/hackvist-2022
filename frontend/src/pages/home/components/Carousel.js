import React from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = (props) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleDonationClick = () => {
        if (user) {
            navigate('/explore')
        } else {
            toast.warning("Please Login First to Donate");
            navigate('/login');
        }
    }

    const handleContactClick = () => {
        navigate('/contact');
    }

    return (
        <>
            <div>
                <OwlCarousel
                    items={1}
                    dots={false}
                    center={true}
                    autoPlay={true}
                    autoplay={2500}
                    autoplayHoverPause={true}
                    loop
                >
                    {(props.data).map((item, index) => {
                        return (
                            <div key={index} class='relative'>
                                <img src={item.img} alt="Slider_Image" className="h-full object-cover" />
                                <div className="grid place-content-center absolute inset-0 bg-black bg-opacity-60 text-white">
                                    <h1 className="w-max mx-auto text-5xl font-roboto-slab font-bold">{item.heading}</h1>
                                    <p className="max-w-[100ch] w-11/12 mx-auto text-center my-6 text-lg">{item.paragraph}</p>
                                    <div className="flex justify-center mt-4 gap-8">
                                        <button onClick={handleDonationClick} className="font-open-sans px-6 py-2 rounded-full text-lg font-medium bg-theme-orange">Donate Now</button>
                                        <button onClick={handleContactClick} className="font-open-sans px-6 py-2 rounded-full text-lg font-medium bg-theme-yellow">Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}

export default Carousel