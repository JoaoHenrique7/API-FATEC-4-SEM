import React from "react";
import styles from "./SignInForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";
import RegExpValidation from "../../../../@utils/validations/validations.enum";

type SignInFormProps = React.HTMLProps<HTMLFormElement>;

function SignInForm(props: SignInFormProps) {
	return (
		<form className={styles["signInForm"]} {...props}>
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
	);
}

export default SignInForm;
