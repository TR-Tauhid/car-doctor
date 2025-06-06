export default function Services({ services }) {
    return (
      <div className="my-8 md:my-14 text-center mx-auto w-11/12">
        <div className="space-y-8 my-8 md:my-24">
          <div className=" w-full text-[#ff3811] font-semibold text-xl">
            <h1>Services</h1>
          </div>

          <div className="text-4xl font-bold ">
            <h1>Our Service Area</h1>
          </div>

          <div className="text-base text-[#737373] md:w-2/5 mx-auto">
            <p>
              The majority have suffered alteration in some form, by injected
              humour, or randomized words which don't look even slightly
              believable.{" "}
            </p>
          </div>
        </div>

        <div className="grid max-[830px]:grid-cols-1 max-[1300px]:grid-cols-2 min-[1301px]:grid-cols-3  gap-6 justify-self-center">
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                id={service?.service_id}
                className="card bg-[#e8e8e81a] md:w-96 shadow-sm border border-gray-200 p-6"
              >
                <figure>
                  <img
                    className="rounded-xl w-full min-h-56"
                    src={service?.img}
                    alt={service?.title}
                  />
                </figure>
                <div className="card-body max-sm:p-3">
                  <h2 className="card-title font-bold text-xl md:text-2xl">
                    {service?.title}
                  </h2>
                  <div className="card-actions  items-center justify-between text-[#ff3811] font-semibold text-xl">
                    <h3>Price: $ {service?.price}</h3>
                    <img src="/icons/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
