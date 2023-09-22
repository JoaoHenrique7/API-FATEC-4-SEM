import React from "react";
import styles from "./CreateUserForm.module.css";
import TextInput from "../../../../components/TextInput/TextInput";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";

type CreateUserFormProps = React.HTMLProps<HTMLFormElement>;

function CreateUserForm(props: CreateUserFormProps) {
	return (
		<div className={styles["content"]}>
			<div className={styles["left"]}></div>
			<form className={styles["CreateUserForm"]} {...props}>
				<h1 className={styles["title"]}>Crie seu usuario</h1>
				<div className={styles["line"]}>
					<div className={styles["inputPlace"]}>
						<TextInput
							label="Nome"
							hint=""
							placeholder="Coloque o nome..."
							validation={/^[0-9]{5}$/g}
						/>
					</div>
					<TextInput
						label="CPF/CNPJ"
						hint=""
						placeholder="Insira seu CPF/CNPJ..."
						validation={/^[0-9]{5}$/g}
					/>
				</div>
				<div className={styles["line"]}>
					<div className={styles["inputPlace"]}>
						<TextInput
							label="Endereço"
							hint=""
							placeholder="Coloque o Endereço..."
							validation={/^[0-9]{5}$/g}
						/>
					</div>
					<TextInput label="Bairro" hint="" placeholder="Insira seu Bairro..." />
				</div>
				<div className={styles["line"]}>
					<div className={styles["inputPlace"]}>
						<TextInput
							label="Numero"
							hint=""
							placeholder="Coloque o numero do endereço..."
							validation={/^[0-9]{5}$/g}
						/>
					</div>
					<TextInput label="Complemento" hint="" placeholder="Insira o complemento..." />
				</div>
				<div className={styles["line"]}>
					<div className={styles["inputPlace"]}>
						<PasswordInput label="Senha" hint="" placeholder="Crie sua senha..." />
					</div>
					<PasswordInput
						label="Confirme a senha"
						hint=""
						placeholder="Confirme sua senha..."
					/>
				</div>
			</form>

			<div className={styles["right"]}>
				<input type="checkbox" />
			</div>
		</div>
	);
}

export default CreateUserForm;
