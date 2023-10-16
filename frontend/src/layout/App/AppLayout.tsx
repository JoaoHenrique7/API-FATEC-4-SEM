import React from "react";
import styles from "./AppLayout.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout(): JSX.Element {
	return (
		<main className={styles["layout"]}>
			<Sidebar />
			<Outlet />
		</main>
	);
}

export default AppLayout;