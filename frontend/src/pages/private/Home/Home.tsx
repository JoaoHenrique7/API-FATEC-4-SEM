import React, { useContext, useEffect } from "react";
import styles from "./Home.module.css";
import { SessionContext, SessionContextType } from "../../../context/Session/SessionContext";
import IconWithText from "../../../components/IconWithText/IconWithText";
import { FaMoneyBill } from "react-icons/fa";

function Home(): JSX.Element {
	const { session } = useContext(SessionContext) as SessionContextType;

	return (
		<section className={styles["page"]}>
			<h1>{session && session.user.nomeUsuario}</h1>
			<h3>{session && session.user.emailUsuario}</h3>
			<p>
				Saldo:
				<IconWithText icon={FaMoneyBill} text={session && session.user.registro.saldo} />
			</p>
		</section>
	);
}

export default Home;
