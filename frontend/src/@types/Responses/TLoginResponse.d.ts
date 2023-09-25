import TUsuario from "../Models/TUsuario";

type TLoginResponse = {
	Ok: {
		success: boolean,
		usuario: TUsuario | null
	};
	Message: string;
	Data: [];
}

export default TLoginResponse;