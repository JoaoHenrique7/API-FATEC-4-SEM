import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/public/SignIn/SignIn";
import AuthLayout from "../../layout/Auth/AuthLayout";
import CreateUserLayout from "../../layout/CreateUser/CreateUserLayout";
import CreateUser from "../../pages/public/createUser/CreateUser";
import ListUserTable from "../../pages/public/ListUser/ListUser";
import PublicRoutesMiddleware from "./PublicRoutesMiddleware";
import RecoveryPass from "../../pages/public/RecoveryPass/RecoveryPass";

function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			<Route element={<PublicRoutesMiddleware redirectPath="/" />}>
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/listUser" element={<ListUserTable />} />
					
				</Route>
				<Route element={<CreateUserLayout />}>
					<Route path="/createUser" element={<CreateUser />} />
					<Route path="/recovery" element={<RecoveryPass loggedIn={false} />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default PublicRoutes;
