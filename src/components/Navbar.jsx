import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 mx-auto border-b md:container bg-zinc-800 border-b-gray-500">
      <h1 className="text-2xl font-bold text-white">audiophile</h1>
      <ul className="flex gap-8 justify-center items-center text-white">
        <li>
          <a
            href="#"
            className="uppercase transition-opacity cursor-pointer hover:opacity-80">
            home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase transition-opacity cursor-pointer hover:opacity-80">
            headphones
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase transition-opacity cursor-pointer hover:opacity-80">
            speakers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase transition-opacity cursor-pointer hover:opacity-80">
            earphones
          </a>
        </li>
      </ul>
      <a
        href="cart"
        className="p-1 rounded-full transition-colors hover:bg-zinc-700">
        <IoCartOutline className="text-2xl font-bold text-white cursor-pointer" />
      </a>
    </nav>
  );
}

export default Navbar;
