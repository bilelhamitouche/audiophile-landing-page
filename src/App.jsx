import About from "./components/About";
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
    </>
  );
}

export default App;
