import React, { Component } from "react";
import styles from "./CreateUser.module.css";
import CreateUserForm from "./components/CreateUserForm";
import SaltyAlert from "../../../@utils/libs/SaltyAlert";
interface CreateUserPageProp {}

interface CreateUserPageState {}
class CreateUser extends Component<CreateUserPageProp, CreateUserPageState> {
	handleCreateUser = async (
		nomeCompleto: string,
		cpfCnpj: string,
		tipoDoUsuario: string,
		email: string,
		senha: string,
		confirmarSenha: string,
		endereco: string,
		bairro: string,
		numero: string,
		complemento: string,
		cidade: string,
	) => {
		const ADMIN = "0";
		const USUARIO = "1";
		// let usuario: User = new User(nomeDoUsuario, nomeCompleto, cpf, email, senha, true);
		let validacao = false;

		if (tipoDoUsuario === ADMIN) {
			// validacao = await UserService.createAdmin(usuario);
		} else if (tipoDoUsuario === USUARIO) {
			// validacao = await UserService.createUser(usuario);
		} else {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "Tipo de usuário desconhecido!",
				closeOnClickOutside: true,
				timerInMiliseconds: 7000,
			});
			return;
		}

		if (validacao) {
			new SaltyAlert().toast({
				icon: "Success",
				text: "Usuário adicionado com sucesso!",
				timerInMiliseconds: 5000,
			});
		} else {
			new SaltyAlert().toast({
				icon: "Error",
				text: "Erro ao adicionar usuário!",
				timerInMiliseconds: 5000,
			});
		}
	};
	render() {
		return <CreateUserForm onSubmit={this.handleCreateUser} />;
	}
}
export default CreateUser;
