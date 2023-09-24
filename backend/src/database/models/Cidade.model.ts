import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Bairro from "./Bairro.model";

@Table({ tableName: "Cidade", timestamps: true })
export default class Cidade extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeCidade!: string;

	@ForeignKey(() => Bairro)
	idBairro!: number;
}