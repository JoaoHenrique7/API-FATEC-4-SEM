import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./public/PublicRoutes.route";
import PrivateRoutes from "./private/PrivateRoutes.route";

function Routes() {
	return (
		<BrowserRouter>
			<PublicRoutes />
			<PrivateRoutes />
		</BrowserRouter>
	);
}

export default Routes;
