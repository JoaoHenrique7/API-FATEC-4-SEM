import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import TipoUsuario from "./TipoUsuario.model";
import Endereco from "./Endereco.model";
import Carteira from "./Carteira.model"

@Table({ tableName: "Usuario", timestamps: true })
export default class Usuario extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.STRING(255), allowNull: false })
	nomeUsuario!: string;

	@Column({ type: DataType.STRING(255), allowNull: false })
	emailUsuario!: string;

	@Column({ type: DataType.STRING(64), allowNull: false })
	senhaUsuario!: string;

	@Column({ type: DataType.STRING(255), allowNull: false })
	documentoUsuario!: string;

	@HasOne(() => TipoUsuario, { constraints: false, onDelete: 'cascade' })
	tipoUsuario!: TipoUsuario;

	@HasOne(() => Endereco, { constraints: false, onDelete: 'cascade' })
	endereco!: Endereco;

	@HasOne(() => Carteira, { constraints: false, onDelete: 'cascade' })
	carteira!: Carteira;
}