import ProductCategoryCard from "./ProductCategoryCard";
import HeadsetImage from "../assets/headset.png";
import SpeakerImage from "../assets/speaker.png";
import EarphoneImage from "../assets/earphone.png";

function ProductCategories() {
  return (
    <section className="grid grid-cols-1 grid-rows-3 gap-16 justify-center items-center px-8 pt-80 mx-auto -mb-48 bg-gray-50 sm:grid-cols-3 md:container">
      <ProductCategoryCard
        productCategoryName="headphones"
        productCategoryImage={HeadsetImage}
      />
      <ProductCategoryCard
        productCategoryName="speakers"
        productCategoryImage={SpeakerImage}
      />
      <ProductCategoryCard
        productCategoryName="earphones"
        productCategoryImage={EarphoneImage}
      />
    </section>
  );
}

export default ProductCategories;
