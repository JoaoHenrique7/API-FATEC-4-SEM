import React, { Component } from "react";
import styles from "./CreateUser.module.css";
import CreateUserForm from "./components/CreateUserForm";
import SaltyAlert from "../../../@utils/libs/SaltyAlert";
import User from "../../../model/classes/User";
import UserService from "../../../services/UserService/UserService";
// interface CreateUserPageProp {}

// interface CreateUserPageState {}
class CreateUser extends Component {
	handleCreateUser = async (
		userName: string,
		cpfCnpj: string,
		userType: string,
		email: string,
		password: string,
		address: string,
		neighbordhood: string,
		number: string,
		complement: string,
		city: string,
		cep: string,
		state: string,
	) => {
		let usuario: User = new User(
			userName,
			email,
			password,
			cpfCnpj,
			userType,
			cep,
			number,
			address,
			neighbordhood,
			city,
			state,
			complement,
		);
		console.log(usuario)
		const validacao = await UserService.create(usuario);

		if (validacao) {
			window.location.href = "/sign-in";
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
