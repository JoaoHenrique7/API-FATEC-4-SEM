import React from "react";
import styles from "./AppLayout.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function AppLayout(): JSX.Element {
	return (
		<main className={styles["layout"]}>
			<Sidebar />
			<Outlet />
			<Footer />
		</main>
	);
}

export default AppLayout;