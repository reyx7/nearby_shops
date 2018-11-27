import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
	grow: {
		flexGrow: 1
	},
	navbar: {
		height: 340
	}
};

const Navbar = ({ classes, expend, handleLogout, title }) => (
	<AppBar className={expend ? classes.navbar : null} position="static">
		<Toolbar>
			{!expend && (
				<Typography
					variant="h5"
					color="inherit"
					className={classes.grow}
				>
					{title}
				</Typography>
			)}
			{!expend && (
				<div>
					<Button color="inherit" onClick={handleLogout}>
						Logout
					</Button>
				</div>
			)}
		</Toolbar>
	</AppBar>
);

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
	expend: PropTypes.bool.isRequired,
	handleLogout: PropTypes.func.isRequired
};

export default withStyles(styles)(Navbar);
