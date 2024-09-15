import PersonWearingHeadsetImage from "../assets/person-wearing-headset.jpg";

function About() {
  return (
    <section className="flex flex-col gap-40 items-center p-8 py-28 mx-auto sm:container sm:flex-row">
      <div className="flex flex-col gap-8 justify-center items-start">
        <h2 className="flex flex-col">
          <p className="text-5xl font-medium text-black uppercase">
            bringing you the
          </p>
          <p className="text-5xl font-medium text-black uppercase">
            <span className="text-orange-300">best</span> audio gear
          </p>
        </h2>
        <p className="text-lg text-gray-500 max-w-96">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={PersonWearingHeadsetImage}
        alt="person image"
        className="object-fill rounded-lg sm:w-3/6 w-6/6"
      />
    </section>
  );
}

export default About;
