import React, { useState, useEffect, useContext } from "react";
import styles from "./ListTransactionsTable.module.css";
import Table from "../../../../components/Table/Table";
import { FaChevronLeft, FaChevronRight, FaMoneyBill, FaPlus, FaUser } from "react-icons/fa";
import TransactionService from "../../../../services/TransactionService/TransactionService";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import { IconBaseProps } from "react-icons";
import ReactPaginate from "react-paginate";
import TextInput from "../../../../components/TextInput/TextInput";
import UserService from "../../../../services/UserService/UserService";
import RegistryService from "../../../../services/RegistryService/RegistryService";

interface Transactions {
	id: number;
	tipoOleo: string;
	volume: number;
	valorTransacaoOleo: number;
	createdAt: Date;
	updatedAt: Date;
	idVendedor: number;
	idComprador: number;
	Remetente: string;
}

const ListTransactionsTable: React.FC = () => {
	const [table, setTable] = useState<{ data: any[]; isLoading: boolean }>({
		data: [],
		isLoading: true,
	});

	const [currentPage, setCurrentPage] = useState(0);

	const itemsPerPage = 5;

	const handlePageChange = (selectedPage: { selected: number }) => {
		setCurrentPage(selectedPage.selected);
	};

	const { session } = useContext(SessionContext) as SessionContextType;

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
				Remetente: string;
			}[] = [];

			resultadoRequest.forEach(async (element) => {
				
				if (element.idComprador == session?.user.id) {
					const resultadoRegistry = (await RegistryService.getOneRegistry(element.idComprador))
					.data;
					const resultadoUsuario = (await UserService.getOneUser(resultadoRegistry.idUsuario))
					.data;	
					const user = {
						Tipo_Oleo: element.tipoOleo,
						Volume: element.volume,
						Valor: element.valorTransacaoOleo,
						Feito: element.createdAt,
						idVendedor: element.idVendedor,
						Compra_ou_Venda: "Compra",
						Remetente: resultadoUsuario.nomeUsuario
					};
					list.push(user);
				} else if (element.idVendedor == session?.user.id) {
					const resultadoRegistry = (await RegistryService.getOneRegistry(element.idComprador))
					.data;
					const resultadoUsuario = (await UserService.getOneUser(resultadoRegistry.idUsuario))
					.data;
					const user = {
						Tipo_Oleo: element.tipoOleo,
						Volume: element.volume,
						Valor: element.valorTransacaoOleo,
						Feito: element.createdAt,
						idComprador: element.idComprador,
						Compra_ou_Venda: "Venda",
						Remetente: resultadoUsuario.nomeUsuario
					};
					list.push(user);
				}
				setFilteredData(list);
			});

			setTable({ data: list, isLoading: false });
			
		} catch (error) {
			// Handle errors here
		}
	};

	useEffect(() => {
		getAllTransactions();
	}, []);
	const [filteredData, setFilteredData] = useState(table.data);
	const [selectedColumn, setSelectedColumn] = useState<string>("Tipo_Oleo"); // Default to searching by "Tipo_Oleo"

	const columnOptions = [
		{ label: "Tipo de Óleo", value: "Tipo_Oleo" },
		{ label: "Volume", value: "Volume" },
		{ label: "Valor", value: "Valor" },
	];
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (searchValue: string) => {
		setSearchTerm(searchValue);
		const filtered = table.data.filter((item) => {
			const columnValue = item[selectedColumn];

			if (typeof columnValue === "string") {
				return columnValue.toLowerCase().includes(searchValue.toLowerCase());
			} else if (typeof columnValue === "number") {
				return columnValue.toString().includes(searchValue);
			}

			return false;
		});
		setFilteredData(filtered);
		setCurrentPage(0);
	};

	return (
		<>
			<div className={styles["listTransactionsTable"]}>
				<h1 className={styles["title"]}>Histórico</h1>
				<p>
					Saldo:{" "}
					<IconWithText
						icon={FaMoneyBill}
						text={session && session.user.registro.saldo}
					/>
				</p>
				<div className={styles["searchContainer"]}>
					<select
						value={selectedColumn}
						onChange={(e) => setSelectedColumn(e.target.value)}
					>
						{columnOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<TextInput
						placeholder={`Pesquisar por ${selectedColumn}`}
						value={searchTerm}
						onChange={(e) => handleSearch(e.target.value)}
					/>
					<button onClick={() => handleSearch(searchTerm)}>Pesquisar</button>
				</div>
				<Table
					data={filteredData.slice(
						currentPage * itemsPerPage,
						(currentPage + 1) * itemsPerPage,
					)}
					omit={["id", "volume", "updatedAt", "idVendedor", "idComprador"]}
					isLoading={table.isLoading}
				/>
				<ReactPaginate
					pageCount={Math.ceil(table.data.length / itemsPerPage)}
					pageRangeDisplayed={5}
					marginPagesDisplayed={2}
					onPageChange={handlePageChange}
					containerClassName={styles["paginationContainer"]}
					pageClassName={styles["paginationItem"]}
					activeClassName={styles["paginationActive"]}
					nextLabel={
						<span className={styles["paginationNext"]}>
							<FaChevronRight />
						</span>
					}
					previousLabel={
						<span className={styles["paginationPrevious"]}>
							<FaChevronLeft />
						</span>
					}
					breakLabel={"..."}
				/>
			</div>
		</>
	);
};

export default ListTransactionsTable;
