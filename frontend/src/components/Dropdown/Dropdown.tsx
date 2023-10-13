import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import arrow from "../../assets/arrow-down_119013.svg";

interface DropdownProps {
	options: string[];
	label?: string;
	onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option: string) => {
		setSearchTerm(option);
		onSelect(option);
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles["dropdown"]}>
			<div className={styles["dropdown-input-container"]}>
				<input
					className={styles["dropdown-input"]}
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onClick={toggleDropdown}
					placeholder="Digite para filtrar..."
				/>
				<button className={styles["dropdown-button"]} onClick={toggleDropdown}>
					<img src={arrow} alt="Seta para baixo" />
				</button>
			</div>
			{isOpen && (
				<ul className={styles["dropdown-options"]}>
					{options
						.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
						.map((option) => (
							<li key={option} onClick={() => handleOptionClick(option)}>
								{option}
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
