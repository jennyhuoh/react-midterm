import './App.css';
import Home from './pages/Home';
import Burger from './pages/Buger';
import Meat from './pages/Meat';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from "./store/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/burger" component={Burger} />
          <Route exact path="/meat" component={Meat} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
