import React from "react";
import Nav from "../components/Nav";
import { Route, withRouter } from "react-router-dom";

export default withRouter(({ match, history }) => {
	const handleChange = (e, value) => {
		history.push(`${match.url}/${value}`);
	};
	return (
		<div>
			<Route
				path={`${match.url}`}
				exact
				component={() => <Nav handleChange={handleChange} />}
			/>
			<Route
				path={`${match.url}/favorite_shops`}
				component={() => (
					<Nav value="favorite_shops" handleChange={handleChange} />
				)}
			/>
			<Route
				path={`${match.url}/nearby_shops`}
				component={() => (
					<Nav value="nearby_shops" handleChange={handleChange} />
				)}
			/>
		</div>
	);
});
