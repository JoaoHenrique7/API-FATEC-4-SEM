import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import Bairro from "./Bairro.model";
import Endereco from "./Endereco.model";

@Table({ tableName: "Logradouro", timestamps: true })
export default class Logradouro extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeLogradouro!: string;

	@HasOne(() => Bairro, { constraints: false, onDelete: 'cascade' })
	bairro!: Bairro;

	@ForeignKey(() => Endereco)
	idEndereco!: number;
}