import React from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Page from "../container/Page";
import Shops from "../container/Shops";
import Menu from "../container/Menu";
import MapImage from "../images/map.png";

export default ({ match, location }) => {
	return (
		<div>
			{match.url !== location.pathname &&
				(location.pathname !== `${match.url}/favorite_shops` &&
					location.pathname !== `${match.url}/nearby_shops`) && (
					<Redirect to="/home/nearby_shops" />
				)}
			<Page expend={false} title="Nearby Shops App">
				<Menu />
				<br />
				<Shops />
				{location.pathname === "/home" && (
					<div>
						<Grid container justify="center">
							<Typography
								component="h1"
								variant="h3"
								gutterBottom
							>
								Welcome To Nearby Shops Application
							</Typography>
						</Grid>
						<br />
						<Grid container justify="center">
							<img
								src={MapImage}
								alt="mapimage"
								style={{ height: 280, width: 310 }}
							/>
						</Grid>
					</div>
				)}
			</Page>
		</div>
	);
};
