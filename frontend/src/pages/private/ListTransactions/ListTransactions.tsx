import React from "react";
import styles from "./ListTransactions.module.css";
import ListTransactionsTable from "./components/ListTransactionsTable";

function ListTransactions() {
	return (
		<section className={styles["page"]}>
			<h1 className={styles["title"]}>Histórico de transações</h1>
			<ListTransactionsTable />
		</section>
	);
}

export default ListTransactions;
