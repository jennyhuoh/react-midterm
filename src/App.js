import './App.css';
import Home from './pages/Home';
import Burger from './pages/Buger';
import Meat from './pages/Meat';
import ShoppingCart from './pages/ShoppingCart';
import Ingredients from './pages/Ingredients';
import Complete from './pages/Complete';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from "./store/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/burger" component={Burger} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/meat" component={Meat} />
          <Route exact path="/ingredients" component={Ingredients} /> */}
          {/* <Route exact path="/complete" component={Complete} /> */}
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
