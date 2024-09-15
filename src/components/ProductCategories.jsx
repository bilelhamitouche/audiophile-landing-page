import ProductCategoryCard from "./ProductCategoryCard";
import HeadsetImage from "../assets/headset.png";
import SpeakerImage from "../assets/speaker.png";
import EarphoneImage from "../assets/earphone.png";

function ProductCategories() {
  return (
    <section className="grid grid-cols-1 grid-rows-3 gap-32 justify-center items-center px-8 pt-80 mx-auto mb-60 bg-gray-50 md:container md:grid-cols-3 md:gap-16 md:-mb-48">
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
