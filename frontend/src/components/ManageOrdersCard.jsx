import axios from "axios";
import { useContext, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import AuthContext from "../Context/AuthContext";

export default function ManageOrdersCard({ order }) {
  const authValue = useContext(AuthContext);
  const { user, theme, notify } = authValue;
  const [currentApprovalStatus, setCurrentApprovalStatus] = useState(
    `${order?.approvalStatus}`
  );
  const handleModifyBtn = (e) => {
    e.preventDefault();
    const approvalStatus = e.target.value;
    setCurrentApprovalStatus(approvalStatus);

    axios
      .patch(`http://localhost:5000/manageOrders/${user?.uid}`, {
        id: order?._id,
        approvalStatus: approvalStatus,
      })
      .then((res) => {
        if (res?.data?.modifiedCount === 1) {
          notify("Order Modified Successfully...!!!", "success");
        } else {
          notify("Something Went Wrong...!!!", "error");
        }
      })
      .catch(() => notify("Faild to fetch order data...!!!", "error"));
  };

  return (
    <tr className="flex *:flex *:max-lg:w-full max-lg:flex-col justify-around md:items-center max-lg:space-y-4 border-2 border-gray-500 rounded-2xl p-2 md:p-4 m-3 ">
      <td className=" max-lg:flex-col mb-0 gap-x-4 lg:gap-x-8 md:items-center text-left ">
        <MdCheckCircle
          className={`link max-lg:mb-3 text-2xl max-sm:mb-3 md:text-4xl max-lg:self-end ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <div className="w-full flex max-lg:flex-col justify-start gap-x-8 md:items-center">
          <img
            className="rounded-lg max-lg:w-full lg:max-w-[180px] max-sm:mb-4"
            src={order?.img}
            alt={order?.title}
          />
          <div className="space-y-2 max-lg:w-full max-lg:text-left max-lg:my-4">
            <h1>{order?.title}</h1>
            <h1>Color: {order?.color || "N/A"}</h1>
            <h1>Size: {order?.size || "N/A"}</h1>
          </div>
        </div>
      </td>

      <td className=" md:justify-center text-base lg:text-xl items-center font-semibold lg:w-1/12">
        <h1 className="max-lg:w-full">$ {order?.price}</h1>
      </td>

      <td className=" lg:justify-center items-center font-medium lg:text-xl">
        <h1>{order?.orderedDate}</h1>
      </td>

      <td className="flex-col md:justify-around lg:items-start font-medium text-xs md:text-base lg:min-h-28 *:flex *:max-sm:justify-between *:items-center ">
        <h1>
          <span className="font-bold">First Name </span> {" "} - {" "}
          {order?.fName}
        </h1>
        <h1>
          <span className="font-bold">Email </span> {" "} - {" "} {order?.email}
        </h1>
        <h1>
          <span className="font-bold">Phone </span> {" "} - {" "} {order?.phone}
        </h1>
      </td>

      <td className="flex justify-center items-center">
        <select
          onChange={handleModifyBtn}
          defaultValue={order?.approvalStatus}
          className={`select text-center font-semibold text-lg  border rounded-md  ${
            (currentApprovalStatus === "Pending" &&
              "text-yellow-500 border-yellow-500") ||
            (currentApprovalStatus === "Approved" &&
              "text-[#29B170] border-[#29B170]") ||
            (currentApprovalStatus === "Denied" &&
              "text-red-500 border-red-500")
          }`}
        >
          <option className="font-semibold text-[#29B170]" value="Approved">
            Approved
          </option>

          <option className="font-semibold text-red-600" value="Denied">
            Denied
          </option>

          <option className="font-semibold text-yellow-500" value="Pending">
            Pending
          </option>
        </select>
      </td>
    </tr>
  );
}
