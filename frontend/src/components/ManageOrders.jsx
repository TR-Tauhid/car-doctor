import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
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
  }, []);

  return (
    <div>
      {orders?.map((order, index) => (
        <ManageOrdersCard
          order={order}
          notify={notify}
          user={user}
          key={index}
          theme={theme}
        ></ManageOrdersCard>
      ))}
    </div>
  );
}
