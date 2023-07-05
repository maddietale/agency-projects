// COMPONENTS
import IndexHeader from "./Components/Header/IndexHeader.js";
import Products from "./Components/Products/Products.js";
import Hilights from "./Components/Hilights/Hilights.js";
import Order from "./Components/Order/Order.js";
import About from "./Components/About/About.js";
import Comments from "./Components/Comments/Comments.js";
import Customers from "./Components/Customers/Customers.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div>
      {/* LANDING PAGE */}
      <IndexHeader />
      <Products />
      <Hilights />
      <Order />
      <About />
      <Comments />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
