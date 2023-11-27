import React from "react";
import styles from "./AddOil.module.css";
import AddOilForm from "./components/AddOilForm";
import { BiCoin } from "react-icons/bi";
import { SessionContextType } from "../../../context/Session/SessionContext";
import useSession from "../../../hooks/useSession.hook";
import TUsuario from "../../../@types/Models/TUsuario";

function Transaction(): JSX.Element {
	const { session }: SessionContextType = useSession();
	const user: TUsuario | undefined = session?.user;

	return (
		<section className={styles["page"]}>
			<h1 className={styles["title"]}>Adicionar Oléo</h1>
			<p className={styles["addoil__balance"]}>
				<span>Volume de Óleo Usado:</span>
				<span>{user?.registro.volumeOleoUsado ?? "N/A"} L</span>
			</p>
			<p className={styles["addoil__balance"]}>
				<span>Volume de Óleo Virgem:</span>
				<span>{user?.registro.volumeOleoVirgem ?? "N/A"} L</span>
			</p>
			<AddOilForm />
		</section>
	);
}

export default Transaction;
