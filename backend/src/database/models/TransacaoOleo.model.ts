import { Column, DataType, ForeignKey, Model, Table, BelongsTo } from "sequelize-typescript";
import Registro from "./Registro.model";

@Table({ tableName: "TransacaoOleo", timestamps: true })
export default class TransacaoOleo extends Model {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
	id!: number;

	@Column({ type: DataType.ENUM("Virgem", "Usado"), allowNull: false })
	tipoOleo!: string;

	@Column({ type: DataType.NUMBER, allowNull: false })
	volume!: number;

	@Column({ type: DataType.NUMBER, allowNull: false })
	valorTransacaoOleo!: number;

	@ForeignKey(() => Registro)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idVendedor!: number;

	@ForeignKey(() => Registro)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idComprador!: number;

	@BelongsTo(() => Registro, "idComprador")
	comprador!: Registro;

	@BelongsTo(() => Registro, "idVendedor")
	vendedor!: Registro;
}
