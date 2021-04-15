import './App.css';
import Home from './pages/Home';
import { Browser, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    // <Home />
  );
}

export default App;
