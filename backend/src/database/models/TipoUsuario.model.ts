import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Usuario from "./Usuario.model";

@Table({ tableName: "TipoUsuario", timestamps: true })
export default class TipoUsuario extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.ENUM("Administrador", "Parceiro", "Estabelecimento"), allowNull: false })
	tipoUsuario!: string;

	@ForeignKey(() => Usuario)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idUsuario!: number;
}