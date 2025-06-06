import img1 from "/images/banner/1.jpg";
import img2 from "/images/banner/2.jpg";
import img3 from "/images/banner/3.jpg";
import img4 from "/images/banner/4.jpg";
import img5 from "/images/banner/5.jpg";
import img6 from "/images/banner/6.jpg";import React from "react";

export default function Banner() {
  return (
    <div>
      <section>
        <div className="carousel w-full h-[600px] rounded-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img1} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a href="#slide6" className="btn btn-circle  bg-[#FFFFFF33]">
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle border-none bg-[#FF3811]"
              >
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img2} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a
                href="#slide1"
                className="btn btn-circle border-none bg-[#FFFFFF33]"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle border-none bg-[#FF3811] "
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img3} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a
                href="#slide2"
                className="btn btn-circle border-none bg-[#FFFFFF33]"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle border-none bg-[#FF3811] "
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img4} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a
                href="#slide3"
                className="btn btn-circle border-none bg-[#FFFFFF33]"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle border-none bg-[#FF3811] "
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img5} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a
                href="#slide4"
                className="btn btn-circle border-none bg-[#FFFFFF33]"
              >
                ❮
              </a>
              <a
                href="#slide6"
                className="btn btn-circle border-none bg-[#FF3811] "
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <div className="md:pl-24 md:pb-24 p-6 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)] w-full h-full absolute flex flex-col justify-end text-white ">
              <h1 className="font-bold font-inter text-2xl md:text-6xl md:leading-20 lg:w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p className="font-extralight text-lg leading-7 w-3/4 my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-x-5">
                <button className="c-btn py-4 px-7 rounded-2xl bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="py-4 px-7 rounded-lg border-2 border-white">
                  Latest Project
                </button>
              </div>
            </div>
            <img src={img6} className="w-full " />

            <div className="absolute left-5 right-5 max-sm:top-10 md:bottom-0  flex -translate-y-1/2 transform justify-end gap-x-5">
              <a
                href="#slide5"
                className="btn btn-circle border-none bg-[#FFFFFF33]"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle border-none bg-[#FF3811] "
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
