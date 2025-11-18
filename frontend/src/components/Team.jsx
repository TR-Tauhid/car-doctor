import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

export default function Team() {
  const authValue = useContext(AuthContext);
  const { theme } = authValue;

  return (
    <div className="my-14">
      <div className="text-center space-y-5 my-14">
        <h1 className="text-xl font-bold text-[#FF3811]">Team</h1>
        <h1 className="text-5xl font-bold ">Meet Our Team</h1>
        <h1 className="text-base font-normal text-[#737373] max-w-3xl mx-auto leading-7">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </h1>
      </div>

      {/* Slider */}

      <Swiper
        slidesPerView={4}
        breakpoints={{

          320: {
            slidesPerView: 1, 
            spaceBetween: 5,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },

          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        loop={true}
        navigation={true}
        spaceBetween={30}
        modules={[FreeMode, Navigation]}
        className="min-sm:mySwiper w-full p-20"
      >
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/1.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-xl md:text-2xl">Abdullah Asim</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/2.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-lg md:text-2xl">Jhankar Mahbub</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/3.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-xl md:text-2xl">Morsalin Shuvo</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/1.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-xl md:text-2xl">Abdullah Asim</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/2.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-lg md:text-2xl">Jhankar Mahbub</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border relative group border-[#E8E8E8] w-44 md:w-80 lg:w-96 md:h-[480px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-4">
            <div
              className={`rounded-lg w-full min-sm:h-72 ${
                theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
              }`}
            >
              <img
                className="w-full h-full rounded-xl"
                src="/images/team/3.jpg"
                alt="Team Member 1"
              />
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-xl md:text-2xl">Morsalin Shuvo</h1>
              <h1 className="font-semibold text-[#737373] text-sm md:text-xl">
                Expert Mechanic
              </h1>
            </div>

            <div className="flex justify-between md:justify-center md:gap-x-3 my-5 text-white">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#395185]">
                <FaFacebookF className="grow " />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#55ACEE] ">
                <FaTwitter className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center insta-bg ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#0A66C2] ">
                <FaLinkedinIn className="grow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
