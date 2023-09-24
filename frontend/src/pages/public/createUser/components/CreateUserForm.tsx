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
		};
	}

	handleuserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ userName: event.target.value });
	};
	handleCpfCnpjChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ cpfCnpj: event.target.value });
	};
	handleaddressChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ address: event.target.value });
	};
	handleuserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		this.setState({ userType: event.target.value });
	};
	handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};

	handlepasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: event.target.value });
	};
	handleconfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ confirmPassword: event.target.value });
	};
	handleneighbordhoodChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ neighbordhood: event.target.value });
	};
	handlenumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ number: event.target.value });
	};
	handlecomplementChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ complement: event.target.value });
	};
	handlecityChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ complement: event.target.value });
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
										label="Endereço"
										hint=""
										value={address}
										onChange={this.handleaddressChange}
										placeholder="Coloque o Endereço..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="neighbordhood"
									hint=""
									value={neighbordhood}
									onChange={this.handleneighbordhoodChange}
									placeholder="Insira seu neighbordhood..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="number"
										hint=""
										value={number}
										onChange={this.handlenumberChange}
										placeholder="Coloque o number do endereço..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="complement"
									hint=""
									value={complement}
									onChange={this.handlecomplementChange}
									placeholder="Insira o complement..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="city"
										hint=""
										value={city}
										onChange={this.handlecityChange}
										placeholder="Coloque sua city..."
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
										label="Crie sua password"
										hint=""
										value={password}
										onChange={this.handlepasswordChange}
										placeholder="Crie sua password..."
									/>
								</div>
								<PasswordInput
									label="Confirme sua password"
									hint=""
									value={confirmPassword}
									onChange={this.handleconfirmPasswordChange}
									placeholder="Confirme sua password..."
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
								<option value="0">Administrador</option>
								<option value="1">Cooperativa</option>
								<option value="2">Empresa</option>
								<option value="3">Individuo</option>
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
