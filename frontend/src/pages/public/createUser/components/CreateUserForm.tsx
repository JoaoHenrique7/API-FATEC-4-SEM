import React from "react";
import styles from "./CreateUserForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";

type CreateUserFormProps = React.HTMLProps<HTMLFormElement>;

function CreateUserForm(props: CreateUserFormProps) {
	return (
		<form className={styles["CreateUserForm"]} {...props}>
			<div className={styles["leftsection"]}>
				<div className={ styles["line"] }>
					<TextInput
						label="Email"
						hint="Preencha com seu email"
						placeholder="Insira seu email..."
						validation={/^[0-9]{5}$/g}
					/>
					<TextInput
						label="Email"
						hint="Preencha com seu email"
						placeholder="Insira seu email..."
						validation={/^[0-9]{5}$/g}
					/>
				</div>
			</div>
			<div className={styles["leftsection"]}>asds</div>
		</form>

	);
}

export default CreateUserForm;
