import calender from "/icons/calender.svg";
import call from "/icons/call.svg";
import location from "/icons/location.svg";
export default function ContactCard() {
  return (
    <div className="w-10/12 mx-auto my-14 text-white bg-black border-2 border-gray-500 rounded-xl">
      <div className="flex justify-around items-center py-24 ">
        <div className="flex items-center gap-x-5">
          <div>
            <img src={calender} alt="Calender" />
          </div>
          <div>
            <h1 className="font-medium text-base">We are open monday-friday</h1>
            <h1 className="font-bold text-2xl">7:00 am - 9:00 pm</h1>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div>
            <img src={call} alt="Phone Call" />
          </div>
          <div>
            <h1 className="font-medium text-base">Have a question?</h1>
            <h1 className="font-bold text-2xl">+2546 251 2658</h1>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div>
            <img src={location} alt="Location" />
          </div>
          <div>
            <h1 className="font-medium text-base">Need a repair? our address</h1>
            <h1 className="font-bold text-2xl">Liza Street, New York</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
