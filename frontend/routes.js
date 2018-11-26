import Auth from "./views/Auth";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

export default [
	{
		path: "/home",
		component: Home
	},
	{
		path: "/login",
		component: Auth
	}
];
