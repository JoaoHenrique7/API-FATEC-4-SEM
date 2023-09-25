import React, { useContext } from "react";
import { SessionContext, SessionContextType } from "../../context/Session/SessionContext";
import { Navigate, Outlet } from "react-router-dom";

type TProperties = {
	redirectPath: string;
};

/**
 * Middleware for public routes.
 *
 * @param {TProperties} redirectPath - An object containing the redirect path.
 * @return {JSX.Element} - The JSX element to render.
 */
function PublicRoutesMiddleware({ redirectPath }: TProperties): JSX.Element {
	const { session } = useContext(SessionContext) as SessionContextType;

	if (session) {
		return <Navigate to={redirectPath} replace />;
	}

	return <Outlet />;
}

export default PublicRoutesMiddleware;
