import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import Usuario from "./Usuario.model";

@Table({ tableName: "Endereco", timestamps: true })
export default class Endereco extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;
	
	@Column({ type: DataType.STRING(255), allowNull: false })
	zip_code!: string

	@Column({ type: DataType.NUMBER, allowNull: false })
	numero!: string;

	@Column({ type: DataType.STRING(255), allowNull: false })
	rua!: string

	@Column({ type: DataType.STRING(255), allowNull: false })
	bairro!: string

	@Column({ type: DataType.STRING(255), allowNull: false })
	cidade!: string

	@Column({ type: DataType.STRING(255), allowNull: false })
	estado!: string

	@Column({ type: DataType.STRING(255), allowNull: false })
	complemento!: string

	@ForeignKey(() => Usuario)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idUsuario!: number;
}