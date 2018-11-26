import React from "react";
import Page from "../container/Page";
import Shops from "../container/Shops";
import Menu from "../container/Menu";

export default () => {
	return (
		<Page expend={false} title="Nearby Shops App">
			<Menu />
			<br />
			<Shops />
		</Page>
	);
};
