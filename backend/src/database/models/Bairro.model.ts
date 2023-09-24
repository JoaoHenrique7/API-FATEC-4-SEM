import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import Logradouro from "./Logradouro.model";
import Cidade from "./Cidade.model";

@Table({ tableName: "Bairro", timestamps: true })
export default class Bairro extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeBairro!: string;

	@HasOne(() => Cidade, { constraints: false, onDelete: 'cascade' })
	cidade!: Cidade;

	@ForeignKey(() => Logradouro)
	idLogradouro!: number;
}