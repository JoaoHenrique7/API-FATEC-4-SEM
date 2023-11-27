import React, { useState, useEffect, useContext } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";
import TGenericResponse from "../../../../@types/Responses/TGenericResponse";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import styles from "./UpdateQuotationForm.module.css";
import TUpdateQuotation from "../../../../@types/Models/TUpdateQuotation";
import UpdateQuotation from "../../../../services/UpdateQuotationService/UpdateQuotation.service";

const UpdateQuotationForm: React.FC = () => {
	const { session, reload } = useContext(SessionContext) as SessionContextType;

	const amount = React.useRef<HTMLInputElement>(null);
	const [oilOption, setOilOption] = useState<string | null>(null);

	const OilOptions = ["Virgem", "Usado"];

	const handleSelectOilOption = (selectedMethod: string) => {
		setOilOption(selectedMethod);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!checkRefs()) {
			return;
		}

		if (!amount.current?.value) return false;
		if (!oilOption) return false;

		if (oilOption == "Virgem" || oilOption == "Usado") {
			const updateQuotation: TGenericResponse<TUpdateQuotation> =
				await UpdateQuotation.UpdateQuotationById({
					id: session!.user.registro.id,
					tipoOleo: oilOption,
					cotacao: parseFloat(amount.current.value.replace(",", ".")),
				});
			if (updateQuotation.Ok) {
				alert(updateQuotation.Message);
				reload();
				setOilOption(null);
			} else {
				alert(updateQuotation.Message);
			}
		}
	};

	const checkRefs = (): boolean => {
		if (!amount.current?.value) return false;
		if (!oilOption) return false;

		return true;
	};

	const handleFormClick = (e: React.MouseEvent<HTMLFormElement>) => {
		e.stopPropagation();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={styles["updateQuotationForm"]}
			onClick={handleFormClick}
		>
			<div className={styles["label"]}>
				<label>Tipo de Óleo</label>
				<Dropdown options={OilOptions} onSelect={handleSelectOilOption} />
			</div>
			<div className={styles["label"]}>
				<label>Nova Cotação</label>
				<TextInput forwardedRef={amount} placeholder="Insira a cotação..." />
			</div>
			<Button label="Atualizar" type="submit" />
		</form>
	);
};

export default UpdateQuotationForm;
