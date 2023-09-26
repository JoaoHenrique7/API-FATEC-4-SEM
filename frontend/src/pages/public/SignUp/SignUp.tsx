import React from "react";
import SignUpForm from "./components/SignUpForm";
// interface CreateUserPageProp {}

// interface CreateUserPageState {}

function SignIn() {
	return <SignUpForm />;
}

// class CreateUser extends Component {
// 	handleCreateUser = async (
// 		userName: string,
// 		cpfCnpj: string,
// 		userType: string,
// 		email: string,
// 		password: string,
// 		address: string,
// 		neighbordhood: string,
// 		number: string,
// 		complement: string,
// 		city: string,
// 		cep: string,
// 		state: string,
// 	) => {
// 		const usuario: User = new User(
// 			userName,
// 			email,
// 			password,
// 			cpfCnpj,
// 			userType,
// 			cep,
// 			number,
// 			address,
// 			neighbordhood,
// 			city,
// 			state,
// 			complement,
// 		);
// 		if (userType == "0") {
// 			new SaltyAlert().toast({
// 				icon: "Error",
// 				text: "Erro tipo de usuario não aceito!",
// 				timerInMiliseconds: 5000,
// 			});
// 		} else {
// 			const validacao = await UserService.create(usuario);
// 			if (validacao) {
// 				window.location.href = "/sign-in";
// 			} else {
// 				new SaltyAlert().toast({
// 					icon: "Error",
// 					text: "Erro ao adicionar usuário!",
// 					timerInMiliseconds: 5000,
// 				});
// 			}
// 		}
// 	};
// 	render() {
// 		return <SignUpForm onSubmit={this.handleCreateUser} />;
// 	}
// }
export default SignIn;
