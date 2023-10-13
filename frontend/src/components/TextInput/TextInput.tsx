import React, { ForwardedRef, useState } from "react";
import styles from "./TextInput.module.css";

type TextInputProps = {
	label?: string;
	hint?: string;
	validation?: RegExp;
	forwardedRef?: ForwardedRef<HTMLInputElement>;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, "type" | "onChange" | "ref">;

function TextInput(props: TextInputProps): JSX.Element {
	const [isValid, setIsValid] = useState<"default" | "valid" | "invalid">("default");
	const { label, hint, validation, forwardedRef, onChange, ...inputProps } = props;

	const validateMask = (regex: RegExp, value: string): boolean => regex.test(value);

	const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (validation) {
			const isValueValid = validateMask(validation, e.currentTarget.value);
			setIsValid(isValueValid ? "valid" : "invalid");
		}
		if (onChange) onChange(e);
	};

	return (
		<label className={styles["textInput"]}>
			{label && <span className={styles["textInput__label"]}>{label}</span>}
			<input
				ref={forwardedRef}
				className={`${styles["textInput__input"]} ${
					isValid !== "default"
						? isValid === "valid"
							? styles["--valid"]
							: styles["--invalid"]
						: ""
				}`}
				onChange={onChangeWrapper}
				type="text"
				{...inputProps}
			/>
			{hint && <small className={styles["textInput__hint"]}>{hint}</small>}
		</label>
	);
}

export default TextInput;
