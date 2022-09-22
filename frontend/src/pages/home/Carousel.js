import React from 'react'

/*========== Owl Carousel Integration ==========*/
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = (props) => {
    return (
        <>
            <div className="app_carousel">
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
                            <div key={index} class='carousel_carouselItem relative'>
                                <img src={item.img} alt="Slider_Image" className="h-full object-cover" />
                                <div className="carouselItem_contentContainer grid place-content-center absolute inset-0 bg-black bg-opacity-60 text-white">
                                    <h1 className="contentContainer_headingText w-max mx-auto text-5xl font-roboto-slab font-bold">{item.heading}</h1>
                                    <p className="contentContainer_paraText max-w-[100ch] w-11/12 mx-auto text-center my-6 text-lg font-roboto">{item.paragraph}</p>
                                    <div className="contentContainer_btnsContainer flex justify-center mt-4 gap-8">
                                        <button className="btnsContainer_btns font-open-sans px-6 py-2 rounded-full text-lg font-medium bg-theme-orange">Donate Now</button>
                                        <button className="btnsContainer_btns font-open-sans px-6 py-2 rounded-full text-lg font-medium bg-theme-yellow">Contact Us</button>
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