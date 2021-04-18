import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import SubjectPage from "./components/subjects/SubjectPage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/subjects/:id/:name">
            <SubjectPage />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
