import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import {Helmet} from "react-helmet";
import ManageOrdersCard from "./ManageOrdersCard";

export default function ManageOrders() {
  const authValue = useContext(AuthContext);
  const { notify, user, theme } = authValue;
  const [orders, setOrders] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getOrders")
      .then((res) => setOrders(res.data))
      .catch(() => notify("Faild to fetch order data...!!!", "error"));
  }, [notify]);

  return (
    <div>
      <Helmet>
        <title>Car Doctor | Manage Orders</title>
      </Helmet>
      {orders?.length === 0 ? (
        <div className="text-center font-bold text-3xl leading-14">
          <h1>
            There are no Orders right now... <br /> Try focusing on
            BUISNESS...!!!
          </h1>
        </div>
      ) : (
        <div className="my-14 w-11/12 mx-auto">
          <div className="w-full text-center font-bold text-3xl mb-10">
            <h1>Manage Orders of customers.</h1>
          </div>
          <table className="w-full">
            <tbody className="p-3 flex lg:flex-col gap-y-5">
              {orders?.map((order, index) => (
                <ManageOrdersCard
                  order={order}
                  notify={notify}
                  user={user}
                  key={index}
                  theme={theme}
                ></ManageOrdersCard>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
