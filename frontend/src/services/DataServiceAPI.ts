import Transaction from "../model/classes/Transaction";
import User from "../model/classes/User";
export default class DataServiceAPI {
	public static async post(url: string, params: object) {
		const token: string | null = window.localStorage.getItem("session_token");
		return await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			body: JSON.stringify(params),
		});
	}

	public static async get(url: string, params?: object) {
		const token: string | null = window.localStorage.getItem("session_token");
		return await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(params),
		});
	}

	public static async delete(url: string, params: object) {
		const token: string | null = window.localStorage.getItem("session_token");
		return await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			body: JSON.stringify(params),
		});
	}

	public static async postCreate(url: string, params: User | Transaction) {
		const token: string | null = window.localStorage.getItem("session_token");
		return await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			body: JSON.stringify(params.toJson()),
		});
	}
}
