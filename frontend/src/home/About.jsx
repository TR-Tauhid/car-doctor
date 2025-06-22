import person from "/images/about_us/person.jpg"
import parts from "/images/about_us/parts.jpg"
export default function About() {
  return (
    <div className="my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-x-10 h-full relative ">
        <div className="relative my-8 md:my-14">
          <img className="rounded-lg mx-auto w-10/12 md:w-4/6 md:h-96 lg:h-[600px]" src={person} alt="Person" />
          <img className="rounded-2xl absolute md:right-10 right-0 top-30 md:top-55 lg:top-70 lg:w-2/5 lg:h-[420px] h-3/5 border-8 border-white" src={parts} alt="parts" />
        </div>

        <div className="space-y-10 lg:w-2/5 mt-14 max-sm:pl-4">
          <h3 className="text-[#FF3811] text-3xl font-bold">About Us</h3>
          <h1 className="text-2xl md:text-5xl font-bold">We are qualified & of experience in this field.</h1>

          <div className="font-normal text-base leading-6 max-sm:text-sm space-y-4">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don't look even
              slightly believable.{" "}
            </p>
            <p>
              The majority have suffered alteration in some form, by injected
              humour, or randomized words which don't look even slightly
              believable.{" "}
            </p>
          </div>

          <div className="w-full flex max-md:justify-center">
            <button className="btn w-60 py-6 bg-[#FF3811] text-white font-semibold rounded-lg">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
