import React from "react";
import styles from "./Button.module.css";
import { AiOutlineLoading } from "react-icons/ai";

type ButtonProps = {
	label: string;
	loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps): JSX.Element {
	const { label, loading, ...buttonProps } = props;

	return (
		<button className={styles["button"]} disabled={loading} {...buttonProps}>
			{loading && <AiOutlineLoading className={styles["button__icon__loading"]} />}
			{label}
		</button>
	);
}

export default Button;
