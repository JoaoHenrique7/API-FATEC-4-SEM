import React, { useRef } from "react";
import styles from "./Profile.module.css";
import TextInput from "../../../components/TextInput/TextInput";
import { SessionContextType } from "../../../context/Session/SessionContext";
import useSession from "../../../hooks/useSession.hook";
import TUsuario from "../../../@types/Models/TUsuario";
import Button from "../../../components/Button/Button";
import { BiCoin } from "react-icons/bi";
import { RiOilFill, RiOilLine } from "react-icons/ri";
import UserService from "../../../services/UserService/UserService";

function Profile(): JSX.Element {
	const { session }: SessionContextType = useSession();
	const user: TUsuario | undefined = session?.user;

	const nomeRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const documentoRef = useRef<HTMLInputElement>(null);

	const cepRef = useRef<HTMLInputElement>(null);
	const estadoRef = useRef<HTMLInputElement>(null);
	const cidadeRef = useRef<HTMLInputElement>(null);
	const bairroRef = useRef<HTMLInputElement>(null);
	const ruaRef = useRef<HTMLInputElement>(null);
	const numeroRef = useRef<HTMLInputElement>(null);
	const complementoRef = useRef<HTMLInputElement>(null);

	const handleSaveChanges = async (e: React.FormEvent) => {
		e.preventDefault();
	
		const updatedUser = {
			id: session!.user.id,
		  	nomeUsuario: nomeRef.current!.value,
			emailUsuario: emailRef.current!.value,
			documentoUsuario: documentoRef.current!.value,
			};
	
		const updatedEndereco = {
			zip_code: cepRef.current!.value,
			estado: estadoRef.current!.value,
			cidade: cidadeRef.current!.value,
			bairro: bairroRef.current!.value,
			rua: ruaRef.current!.value,
			numero: numeroRef.current!.value,
			complemento: complementoRef.current!.value,
		}

		try {
			const resultadoRegistry = (await UserService.update(updatedUser.id,updatedUser.nomeUsuario, updatedUser.emailUsuario, updatedUser.documentoUsuario))
			const updateEndereco = (await UserService.updateEndereco(updatedUser.id,updatedEndereco.zip_code,updatedEndereco.numero,updatedEndereco.rua,updatedEndereco.bairro,updatedEndereco.cidade,updatedEndereco.estado,updatedEndereco.complemento))
			if (resultadoRegistry.ok && updateEndereco.ok) {
			// updateSession(updatedUser);
			alert("Informações atualizadas com sucesso!");
		  } else {
			alert("Falha ao atualizar informações. Tente novamente.");
		  }
		} catch (error) {
		  console.error("Erro ao fazer a solicitação de atualização:", error);
		}
	  };
	
	return (
		<section className={styles["page"]}>
			<h1 className={styles["title"]}>Perfil</h1>
			<p className={styles["profile__tag"]}>{user?.tipoUsuario.tipoUsuario ?? "Tipo de conta não encontrado."}</p>
			<div className={styles["profile__extras"]}>
				<p className={styles["profile__extra"]}>
					<span>
						<BiCoin />
						Saldo:
					</span>
					<span>
						{user?.registro.saldo ?? "N/A"}
					</span>
				</p>
				<p className={styles["profile__extra"]}>
					<span>
						<RiOilLine />
						Óleo virgem:
					</span>
					<span>
						{user?.registro.volumeOleoVirgem ?? "N/A"}
					</span>
				</p>
				<p className={styles["profile__extra"]}>
					<span>
						<RiOilFill />
						Óleo usado:
					</span>
					<span>
						{user?.registro.volumeOleoUsado ?? "N/A"}
					</span>
				</p>
			</div>
			<form className={styles["profile__form"]} onSubmit={handleSaveChanges}>
				<fieldset className="__fieldset">
					<legend>Informações pessoais</legend>
					<TextInput
						forwardedRef={nomeRef}
						label="Nome"
						value={user?.nomeUsuario}
					/>
					<TextInput
						forwardedRef={emailRef}
						label="Email"
						value={user?.emailUsuario}
					/>
					<TextInput
						forwardedRef={documentoRef}
						label="Documento"
						value={user?.documentoUsuario}
					/>
				</fieldset>
				<fieldset className="__fieldset">
					<legend>Informações de endereço</legend>
					<TextInput
						forwardedRef={cepRef}
						label="CEP"
						value={user?.endereco.zip_code}
					/>
					<TextInput
						forwardedRef={estadoRef}
						label="Estado"
						value={user?.endereco.estado}
					/>
					<TextInput
						forwardedRef={cidadeRef}
						label="Cidade"
						value={user?.endereco.cidade}
					/>
					<TextInput
						forwardedRef={bairroRef}
						label="Bairro"
						value={user?.endereco.bairro}
					/>
					<TextInput
						forwardedRef={ruaRef}
						label="Rua"
						value={user?.endereco.rua}
					/>
					<TextInput
						forwardedRef={numeroRef}
						label="Número"
						value={user?.endereco.numero}
					/>
					<TextInput
						forwardedRef={complementoRef}
						label="Complemento"
						value={user?.endereco.complemento}
					/>
				</fieldset>
				<Button label="Salvar alterações" type="submit" />
			</form>
		</section>
	);
}

export default Profile;