import React from "react";
import Navbar from "../components/Navbar";

const Page = ({ expend, title, children }) => (
	<div>
		<Navbar
			expend={expend}
			handleLogout={() => {
				localStorage.removeItem("isLogin");
				localStorage.removeItem("token");
				document.location.reload();
			}}
			title={title}
		/>
		{children}
	</div>
);
export default Page;
