import shoppingBag from "/icons/shoppingBag.svg";

export default function ProductCard({ product, theme }) {
  return (
    <div className="border relative group border-[#E8E8E8] md:w-80 lg:w-96 md:h-[450px] lg:h-auto p-2 md:p-5 rounded-xl shadow-xs md:shadow-md shadow-gray-300 text-center space-y-2">
      <div
        className={`rounded-lg w-full min-sm:h-72 ${
          theme === "light" ? "bg-[#dae2f5] " : "bg-[#1f2325] "
        }`}
      >
        <img className="max-sm:animate-pulse max-sm:w-5 max-sm:h-5 max-sm:right-2 md:hidden group-hover:flex absolute hover:link m-1 md:m-2 " src={shoppingBag} alt="Shopping Bag" />
        <img
          className="p-3 md:px-10 md:py-6 lg:px-14 lg:py-8"
          src={product?.img}
          alt={product?.title}
        />
      </div>

      <div className="rating">
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <input
              key={value}
              id={index}
              type="radio"
              name={`rating-${product?.title}`}
              className="mask mask-star-2 bg-orange-400"
              aria-label={`${product?.rating} star`}
              defaultChecked={value === product?.rating}
              disabled
            />
          );
        })}
      </div>

      <div>
        <h1 className="font-bold text-lg md:text-2xl">{product?.title}</h1>
        <h1 className="font-semibold text-[#FF3811] text-sm md:text-xl">
          {product?.price}
        </h1>
      </div>
    </div>
  );
}
