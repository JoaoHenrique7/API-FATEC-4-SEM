const BASE_URL = "http://localhost:3001";

const router = <T extends Record<string, string>>(routes: T): { [K in keyof T]: string } => {
	const result: { [K in keyof T]: string } = {} as T;

	for (const key in routes) {
		result[key] = `${BASE_URL}/${routes[key]}`;
	}

	return result;
};

const UserRoutes = Object.freeze(router({
	All: "user/get-all",
	Create: "user/create",
}));

const AuthRoutes = Object.freeze(router({
	Login: "auth/login",
}));

const URLs = {
	UserRoutes,
	AuthRoutes,
} as const;

export default URLs;