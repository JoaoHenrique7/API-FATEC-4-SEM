import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Carteira from "./Carteira.model";

@Table({ tableName: "TransacaoOleo", timestamps: true })
export default class TipoUsuario extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.ENUM("Virgem", "Usado"), allowNull: false })
	tipoOleo!: string;

	@Column({ type: DataType.NUMBER, allowNull: false })
	volume!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	valorTransacaoOleo!: number;

	@Column({ type: DataType.DATE, allowNull: false })
	dataTransacaoOleo!: Date;

	@ForeignKey(() => Carteira)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idVendedor!: number;

	@ForeignKey(() => Carteira)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idComprador!: number;

}