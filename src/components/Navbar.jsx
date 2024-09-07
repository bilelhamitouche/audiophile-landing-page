import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 mx-auto border-b md:container bg-zinc-800 border-b-gray-500">
      <h1 className="text-2xl font-bold text-white">audiophile</h1>
      <ul className="flex gap-8 justify-center items-center text-white">
        <li>
          <a
            href="#"
            className="uppercase">
            home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase">
            headphones
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase">
            speakers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase">
            earphones
          </a>
        </li>
      </ul>
      <a href="cart">
        <IoCartOutline className="text-2xl font-bold text-white" />
      </a>
    </nav>
  );
}

export default Navbar;
