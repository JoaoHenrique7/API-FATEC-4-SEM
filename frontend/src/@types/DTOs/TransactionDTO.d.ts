type TTransactionDTO = {
    tipoOleo: string;
    volume: number;
    valorTransacao: number;
    createdAt: Date;
    updatedAt: Date;
    idVendedor: number;
    idComprador: number;
}

export default TTransactionDTO;