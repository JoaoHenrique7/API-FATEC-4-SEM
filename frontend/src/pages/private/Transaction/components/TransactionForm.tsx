import React, { useState, useEffect, useContext } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";
import User from "../../../../services/UserService/User.service";
import TUsuario from "../../../../@types/Models/TUsuario";
import TGenericResponse from "../../../../@types/Responses/TGenericResponse";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import Transaction from "../../../../services/TransactionService/Transaction.service";
import TTransaction from "../../../../@types/Models/TTransaction";
import styles from "./TransactionForm.module.css";

const userMap: { [key: string]: number } = {};

const TransactionForm: React.FC = () => {
	const { session, reload } = useContext(SessionContext) as SessionContextType;

	const amount = React.useRef<HTMLInputElement>(null);
	const [seller, setSeller] = useState<string | null>(null);
	const [oilOption, setOilOption] = useState<string | null>(null);
	const [userOptions, setUserOptions] = useState<string[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
	const OilOptions = ["Virgem", "Usado"];
	const userType = session!.user.tipoUsuario.tipoUsuario;
	let userConfirm: string;
	switch (userType) {
		case "Parceiro":
			userConfirm = "Estabelecimento";
			break;

		default:
			userConfirm = "Parceiro";
			break;
	}

	const fetchUsers = async (selectedOilOption: string | null) => {
		try {
			const response: TGenericResponse<TUsuario[]> = await User.All();
			if (response.Ok) {
				const users = response.Data;
				if (Array.isArray(users) && users.length > 0) {
					const estabelecimentoUsers = users.filter(
						(user) =>
							user.tipoUsuario.tipoUsuario === userConfirm &&
							((selectedOilOption === "Virgem" &&
								user.registro.volumeOleoVirgem > 0) ||
								(selectedOilOption === "Usado" &&
									user.registro.volumeOleoUsado > 0)),
					);

					if (estabelecimentoUsers.length > 0) {
						estabelecimentoUsers.forEach((user) => {
							userMap[user.nomeUsuario] = user.registro.id;
						});
						const userNames = estabelecimentoUsers.map((user) => user.nomeUsuario);
						setFilteredUsers(userNames);
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
		fetchUsers(oilOption);
	}, [oilOption]);

	const handleSelectSeller = (selectedSeller: string) => {
		setSeller(selectedSeller);
	};

	const handleSelectOilOption = (selectedMethod: string) => {
		setOilOption(selectedMethod);
		fetchUsers(selectedMethod);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!checkRefs()) {
			return;
		}

		if (!amount.current?.value) return false;
		if (!seller) return false;
		if (!oilOption) return false;

		if (oilOption == "Virgem") {
			const createTransaction: TGenericResponse<TTransaction> = await Transaction.Create({
				tipoOleo: oilOption,
				volume: parseFloat(amount.current.value.replace(",", ".")),
				valorTransacaoOleo:
					parseFloat(amount.current.value.replace(",", ".")) *
					session!.user.registro.cotacaoOleoVirgem,
				idVendedor: userMap[seller],
				idComprador: session!.user.registro.id,
			});

			if (createTransaction.Ok) {
				alert(createTransaction.Message);
				reload();
				window.location.href = "/transaction/historic";
			} else {
				alert(createTransaction.Message);
			}
		} else {
			const createTransaction: TGenericResponse<TTransaction> = await Transaction.Create({
				tipoOleo: oilOption,
				volume: parseFloat(amount.current.value.replace(",", ".")),
				valorTransacaoOleo:
					parseFloat(amount.current.value.replace(",", ".")) *
					session!.user.registro.cotacaoOleoUsado,
				idVendedor: userMap[seller],
				idComprador: session!.user.registro.id,
			});

			if (createTransaction.Ok) {
				alert(createTransaction.Message);
				reload();
				window.location.href = "/transaction/historic";
			} else {
				alert(createTransaction.Message);
			}
		}
	};

	const checkRefs = (): boolean => {
		if (!amount.current?.value) return false;
		if (!seller) return false;
		if (!oilOption) return false;

		return true;
	};

	return (
		<form onSubmit={handleSubmit} className={styles["transactionForm"]}>
			<div className={styles["label"]}>
				<label>Tipo de Óleo</label>
				<Dropdown options={OilOptions} onSelect={handleSelectOilOption} />
			</div>
			<div className={styles["label"]}>
				<label>Estabelecimentos</label>
				<Dropdown options={filteredUsers} onSelect={handleSelectSeller} />
			</div>
			<div className={styles["label"]}>
				<label>Volume</label>
				<TextInput forwardedRef={amount} placeholder="Insira o volume..." />
			</div>
			<Button label="Comprar" type="submit" />
		</form>
	);
};

export default TransactionForm;
