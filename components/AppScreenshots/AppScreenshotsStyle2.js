import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const AppScreenshotsStyle2 = () => {
  return (
    <>
      <div className="screenshots-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">ESTEETI ZAFE</span>
            <h2>Tuli Kampuni Etunda Etaka Lya Mailo</h2>
          </div>

          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            parallax={true}
            slidesPerView={"auto"}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            className="mySwiper screenshots-swiper-slides"
          >
            <SwiperSlide>
              <img src="/images/about/land-3.jpg" alt="screenshots" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/about/land-4.jpg" alt="screenshots" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/about/land-2.jpeg" alt="screenshots" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshotsStyle2;
