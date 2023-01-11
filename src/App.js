import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCatHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <Fragment className="App">
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      
      <Header onShowCart={showCatHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
