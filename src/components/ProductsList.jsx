import SpeakerImage from "../assets/speaker2.png";

function ProductsList() {
  return (
    <section className="flex flex-col gap-10 p-8 mx-auto sm:container">
      <div className="flex relative flex-col bg-orange-400 rounded-lg sm:flex-row">
        <img
          src={SpeakerImage}
          alt="speaker image"
          className="object-fill w-3/6"
        />
        <div className="flex flex-col gap-8 justify-center items-start">
          <h2 className="flex flex-col">
            <span className="text-6xl font-semibold text-white uppercase">
              zx9
            </span>
            <span className="text-6xl font-semibold text-white uppercase">
              speaker
            </span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-96">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a className="py-4 px-8 text-white uppercase bg-black text-md">
            see product
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
