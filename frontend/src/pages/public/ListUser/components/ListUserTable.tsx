import React, { Component } from "react";
import styles from "./ListUserTable.module.css";
import Table from "../../../../components/Table/Table";
import User from "../../../../model/classes/User";
import UserService from "../../../../services/UserService/UserService";
import { FaPlus } from "react-icons/fa";

interface Endereco {
	id: number;
	zip_code: string;
	numero: number;
	rua: string;
	bairro: string;
	cidade: string;
	estado: string;
	complemento: string;
	idUsuario: number;
	createdAt: string;
	updatedAt: string;
}

interface TipoUsuario {
	id: number;
	tipoUsuario: string;
	idUsuario: number;
	createdAt: string;
	updatedAt: string;
}

interface Usuario {
	id: number;
	nomeUsuario: string;
	emailUsuario: string;
	senhaUsuario: string;
	documentoUsuario: string;
	createdAt: string;
	updatedAt: string;
	tipoUsuario: TipoUsuario;
	endereco: Endereco;
}

interface State {
	table: { data: any[]; isLoading: boolean };
}

class ListUserTable extends Component<object, State> {
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

	async getAllUsers(): Promise<void> {
		const resultadoRequest: Usuario[] = (await UserService.getAllUsers()).data;
		const list: { Nome: string; Email: string; Documento: string }[] = [];
		resultadoRequest.forEach((element) => {
			const user = {
				Nome: element.nomeUsuario,
				Email: element.emailUsuario,
				Documento: element.documentoUsuario,
				Tipo: element.tipoUsuario.tipoUsuario,
			};
			list.push(user);
		});
		this.setState({ table: { data: list, isLoading: false } });
	}

	componentDidMount(): void {
		this.getAllUsers();
	}

	render() {
		const { table } = this.state;

		return (
			<div className={styles["listUserTable"]}>
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

export default ListUserTable;
