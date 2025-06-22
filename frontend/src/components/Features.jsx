import group from "/icons/group.svg";
import clock from "/icons/clock.svg";
import person from "/icons/person.svg";
import wrench from "/icons/wrench.svg";
import check from "/icons/check.svg";
import delivery from "/icons/delivery.svg";
import AuthContext from "../Context/AuthContext";

export default function Features() {
  return (
    <div>
      <div className="text-center space-y-5 my-14">
        <h1 className="font-bold text-xl text-[#FF3811]">Core Features</h1>
        <h1 className="font-bold text-5xl">Why Choose Us</h1>
        <h1 className="font-normal leading-7 text-base text-[#737373] max-w-[720px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </h1>
      </div>

      <div
        className={`grid grid-cols-2 text-center gap-3 justify-items-center min-sm:grid-cols-3 min-sm:gap-y-10 lg:flex text-[#444444] justify-center gap-x-6 font-bold my-14 *:p-3 *:border *:border-[#E8E8E8] *:rounded-xl *:min-sm:w-44 *:h-40 *:space-y-3 text-base  
        }`}
      >
        <div className="flex flex-col justify-center items-center bg-white">
          <img src={group} alt="Group" />
          <h1>Expert Team</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#FF3811] text-white">
          <img src={clock} alt="Clock" />
          <h1>Timely Delivery</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <img src={person} alt="Person" />
          <h1>24/7 Support</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <img src={wrench} alt="Wrench" />
          <h1>Best Equipment</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <img src={check} alt="Check" />
          <h1>100% Guranty</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <img src={delivery} alt="Delivery" />
          <h1>Timely Delivery</h1>
        </div>
      </div>
    </div>
  );
}
