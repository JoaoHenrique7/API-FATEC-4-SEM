import React from "react";
import styles from "./SignInForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";

type SignInFormProps = React.HTMLProps<HTMLFormElement>;

function SignInForm(props: SignInFormProps) {
	return (
		<form {...props}>
			<TextInput label="Email" hint="Preencha com seu email" hasError={false} />
		</form>
	);
}

export default SignInForm;
