import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	}
});

const LoginForm = ({ classes, emailError, passError, handleLogin }) => (
	<Grid container>
		<Grid item md={5} xs={12} sm={9}>
			<Paper className={classes.root} elevation={1}>
				<Grid container justify="center">
					<Typography variant="h2" component="h1">
						Authentication
					</Typography>
				</Grid>
				<Grid container />
				<Grid item xs={12}>
					<br />
					<Divider />
					<TextField
						error={emailError}
						id="outlined-uncontrolled"
						label="Email"
						className={classes.textField}
						margin="normal"
						variant="outlined"
						fullWidth
					/>
					<TextField
						error={passError}
						id="outlined-uncontrolled"
						label="Password"
						className={classes.textField}
						margin="normal"
						variant="outlined"
						fullWidth
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						fullWidth
					>
						Login
					</Button>
				</Grid>
			</Paper>
		</Grid>
	</Grid>
);

LoginForm.propTypes = {
	classes: PropTypes.object.isRequired,
	handleLogin: PropTypes.func.isRequired,
	passError: PropTypes.bool.isRequired,
	emailError: PropTypes.bool.isRequired
};

export default withStyles(styles)(LoginForm);
