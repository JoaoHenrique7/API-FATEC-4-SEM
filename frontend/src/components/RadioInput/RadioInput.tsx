import React from "react";
import styles from "./RadioInput.module.css";

type RadioInputProps = {
	label: string;
	forwardRef: React.ForwardedRef<HTMLInputElement>;
} & Omit<React.HTMLProps<HTMLInputElement>, "type">;

function RadioInput(props: RadioInputProps) {
	const { label, forwardRef, ...inputProps } = props;

	return (
		<label className={styles["radioInput"]}>
			<input
				ref={forwardRef}
				className={styles["radioInput__input"]}
				type="radio"
				{...inputProps}
			/>
			{label}
		</label>
	);
}

export default RadioInput;
