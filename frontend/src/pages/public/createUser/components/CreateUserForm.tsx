import React, { ChangeEvent, Component, FormEvent } from "react";
import styles from "./CreateUserForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import SaltyAlert from "../../../../@utils/libs/SaltyAlert";

interface CreateUserFormState {
	nomeCompleto: string;
	cpfCnpj: string;
	tipoDoUsuario: string;
	email: string;
	senha: string;
	confirmarSenha: string;
	bairro: string;
	endereco: string;
	numero: string;
	complemento: string;
	cidade: string;
}

interface CreateUserFormProps {
	onSubmit: (
		nomeCompleto: string,
		cpfCnpj: string,
		tipoDoUsuario: string,
		email: string,
		senha: string,
		confirmarSenha: string,
		endereco: string,
		bairro: string,
		numero: string,
		complemento: string,
		cidade: string,
	) => void;
}
class CreateUserForm extends Component<CreateUserFormProps, CreateUserFormState> {
	constructor(props: CreateUserFormProps) {
		super(props);
		this.state = {
			nomeCompleto: "",
			cpfCnpj: "",
			tipoDoUsuario: "0",
			email: "",
			senha: "",
			confirmarSenha: "",
			endereco: "",
			bairro: "",
			numero: "",
			complemento: "",
			cidade: "",
		};
	}

	handleNomeCompletoChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ nomeCompleto: event.target.value });
	};

	handleCpfCnpjChange = (event: ChangeEvent<HTMLInputElement>, isCpf?: boolean) => {
		let cpf = event.target.value;
		cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
		this.setState({ cpfCnpj: cpf });
	};

	handleEnderecoChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ endereco: event.target.value });
	};

	handleTipoDoUsuarioChange = (event: ChangeEvent<HTMLSelectElement>) => {
		this.setState({ tipoDoUsuario: event.target.value });
	};

	handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};

	handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ senha: event.target.value });
	};

	handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ confirmarSenha: event.target.value });
	};
	handleBairroChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ bairro: event.target.value });
	};
	handleNumeroChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ numero: event.target.value });
	};

	handleComplementoChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ complemento: event.target.value });
	};

	handleCidadeChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ complemento: event.target.value });
	};

	handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const {
			nomeCompleto,
			cpfCnpj,
			endereco,
			tipoDoUsuario,
			email,
			senha,
			confirmarSenha,
			bairro,
			numero,
			complemento,
			cidade,
		} = this.state;

		if (senha !== confirmarSenha) {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "Senhas não são iguais!",
				closeOnClickOutside: true,
				timerInMiliseconds: 5000,
			});
		} else {
			this.props.onSubmit(
				nomeCompleto,
				cpfCnpj,
				tipoDoUsuario,
				email,
				senha,
				confirmarSenha,
				endereco,
				bairro,
				numero,
				complemento,
				cidade,
			);
		}
	};

	render() {
		const {
			nomeCompleto,
			cpfCnpj,
			endereco,
			tipoDoUsuario,
			email,
			senha,
			confirmarSenha,
			bairro,
			numero,
			complemento,
			cidade,
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
										value={nomeCompleto}
										onChange={this.handleNomeCompletoChange}
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
										value={endereco}
										onChange={this.handleEnderecoChange}
										placeholder="Coloque o Endereço..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="Bairro"
									hint=""
									value={bairro}
									onChange={this.handleBairroChange}
									placeholder="Insira seu Bairro..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Numero"
										hint=""
										value={numero}
										onChange={this.handleNumeroChange}
										placeholder="Coloque o numero do endereço..."
										validation={/^[0-9]{5}$/g}
									/>
								</div>
								<TextInput
									label="Complemento"
									hint=""
									value={complemento}
									onChange={this.handleComplementoChange}
									placeholder="Insira o complemento..."
								/>
							</div>
							<div className={styles["line"]}>
								<div className={styles["inputPlace"]}>
									<TextInput
										label="Cidade"
										hint=""
										value={cidade}
										onChange={this.handleCidadeChange}
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
										value={senha}
										onChange={this.handleSenhaChange}
										placeholder="Crie sua senha..."
									/>
								</div>
								<PasswordInput
									label="Confirme sua senha"
									hint=""
									value={confirmarSenha}
									onChange={this.handleConfirmarSenhaChange}
									placeholder="Confirme sua senha..."
								/>
							</div>
						</form>
					</div>
					<div className={styles["right"]}>
						<h1 className={styles["title"]}>Qual o tipo do usuario?</h1>
						<div className={styles["tipoDoUsuario"]}>
							<label>Tipo de usuário</label><br></br><br></br>
							<select
								className={styles["comboBox"]}
								name="userType"
								required
								id="userType"
								value={tipoDoUsuario}
								onChange={this.handleTipoDoUsuarioChange}
							>
								<option value="0">Empresa</option>
								<option value="1">Cooperativa</option>
								<option value="2">Administrador</option>
								<option value="2">Individuo</option>
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
