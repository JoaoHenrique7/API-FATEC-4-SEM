import React, { Component } from "react";
import styles from "./CreateUser.module.css";
import CreateUserForm from "./components/CreateUserForm";
import SaltyAlert from "../../../@utils/libs/SaltyAlert";
import User from "../../../model/classes/User";
import UserService from "../../../services/UserService/UserService";
interface CreateUserPageProp {}

interface CreateUserPageState {}
class CreateUser extends Component<CreateUserPageProp, CreateUserPageState> {
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
	) => {
		const ADMIN = "0";
		const PARTNER = "1";
		const COMPANY = "2";
		const INDIVIDUAL = "3";
		let usuario: User = new User(userName, cpfCnpj,email, password, true, address, neighbordhood, number, complement, city);
		let validacao = false;

		if (userType === ADMIN) {
			validacao = await UserService.createAdmin(usuario);
		} else if (userType === PARTNER) {
			validacao = await UserService.createPartner(usuario);
		} else if (userType === COMPANY) {
			validacao = await UserService.createPartner(usuario);
		} else if (userType === INDIVIDUAL) {
			validacao = await UserService.createIndividual(usuario);
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
