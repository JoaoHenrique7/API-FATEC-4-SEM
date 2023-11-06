import React from "react";
import styles from "./Home.module.css";
import { RiOilLine } from "react-icons/ri";

function Home(): JSX.Element {
	return (
		<section className={styles["page"]}>
			<p className={styles["profile__extra"]}>
				<span>
					<RiOilLine />
						Cotação do óleo virgem:
				</span>
				<span>
					1L : 2 moedas
				</span>
			</p>
			<p className={styles["profile__extra"]}>
				<span>
					<RiOilLine />
						Cotação do óleo usado:
				</span>
				<span>
					1L : 1 moeda
				</span>
			</p>
		</section>
	);
}

export default Home;
