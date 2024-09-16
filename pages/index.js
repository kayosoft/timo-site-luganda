import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import MainBanner from '@/components/HomeDemo9/MainBanner';
import Features from '@/components/HomeDemo2/Features';
import KeyFeatures from '@/components/HomeDemo2/KeyFeatures';
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2';
import IntroVideo from '@/components/HomeDemo2/IntroVideo';
import AppScreenshotsStyle2 from '@/components/AppScreenshots/AppScreenshotsStyle2';
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo';
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2';
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import PartnerStyle1 from '@/components/Common/PartnerStyle1'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo';
import NavbarStyleThree from '@/components/_App/NavbarStyleThree';
import NavbarStyleFour from '@/components/_App/NavbarStyleFour';
 
const IndexPage = () => {
    return (
        <>
            <NavbarStyleFour /> 

            <MainBanner />

            <Features />

            <KeyFeatures />

            <AppProgressStyle2 />

            <IntroVideo />

            <AppScreenshotsStyle2 />

            {/* <SoftwareIntegrationsTwo /> */}

            {/* <ClientFeedbackStyle2 /> */}

            {/* <PricingPlanStyle2 /> */}

            {/* <FreeTrialStyle2 /> */}
            
            {/* <PartnerStyle1 /> */}
             
            <FooterStyleTwo />
        </>
    )
}

export default IndexPage;