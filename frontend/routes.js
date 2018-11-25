import Auth from "./views/Auth";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

export default [
	{
		path: "/",
		component: Home,
		exact: true
	},
	{
		path: "/login",
		component: Auth
	}
];
