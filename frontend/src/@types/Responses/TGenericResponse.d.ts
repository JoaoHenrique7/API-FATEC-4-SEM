import TUsuario from "../Models/TUsuario";

interface TGenericUserResponse<T extends TUsuario> {
	Ok: boolean;
	Message: string;
	Data: T[];
}

export default TGenericResponse;
