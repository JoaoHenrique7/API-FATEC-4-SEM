import React from "react";
import styles from "./SignInForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import RegExpValidation from "../../../../@utils/validations/validations.enum";

type SignInFormProps = React.HTMLProps<HTMLFormElement>;

function SignInForm(props: SignInFormProps) {
	return (
		<div className={styles["signInForm"]}>
			<h1 className={styles["signInForm__title"]}>Login</h1>
			<h3 className={styles["signInForm__subtitle"]}>Lorem ipsum dolor sit amet.</h3>
			<form className={styles["signInForm__form"]} {...props}>
				<TextInput
					label="Email"
					hint="Preencha com seu email"
					placeholder="Insira seu email..."
					validation={RegExpValidation.Email}
				/>
				<PasswordInput
					label="Senha"
					placeholder="Insira sua senha..."
					hint="Preencha com sua senha"
				/>
			</form>
		</div>
	);
}

export default SignInForm;
