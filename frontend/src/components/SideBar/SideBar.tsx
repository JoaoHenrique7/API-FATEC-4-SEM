import React from "react";
import styles from "./SideBar.module.css";
import wallet from "../../assets/wallet.svg";
import chart from "../../assets/chart.svg";
import profile from "../../assets/profile.svg";
import signOut from "../../assets/signOut.svg";

class Sidebar extends React.Component {
	redirect = () => {
		window.localStorage.removeItem("session_token");
		window.open("/auth/login", "_self");
	};

	render() {
		return (
			<div className={styles["sidebar"]}>
				<img src={wallet} className={styles["options"]}></img>
				<img src={chart} className={styles["options"]}></img>
				<img src={profile} className={styles["options"]}></img>
				<img src={signOut} className={styles["signOut"]}></img>
			</div>
		);
	}
}

export default Sidebar;
