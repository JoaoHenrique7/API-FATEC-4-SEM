import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import TransacaoProduto from "./TransacaoProduto.model";

@Table({ tableName: "Produto", timestamps: true })
export default class Produto extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	valorProduto!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	quantidadeEstoque!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	descricaoProduto!: string;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeProduto!: string;

	@HasMany(() => TransacaoProduto, { constraints: false, onDelete: 'cascade' })
	transacaoProduto!: TransacaoProduto;

}
