import SpeakerImage from "../assets/speaker2.png";
import EarphoneImage from "../assets/earphone2.png";

function ProductsList() {
  return (
    <section className="flex flex-col gap-10 p-8 mx-auto sm:container">
      <div className="flex flex-col justify-center items-center p-16 bg-orange-400 rounded-lg sm:flex-row">
        <img
          src={SpeakerImage}
          alt="speaker image"
          className="object-fill w-3/6"
        />
        <div className="flex flex-col gap-8 justify-center items-start">
          <h2 className="flex flex-col">
            <span className="text-5xl font-semibold text-white uppercase">
              zx9
            </span>
            <span className="text-5xl font-semibold text-white uppercase">
              speaker
            </span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-96">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a className="py-4 px-8 text-white uppercase bg-black border-2 border-black transition-colors cursor-pointer hover:text-black hover:bg-orange-400 text-md">
            see product
          </a>
        </div>
      </div>
      <div className="flex flex-col pl-24 bg-gray-300 rounded-lg sm:flex-row">
        <div className="flex flex-col gap-8 justify-center items-start">
          <h2 className="text-5xl font-semibold uppercase">zx7 speaker</h2>
          <a className="py-4 px-8 text-black uppercase bg-transparent border-2 border-black transition-colors cursor-pointer hover:text-white hover:bg-black text-md">
            see product
          </a>
        </div>
        <img
          src={SpeakerImage}
          alt="speaker image"
          className="object-fill w-3/6"
        />
      </div>
      <div className="flex flex-col gap-8 rounded-lg sm:flex-row md:grid md:grid-cols-2 md:gap-8">
        <img
          src={EarphoneImage}
          alt="earphone image"
          className="object-fill w-full bg-black rounded-lg max-w-fit"
        />
        <div className="flex flex-col gap-8 justify-center items-start py-24 px-16 bg-gray-200 rounded-lg sm:items-start sm:pr-28 sm:pl-24 md:p-8 lg:pl-28">
          <h2 className="text-5xl font-semibold text-black uppercase">
            yx1 earphones
          </h2>
          <a className="py-4 px-8 text-black uppercase bg-transparent border-2 border-black transition-colors cursor-pointer hover:text-white hover:bg-black text-md">
            see product
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
