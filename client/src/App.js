import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Posts from "./posts/Posts";

function App() {
  const posts = [
    {
      title: "First Post",
    },
    {
      title: "Second Post",
    },
    {
      title: "Third Post",
    },
  ];
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/posts">
          <Posts posts={posts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
