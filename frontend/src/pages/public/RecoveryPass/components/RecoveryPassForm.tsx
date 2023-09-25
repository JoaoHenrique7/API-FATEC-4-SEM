import React, { Component, FormEvent, ChangeEvent } from "react";
import styles from "./RecoveryPassForm.module.css";
import InputText from "../../../../components/TextInput/TextInput";
import RecoveryLink from "../../../../components/BasicLink/BasicLink";
import Button from "../../../../components/Button/Button";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import SaltyAlert from "../../../../@utils/libs/SaltyAlert";
import UserService from "../../../../services/UserService/UserService";

interface RecoveryPassFormState {
	firstCode: string;
	emailSent: boolean;
	checkCode: number;
	formType: number;
	secondCode: string;
	email: string;
}

interface RecoveryPassFormProps {
	onSubmit: (email: string) => void;
}

class RecoveryPassForm extends Component<RecoveryPassFormProps, RecoveryPassFormState> {
	constructor(props: RecoveryPassFormProps) {
		super(props);
		this.state = {
			firstCode: "",
			emailSent: false,
			checkCode: Math.floor(100000 + Math.random() * 900000),
			formType: 0,
			secondCode: "",
			email: "",
		};
	}
	handlefirstCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ firstCode: event.target.value });
	};
	handlesecondCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ secondCode: event.target.value });
	};
	handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};
	handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email } = this.state;
		this.props.onSubmit(email);
	};
	showForm(formType: number) {
		this.setState({ formType });
		this.setState({ firstCode: "" });
	}
	verifyEmail = async () => {
		const { email } = this.state;
		const matchUser = await UserService.recoveryPass(email);
		if (matchUser) {
			this.showForm(1);
			this.sendEmail();
		} else {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "Credenciais incorretas!",
				closeOnClickOutside: true,
				timerInMiliseconds: 10000,
			});
		}
	};
	sendEmail = async () => {
		try {
			const { checkCode } = this.state;
			const { email } = this.state;
			const serviceId = "service_kqomqwj";
			const templateId = "template_qarf2lg";
			const userId = "l5AVz2asaABljn9nL";
			const templateParams = {
				message: `${checkCode}`,
				to_email: `${email}`,
			};
			const result: EmailJSResponseStatus = await emailjs.send(
				serviceId,
				templateId,
				templateParams,
				userId,
			);
			console.log(result);
			this.setState({ emailSent: true });
		} catch (error) {
			console.log(error);
		}
	};
	confireCode = async () => {
		const { firstCode } = this.state;
		const { checkCode } = this.state;
		if (firstCode === String(checkCode)) {
			this.showForm(2);
		} else {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "Código incorreto!",
				closeOnClickOutside: true,
				timerInMiliseconds: 10000,
			});
		}
	};
	changePassword = async () => {
		const { email } = this.state;
		const { firstCode } = this.state;
		const { secondCode } = this.state;
		if (firstCode !== secondCode) {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "As senhas estão diferentes!",
				closeOnClickOutside: true,
				timerInMiliseconds: 10000,
			});
		} else {
			const changeResult = await UserService.updatePassword(email, secondCode);
			if (changeResult) {
				new SaltyAlert().modal({
					icon: "Success",
					title: "Sucesso",
					text: "Senha alterada com sucesso!",
					closeOnClickOutside: true,
					timerInMiliseconds: 10000,
				});
				window.open("/auth/login", "_self");
			} else {
				new SaltyAlert().modal({
					icon: "Error",
					title: "Erro",
					text: "Falha na alteração de senha!",
					closeOnClickOutside: true,
					timerInMiliseconds: 10000,
				});
				window.location.reload();
			}
		}
	};
	render() {
		const { firstCode, secondCode, email, formType } = this.state;
		switch (formType) {
			case 1:
				return (
					<div className={styles["recoveryForm"]}>
						<form className={styles.recoveryForm} onSubmit={this.handleSubmit}>
							<h1 className={styles["recoveryForm__title"]}>Recuperação de Senha</h1>
							<h3 className={styles["recoveryForm__subtitle"]}>
								Insira seu código!
							</h3>
							<InputText
								maxLength={255}
								value={firstCode}
								onChange={this.handlefirstCodeChange}
								placeholder="Insira seu código"
								hint="text"
								label="Confira seu email, e insira o código!"
							/>
							<Button label="Enviar" onClick={this.confireCode} />
							<RecoveryLink
								newPath="login"
								text="Retornar ao login"
								className="returnLoginLink"
							/>
						</form>
					</div>
				);
			case 2:
				return (
					<div className={styles["recoveryForm"]}>
						<form className={styles.recoveryForm} onSubmit={this.handleSubmit}>
							<h1 className={styles["recoveryForm__title"]}>Recuperação de Senha</h1>
							<h3 className={styles["recoveryForm__subtitle"]}>
								Coloque sua nova senha!
							</h3>
							<PasswordInput label="Nova senha" hint="Coloque sua nova senha" />
							<PasswordInput label="Confirme sua senha" hint="Confirme sua senha" />
							<Button label="Enviar" onClick={this.changePassword} />
							<RecoveryLink
								newPath="login"
								text="Retornar ao login"
								className="returnLoginLink"
							/>
						</form>
					</div>
				);
			default:
				return (
					<div className={styles["recoveryForm"]}>
						<form className={styles.recoveryForm} onSubmit={this.handleSubmit}>
							<h1 className={styles["recoveryForm__title"]}>Recuperação de Senha</h1>
							<h3 className={styles["recoveryForm__subtitle"]}>
								Por favor, insira seu email.
							</h3>
							<InputText
								maxLength={255}
								value={email}
								onChange={this.handleEmailChange}
								placeholder="Insira seu email"
								hint="text"
								label="Email"
							/>
							<Button label="Enviar" onClick={this.verifyEmail} />
							<RecoveryLink
								newPath="login"
								text="Retornar ao login"
								className="returnLoginLink"
							/>
						</form>
					</div>
				);
		}
	}
}

export default RecoveryPassForm;
