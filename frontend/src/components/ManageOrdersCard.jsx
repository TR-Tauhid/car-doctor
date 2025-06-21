import axios from "axios";
import { useContext, useState } from "react";
import { MdArrowRight, MdCancel } from "react-icons/md";
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
    <div>
      <div>
        <div className="border-2 border-gray-500 rounded-2xl p-2 m-3 ">
          <table className="w-full">
            <tbody className="p-3 ">
              <tr className="flex max-md:flex-col justify-around md:items-center space-y-2 ">
                <td className="flex max-sm:flex-col mb-0 md:justify-start gap-x-4 lg:gap-x-8 md:items-center text-left ">
                  <MdArrowRight
                    className={`link text-2xl max-sm:mb-3 md:text-4xl max-sm:self-end ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  />
                  <div className="w-full flex max-sm:flex-col justify-start gap-x-8 md:items-center">
                    <img
                      className="rounded-lg max-[640px]:w-full md:max-w-[180px] max-sm:mb-4"
                      src={order?.img}
                      alt={order?.title}
                    />
                    <div className="space-y-2">
                      <h1>{order?.title}</h1>
                      <h1>Color: {order?.color || "N/A"}</h1>
                      <h1>Size: {order?.size || "N/A"}</h1>
                    </div>
                  </div>
                </td>
                <td className="flex md:justify-center text-base lg:text-xl items-center font-semibold md:w-1/12">
                  <h1>$ {order?.price}</h1>
                </td>
                <td className="flex md:justify-center items-center font-medium lg:text-xl">
                  <h1>{order?.orderedDate}</h1>
                </td>
                <td className="flex lg:block md:justify-center items-center font-medium lg:text-md">
                  <h1>First Name - {order?.fName}</h1>
                  <h1>Email - {order?.email}</h1>
                  <h1>Phone - {order?.phone}</h1>
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
                    <option
                      className="font-semibold text-[#29B170]"
                      value="Approved"
                    >
                      Approved
                    </option>

                    <option
                      className="font-semibold text-red-600"
                      value="Denied"
                    >
                      Denied
                    </option>

                    <option
                      className="font-semibold text-yellow-500"
                      value="Pending"
                    >
                      Pending
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
