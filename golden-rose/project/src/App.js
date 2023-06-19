// COMPONENTS
import IndexHeader from "./Components/Header/IndexHeader.js";
import Products from "./Components/Products/Products.js";
import Hilights from "./Components/Hilights/Hilights.js";

function App() {
  return (
    <div>
      {/* LANDING PAGE */}
      <IndexHeader />
      <Products />
      <Hilights />
    </div>
  );
}

export default App;
