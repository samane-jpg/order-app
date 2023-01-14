import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCatHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider className="App">
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      
      <Header onShowCart={showCatHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
