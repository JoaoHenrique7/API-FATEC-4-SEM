import React, { ChangeEvent, Component, FormEvent } from "react";
import styles from "./CreateUserForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import SaltyAlert from "../../../../@utils/libs/SaltyAlert";

interface CreateUserFormState {
	userName: string;
	cpfCnpj: string;
	userType: string;
	email: string;
	password: string;
	confirmPassword: string;
	neighbordhood: string;
	address: string;
	number: string;
	complement: string;
	city: string;
	cep: string;
	state: string;
}

interface CreateUserFormProps {
	onSubmit: (
		userName: string,
		cpfCnpj: string,
		userType: string,
		email: string,
		password: string,
		confirmPassword: string,
		address: string,
		neighbordhood: string,
		number: string,
		complement: string,
		city: string,
		cep: string,
		state: string,
	) => void;
}
class CreateUserForm extends Component<CreateUserFormProps, CreateUserFormState> {
	constructor(props: CreateUserFormProps) {
		super(props);
		this.state = {
			userName: "",
			cpfCnpj: "",
			userType: "0",
			email: "",
			password: "",
			confirmPassword: "",
			address: "",
			neighbordhood: "",
			number: "",
			complement: "",
			city: "",
			cep: "",
			state: "",
		};
	}

	handleuserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ userName: event.target.value });
	};
	handleCpfCnpjChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ cpfCnpj: event.target.value });
	};
	handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ address: event.target.value });
	};
	handleuserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		this.setState({ userType: event.target.value });
	};
	handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};
	handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: event.target.value });
	};
	handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ confirmPassword: event.target.value });
	};
	handleNeighbordhoodChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ neighbordhood: event.target.value });
	};
	handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ number: event.target.value });
	};
	handleComplementChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ complement: event.target.value });
	};
	handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ city: event.target.value });
	};
	handleCEPChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ cep: event.target.value });
	};
	handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ state: event.target.value });
	};

	handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const {
			userName,
			cpfCnpj,
			address,
			userType,
			email,
			password,
			confirmPassword,
			neighbordhood,
			number,
			complement,
			city,
			cep,
			state
		} = this.state;

		if (password !== confirmPassword) {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "passwords não são iguais!",
				closeOnClickOutside: true,
				timerInMiliseconds: 5000,
			});
		} else {
			this.props.onSubmit(
				userName,
				cpfCnpj,
				userType,
				email,
				password,
				confirmPassword,
				address,
				neighbordhood,
				number,
				complement,
				city,
				cep,
				state
			);
		}
	};

	render() {
		const {
			userName,
			cpfCnpj,
			address,
			userType,
			email,
			password,
			confirmPassword,
			neighbordhood,
			number,
			complement,
			city,
			cep,
			state
		} = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className={styles["content"]}>
					<div className={styles["left"]}>
						<form className={styles["CreateUserForm"]}>
							<h1 className={styles["title"]}>Crie seu usuario</h1>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Nome"
										hint=""
										value={userName}
										onChange={this.handleuserNameChange}
										placeholder="Coloque o nome..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="CPF/CNPJ"
									hint=""
									value={cpfCnpj}
									onChange={this.handleCpfCnpjChange}
									placeholder="Insira seu CPF/CNPJ..."
									validation={/^[0-9]{5}$/g}
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="CEP"
										hint=""
										value={cep}
										onChange={this.handleCEPChange}
										placeholder="Coloque seu CEP..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="Estado"
									hint=""
									value={state}
									onChange={this.handleStateChange}
									placeholder="Insira seu Bairro..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Endereço"
										hint=""
										value={address}
										onChange={this.handleAddressChange}
										placeholder="Coloque sua Rua..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="Bairro"
									hint=""
									value={neighbordhood}
									onChange={this.handleNeighbordhoodChange}
									placeholder="Insira seu Bairro..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Numero"
										hint=""
										value={number}
										onChange={this.handleNumberChange}
										placeholder="Coloque o numero do endereço..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="Complemento"
									hint=""
									value={complement}
									onChange={this.handleComplementChange}
									placeholder="Insira o complemento (caso tenha)..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Cidade"
										hint=""
										value={city}
										onChange={this.handleCityChange}
										placeholder="Coloque sua cidade..."
									/>
								</div>
								<TextInput
									label="Email"
									hint=""
									value={email}
									onChange={this.handleEmailChange}
									placeholder="Coloque seu Email..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<PasswordInput
										label="Crie sua senha"
										hint=""
										value={password}
										onChange={this.handlePasswordChange}
										placeholder="Crie sua senha..."
									/>
								</div>
								<PasswordInput
									label="Confirme sua senha"
									hint=""
									value={confirmPassword}
									onChange={this.handleConfirmPasswordChange}
									placeholder="Confirme sua senha..."
								/>
							</div>
						</form>
					</div>
					<div className={styles["right"]}>
						<h1 className={styles["title"]}>Qual o tipo do usuario?</h1>
						<div className={styles["userType"]}>
							<label>Tipo de usuário</label>
							<br></br>
							<br></br>
							<select
								className={styles["comboBox"]}
								name="userType"
								required
								id="userType"
								value={userType}
								onChange={this.handleuserTypeChange}
							>
								<option value="Administrador">Administrador</option>
								<option value="Cooperativa">Cooperativa</option>
								<option value="Empresa">Empresa</option>
								<option value="Individuo">Individuo</option>
							</select>
						</div>
						<button className={styles["button"]}>Salvar</button>
					</div>
				</div>
			</form>
		);
	}
}

export default CreateUserForm;
