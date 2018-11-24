import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "./config/api";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";

const Root = props => {
	return (
		<ApolloProvider client={Client}>
			<App />>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
