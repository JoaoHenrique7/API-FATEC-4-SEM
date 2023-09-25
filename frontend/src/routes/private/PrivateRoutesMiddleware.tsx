import React, { useContext } from "react";
import { SessionContext, SessionContextType } from "../../context/Session/SessionContext";
import { Navigate, Outlet } from "react-router-dom";

type TProperties = {
	redirectPath: string;
};

/**
 * Function that acts as a middleware for private routes.
 *
 * @param {TProperties} redirectPath - The path to redirect to.
 * @return {JSX.Element} The JSX element to render.
 */
function PrivateRoutesMiddleware({ redirectPath }: TProperties): JSX.Element {
	const { session } = useContext(SessionContext) as SessionContextType;

	if (!session) {
		return <Navigate to={redirectPath} replace />;
	}

	return <Outlet />;
}

export default PrivateRoutesMiddleware;
