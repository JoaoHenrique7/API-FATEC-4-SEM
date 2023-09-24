import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/public/SignIn/SignIn";
import AuthLayout from "../../layout/Auth/AuthLayout";
import CreateUserLayout from "../../layout/CreateUser/CreateUserLayout";
import CreateUser from "../../pages/public/createUser/CreateUser";
import RecoveryPass from "../../pages/public/RecoveryPass/RecoveryPass";
import ListUserTable from "../../pages/public/ListUser/ListUser";

function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route element={<AuthLayout />}>
				<Route path="/sign-in" element={<SignIn />} />
				{/* <Route path="/recovery" element={<RecoveryPass />} /> */}
				<Route path="/listUser" element={<ListUserTable />} />
			</Route>
			<Route element={<CreateUserLayout />}>
				<Route path="/createUser" element={<CreateUser />} />
			</Route>
		</Routes>
	);
}

export default PublicRoutes;
