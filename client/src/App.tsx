import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";

export const App = () => (
  <ChakraProvider theme={theme}>
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
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </div>
      </Layout>
    </Router>
  </ChakraProvider>
);
