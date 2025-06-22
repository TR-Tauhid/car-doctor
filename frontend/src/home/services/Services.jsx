import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../../components/Loading";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";

export default function Services() {

  const authValue = useContext(AuthContext);
  const { theme, notify } = authValue;
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        notify(`${err.message}...!!!`, "error");
        console.log(err);
      });
  }, [notify]);

  return (
    <div className="my-8 md:my-14 text-center mx-auto">
      <div className="space-y-8 my-8 md:my-24">
        <div className=" w-full text-[#ff3811] font-semibold text-xl">
          <h1>Services</h1>
        </div>

        <div className="text-4xl font-bold ">
          <h1>Our Service Area</h1>
        </div>

        <div className="text-base text-[#737373] md:w-2/5 mx-auto">
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>

      <div className="grid max-[1310px]:grid-cols-2 max-[1750px]:grid-cols-3 min-[1750px]:grid-cols-4 justify-items-center gap-2 min-sm:gap-10">
        {!services?.[0] ? (
          <div className="col-span-4 w-full flex items-center justify-center">
            <Loading theme={theme}></Loading>
          </div>
        ) : (
          services?.map((service, index) => {
            return (
              <div
                key={index}
                id={service?.service_id}
                className="card min-sm:max-w-96 bg-[#e8e8e81a] shadow-sm border border-gray-200 p-2 min-sm:p-6"
              >
                <figure>
                  <img
                    className="rounded-xl w-full min-sm:min-h-56"
                    src={service?.img}
                    alt={service?.title || "Service Image"}
                  />
                </figure>
                <div className="card-body p-2">
                  <h2 className="card-title font-bold text-left text-sm min-sm:text-xl md:text-2xl">
                    {service?.title}
                  </h2>
                  <div className="card-actions flex items-center min-sm:items-center justify-between text-[#ff3811] font-semibold  text-xs min-sm:text-xl">
                    <h3>Price: $ {service?.price}</h3>
                    <Link
                      to={`/serviceDetails/${service?._id}`}
                      className="border border-orange-600 rounded-sm min-sm:rounded-xl p-1 min-sm:p-3 hover:bg-white shadow-amber-50 shadow-xs"
                    >
                      <img className="animate-pulse" src="/icons/arrow.svg" alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
