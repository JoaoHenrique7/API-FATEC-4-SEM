import React, { useState, useEffect, useContext } from "react";
import styles from "./ListTransactionsTable.module.css";
import Table from "../../../../components/Table/Table";
import { FaMoneyBill, FaPlus, FaUser } from "react-icons/fa";
import TransactionService from "../../../../services/TransactionService/TransactionService";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import historic from "../../../../assets/historic.svg";
import transaction from "../../../../assets/transaction.svg";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import { IconBaseProps } from "react-icons";

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

const ListTransactionsTable: React.FC = () => {
	const [table, setTable] = useState<{ data: any[]; isLoading: boolean }>({
		data: [],
		isLoading: true,
	});

	const redirectTransaction = () => {
		window.location.href = "/transaction";
	};

	const redirectHistoric = () => {
		window.location.href = "/listTransaction";
	};

	const { session } = useContext(SessionContext) as SessionContextType;
	console.log(session?.user.id);

	const getAllTransactions = async () => {
		try {
			const resultadoRequest: Transactions[] = (await TransactionService.getAllTransactions())
				.data;

			const list: {
				Tipo_Oleo: string;
				Volume: number;
				Valor: number;
				Feito: Date;
				idVendedor?: number;
				idComprador?: number;
				Compra_ou_Venda: string;
			}[] = [];

			resultadoRequest.forEach((element) => {
				if (element.idComprador == session?.user.id) {
					const user = {
						Tipo_Oleo: element.tipoOleo,
						Volume: element.volume,
						Valor: element.valorTransacaoOleo,
						Feito: element.createdAt,
						idVendedor: element.idVendedor,
						Compra_ou_Venda: "Compra",
					};
					list.push(user);
				} else if (element.idVendedor == session?.user.id) {
					const user = {
						Tipo_Oleo: element.tipoOleo,
						Volume: element.volume,
						Valor: element.valorTransacaoOleo,
						Feito: element.createdAt,
						idComprador: element.idComprador,
						Compra_ou_Venda: "Venda",
					};
					list.push(user);
				}
			});

			setTable({ data: list, isLoading: false });
		} catch (error) {
			// Handle errors here
		}
	};

	useEffect(() => {
		getAllTransactions();
	}, []);

	return (
		<>
			<div className={styles["listTransactionsTable"]}>
				<h1 className={styles["title"]}>Histórico</h1>
				<IconWithText icon={FaMoneyBill} text={ session && session.user.registro.saldo }/>
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
					isLoading={table.isLoading}
				/>
			</div>
		</>
	);
};

export default ListTransactionsTable;
