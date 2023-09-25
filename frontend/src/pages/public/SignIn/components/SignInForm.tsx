import React, { useContext, useState } from "react";
import styles from "./SignInForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import Button from "../../../../components/Button/Button";
import RecoveryLink from "../../../../components/BasicLink/BasicLink";
import Auth from "../../../../services/auth/Auth.service";
import { SessionContext, SessionContextType } from "../../../../context/Session/SessionContext";

type SignInFormProps = React.HTMLProps<HTMLFormElement>;

function SignInForm(props: SignInFormProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(true);

	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);

	const { login } = useContext(SessionContext) as SessionContextType;

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setLoading(true);

		if (!emailRef.current || !passwordRef.current) {
			// TODO: Handle error with alert
			return;
		}

		const response: boolean = await login({
			email: emailRef.current.value,
			password: passwordRef.current.value,
		});

		setLoading(false);

		if (!response) {
			setIsValid(false);
		} else {
			window.location.href = "/";
		}
	};

	return (
		<div className={styles["signInForm"]}>
			<h1 className={styles["signInForm__title"]}>Login</h1>
			<h3 className={styles["signInForm__subtitle"]}>Lorem ipsum dolor sit amet.</h3>
			<form className={styles["signInForm__form"]} {...props}>
				{!isValid && (
					<span className={styles["signInForm__error"]}>
						Credenciais incorretas! Tente novamente.
					</span>
				)}
				<TextInput
					forwardedRef={emailRef}
					label="Email"
					hint="Preencha com seu email"
					placeholder="Insira seu email..."
				/>
				<PasswordInput
					forwardedRef={passwordRef}
					label="Senha"
					placeholder="Insira sua senha..."
					hint="Preencha com sua senha"
					shouldValidate={false}
				/>
				<RecoveryLink
					newPath="recovery"
					text="Recuperar Senha"
					className="returnLoginLink"
				/>
				<Button label="Logar" onClick={handleLogin} loading={loading} />
			</form>
		</div>
	);
}

export default SignInForm;
