import React from "react";
import styles from "./ListUserTable.module.css";
import Table from "../../../../components/Table/Table";


type CreateUserFormProps = React.HTMLProps<HTMLFormElement>;

function ListUserTable(props: CreateUserFormProps) {
	return (
		<div className={styles["listUserTable"]}>
			<h1 className={styles["title"]}>Usuários Cadastrados</h1>
			<Table
				data={[
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
					{ Nome: "teste1", Email: "teste2", Tipo: "batata", Documento: "teste" },
				]}
				isLoading={false}
			/>
		</div>
	);
}

export default ListUserTable;
