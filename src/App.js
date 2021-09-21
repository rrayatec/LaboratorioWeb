import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <Switch>
        <Route path={"/login"}>Login Page</Route>
        <Route path={"/signup"}>Signup Page</Route>
      </Switch>
    </Router>
  );
}
