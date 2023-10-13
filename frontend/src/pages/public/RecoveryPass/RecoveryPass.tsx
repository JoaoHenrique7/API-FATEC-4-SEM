import React from "react";
import { Component } from "react";
import SaltyAlert from "../../../@utils/libs/SaltyAlert";
import UserService from "../../../services/UserService/UserService";
import Form from "./components/RecoveryPassForm";

interface RecoveryPassState {
	loggedIn: boolean;
}

class RecoveryPass extends Component<RecoveryPassState, RecoveryPassState> {
	constructor(props: any) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}
	handleLogin = async (email: string) => {
		const matchUser = UserService.recoveryPass(email);
		if ((await matchUser) === true) {
			this.setState({ loggedIn: true });
			window.open("/login");
		} else {
			new SaltyAlert().modal({
				icon: "Error",
				title: "Erro",
				text: "Email inválido",
				closeOnClickOutside: true,
				timerInMiliseconds: 10000,
			});
		}
	};
	render() {
		return <Form onSubmit={this.handleLogin} />;
	}
}

export default RecoveryPass;
