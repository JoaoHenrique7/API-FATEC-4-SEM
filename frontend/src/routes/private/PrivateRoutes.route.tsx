import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutesMiddleware from "./PrivateRoutesMiddleware";
import Home from "../../pages/private/Home/Home";
import Transaction from "../../pages/private/Transaction/Transaction";
import ListTransactions from "../../pages/private/ListTransactions/ListTransactions";
import AppLayout from "../../layout/App/AppLayout";
import Profile from "../../pages/private/Profile/Profile";
import AddOil from "../../pages/private/AddOil/AddOil";

function PrivateRoutes(): JSX.Element {
	return (
		<Routes>
			<Route element={<PrivateRoutesMiddleware redirectPath="/sign-in" />}>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/transaction/new" element={<Transaction />} />
					<Route path="/transaction/historic" element={<ListTransactions />} />
					<Route path="/transaction/addoil" element={<AddOil />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default PrivateRoutes;
