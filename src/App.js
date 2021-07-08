import { useGlobalContext } from "./context";
import "./styles.css";
import Main from "./pages/Main";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
const options = {
	autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
	debug: true, // enable logs
};

//Just replace FB pixel id here and its all good
const PIXEL_ID =
	process.env.NODE_ENV === "development" ? "1111111111111" : "638146346577970";
ReactPixel.init(PIXEL_ID, undefined, options);

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/main'>
					<Main />
				</Route>
				<Route exact path='/'>
					<Homepage />
				</Route>
			</Switch>
		</Router>
	);
}
