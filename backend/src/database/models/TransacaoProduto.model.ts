import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Carteira from "./Carteira.model";
import Produto from "./Produto.model";

@Table({ tableName: "TransacaoProduto", timestamps: true })
export default class TransacaoProduto extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	valorTransacaoProduto!: number;

	@ForeignKey(() => Carteira)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idComprador!: number;

	@ForeignKey(() => Produto)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idProduto!: number;
}
