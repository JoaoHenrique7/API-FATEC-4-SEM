import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import { Navigate } from "react-router-dom";

function App() {
	const session_token = window.localStorage.getItem("session_token");

	if (!session_token) {
		return <Navigate to="/auth/login" />;
	} else {
		return <Sidebar />;
	}
}

export default App;
