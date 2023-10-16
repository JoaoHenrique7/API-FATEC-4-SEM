type TTipoUsuario = {
	id: number;
	tipoUsuario: "Administrador" | "Parceiro" | "Estabelecimento";
	idUsuario: number;
	createdAt: string;
	updatedAt: string;
};

export default TTipoUsuario;