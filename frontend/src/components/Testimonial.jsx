import React from "react";
import person1 from "/icons/person1.svg";
import person2 from "/icons/person2.svg";
import quote from "/icons/quote.svg";
export default function Testimonial() {
  return (
    <div className="w-11/12 mx-auto my-14">
      <div className="text-center space-y-5 my-14">
        <h1 className="font-bold text-xl text-[#FF3811]">Testimonial</h1>
        <h1 className="font-bold text-5xl">What Customer Says</h1>
        <h1 className="font-normal leading-7 text-base text-[#737373] max-w-[720px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </h1>
      </div>

      <div className="space-y-3 md:flex justify-center gap-x-6 ">
        <div className="w-fit mb-0 p-4 md:p-6 lg:p-12 border border-[#cfcfcf] shadow-sm rounded-xl">
          <div className="flex max-sm:flex-col max-sm:space-y-3  gap-x-5">
            <div>
              <img className="min-w-16" src={person1} alt="Person" />
            </div>
            <div className="md:mr-20">
              <h1 className="font-bold text-lg md:text-2xl">Awlad Hossain</h1>
              <h3 className="font-semibold text-[#8d8d8d]">Businessman</h3>
            </div>
            <div>
              <img src={quote} alt="Quote" />
            </div>
          </div>

          <div className="my-5">
            <h5 className="md:leading-7 max-sm:text-xs text-[#a1a1a1] max-w-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </h5>
          </div>
          <div>
            <div className="rating">
              <input
                disabled
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                disabled
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                disabled
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                disabled
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                disabled
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
        <div className="w-fit p-4 md:p-6 lg:p-12 border border-[#cfcfcf] shadow-sm rounded-xl">
          <div className="flex max-sm:flex-col max-sm:space-y-3 gap-x-5">
            <div>
              <img className="min-w-16" src={person2} alt="Person" />
            </div>
            <div className="md:mr-20">
              <h1 className="font-bold text-lg md:text-2xl">Millad Hossain</h1>
              <h3 className="font-semibold text-[#8d8d8d]">Businessman</h3>
            </div>
            <div>
              <img src={quote} alt="Quote" />
            </div>
          </div>
          <div className="my-5">
            <h5 className="md:leading-7 max-sm:text-xs text-[#a1a1a1] max-w-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </h5>
          </div>
          <div>
            <div className="rating my-3">
              {[...Array(5)].map((_, index) => {
                const value = index + 1;
                return (
                  <input
                    key={value}
                    id={value}
                    type="radio"
                    name={`rating-${value}`}
                    className="mask mask-star-2 bg-orange-400"
                    aria-label={`${value} star`}
                    defaultChecked={value === 5}
                    disabled
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
