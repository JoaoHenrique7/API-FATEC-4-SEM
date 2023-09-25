import React, { ForwardedRef, useState } from "react";
import styles from "./PasswordInput.module.css";
import { passwordValidation } from "../../@utils/validations/validations.util";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type PasswordInputProps = {
	label: string;
	hint: string;
	shouldValidate?: boolean;
	forwardedRef?: ForwardedRef<HTMLInputElement>;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, "type" | "onChange" | "ref">;

function PasswordInput(props: PasswordInputProps): JSX.Element {
	const [isValid, setIsValid] = useState<"default" | "valid" | "invalid">("default");
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { label, hint, onChange, forwardedRef, shouldValidate = true, ...inputProps } = props;

	const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (shouldValidate) {
			const isValueValid: boolean = passwordValidation(e.currentTarget.value);
			setIsValid(isValueValid ? "valid" : "invalid");
			if (onChange) onChange(e);
		}
	};

	const setVisibility = () => setIsVisible((prev) => !prev);

	return (
		<label className={styles["passwordInput"]}>
			<span className={styles["passwordInput__label"]}>{label}</span>
			<div className={styles["passwordInput__wrapper"]}>
				<input
					ref={forwardedRef}
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
				{isVisible ? (
					<BsEyeSlash className={styles["passwordInput__icon"]} onClick={setVisibility} />
				) : (
					<BsEye className={styles["passwordInput__icon"]} onClick={setVisibility} />
				)}
			</div>
			<small className={styles["passwordInput__hint"]}>{hint}</small>
		</label>
	);
}

export default PasswordInput;
