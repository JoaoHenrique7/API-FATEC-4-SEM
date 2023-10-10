import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Usuario from "./Usuario.model";
import TransacaoProduto from "./TransacaoProduto.model";
import TransacaoOleo from "./TransacaoOleo.model";

@Table({ tableName: "Carteira", timestamps: true })
export default class TipoUsuario extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	saldo!: number;

	@ForeignKey(() => Usuario)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idUsuario!: number;

	@HasMany(() => TransacaoProduto, { constraints: false, onDelete: 'cascade' })
	transacaoProduto!: TransacaoProduto;

	@HasMany(() => TransacaoOleo, { constraints: false, onDelete: 'cascade' })
	transacaoOleo!: TransacaoOleo;
}
