import React, { useState } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";
import Sidebar from "../../../../components/SideBar/SideBar";
import VerticalDivider from "../../../../components/VerticalDivider/VerticalDivider";

const TransactionForm: React.FC = () => {
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	const [local, setLocal] = useState<string | null>(null);
	const [oleoOption, setOleoOption] = useState<string | null>(null);
	const [amount, setAmount] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const handleSelectLocal = (selectedLocal: string) => {
		setLocal(selectedLocal);
	};

	const handleSelectOleoOption = (selectedMethod: string) => {
		setOleoOption(selectedMethod);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log("Dados do formulário:");
		console.log("Categoria:", local);
		console.log("Método de pagamento:", oleoOption);
		console.log("Valor:", amount);
		console.log("Descrição:", description);
	};

	const localOptions = ["Categoria 1", "Categoria 2", "Categoria 3"];
	const OleoOpetions = ["Oléo Virgem", "Óleo usado"];

	return (
		<div>
			{/* Sidebar do sistema (verde) */}

			{/* sidebar da página (carteira) */}
			<div>
				<h2>Carteira</h2>
				<h3>Histórico</h3>
				<h3>Transações</h3>
				<VerticalDivider/>
			</div>

			{/* Formulário */}
			<div>
				<form onSubmit={handleSubmit}>
					<h2>Transações</h2>

					<h2></h2>

					<label>Estabelecimentos</label>
					<Dropdown options={localOptions} onSelect={handleSelectLocal} />

					<label>Tipoe de Óleo</label>
					<Dropdown options={OleoOpetions} onSelect={handleSelectOleoOption} />

					<label>Volume</label>
					<TextInput forwardedRef={emailRef} placeholder="Insira o volume..." />

					<label>Valor</label>
					<TextInput forwardedRef={emailRef} placeholder="Insira o valor..." />

					<label>Valor do litro do óleo virgem</label>
					<TextInput
						forwardedRef={emailRef}
						placeholder="Insira o valor do litro do óleo virgem..."
					/>

					<label>Valor do litro do óleo usado</label>
					<TextInput
						forwardedRef={emailRef}
						placeholder="Insira o valor do litro do óleo usado..."
					/>

					<Button label="Comprar" type="submit" />
				</form>
			</div>
		</div>
	);
};

export default TransactionForm;
