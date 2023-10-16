import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import wallet from "../../../../assets/wallet.svg";
import chart from "../../../../assets/chart.svg";
import profile from "../../../../assets/profile.svg";
import signOut from "../../../../assets/signOut.svg";
import historic from "../../../../assets/historic.svg";
import transaction from "../../../../assets/transaction.svg";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
	const { session, logout } = useContext(SessionContext) as SessionContextType;
	const location = useLocation();
	const user = session!.user;

	return (
		<aside className={styles["sidebar"]}>
			<nav className={styles["sidebar__main"]}>
				<Link to={"/"}>
					<img src={profile} alt="Profile icon" />
				</Link>
				<Link to={"/transaction/list"}>
					<img src={wallet} alt="Wallet icon" />
				</Link>
				<Link to={"/"}>
					<img src={chart} alt="Chart icon" />
				</Link>
				<img src={signOut} alt="Sign out icon" onClick={logout} />
			</nav>
			<nav className={styles["sidebar__extras"]}>
				{location.pathname.includes("/transaction") &&
					<div className={styles["sidebar__options"]}>
						<h3>Carteira</h3>
						<hr />
						{user.tipoUsuario.tipoUsuario !== "Estabelecimento" &&
							<Link to={"/transaction"}>
								<img src={transaction} className={styles["options"]} alt="Transaction" />
								<p className={styles["title"]}>Transações</p>
							</Link>
						}
						<Link to={"/transaction/list"}>
							<img src={historic} className={styles["options"]} alt="Historic" />
							<p className={styles["title"]}>Historico</p>
						</Link>
					</div>
				}
			</nav>
		</aside>
	);
}

export default Sidebar;