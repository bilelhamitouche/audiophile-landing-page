import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      <header className="bg-zinc-800">
        <Navbar />
        <Hero />
      </header>
      <ProductCategories />
      <ProductsList />
      <About />
      <div className="bg-zinc-800">
        <div className="flex px-8 mx-auto sm:container">
          <div className="w-40 h-2 bg-orange-500"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
