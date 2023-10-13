import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutesMiddleware from "./PrivateRoutesMiddleware";
import Home from "../../pages/private/Home/Home";
import Transaction from "../../pages/private/Transaction/Transaction";

function PrivateRoutes(): JSX.Element {
	return (
		<Routes>
			<Route element={<PrivateRoutesMiddleware redirectPath="/sign-in" />}>
				<Route path="/" element={<Home />} />
				<Route path="/transaction" element={<Transaction />} />
			</Route>
		</Routes>
	);
}

export default PrivateRoutes;
