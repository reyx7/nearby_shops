import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
	render() {
		const { location } = this.props;
		return (
			<div>
				{localStorage.getItem("isLogin") === null &&
					location.pathname !== "/login" && <Redirect to="/login" />}
				{location.pathname === "/login" &&
					localStorage.getItem("isLogin") && <Redirect to="/home" />}
				{routes.map(route => (
					<Route key={route.path} {...route} />
				))}
			</div>
		);
	}
}

export default withRouter(App);
