import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/ali-maah-zyOeEm4NsPM-unsplash.jpg"
import slider2 from "../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg"
import slider3 from "../assets/jacek-dylag-SPpsFbCaN2A-unsplash.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Slider from "./Slider";

const Header = () => {
    return (
        <div className="p-5 lg:h-[600px]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
          <Swiper
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            {/* slide 1 */}
            <SwiperSlide>
              <div className="md:h-[500px] h-auto">
                <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                 <Slider></Slider>
    
                  {/* left */}
                  <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
                    <img
                      className="md:h-full h-[250px] object-cover w-full"
                      src={slider1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide>
              <div className="md:h-[500px] h-auto">
                <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                  <Slider></Slider>
    
                  {/* left */}
                  <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
                    <img
                      className="md:h-full h-[250px] object-cover w-full"
                      src={slider2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide 3 */}
            <SwiperSlide>
              <div className="md:h-[500px] h-auto">
                <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <Slider></Slider>
    
                  {/* left */}
                  <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
                    <img
                      className="h-full object-cover w-full"
                      src={slider3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
    
        </div>
      );
};

export default Header;