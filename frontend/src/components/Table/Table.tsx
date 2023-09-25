import React from "react";
import { Component } from "react";
import styles from "./Table.module.css";

interface Properties<T> {
	data: T[];
	isLoading: boolean;
	omit?: string[];
}

type OmitProperties<T, K extends keyof T> = Omit<T, K>;

class Table<T extends { [key: string]: any }> extends Component<Properties<T>> {
	omitProperties<T, K extends keyof T>(obj: T, keys: K[]): OmitProperties<T, K> {
		const result = { ...obj };
		keys.forEach((key) => delete result[key]);

		return result;
	}

	render() {
		const { data, isLoading, omit } = this.props;
		let columns: string[] = [];

		if (data.length === 0 && !isLoading)
			return (
				<span className={styles.warning}>
					<span>Nenhum dado encontrado.</span>
				</span>
			);
		if (data.length === 0 && isLoading)
			return (
				<span className={styles.warning}>
					<span>Carregando...</span>
				</span>
			);

		if (omit !== undefined) {
			const keysToOmit: (keyof T)[] = omit;
			const ommittedObj = this.omitProperties(data[0], keysToOmit);
			columns = Object.keys(ommittedObj);
		} else {
			columns = Object.keys(data[0]);
		}

		return (
			<table>
				<thead>
					<tr>
						{columns.map((column: keyof T, key: number) => (
							<th key={key}>
								{column.toString().replace(/^\w/, (c) => c.toUpperCase())}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((datum, key: number) => {
						return (
							<tr key={key}>
								{columns.map((column: keyof T, key: number) => {
									return <td key={key}>{datum[column].toString()}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Table;
