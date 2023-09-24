import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import Usuario from "./Usuario.model";
import Logradouro from "./Logradouro.model";

@Table({ tableName: "Endereco", timestamps: true })
export default class Endereco extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeEndereco!: string;

	@HasOne(() => Logradouro, { constraints: false, onDelete: 'cascade' })
	logradouro!: Logradouro;

	@ForeignKey(() => Usuario)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idUsuario!: number;
}