import React from "react";
import styles from "./SignInForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";

type SignInFormProps = React.HTMLProps<HTMLFormElement>;

function SignInForm(props: SignInFormProps) {
	return (
		<form className={styles["signInForm"]} {...props}>
			<TextInput
				label="Email"
				hint="Preencha com seu email"
				placeholder="Insira seu email..."
				validation={/^[0-9]{5}$/g}
			/>
		</form>
	);
}

export default SignInForm;
