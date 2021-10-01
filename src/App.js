import './App.css';
import Login from './components/Login';
import FormContainer from './containers/FormContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailsContainer from './containers/DetailsContainer';

function App() {
  return (
    <div>
    

      <Router>
      
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/form">
            <FormContainer />
          </Route>
          <Route exact path="/details">
            <DetailsContainer />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
