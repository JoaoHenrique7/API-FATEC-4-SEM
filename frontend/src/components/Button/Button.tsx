import React from "react";
import styles from "./Button.module.css";
import { AiOutlineLoading } from "react-icons/ai";

type ButtonVariants = "primary" | "secondary" | "accent";
type ButtonFiller = "empty" | "border" | "fill";

type ButtonProps = {
	label: string;
	loading?: boolean;
	variant?: ButtonVariants;
	fill?: ButtonFiller;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps): JSX.Element {
	const { label, loading, variant = "primary", fill = "fill", ...buttonProps } = props;

	return (
		<button
			className={styles["button"]}
			disabled={loading}
			data-variant={variant}
			data-fill={fill}
			{...buttonProps}
		>
			{loading && <AiOutlineLoading className={styles["button__icon__loading"]} />}
			{label}
		</button>
	);
}

export default Button;
