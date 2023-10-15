import React, { Component } from "react";
import styles from "./ListTransactionsTable.module.css";
import Table from "../../../../components/Table/Table";
import { FaPlus } from "react-icons/fa";
import TransactionService from "../../../../services/TransactionService/TransactionService";
import { SessionContext } from "../../../../context/Session/SessionContext";
import Menu from "../../../../components/Menu/Menu";

interface Transactions {
	id: number;
	tipoOleo: string;
	volume: number;
	valorTransacaoOleo: number;
	createdAt: Date;
	updatedAt: Date;
	idVendedor: number;
	idComprador: number;
}

interface State {
	table: { data: any[]; isLoading: boolean };
}

class ListTransactionsTable extends Component<object, State> {
	constructor(props: object) {
		super(props);
		this.state = {
			table: {
				data: [],
				isLoading: true,
			},
		};
	}

	redirectPage() {
		window.location.href = "/createUser";
	}

	async getAllTransactions(): Promise<void> {
		const resultadoRequest: Transactions[] = (await TransactionService.getAllTransactions()).data;
		// const list: { Nome: string; Email: string; Documento: string }[] = [];
		const list: {Tipo: string, Volume:number, Valor:number, Feito:Date}[] = [];
		resultadoRequest.forEach((element) => {
			const user = {
				Tipo: element.tipoOleo,
				Volume: element.volume,
				Valor: element.valorTransacaoOleo,
				Feito: element.createdAt,
			};
			list.push(user);
		});
		this.setState({ table: { data: list, isLoading: false } });
	}

	componentDidMount(): void {
		this.getAllTransactions();
	}

	render() {
		const { table } = this.state;

		return (
			<><Menu /><div className={styles["listTransactionsTable"]}>
				<h1 className={styles["title"]}>Transações realizadas</h1>
				<Table
					data={table.data}
					omit={[
						"id",
						// "tipoOleo",
						"volume",
						// "valorTransacaoOleo",
						"updatedAt",
						"idVendedor",
						"idComprador",
					]}
					isLoading={table.isLoading} />
			</div></>
		);
	}
}

export default ListTransactionsTable;
