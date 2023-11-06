import React from "react";
import styles from "./Transaction.module.css";
import TransactionForm from "./components/TransactionForm";
import { BiCoin } from "react-icons/bi";
import { SessionContextType } from "../../../context/Session/SessionContext";
import useSession from "../../../hooks/useSession.hook";
import TUsuario from "../../../@types/Models/TUsuario";

function Transaction(): JSX.Element {
	const { session }: SessionContextType = useSession();
	const user: TUsuario | undefined = session?.user;

	return (
		<section className={styles["page"]}>
			<h1 className={styles["title"]}>Nova transação</h1>
			<p className={styles["transaction__balance"]}>
				<span>
					<BiCoin />
						Saldo:
				</span>
				<span>
					{user?.registro.saldo ?? "N/A"}
				</span>
			</p>
			<TransactionForm />
		</section>
	);
}

export default Transaction;
