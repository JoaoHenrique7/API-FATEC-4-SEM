import React, { useState } from "react";
import styles from "./PasswordInput.module.css";
import { passwordValidation } from "../../@utils/validations/validations.util";

type PasswordInputProps = {
	label: string;
	hint: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, "type" | "onChange">;

function PasswordInput(props: PasswordInputProps): JSX.Element {
	const [isValid, setIsValid] = useState<"default" | "valid" | "invalid">("default");
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { label, hint, onChange, ...inputProps } = props;

	const validateMask = (regex: RegExp, value: string): boolean => regex.test(value);

	const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const isValueValid = passwordValidation(e.currentTarget.value);
		setIsValid(isValueValid ? "valid" : "invalid");
		if (onChange) onChange(e);
	};

	const setVisibility = () => setIsVisible((prev) => !prev);

	return (
		<label className={styles["passwordInput"]}>
			<span className={styles["passwordInput__label"]}>{label}</span>
			<input
				className={`${styles["passwordInput__input"]} ${
					isValid !== "default"
						? isValid === "valid"
							? styles["--valid"]
							: styles["--invalid"]
						: ""
				}`}
				onChange={onChangeWrapper}
				type={isVisible ? "text" : "password"}
				{...inputProps}
			/>
			<small className={styles["passwordInput__hint"]}>{hint}</small>
		</label>
	);
}

export default PasswordInput;
