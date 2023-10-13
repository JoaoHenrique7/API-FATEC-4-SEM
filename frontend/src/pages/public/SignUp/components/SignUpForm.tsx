import React, { useRef, useState } from "react";
import styles from "./SignUpForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import Button from "../../../../components/Button/Button";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import User from "../../../../services/UserService/User.service";
import TGenericResponse from "../../../../@types/Responses/TGenericResponse";
import TUsuario from "../../../../@types/Models/TUsuario";

type SignUpFormProps = React.HTMLAttributes<HTMLFormElement>;

function SignUpForm(props: SignUpFormProps) {
	const [step, setStep] = useState<number>(1);
	const [validSteps, setValidSteps] = useState<{
		step1: boolean;
		step2: boolean;
		step3: boolean;
		step4: boolean;
	}>({ step1: true, step2: true, step3: true, step4: true });

	const radioParceiroRef = useRef<HTMLInputElement | null>(null);
	const radioEstabelecimentoRef = useRef<HTMLInputElement | null>(null);

	const nomeRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const documentRef = useRef<HTMLInputElement | null>(null);
	const cepRef = useRef<HTMLInputElement | null>(null);
	const estadoRef = useRef<HTMLInputElement | null>(null);
	const cidadeRef = useRef<HTMLInputElement | null>(null);
	const bairroRef = useRef<HTMLInputElement | null>(null);
	const ruaRef = useRef<HTMLInputElement | null>(null);
	const numeroRef = useRef<HTMLInputElement | null>(null);
	const complementoRef = useRef<HTMLInputElement | null>(null);
	const senhaRef = useRef<HTMLInputElement | null>(null);
	const confirmarSenhaRef = useRef<HTMLInputElement | null>(null);

	const changeStep = (
		e: React.MouseEvent<HTMLButtonElement>,
		direction: "previous" | "next",
	): void => {
		e.preventDefault();

		if (direction === "previous") {
			if (step <= 1) return;
			setStep((prev) => prev - 1);
		} else if (direction === "next") {
			if (step >= 4) return;
			setStep((prev) => prev + 1);
		}
	};

	const checkRefs = (): boolean => {
		if (!radioParceiroRef.current) return false;
		if (!radioEstabelecimentoRef.current) return false;
		if (!nomeRef.current) return false;
		if (!emailRef.current) return false;
		if (!documentRef.current) return false;
		if (!cepRef.current) return false;
		if (!estadoRef.current) return false;
		if (!cidadeRef.current) return false;
		if (!bairroRef.current) return false;
		if (!ruaRef.current) return false;
		if (!numeroRef.current) return false;
		if (!complementoRef.current) return false;
		if (!senhaRef.current) return false;
		if (!confirmarSenhaRef.current) return false;
		return true;
	};

	const validateStep1 = (): void => {
		if (!radioEstabelecimentoRef.current || !radioParceiroRef.current) {
			// TODO: Handle error with alert
			return;
		}

		const estabelecimento = radioEstabelecimentoRef.current;
		const parceiro = radioParceiroRef.current;

		if (estabelecimento.checked || parceiro.checked) {
			setValidSteps({ ...validSteps, step1: true });
		}
	};

	const validateStep2 = (): void => {
		if (!nomeRef.current || !emailRef.current || !documentRef.current) {
			// TODO: Handle error with alert
			return;
		}

		const nome = nomeRef.current;
		const email = emailRef.current;
		const document = documentRef.current;

		if (nome.value && email.value && document.value) {
			setValidSteps({ ...validSteps, step2: true });
		}
	};

	const validateStep3 = (): void => {
		if (
			!cepRef.current ||
			!estadoRef.current ||
			!cidadeRef.current ||
			!bairroRef.current ||
			!ruaRef.current ||
			!numeroRef.current ||
			!complementoRef.current
		) {
			// TODO: Handle error with alert
			return;
		}

		const cep = cepRef.current;
		const estado = estadoRef.current;
		const cidade = cidadeRef.current;
		const bairro = bairroRef.current;
		const rua = ruaRef.current;
		const numero = numeroRef.current;
		const complemento = complementoRef.current;

		if (
			cep.value &&
			estado.value &&
			cidade.value &&
			bairro.value &&
			rua.value &&
			numero.value &&
			complemento.value
		) {
			setValidSteps({ ...validSteps, step3: true });
		}
	};

	const validateStep4 = (): void => {
		if (!senhaRef.current || !confirmarSenhaRef.current) {
			// TODO: Handle error with alert
			return;
		}

		const senha = senhaRef.current;
		const confirmarSenha = confirmarSenhaRef.current;

		if (senha.value && confirmarSenha.value) {
			setValidSteps({ ...validSteps, step4: true });
		}
	};

	const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (!checkRefs()) {
			return;
		}

		if (!nomeRef.current) return;
		if (!emailRef.current) return;
		if (!documentRef.current) return;
		if (!cepRef.current) return;
		if (!estadoRef.current) return;
		if (!cidadeRef.current) return;
		if (!bairroRef.current) return;
		if (!ruaRef.current) return;
		if (!numeroRef.current) return;
		if (!complementoRef.current) return;
		if (!senhaRef.current) return;
		if (!confirmarSenhaRef.current) return;


		const createUser: TGenericResponse<TUsuario> = await User.Create({
			nomeUsuario: nomeRef.current.value,
			emailUsuario: emailRef.current.value,
			senhaUsuario: senhaRef.current.value,
			documentoUsuario: documentRef.current.value,
			endereco: {
				bairro: bairroRef.current.value,
				cidade: cidadeRef.current.value,
				complemento: complementoRef.current.value,
				estado: estadoRef.current.value,
				numero: numeroRef.current.value,
				rua: ruaRef.current.value,
				zip_code: cepRef.current.value
			},
			tipoUsuario: {
				tipoUsuario: radioEstabelecimentoRef.current?.checked ? "Estabelecimento" : "Parceiro",
			}
		});


		if (createUser.Ok) {
			alert(createUser.Message);
		} else {
			alert(createUser.Message);
		}
	};

	return (
		<section className={styles["SignUpForm"]}>
			<div className={styles["SignUpForm__status"]}>
				<h1>Cadastro</h1>
				<h3>Lorem ipsum dolor sit amet.</h3>
				<ol>
					<li className={styles["__active"]}>Tipo de cadastro</li>
					<li className={step >= 2 ? styles["__active"] : styles["__inactive"]}>
						Informações básicas
					</li>
					<li className={step >= 3 ? styles["__active"] : styles["__inactive"]}>
						Endereço
					</li>
					<li className={step >= 4 ? styles["__active"] : styles["__inactive"]}>Senha</li>
				</ol>
			</div>
			<form className={styles["SignUpForm__form"]} {...props}>
				<div className={styles["SignUpForm__form__content"]} data-step={step}>
					<fieldset className="__fieldset">
						<h2>Tipo de cadastro</h2>
						<p>Qual cadastro você deseja fazer?</p>
						<RadioInput
							forwardRef={radioParceiroRef}
							label="Cooperativa"
							name="typeRadios"
							value={"Parceiro"}
						/>
						<RadioInput
							forwardRef={radioEstabelecimentoRef}
							label="Estabelecimento"
							name="typeRadios"
							value={"Estabelecimento"}
						/>
						<Button
							label={"Próximo"}
							disabled={!validSteps.step1}
							onClick={(e) => changeStep(e, "next")}
						/>
					</fieldset>
					<fieldset className="__fieldset">
						<h2>Informações básicas</h2>
						<TextInput
							forwardedRef={nomeRef}
							label={"Nome"}
							hint={"Insira seu nome completo."}
						/>
						<TextInput
							forwardedRef={emailRef}
							label={"Email"}
							hint={"Insira seu e-mail."}
						/>
						<TextInput
							forwardedRef={documentRef}
							label={"CPF/CNPJ"}
							hint={"Documento de identificação."}
						/>
						<span className={styles["__fieldset__buttons"]}>
							<Button
								label={"Anterior"}
								variant="secondary"
								fill="empty"
								onClick={(e) => changeStep(e, "previous")}
							/>
							<Button
								label={"Próximo"}
								disabled={!validSteps.step2}
								onClick={(e) => changeStep(e, "next")}
							/>
						</span>
					</fieldset>
					<fieldset className="__fieldset">
						<h2>Endereço</h2>
						<TextInput
							forwardedRef={cepRef}
							label={"CEP"}
							hint={"Insira seu endereço."}
						/>
						<TextInput
							forwardedRef={estadoRef}
							label={"Estado"}
							hint={"Insira sua cidade."}
						/>
						<TextInput
							forwardedRef={cidadeRef}
							label={"Cidade"}
							hint={"Insira seu estado."}
						/>
						<TextInput
							forwardedRef={bairroRef}
							label={"Bairro"}
							hint={"Insira seu bairro."}
						/>
						<TextInput
							forwardedRef={ruaRef}
							label={"Rua"}
							hint={"Insira seu endereço."}
						/>
						<TextInput
							forwardedRef={numeroRef}
							label={"Número"}
							hint={"Insira seu número."}
						/>
						<TextInput
							forwardedRef={complementoRef}
							label={"Complemento"}
							hint={"Insira seu complemento."}
						/>
						<span className={styles["__fieldset__buttons"]}>
							<Button
								label={"Anterior"}
								variant="secondary"
								fill="empty"
								onClick={(e) => changeStep(e, "previous")}
							/>
							<Button
								label={"Próximo"}
								disabled={!validSteps.step3}
								onClick={(e) => changeStep(e, "next")}
							/>
						</span>
					</fieldset>
					<fieldset className="__fieldset">
						<h2>Senha</h2>
						<PasswordInput
							forwardedRef={senhaRef}
							label={"Senha"}
							hint={"Insira sua senha."}
						/>
						<PasswordInput
							forwardedRef={confirmarSenhaRef}
							label={"Confirmar senha"}
							hint={"Confirme sua senha."}
						/>
						<span className={styles["__fieldset__buttons"]}>
							<Button
								label={"Anterior"}
								variant="secondary"
								fill="empty"
								onClick={(e) => changeStep(e, "previous")}
							/>
							<Button onClick={submitForm} disabled={!validSteps.step4} label={"Finalizar Cadastro"} />
						</span>
					</fieldset>
				</div>
			</form>
		</section>
	);
}

export default SignUpForm;
