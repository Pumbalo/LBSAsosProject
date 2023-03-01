import "./App.css";
import { useState } from "react";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddToCartContext from "./Contexts/AddToCartContext";

import AddToWishlistContext from "./Contexts/AddToWishlistContext";

import LoginStatusContext from "./Contexts/LoginStatusContext";

// Moduler för "dark" och "light" theme. Mer i ./themes.js
import { ThemeProvider } from "styled-components";
import { ThemeToggler } from "./ThemeToggler";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

import Home from "./components/Home/Home";

import Account from "./components/Account/Account";

import CategoryList from "./components/CategoryList/CategoryList";

import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Wishlist from "./components/Wishlist/Wishlist";
import Product from "./components/Product/Product";

import FetchAPI from "./components/Product/ProductFetch/FetchAPI";

function App() {
  // "Lifting state up" ifrån ./ThemeToggler
  const [theme, toggleTheme] = ThemeToggler();

  // Ifall "theme" är "light" blir "themeMode" till "dark", och tvärtom ifall "theme" är "dark".
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // Sätter de theme som är aktiverat i LocalStorage så att det går att få tag i det över hela hemsidan.
  localStorage.setItem("CurrentTheme", theme);

  // theme={theme} | toggleTheme={toggleTheme} => Behöver skickas till alla ./BottomNavigation.js
  // För att göra knappen möjlig att klicka och ändra theme.

  // Skapar en state för Cart items (context).
  const [cartItems, setCartItems] = useState([]);

  // Skapar en state för Wishlist items (context).
  const [wishlistItems, setWishlistItems] = useState([]);

  // Skapar en state för Login Status (context)
  const [loginStatus, setLoginStatus] = useState("");

  return (
    <AddToCartContext.Provider value={{ cartItems, setCartItems }}>
      <AddToWishlistContext.Provider
        value={{ wishlistItems, setWishlistItems }}
      >
        <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
          <ThemeProvider theme={themeMode}>
            {/* GlobalStyles skapas i ./themes.js */}
            <GlobalStyles />
            <Router>
              <Route exact path="/">
                <Home theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/account">
                <Account theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/category/:type/:id">
                <CategoryList theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/cart">
                <ShoppingCart theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/wishlist">
                <Wishlist theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/product">
                <Product theme={theme} toggleTheme={toggleTheme} />
              </Route>
              <Route exact path="/category/:type/:id/:productid">
                <FetchAPI />
              </Route>
            </Router>
          </ThemeProvider>
        </LoginStatusContext.Provider>
      </AddToWishlistContext.Provider>
    </AddToCartContext.Provider>
  );
}

export default App;

// Info:
// Styled-Compontent är ett library som tillåter dig att lägga din css i din JavaScript fil på ett enkelt sätt
// Varför man gör detta? I mitt fall har jag "light" och "dark" mode, vad styled-compontent tillåter mig
// är att jag kan sätta färger som variabler. Man kan använda sig av css variabler så klart,
// Men i react projekt är styled-components mer effektivt.
// Samt är det bra att använda styled-component om det är lite css kod som ska skrivas, det kan underlätta med
// mindre filer då.
