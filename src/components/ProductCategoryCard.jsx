import { PiCaretRightBold } from "react-icons/pi";

function ProductCategoryCard({ productCategoryName, productCategoryImage }) {
  return (
    <div className="flex relative flex-col gap-10 justify-between items-center px-8 pt-24 pb-8 bg-gray-100 rounded-lg">
      <img
        src={productCategoryImage}
        alt={`${productCategoryName} image`}
        className="absolute -top-20 w-40 h-40 drop-shadow-2xl shadow-current"
      />
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-lg font-semibold text-black uppercase">
          {productCategoryName}
        </h3>
        <a className="flex gap-2 items-center">
          <span className="font-normal text-gray-700 uppercase text-md">
            shop
          </span>
          <PiCaretRightBold className="text-orange-500" />
        </a>
      </div>
    </div>
  );
}

export default ProductCategoryCard;
