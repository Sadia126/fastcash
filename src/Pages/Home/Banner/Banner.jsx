import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from "../../../assets/Banner/8800853.jpg"
import img2 from "../../../assets/Banner/9094591.jpg"
import img3 from "../../../assets/Banner/9933352.jpg"

const Banner = () => {
    const onChange = (index) => {
        console.log(`Slide changed to ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Clicked item ${index}`);
    };

    const onClickThumb = (index) => {
        console.log(`Clicked thumbnail ${index}`);
    };

    return (
        <div className="banner-carousel">
           <Carousel className='text-center' showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={img2} alt="Slide 1" />
                    
                </div>
                <div>
                    <img src={img3} alt="Slide 1" />
                    
                </div>
                <div>
                    <img src={img1} alt="Slide 1" />
                    
                </div>
           
            </Carousel>
        </div>
    );
};

export default Banner;
