import { MdArrowBack, MdDelete } from "react-icons/md";
import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router";
import CartCard from "./CartCard";
import swal from "sweetalert";
import axios from "axios";

export default function Cart() {
  const authValue = useContext(AuthContext);
  const { user, notify, theme, cart, setCart } = authValue;

  useEffect(() => {
    console.log("working")
    axios
      .get(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        notify(`Error: ${err?.response?.data?.message}`, "error");
      });
  }, [setCart, user?.uid, notify]);

  const deleteCartItem = (id) => {
    const updatedCart = cart.filter((item) => item._id != id);
    setCart(updatedCart);
  };

  const handleClearBtn = () => {
    swal({
      title: "Are you sure...???",
      text: "You want to remove ALL orders from your cart...???",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your cart orders have been deleted...!!!", {
          icon: "success",
        });
        axios
          .delete(`http://localhost:5000/delete-cart/${user?.uid}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              notify(
                ` ${res?.data?.deletedCount} item(s) has been deleted...!!!`,
                "success"
              );
              setCart([]);
            }
          })
          .catch((err) => notify(`${err.message} ...!!!`, "error"));
      } else {
        swal("Your orders are safe...!!!");
      }
    });
  };

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
                deleteCartItem={deleteCartItem}
                cartItem={cartItem}
                theme={theme}
                user={user}
                notify={notify}
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

      <div className="w-full flex justify-between">
        <Link
          to="/services"
          className="flex justify-center items-center gap-x-2 link link-hover"
        >
          <MdArrowBack />
          <h1>Conitnue Shoping</h1>
        </Link>

        {cart?.length > 0 && (
          <Link
            onClick={handleClearBtn}
            className="flex justify-center items-center gap-x-2 link link-hover"
          >
            <MdDelete />
            <h1>Clear Shoping Cart</h1>
          </Link>
        )}
      </div>
    </div>
  );
}
