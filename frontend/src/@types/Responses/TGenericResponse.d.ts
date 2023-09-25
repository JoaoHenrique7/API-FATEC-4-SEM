type TGenericResponse<T> = {
	Ok: boolean;
	Message: string;
	Data: Array<T>;
};

export default TGenericResponse;