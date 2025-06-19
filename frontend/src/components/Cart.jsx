import React from "react";

export default function Cart() {
  return (
    <div>
      <section
        className={`w-full h-60 md:h-80 bg-no-repeat bg-center rounded-2xl text-white`}
        style={{
          backgroundImage: `url("/images/banner/4.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-between rounded-xl bg-linear-to-r from-[#000000f3] to-[#3d3d3d11]">
          <div className="self-start h-full flex items-center ml-[5vw] font-bold text-5xl ">
            <h1>Cart</h1>
          </div>
          <div className="trapezoid w-fit h-fit px-18 py-3 font-medium text-base md:text-xl text-center  flex justify-center items-center">
            <h1>Home / Cart</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
