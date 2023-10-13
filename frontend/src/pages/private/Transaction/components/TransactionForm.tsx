import React, { useState } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import TextInput from "../../../../components/TextInput/TextInput";
import Button from "../../../../components/Button/Button";

const TransactionForm: React.FC = () => {
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	const [category, setCategory] = useState<string | null>(null);
	const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
	const [amount, setAmount] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const handleSelectCategory = (selectedCategory: string) => {
		setCategory(selectedCategory);
	};

	const handleSelectPaymentMethod = (selectedMethod: string) => {
		setPaymentMethod(selectedMethod);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log("Dados do formulário:");
		console.log("Categoria:", category);
		console.log("Método de pagamento:", paymentMethod);
		console.log("Valor:", amount);
		console.log("Descrição:", description);
	};

	const categoryOptions = ["Categoria 1", "Categoria 2", "Categoria 3"];
	const paymentMethodOptions = ["Cartão de Crédito", "Dinheiro", "Transferência Bancária"];

	return (
		<form onSubmit={handleSubmit}>
			<h2>Formulário de Transação</h2>

			<label>Categoria</label>
			<Dropdown options={categoryOptions} onSelect={handleSelectCategory} />

			<label>Método de Pagamento</label>
			<Dropdown options={paymentMethodOptions} onSelect={handleSelectPaymentMethod} />

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
	);
};

export default TransactionForm;
