import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import CartCard from "./CartCard";

export default function Cart() {
  const authValue = useContext(AuthContext);
  const { user, notify, theme } = authValue;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      })
      .catch((err) => {
        notify(`Error: ${err.response.data.message}`, "error");
      });
  });

  return (
    <div className="w-11/12 max-sm:w-full mx-auto md:my-14">
      <section
        className={`w-11/12 h-60 md:h-80 mx-auto bg-no-repeat bg-center rounded-2xl text-white`}
        style={{
          backgroundImage: `url("/images/banner/4.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-between rounded-xl bg-linear-to-r from-[#000000f3] to-[#3d3d3d11]">
          <div className="self-start h-full flex items-center ml-[5vw] font-bold text-5xl ">
            <h1>Cart</h1>
          </div>

          <div className="trapezoid w-fit px-18 py-3 font-medium text-base md:text-xl text-center  flex justify-center items-center">
            <h1>Home / Cart Details</h1>
          </div>
        </div>

      </section>

        {/* Cart Details */}

      <div className="my-10">
        {cart?.length ? (
          <div>
            {cart.map((cartItem, index) => (
              <CartCard
                cartItem={cartItem}
                theme={theme}
                key={index}
              ></CartCard>
            ))}
          </div>
        ) : (
          <div className="text-center font-bold tracking-wide text-5xl py-14">
            <h1> Your cart is empty </h1>
          </div>
        )}
      </div>
    </div>
  );
}
