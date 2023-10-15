type TTransaction = {
	id: number;
	tipoOleo: "Virgem" | "Usado";
	volume: number;
	valorTransacaoOleo: number;
	idVendedor: number;
	idComprador: number;
};

export default TTransaction;
