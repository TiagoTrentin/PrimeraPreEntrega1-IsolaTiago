
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from '../src/CartContext';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/category/:category" component={ItemListContainer} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
