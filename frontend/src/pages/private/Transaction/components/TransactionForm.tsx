import React, { useState, useEffect, useContext } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";
import VerticalDivider from "../../../../components/VerticalDivider/VerticalDivider";
import User from "../../../../services/UserService/User.service";
import TUsuario from "../../../../@types/Models/TUsuario";
import TGenericResponse from "../../../../@types/Responses/TGenericResponse";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import Transaction from "../../../../services/TransactionService/Transaction.service";
import TTransaction from "../../../../@types/Models/TTransaction";
import styles from "./TransactionForm.module.css";
import historic from "../../../../assets/historic.svg";
import transaction from "../../../../assets/transaction.svg";

const userMap: { [key: string]: number } = {};

const TransactionForm: React.FC = () => {
	const { session } = useContext(SessionContext) as SessionContextType;

	const value = React.useRef<HTMLInputElement>(null);
	const amount = React.useRef<HTMLInputElement>(null);
	const [seller, setSeller] = useState<string | null>(null);
	const [oilOption, setOilOption] = useState<string | null>(null);
	const [userOptions, setUserOptions] = useState<string[]>([]);

	const OilOptions = ["Virgem", "Usado"];

	const fetchUsers = async () => {
		try {
			const response: TGenericResponse<TUsuario[]> = await User.All();
			if (response.Ok) {
				const users = response.Data;
				if (Array.isArray(users) && users.length > 0) {
					const estabelecimentoUsers = users.filter(
						(user) => user.tipoUsuario.tipoUsuario === "Estabelecimento",
					);
					if (estabelecimentoUsers.length > 0) {
						estabelecimentoUsers.forEach((user) => {
							console.log(userOptions);
							userMap[user.nomeUsuario] = user.carteira.id;
						});
						const userNames = estabelecimentoUsers.map((user) => user.nomeUsuario);
						setUserOptions(userNames);
					} else {
						console.error("Nenhum estabelecimento encontrado.");
					}
				} else {
					console.error("Nenhum usuário encontrado.");
				}
			} else {
				console.error(response.Message);
			}
		} catch (error) {
			console.error("Erro ao buscar os usuários: ", error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleSelectSeller = (selectedSeller: string) => {
		setSeller(selectedSeller);
	};

	const handleSelectOilOption = (selectedMethod: string) => {
		setOilOption(selectedMethod);
	};

	const redirectHistoric = () => {
		window.location.href = "/listTransaction";
	};

	const redirectTransaction = () => {
		window.location.href = "/transaction";
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!checkRefs()) {
			return;
		}

		if (!amount.current?.value) return false;
		if (!value.current?.value) return false;
		if (!seller) return false;
		if (!oilOption) return false;

		const createTransaction: TGenericResponse<TTransaction> = await Transaction.Create({
			tipoOleo: oilOption,
			volume: parseFloat(amount.current.value.replace(",", ".")),
			valorTransacaoOleo: parseFloat(value.current.value.replace(",", ".")),
			idVendedor: userMap[seller],
			idComprador: 1,
		});

		if (createTransaction.Ok) {
			alert(createTransaction.Message);
		} else {
			alert(createTransaction.Message);
		}
	};

	const checkRefs = (): boolean => {
		if (!amount.current?.value) return false;
		if (!value.current?.value) return false;
		if (!seller) return false;
		if (!oilOption) return false;

		return true;
	};

	return (
		<div>
			{/* sidebar da página (carteira) */}
			<div className={styles["menu"]}>
				<div className={styles["menuLine"]} onClick={redirectHistoric}>
					<img src={historic} className={styles["options"]} alt="Historic" />
					<h3 className={styles["title"]}>Historico</h3>
				</div>
				<div className={styles["menuLine"]} onClick={redirectTransaction}>
					<img src={transaction} className={styles["options"]} alt="Transaction" />
					<h3 className={styles["title"]}>Transações</h3>
				</div>
			</div>
			{/* Formulário */}
			<div>
				<form onSubmit={handleSubmit} className={styles["form"]}>
					<h2 className={styles["label"]}>Transações</h2>

					<div className={styles["label"]}>
						<label>Estabelecimentos</label>
						<Dropdown options={userOptions} onSelect={handleSelectSeller} />
					</div>
					<div className={styles["label"]}>
						<label>Tipo de Óleo</label>
						<Dropdown options={OilOptions} onSelect={handleSelectOilOption} />
					</div>
					<div className={styles["label"]}>
						<label>Volume</label>
						<TextInput forwardedRef={amount} placeholder="Insira o volume..." />
					</div>
					<div className={styles["label"]}>
						<label>Valor</label>
						<TextInput forwardedRef={value} placeholder="Insira o valor..." />
					</div>
					{/* <label>Valor do litro do óleo virgem</label>
					<TextInput
						forwardedRef={textRef}
						placeholder="Insira o valor do litro do óleo virgem..."
					/>

					<label>Valor do litro do óleo usado</label>
					<TextInput
						forwardedRef={textRef}
						placeholder="Insira o valor do litro do óleo usado..."
					/> */}

					<Button label="Comprar" type="submit" />
				</form>
			</div>
		</div>
	);
};

export default TransactionForm;