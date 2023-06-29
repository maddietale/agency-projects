// COMPONENTS
import IndexHeader from "./Components/Header/IndexHeader.js";
import Products from "./Components/Products/Products.js";
import Hilights from "./Components/Hilights/Hilights.js";
import Order from "./Components/Order/Order.js";
import About from "./Components/About/About.js";

function App() {
  return (
    <div>
      {/* LANDING PAGE */}
      <IndexHeader />
      <Products />
      <Hilights />
      <Order />
      <About />
    </div>
  );
}

export default App;
