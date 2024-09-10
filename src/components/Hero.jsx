import HeadphoneImage from "../assets/headphone.png";

function Hero() {
  return (
    <section className="flex flex-col gap-10 justify-center items-center p-8 mx-auto sm:flex-row sm:gap-40 md:container bg-zinc-800">
      <div className="flex flex-col gap-8">
        <span className="tracking-widest text-gray-400 uppercase">
          New product
        </span>
        <h1 className="flex flex-col gap-3 text-6xl font-bold text-white uppercase">
          <span>xx99 mark ii</span>
          <span>headphones</span>
        </h1>
        <p className="font-normal text-gray-400 max-w-80">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiasts.
        </p>
        <button className="self-start py-4 px-8 font-normal text-white uppercase bg-orange-400">
          See product
        </button>
      </div>
      <img
        src={HeadphoneImage}
        alt="headphone image"
        className="object-fill w-4/6 sm:w-3/6"
      />
    </section>
  );
}

export default Hero;
