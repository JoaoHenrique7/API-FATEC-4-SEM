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

	const [currentPage, setCurrentPage] = useState(0); // Estado para controlar a página atual

	const itemsPerPage = 5;

	const handlePageChange = (selectedPage: { selected: number }) => {
		setCurrentPage(selectedPage.selected);
	};

	
	const { session } = useContext(SessionContext) as SessionContextType;
	let [filteredData, setFilteredData] = useState(table.data);

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

			resultadoRequest.forEach(async (element) => {
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
						Remetente: "pato"
					};
					list.push(user);
				}
			});

			setTable({ data: list, isLoading: false });
			setFilteredData(list);
		} catch (error) {
			// Handle errors here
		}
	};

	
	useEffect(() => {
		getAllTransactions();
	}, []);

	const [searchTerm, setSearchTerm] = useState("");
	
	const handleSearch = (searchValue: string) => {
		setSearchTerm(searchValue);
		const filtered = table.data.filter((item) =>
			item.Tipo_Oleo.toLowerCase().includes(searchValue.toLowerCase()),
		);
		setFilteredData(filtered);
		setCurrentPage(0);
	};


	return (
		<>
			<div className={styles["listTransactionsTable"]}>
				<h1 className={styles["title"]}>Histórico</h1>
				{/* <IconWithText icon={FaMoneyBill} text={session && session.user.carteira.saldo} /> */}
				<div className={styles["searchContainer"]}>
					<TextInput
						placeholder="Pesquisar por tipo de óleo"
						value={searchTerm}
						onChange={(e) => handleSearch(e.target.value)}
					/>
					<button onClick={() => handleSearch(searchTerm)}>Pesquisar</button>
				</div>
				<Table
					data={filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
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
