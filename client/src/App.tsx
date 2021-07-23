import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import SingleProduct from "./pages/singleProduct";
import Cart from "./pages/cart";
import { CartContextProvider } from "./context/cartContext";
import Login from "./pages/Login";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CartContextProvider>
      <Router>
        <Layout>
          <div>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/products/:id">
                <SingleProduct />
              </Route>
            </Switch>
          </div>
        </Layout>
      </Router>
    </CartContextProvider>
  </ChakraProvider>
);
