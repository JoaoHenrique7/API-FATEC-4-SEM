import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/public/SignIn/SignIn";
import AuthLayout from "../../layout/Auth/AuthLayout";

function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route element={<AuthLayout />}>
				<Route path="/sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
}

export default PublicRoutes;
