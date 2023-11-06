import React from "react";
import styles from "./TextInput.module.css";
import { ForwardedRef, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

type TextInputProperties = {
	label?: string;
	hint?: string;
	error?: string;
	validation?: RegExp;
	formatter?: { regex: RegExp; replacer: string, chars: string[] };
	forwardedRef?: ForwardedRef<HTMLInputElement>;
	externalValidation?: boolean | ((value: string) => boolean);
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, "type" | "onChange" | "ref">

type TextInputValidation = "default" | "valid" | "invalid";

function TextInput(props: TextInputProperties): JSX.Element {
	const [isValid, setIsValid] = useState<TextInputValidation>("default");
	const { label, hint, forwardedRef, onChange, validation, formatter, value, error, externalValidation, ...inputProps } = props;
	const formattedDefaultValue = value && formatter ? value.toString().replace(formatter.regex, formatter.replacer) : value;

	const validateMask = (regex: RegExp, value: string): boolean => regex.test(value);

	const onChangeWrapper = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (formatter) {
			formatter.chars.forEach(char => {
				event.target.value = event.target.value.replace(char, "");
			});

			const formattedValue = event.currentTarget.value.replace(formatter.regex, formatter.replacer);
			event.target.value = formattedValue;
		}

		if (validation) {
			if (event.target.value.length === 0) {
				setIsValid("invalid");
			} else {
				const isValueValid = validateMask(validation, event.target.value);
				setIsValid(isValueValid ? "valid" : "invalid");
			}
		}

		if (externalValidation !== undefined) {
			let isValueValid: boolean;

			if (typeof externalValidation === "boolean") {
				isValueValid = externalValidation;
			} else {
				isValueValid = externalValidation(event.target.value);
			}

			setIsValid(isValueValid ? "valid" : "invalid");
		}

		if (onChange) onChange(event);
	};

	return (
		<label className={styles["textInput"]}>
			{label && <span className={styles["textInput__label"]}>{label} {isValid === "valid" && <AiOutlineCheckCircle className={styles["textInput__icon"]} />}</span>}
			<input
				data-valid={(isValid !== "invalid")}
				ref={forwardedRef}
				className={`
					${styles["textInput__input"]}
					${isValid !== "default" ?
			isValid === "valid" ?
				styles["--valid"] :
				styles["--invalid"] : ""
		}`}
				onChange={onChangeWrapper}
				type="text"
				defaultValue={formattedDefaultValue || ""}
				{...inputProps}
			/>
			{(hint && isValid !== "invalid") && <span className={styles["textInput__hint"]}>{hint}</span>}
			{(error && isValid === "invalid") && <span className={styles["textInput__error"]}>{error}</span>}
		</label>
	);
}

export default TextInput;