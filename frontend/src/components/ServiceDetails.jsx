import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useParams } from "react-router";
import document from "/icons/document.svg";
import arrow from "/icons/arrow.svg";
import logoWhite from "/icons/logoWhite.svg";
import logoBlack from "/icons/logoBlack.svg";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);
  const authValue = useContext(AuthContext);
  const { theme, notify } = authValue;
  const id = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/serviceDetails/${id?.id}`)
      .then((res) => setService(res.data))
      .catch((err) => notify(`Error: ${err.message}`, "error"));

    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => notify(`Error: ${err.message}`, "error"));
  }, [id, notify]);

  const handleService = (service) => {
    setService(service);
  };

  return (
    <div className="w-11/12 mx-auto my-14">
      {/* Banner */}

      <section
        className={`w-full h-60 md:h-80 bg-no-repeat bg-center rounded-2xl text-white`}
        style={{
          backgroundImage: `url("/images/banner/4.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-between rounded-xl bg-linear-to-r from-[#000000f3] to-[#3d3d3d11]">
          <div className="self-start h-full flex items-center ml-[5vw] font-bold text-3xl min-sm:text-5xl ">
            <h1>Service Details</h1>
          </div>
          <div className="trapezoid w-fit h-fit px-5 min-sm:px-18 py-3 font-medium text-xs md:text-xl text-center flex justify-center items-center">
            <h1>Home / Service Details</h1>
          </div>
        </div>
      </section>

      {/* Service details  */}

      <section className="flex max-sm:flex-col-reverse gap-x-10 lg:gap-x-20 my-14">
        <div className="md:w-2/3">
          <div>
            <img
              className="rounded-xl w-full"
              src={`${service.img}`}
              alt={`${service.title || "Service Image"}`}
            />
          </div>

          <div
            className={`my-14 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <h1 className="font-bold text-4xl">{service.title}</h1>
            <p
              className={`text-sm md:text-base text-justify md:leading-7 my-7 ${
                theme === "light" ? "text-[#30285c9a]" : "text-[#e7e7e7b0]"
              }`}
            >
              {service.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {service?.facility?.map((facilityOption, index) => (
              <div
                key={index}
                className={`p-6 py-12 border-t-2 border-[#FF3811] shadow-xl rounded-2xl ${
                  theme === "light"
                    ? "bg-[#F3F3F3] text-black"
                    : "bg-[#220022] text-white"
                } `}
              >
                <p className="font-bold pb-4 text-xl">{facilityOption?.name}</p>
                <h3
                  className={`leading-8 ${
                    theme === "light" ? "text-[#4d4d4d]" : "text-white"
                  }`}
                >
                  {facilityOption?.details}
                </h3>
              </div>
            ))}
          </div>

          <div className="my-14">
            <div>
              <h1 className="font-bold text-4xl my-8">
                3 Simple Steps to Process
              </h1>
              <p className="opacity-60 md:leading-7">{service?.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full justify-center ">
            <div className="p-4 md:p-5 lg:p-8 max-w-48 border border-gray-400 rounded-xl space-y-5 text-center">
              <div className="w-fit mx-auto p-4 rounded-full bg-[#ff391138]">
                <div className=" p-4 rounded-full bg-[#FF3811]">
                  <h1 className="text-white font-bold text-lg px-2 py-1">01</h1>
                </div>
              </div>
              <h1 className="font-bold  text-xl ">STEP ONE</h1>
              <p className="opacity-60">
                It Uses A Dictionary <br /> Of Over 200.
              </p>
            </div>

            <div className=" p-4 md:p-5 lg:p-8 max-w-48 border border-gray-400 rounded-xl space-y-5 text-center">
              <div className="w-fit mx-auto p-4 rounded-full bg-[#ff391138]">
                <div className=" p-4 rounded-full bg-[#FF3811]">
                  <h1 className="text-white font-bold text-lg px-2 py-1">02</h1>
                </div>
              </div>
              <h1 className="font-bold  text-xl ">STEP ONE</h1>
              <p className="opacity-60">
                It Uses A Dictionary <br /> Of Over 200.
              </p>
            </div>
            <div className=" p-4 md:p-5 lg:p-8 max-w-48 border border-gray-400 rounded-xl space-y-5 text-center">
              <div className="w-fit mx-auto p-4 rounded-full bg-[#ff391138]">
                <div className=" p-4 rounded-full bg-[#FF3811]">
                  <h1 className="text-white font-bold text-lg px-2 py-1">03</h1>
                </div>
              </div>
              <h1 className="font-bold  text-xl ">STEP ONE</h1>
              <p className="opacity-60">
                It Uses A Dictionary <br /> Of Over 200.
              </p>
            </div>
          </div>

          <div className="my-14 text-center">
            <h1>Video Here</h1>
          </div>
        </div>

        <div className="md:w-1/3">
          <div
            className={`rounded-2xl p-3 md:p-5 lg:p-10 border-2 ${
              theme === "light"
                ? "bg-[#afaef8] text-black"
                : "bg-black text-white"
            }`}
          >
            <h1 className="text-2xl font-bold">Services</h1>

            <div className="space-y-4 mt-4">
              {services?.map((service, index) => (
                <Link
                  onClick={() => handleService(service)}
                  to={`/serviceDetails/${service._id}`}
                  key={index}
                  className={`flex items-center justify-between rounded-xl p-4 border hover:bg-white hover:text-black hover:scale-105 ease-in-out duration-700 ${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  <h1>{service?.title} </h1>{" "}
                  <div>
                    {" "}
                    <img className="animate-pulse" src={arrow} alt="arrow" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full bg-black space-y-4 rounded-2xl my-14 border-2 border-white p-5 lg:p-14">
            <h1 className="text-white font-bold text-2xl">Download</h1>
            <div className="flex w-full justify-between items-center">
              <img src={document} alt="Document" />
              <div className="w-4/5 pl-5">
                <h1 className="text-base lg:text-lg font-semibold text-white">
                  Our Brochure
                </h1>
                <p className="text-[#A2A2A2] text-base">Download</p>
              </div>

              <div className="group link duration-500 flex justify-between items-center rounded-xl bg-[#FF3811] hover:bg-white h-fit p-2 lg:p-4 ">
                <div
                  className="orange-arrow animate-pulse w-full h-full bg-white group-hover:bg-[#FF3811] rounded-2xl"
                  src={arrow}
                  alt="Arrow"
                  role="img"
                  aria-label="Orange Arrow"
                ></div>
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <img src={document} alt="Document" />
              <div className="w-4/5 pl-5">
                <h1 className="text-base lg:text-lg font-semibold text-white">
                  Company Details
                </h1>
                <p className="text-[#A2A2A2] text-base">Download</p>
              </div>

              <div className="group link duration-500 flex justify-between items-center rounded-xl bg-[#FF3811] hover:bg-white h-fit p-2 lg:p-4 ">
                <div
                  className="orange-arrow animate-pulse w-full h-full bg-white group-hover:bg-[#FF3811] rounded-2xl"
                  src={arrow}
                  alt="Arrow"
                  role="img"
                  aria-label="Orange Arrow"
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center my-22 border-white border-2 rounded-2xl">
            <img
              src={`${theme === "light" ? logoBlack : logoWhite}`}
              alt="Logo"
              className="mx-auto my-5"
            />
            <div className="relative">
              <h1 className="text-xl font-bold leading-8 w-3/5 mx-auto my-5">
                Need Help? We Are Here To Help You
              </h1>

              <div className=" text-[#FF3811] text-xl font-bold bg-white rounded-t-none rounded-b-xl pb-16 pt-10">
                <h1>
                  Car Doctor <span className="text-black">Special</span>
                </h1>
                <h1>
                  <span className="text-base text-gray-600 font-bold">
                    Save up to
                  </span>{" "}
                  60% off
                </h1>
              </div>
              <div className="w-full absolute -bottom-8">
                <button className=" text-white font-semibold text-lg py-5 px-8 bg-[#FF3811] rounded-lg cursor-alias">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>

          <div className="my-14">
            <h1 className="font-bold text-2xl text-center lg:text-4xl my-6">
              Price $ {service.price}
            </h1>
            <Link to={`/checkout/${service._id}`}>
              <button className="btn border-none shadow-none w-full bg-[#FF3811] py-8 text-white rounded-lg text-lg font-semibold">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
