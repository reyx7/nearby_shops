import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/grey";

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		backgroundColor: indigo["100"]
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	title: {
		flexGrow: 1
	}
});

const LoginForm = ({
	classes,
	username,
	password,
	handleChange,
	handleSubmit,
	error
}) => (
	<Grid container justify="center">
		<Grid item md={5} xs={12} sm={9}>
			<Paper className={classes.root} elevation={1}>
				<Grid container justify="center">
					<Typography
						variant="h2"
						className={classes.grow}
						component="h1"
					>
						Authentication
					</Typography>
				</Grid>
				<Grid container />
				<Grid item xs={12}>
					<br />
					<Divider />
					<Grid container justify="center">
						<TextField
							error={error}
							id="outlined-uncontrolled"
							label="Email"
							name="email"
							value={username}
							onChange={e => {
								handleChange(e.target.name, e.target.value);
							}}
							className={classes.textField}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
						<TextField
							error={error}
							id="outlined-uncontrolled"
							label="Password"
							name="password"
							onChange={e => {
								handleChange(e.target.name, e.target.value);
							}}
							value={password}
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
							onClick={handleSubmit}
							size="large"
						>
							Login
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	</Grid>
);

LoginForm.propTypes = {
	classes: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired
};

export default withStyles(styles)(LoginForm);
