import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import App from "./App";
import Client from "./config/Client";
import "typeface-roboto";

const theme = createMuiTheme({
	palette: {
		primary: blue
	}
});

const Root = () => (
	<MuiThemeProvider theme={theme}>
		<ApolloProvider client={Client}>
			<Router>
				<App />
			</Router>
		</ApolloProvider>
	</MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
