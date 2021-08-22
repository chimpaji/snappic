import { useGlobalContext } from "./context";
import "./styles.css";
import Main from "./pages/Main";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Enable FB pixel tracking
import ReactPixel from "react-facebook-pixel";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};

// import Analytics from "analytics";
// import googleTagManager from "@analytics/google-tag-manager";

// export const analytics = Analytics({
//   app: "snappic",
//   plugins: [
//     googleTagManager({
//       containerId: "GTM-PVDRKNP",
//     }),
//   ],
// });

//Just replace FB pixel id here and its all good
const PIXEL_ID =
  process.env.NODE_ENV === "development" ? "1111111111111" : "638146346577970";
ReactPixel.init(PIXEL_ID, undefined, options);

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
        <Route exact path="/terms" children={Terms} />
        <Route exact path="/privacy" children={Privacy} />
      </Switch>
    </Router>
  );
}
