import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { Helmet } from "react-helmet";

export default function AddService() {
  const authValue = useContext(AuthContext);
  const { theme, notify } = authValue;

  const serviceFacilities = {
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  };

  const handleAddServiceForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const img = form.get("photoURL");
    const price = form.get("price");
    const description = form.get("description");

    if (price < 0) {
      notify("Price must be grater than 0", "error");
      return;
    }

    const data = {
      title: title,
      price: parseFloat(price),
      img: img,
      description: description,
      facilities: serviceFacilities.facility,
    };
    axios
      .post("http://localhost:5000/addService", {
        data: data,
      })
      .then((res) => {
        if (res.status === 201) {
          notify("Service added successfully", "success");
          e.target.reset();
        } else {
          notify("Failed to add service", "error");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Helmet>
        <title>Add Services | Add Services</title>
      </Helmet>
      <div className="w-11/12 md:w-10/12 mx-auto my-14 ">
        <section
          className={`w-full h-60 md:h-80 bg-no-repeat bg-center rounded-2xl text-white`}
          style={{
            backgroundImage: `url("/images/banner/4.jpg")`,
          }}
        >
          <div className="h-full w-full flex flex-col items-center justify-between rounded-xl bg-linear-to-r from-[#000000f3] to-[#3d3d3d11]">
            <div className="self-start h-full flex items-center ml-[5vw] font-bold text-5xl ">
              <h1>Add Service</h1>
            </div>
            <div className="trapezoid w-fit h-fit px-18 py-3 font-medium text-base md:text-xl text-center  flex justify-center items-center">
              <h1>Home / Add Service</h1>
            </div>
          </div>
        </section>

        {/* Order Conform Section */}

        <div
          className={` rounded-2xl p-2 md:p-24 my-14 border border-[#FF3811] ${
            theme === "light" ? " bg-[#F3F3F3] text-black" : " text-black"
          }`}
        >
          <form
            onSubmit={handleAddServiceForm}
            className="md:grid grid-cols-2 max-sm:space-y-4 gap-6 justify-center items-center"
          >
            <input
              required
              maxLength={30}
              name="title"
              type="text"
              placeholder="Title"
              className="input w-full rounded-md py-6"
            />

            <input
              required
              name="price"
              type="number"
              placeholder="Price $"
              className="input w-full rounded-md py-6"
            />
            <input
              required
              name="photoURL"
              type="photoURL"
              placeholder="Service photo url"
              className="input w-full rounded-md py-6"
            />
            <div className="col-span-2">
              <textarea
                required
                name="description"
                maxLength={600}
                className="textarea w-full md:text-2xl text-justify p-6 md:leading-10 min-h-fit"
                cols={30}
                rows={6}
                placeholder="Service Details"
              ></textarea>{" "}
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="btn text-white bg-[#ff3811] py-8 rounded-2xl font-semibold text-xl w-full"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
