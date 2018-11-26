import React from "react";
import LoginForm from "../components/LoginForm";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_TOKEN = gql`
	mutation tokenAuth($email: String!, $password: String!) {
		authenticate(email: $email, password: $password) {
			token
		}
	}
`;

const styles = {
	login: {
		marginTop: -150
	}
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(name, value) {
		this.setState({
			[name]: value
		});
	}
	render() {
		const { classes } = this.props;
		const { email, password } = this.state;
		return (
			<Mutation mutation={GET_TOKEN}>
				{(tokenAuth, { data, error }) => {
					if (data) {
						localStorage.setItem("token", data.authenticate.token);
						localStorage.setItem("isLogin", true);
						document.location.reload();
					}
					return (
						<div className={classes.login}>
							<LoginForm
								error={error !== undefined}
								email={email}
								password={password}
								handleSubmit={() => {
									tokenAuth({
										variables: {
											email: email,
											password: password
										}
									});
								}}
								handleChange={this.handleChange}
							/>
						</div>
					);
				}}
			</Mutation>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
