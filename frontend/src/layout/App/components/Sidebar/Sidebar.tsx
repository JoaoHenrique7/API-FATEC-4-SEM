import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaDoorOpen, FaWaveSquare } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { SessionContextType } from "../../../../context/Session/SessionContext";
import useSession from "../../../../hooks/useSession.hook";

function Sidebar() {
	const { session, logout }: SessionContextType = useSession();
	const location = useLocation();
	const user = session?.user;

	const [isClosed, setIsClosed] = useState<boolean>(true);

	const toggleSidebar = () => setIsClosed(prev => !prev);

	useEffect(() => {
		setIsClosed(true);
	}, [location.pathname]);

	return (
		<aside className={styles["sidebar__wrapper"]}>
			<div className={`${styles["sidebar"]} ${isClosed ? styles["--closed"] : styles["--open"]}`}>
				<button className={styles["sidebar__close"]} onClick={toggleSidebar}>
					{isClosed ? <FaAngleRight /> : <FaAngleLeft />}
				</button>
				<section className={styles["sidebar__profile"]}>
					<div className={styles["sidebar__profile__icon"]}>
						<span>{user &&
							user.nomeUsuario.split("")[0].toLocaleUpperCase()
							+
							user.nomeUsuario.split("")[1].toLocaleUpperCase()
						}</span>
					</div>
					{!isClosed &&
						<Link to={"/profile"} className={styles["sidebar__profile__info"]}>
							<span>{user && user.nomeUsuario}</span>
							<span>{user && user.emailUsuario}</span>
						</Link>
					}
				</section>
				<nav className={styles["sidebar__navigation"]}>
					<Link to={"/"}>
						<FaWaveSquare />
						{!isClosed && <p>Dashboard</p>}
					</Link>
					<Link to={
						(user && user.tipoUsuario.tipoUsuario !== "Estabelecimento") ? "/transaction/new" : "/transaction/historic"
					}>
						<BiTransfer />
						{!isClosed && <p>Transações</p>}
					</Link>
					<Link to={"/"} onClick={logout}>
						<FaDoorOpen />
						{!isClosed && <p>Sair</p>}
					</Link>
				</nav>
			</div>
			{location.pathname.includes("/transaction") &&
				<div className={styles["sidebar__sub"]}>
					<h3>Transações</h3>
					{(user && user.tipoUsuario.tipoUsuario !== "Estabelecimento") &&
						<Link to={"/transaction/new"}>
							<AiOutlinePlus />
						Nova transação
						</Link>
					}
					<Link to={"/transaction/historic"}>
						<GrHistory />
						Historico
					</Link>
				</div>
			}
		</aside>
	);
}

export default Sidebar;