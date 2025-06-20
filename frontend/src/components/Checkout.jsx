import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../Context/AuthContext";

export default function Checkout() {
  const authValue = useContext(AuthContext);
  const { notify, user, theme } = authValue;
  const [service, setService] = useState([]);
  const id = useParams();
  const now = new Date();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/serviceDetails/${id.id}`)
      .then((res) => setService(res.data))
      .catch(() => notify("Faild to fetch service data...!!!", "error"));
  });

  const handleOrderFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const fName = form.get("fName");
    const lName = form.get("lName");
    const phone = form.get("phone");
    const message = form.get("message");
    const img = service?.img;
    const title = service?.title;
    const price = service?.price;
    const orderedDate = now.toLocaleDateString();
    const approvalStatus = "Pending";
    const email = user?.email || form.get("email");
    const uid = user?.uid;

    const orderData = {
      serviceId: id.id,
      fName,
      lName,
      phone,
      email,
      message,
      img,
      title,
      price,
      orderedDate,
      approvalStatus,
      uid,
    };

    axios
      .post("http://localhost:5000/order", orderData)
      .then((res) => {
        if (res.statusText === "Created") {
          notify("Order placed successfully...!!! Going back to Services.", "success");
          setTimeout(() => {
            navigate("/services");
          }, 1000);
          e.target.reset();
          window.location.reload();
        } else {
          notify(`Failed ${res.statusText}`, "error");
        }
      })
      .catch((err) => {
        notify(`Error: ${err.message}`, "error");
      });
  };

  return (
    <div className="w-10/12 mx-auto my-14 ">
      <section
        className={`w-full h-60 md:h-80 bg-no-repeat bg-center rounded-2xl text-white`}
        style={{
          backgroundImage: `url("/images/banner/4.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-between rounded-xl bg-linear-to-r from-[#000000f3] to-[#3d3d3d11]">
          <div className="self-start h-full flex items-center ml-[5vw] font-bold text-5xl ">
            <h1>Checkout</h1>
          </div>
          <div className="trapezoid w-fit h-fit px-18 py-3 font-medium text-base md:text-xl text-center  flex justify-center items-center">
            <h1>Home / Checkout</h1>
          </div>
        </div>
      </section>

      {/* Order Conform Section */}

      <div
        className={` rounded-2xl p-5 md:p-24 my-14 border border-[#FF3811] ${
          theme === "light" ? " bg-[#F3F3F3] text-black" : " text-black"
        }`}
      >
        <form
          onSubmit={handleOrderFormSubmit}
          className="md:grid grid-cols-2 max-sm:space-y-4 gap-6 justify-center items-center"
        >
          <input
            maxLength={30}
            name="fName"
            required
            type="text"
            placeholder="First Name"
            className="input w-full rounded-md py-6"
          />
          <input
            maxLength={30}
            name="lName"
            required
            type="text"
            placeholder="Last Name"
            className="input w-full rounded-md py-6"
          />
          <input
            maxLength={11}
            minLength={11}
            name="phone"
            required
            type="number"
            placeholder="Phone Number"
            className="input w-full rounded-md py-6"
          />
          <input
            name="email"
            title="Your email with verified account is required...!!!"
            required
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email || ""}
            className="input w-full rounded-md py-6"
          />
          <div className="col-span-2">
            <textarea
              required
              name="message"
              maxLength={600}
              className="textarea w-full md:text-2xl text-justify p-6 md:leading-10 min-h-fit"
              cols={30}
              rows={6}
              placeholder="Your Message"
            ></textarea>{" "}
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="btn text-white bg-[#ff3811] py-8 rounded-2xl font-semibold text-xl w-full"
            >
              Order Conform
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
