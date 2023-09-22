import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/public/SignIn/SignIn";
import AuthLayout from "../../layout/Auth/AuthLayout";
import RecoveryPass from "../../pages/public/RecoveryPass/RecoveryPass";

function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route element={<AuthLayout />}>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/recovery" element={<RecoveryPass />} />
			</Route>
		</Routes>
	);
}

export default PublicRoutes;
