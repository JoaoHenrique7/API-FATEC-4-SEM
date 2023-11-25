import React, { useState, useEffect, useContext } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";
import TGenericResponse from "../../../../@types/Responses/TGenericResponse";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";
import styles from "./AddOilForm.module.css";
import AddOil from "../../../../services/AddOilServcice/AddOil.service";
import TAddOil from "../../../../@types/Models/TAddOil";

const userMap: { [key: string]: number } = {};

const addOilForm: React.FC = () => {
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

		if (oilOption == "Virgem") {
			const addOil: TGenericResponse<TAddOil> = await AddOil.UpdateOilById({
				id: session!.user.registro.id,
				tipoOleo: oilOption,
				volume:
					parseFloat(amount.current.value.replace(",", ".")) +
					session!.user.registro.volumeOleoVirgem,
			});
			if (addOil.Ok) {
				alert(addOil.Message);
				reload();
				setOilOption(null);
			} else {
				alert(addOil.Message);
			}
		} else {
			const addOil: TGenericResponse<TAddOil> = await AddOil.UpdateOilById({
				id: session!.user.registro.id,
				tipoOleo: oilOption,
				volume:
					parseFloat(amount.current.value.replace(",", ".")) +
					session!.user.registro.volumeOleoUsado,
			});
			if (addOil.Ok) {
				alert(addOil.Message);
				reload();
				setOilOption(null);
			} else {
				alert(addOil.Message);
			}
		}
	};

	const checkRefs = (): boolean => {
		if (!amount.current?.value) return false;
		if (!oilOption) return false;

		return true;
	};

	return (
		<form onSubmit={handleSubmit} className={styles["addOilForm"]}>
			<div className={styles["label"]}>
				<label>Tipo de Óleo</label>
				<Dropdown options={OilOptions} onSelect={handleSelectOilOption} />
			</div>
			<div className={styles["label"]}>
				<label>Volume</label>
				<TextInput forwardedRef={amount} placeholder="Insira o volume..." />
			</div>
			<Button label="Adicionar" type="submit" />
		</form>
	);
};

export default addOilForm;
