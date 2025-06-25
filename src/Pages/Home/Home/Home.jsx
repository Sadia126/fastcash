import React from 'react';
import Banner from '../Banner/Banner';

import Promotional from '../Promotional/Promotional';
import FaqSection from '../FaqSection/FaqSection';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonial from '../Testimonial/Testimonial';
import CompanyCard from '../Company/CompanyCard';



const Home = () => {
    return (
        <>
           <Banner></Banner>
           <CompanyCard></CompanyCard>
           <Promotional></Promotional>
           <ChooseUs></ChooseUs>
           <FaqSection></FaqSection>
           <Testimonial></Testimonial>
           
        </>
    );
};

export default Home;