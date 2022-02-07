import { useState } from "react";
import ShoppingCard from "./components/Cart/ShoppingCart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card/card";
import CartProvider from "./Store/cartProvider";
// import IntervalExample from "./vv";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCLoseCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Card handleCLoseCart={handleCLoseCart} />}
      {/* <IntervalExample /> */}
      <Header onshow={handleShowCart} />
      {showCart && <ShoppingCard onClose={handleCLoseCart} />}
      <section>
        <Meals />
      </section>
    </CartProvider>
  );
}

export default App;
