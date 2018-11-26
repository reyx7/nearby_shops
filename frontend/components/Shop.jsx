import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import LikeIcon from "@material-ui/icons/ThumbUpAlt";
import RemoveIcon from "@material-ui/icons/Delete";
import DislikeIcon from "@material-ui/icons/ThumbDownAlt";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	actions: {
		display: "flex"
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

const Shop = ({
	classes,
	name,
	url,
	handleLike,
	handleDislike,
	handleRemove
}) => (
	<Grid item xs={12} sm={6} md={3} lg={3}>
		<Card>
			<CardHeader title={name} />
			<CardMedia className={classes.media} image={url} title={name} />
			<CardActions className={classes.actions}>
				{!handleRemove && (
					<Grid container spacing={8} justify="center">
						<Grid item xs={6}>
							<Button
								variant="outlined"
								color="primary"
								fullWidth
							>
								<LikeIcon className={classes.extendedIcon} />
								Like
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								variant="outlined"
								color="secondary"
								fullWidth
							>
								<DislikeIcon className={classes.extendedIcon} />
								Dislike
							</Button>
						</Grid>
					</Grid>
				)}
				{handleRemove && (
					<Button variant="outlined" color="secondary" fullWidth>
						<RemoveIcon className={classes.extendedIcon} />
						Remove from favorite
					</Button>
				)}
			</CardActions>
		</Card>
	</Grid>
);

Shop.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	handleLike: PropTypes.func.isRequired,
	handleDislike: PropTypes.func.isRequired
};

export default withStyles(styles)(Shop);
