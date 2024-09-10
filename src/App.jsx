import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";

function App() {
  return (
    <>
      <header className="bg-zinc-800">
        <Navbar />
        <Hero />
      </header>
      <ProductCategories />
    </>
  );
}

export default App;
