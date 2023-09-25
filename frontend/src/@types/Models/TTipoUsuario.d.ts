type TTipoUsuario = {
	id: number;
	tipoUsuairo: "Administrador" | "Parceiro" | "Estabelecimento";
	idUsuario: number;
	createdAt: string;
	updatedAt: string;
};

export default TTipoUsuario;