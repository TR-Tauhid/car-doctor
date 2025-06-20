import axios from "axios";
import { MdCancel } from "react-icons/md";

export default function CartCard({ cartItem, theme, user, notify, deleteCartItem }) {
  const handleCrossBtn = (cartItem) => {
    axios
      .delete(`http://localhost:5000/deleteCartItem/${user?.uid}`, {
        data: {
          id: cartItem?._id,
        },
      })
      .then((res) => {
        deleteCartItem(cartItem?._id);
        notify(res?.data?.message, "success");
      })
      .catch(() => notify("Something went wrong...!!!", "error"));
  };

  return (
    <div>
      <div className="border-2 border-gray-500 rounded-2xl p-2 m-3 ">
        <table className="w-full">
          <tbody className="p-3 ">
            <tr className="flex max-sm:flex-col justify-around md:items-center space-y-2 ">
              <td className="flex max-sm:flex-col mb-0 md:justify-start gap-x-4 lg:gap-x-8 md:items-center text-left ">
                <MdCancel
                  onClick={() => handleCrossBtn(cartItem)}
                  className={`link text-2xl max-sm:mb-3 md:text-4xl max-sm:self-end ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                />
                <div className="w-full flex max-sm:flex-col justify-start gap-x-8 md:items-center">
                  <img
                    className="rounded-lg max-[640px]:w-full md:max-w-[180px] max-sm:mb-4"
                    src={cartItem?.img}
                    alt={cartItem?.title}
                  />
                  <div className="space-y-2">
                    <h1>{cartItem?.title}</h1>
                    <h1>Color: {cartItem?.color || "N/A"}</h1>
                    <h1>Size: {cartItem?.size || "N/A"}</h1>
                  </div>
                </div>
              </td>
              <td className="flex md:justify-center text-base lg:text-xl items-center font-semibold md:w-1/12">
                <h1>$ {cartItem?.price}</h1>
              </td>
              <td className="flex md:justify-center items-center font-medium lg:text-xl">
                <h1>{cartItem?.orderedDate}</h1>
              </td>
              <td className="flex justify-center lg:w-1/12 items-center">
                <button
                  className={`btn btn-active font-extrabold text-base lg:text-lg w-full h-14 max-sm:w-full rounded-lg max-sm:my-4 ${
                    (cartItem?.approvalStatus === "Pending" &&
                      " border-[#FF3811] bg-[#ffa011]") ||
                    (cartItem?.approvalStatus === "Approved" &&
                      " btn-success") ||
                    (cartItem?.approvalStatus === "Denied" &&
                      "btn-error bg-red-500")
                  }`}
                >
                  {cartItem?.approvalStatus}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
