import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    

      <Router>
      
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
