import React, { useContext } from "react";
import { SessionContext, SessionContextType } from "../../../context/Session/SessionContext";

function Home(): JSX.Element {
	const { session, logout } = useContext(SessionContext) as SessionContextType;

	return (
		<>
			<h1>{session && session.user.nomeUsuario}</h1>
			<h3>{session && session.user.emailUsuario}</h3>
			<button onClick={logout}>logout</button>
		</>
	);
}

export default Home;
