import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";

const httpLink = new HttpLink({ uri: "/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
		headers: {
			authorization: localStorage.getItem("token") || null
		}
	});

	return forward(operation);
});

export default new ApolloClient({
	link: concat(authMiddleware, httpLink)
});
