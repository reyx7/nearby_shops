import React from "react";
import Shop from "../components/Shop";
import Grid from "@material-ui/core/Grid";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { Query, Mutation } from "react-apollo";

const GET_FAVORITE_SHOPS = gql`
	query getFavoriteShops {
		preferredShops {
			id
			name
			picture
		}
	}
`;

const GET_NEARBY_SHOPS = gql`
	query getNearbyShop {
		nearbyShops {
			id
			name
			picture
		}
	}
`;

const LIKE_SHOP = gql`
	mutation like($pk: ID!) {
		like(pk: $pk) {
			id
		}
	}
`;

const DISLIKE_SHOP = gql`
	mutation dislike($pk: ID!) {
		dislike(pk: $pk) {
			id
		}
	}
`;

const REMOVE_SHOP = gql`
	mutation remove($pk: ID!) {
		remove(pk: $pk) {
			ok
		}
	}
`;

const Shops = ({ location, match }) => {
	if (location.pathname === `${match.url}/favorite_shops`)
		return (
			<Grid container spacing={16}>
				<Query query={GET_FAVORITE_SHOPS}>
					{({ data, loading, error }) => {
						if (loading) return null;
						if (error) return null;
						return data.preferredShops.map(
							({ id, name, picture }) => (
								<Mutation mutation={REMOVE_SHOP}>
									{remove => (
										<Shop
											key={id}
											name={name}
											url={picture}
											handleRemove={() => {
												remove({
													variables: {
														pk: id
													}
												});
												document.location.reload();
											}}
										/>
									)}
								</Mutation>
							)
						);
					}}
				</Query>
			</Grid>
		);
	if (location.pathname === `${match.url}/nearby_shops`)
		return (
			<Grid container spacing={16}>
				<Query query={GET_NEARBY_SHOPS}>
					{({ data, loading, error }) => {
						if (loading) return null;
						if (error) return null;
						return (
							<Mutation mutation={LIKE_SHOP}>
								{like => (
									<Mutation mutation={DISLIKE_SHOP}>
										{dislike =>
											data.nearbyShops.map(
												({ id, name, picture }) => (
													<Shop
														key={id}
														name={name}
														url={picture}
														handleLike={() => {
															like({
																variables: {
																	pk: id
																}
															});
															document.location.reload();
														}}
														handleDislike={() => {
															dislike({
																variables: {
																	pk: id
																}
															});
															document.location.reload();
														}}
													/>
												)
											)
										}
									</Mutation>
								)}
							</Mutation>
						);
					}}
				</Query>
			</Grid>
		);
	return <div />;
};

export default withRouter(Shops);
