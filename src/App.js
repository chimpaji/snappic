import { useGlobalContext } from "./context";
import "./styles.css";
import Main from "./pages/Main";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
