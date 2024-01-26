// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";
import SlideFour from "./slides/SlideFour";

const SwiperPopular = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <a href="#">
            <SlideOne />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <SlideTwo />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <SlideThree />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <SlideFour />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <SlideOne />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <SlideTwo />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPopular;
