import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import styles from "./IconWithText.module.css";

interface IconWithTextProps {
	icon: IconType;
	text: number | undefined;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon: Icon, text }) => {
	return (
		<div className={styles["container"]}>
			<div className={styles["icon"]}>
				<Icon size={32} />
				<span>{"R$ " + text}</span>
			</div>
		</div>
	);
};

export default IconWithText;
