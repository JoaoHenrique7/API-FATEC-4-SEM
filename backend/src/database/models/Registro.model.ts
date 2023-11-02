import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Usuario from "./Usuario.model";
import TransacaoOleo from "./TransacaoOleo.model";

@Table({ tableName: "Registro", timestamps: true })
export default class Registro extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	saldo!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	volumeOleoUsado!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	volumeOleoVirgem!: number;

	@ForeignKey(() => Usuario)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idUsuario!: number;

	@HasMany(() => TransacaoOleo, { constraints: false, onDelete: "cascade" })
	transacaoOleo!: TransacaoOleo[];
}
