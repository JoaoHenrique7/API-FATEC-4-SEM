import React, { useState, useContext } from "react";
import styles from "./Home.module.css";
import { SessionContext, SessionContextType } from "../../../context/Session/SessionContext";
import { RiOilLine } from "react-icons/ri";
import UpdateQuotationForm from "./components/UpdateQuotationForm";

function Home(): JSX.Element {
	const { session, reload } = useContext(SessionContext) as SessionContextType;
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);

	const handleAccordionToggle = () => {
		setIsAccordionOpen(!isAccordionOpen);
	};

	return (
		<section className={styles["page"]}>
			<p className={styles["profile__extra"]}>
				<span>
					<RiOilLine />
					Cotação do óleo virgem:
				</span>
				<span>1L : {session!.user.registro.cotacaoOleoVirgem} moedas</span>
			</p>
			<p className={styles["profile__extra"]}>
				<span>
					<RiOilLine />
					Cotação do óleo usado:
				</span>
				<span>1L : {session!.user.registro.cotacaoOleoUsado} moeda</span>
			</p>
			{session!.user.tipoUsuario.tipoUsuario !== "Estabelecimento" && (
				<div className={styles["accordion"]} onClick={handleAccordionToggle}>
					<span className={styles["arrow-icon"]}>{isAccordionOpen ? "↓" : "→"}</span>
					<span className={styles["update-text"]}>Atualizar cotação</span>
					{isAccordionOpen && <UpdateQuotationForm />}
				</div>
			)}
		</section>
	);
}

export default Home;
