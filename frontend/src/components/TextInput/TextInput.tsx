import React from "react";
import styles from "./TextInput.module.css";

type TextInputProps = {
	label: string;
	hint: string;
	hasError: boolean;
} & Omit<React.HTMLProps<HTMLInputElement>, "type">;

function TextInput(props: TextInputProps) {
	return (
		<label className={styles["textInput"]}>
			<span>{props.label}</span>
			<input type="text" {...props} />
			<small>{props.hint}</small>
		</label>
	);
}

export default TextInput;
