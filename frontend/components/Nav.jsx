import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Place from "@material-ui/icons/Place";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";

const Nav = ({ value, handleChange }) => (
	<Grid container justify="flex-end">
		<Tabs value={value} onChange={handleChange}>
			<Tab label="Nearby Shops" value="nearby_shops" icon={<Place />} />
			<Tab
				label="My Preferend Shops"
				value="favorite_shops"
				icon={<FavoriteIcon />}
			/>
		</Tabs>
	</Grid>
);

Nav.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Nav;
