import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./public/PublicRoutes.route";

function Routes() {
	return (
		<BrowserRouter>
			<PublicRoutes />
		</BrowserRouter>
	);
}

export default Routes;
