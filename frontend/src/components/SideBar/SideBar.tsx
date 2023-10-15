import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import wallet from "../../assets/wallet.svg";
import chart from "../../assets/chart.svg";
import profile from "../../assets/profile.svg";
import signOut from "../../assets/signOut.svg";
import { SessionContext, SessionContextType } from "../../context/Session/SessionContext";
import { Outlet } from "react-router-dom";

function Sidebar() {
	const { session, logout } = useContext(SessionContext) as SessionContextType;
	
	const redirectHistoric = () => {
		window.location.href = "/listTransaction";
	};

	return (
		<>
			<div className={styles["sidebar"]}>
				<img src={wallet} className={styles["options"]} onClick={redirectHistoric}></img>
				<img src={chart} className={styles["options"]}></img>
				<img src={profile} className={styles["options"]}></img>
				<img src={signOut} className={styles["signOut"]} onClick={logout}></img>
			</div>
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</>
	);
}

export default Sidebar;
