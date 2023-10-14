import React, { Component } from "react";
import styles from "./ListTransactionsTable.module.css";
import Table from "../../../../components/Table/Table";
import { FaPlus } from "react-icons/fa";
import TransactionService from "../../../../services/TransactionService/TransactionService";

interface Transactions {
	id: number;
	tipoOleo: string;
	volume: number;
	valorTransacao: number;
	dataTransacao: Date;
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
		console.log(resultadoRequest)
		// const list: { Nome: string; Email: string; Documento: string }[] = [];
		const list: { Valor: number; Feito: Date; }[] = [];
		resultadoRequest.forEach((element) => {
			const user = {
				// Nome: element.nomeUsuario,
				// Transação_Para: element.emailUsuario,
				Valor: element.valorTransacao,
				Feito: element.createdAt,
			};
			console.log(user)
			list.push(user);
		});
		console.log(list,"3")
		this.setState({ table: { data: list, isLoading: false } });
	}

	componentDidMount(): void {
		this.getAllTransactions();
	}

	render() {
		const { table } = this.state;

		return (
			<div className={styles["listTransactionsTable"]}>
				<h1 className={styles["title"]}>Usuários Cadastrados</h1>
				<Table
					data={table.data}
					omit={[
						"id",
						"senhaUsuario",
						"createdAt",
						"tipoUsuario",
						"updatedAt",
						"endereco",
					]}
					isLoading={table.isLoading}
				/>
			</div>
		);
	}
}

export default ListTransactionsTable;
