import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-8 mx-auto sm:container">
      <div className="flex flex-col gap-8 justify-between items-center mb-10 md:items-start lg:flex-row">
        <h1 className="text-3xl font-bold text-white md:text-left">
          audiophile
        </h1>
        <nav className="flex flex-col gap-8 justify-center items-center sm:flex-row">
          <a className="text-white uppercase text-md font-smibold">home</a>
          <a className="text-white uppercase text-md font-smibold">
            headphones
          </a>
          <a className="text-white uppercase text-md font-smibold">speakers</a>
          <a className="text-white uppercase text-md font-smibold">earphones</a>
        </nav>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center mb-12">
        <p className="text-gray-500 md:w-full text-md">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="flex flex-col gap-8 justify-between items-center w-full sm:flex-row">
          <p className="font-semibold text-center text-gray-400 md:text-left text-md">
            Copyright 2021. All rights reserved
          </p>
          <div className="flex gap-4 justify-center items-center">
            <FaFacebookSquare className="text-2xl text-white" />
            <FaTwitter className="text-2xl text-white" />
            <FaInstagram className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
