import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
