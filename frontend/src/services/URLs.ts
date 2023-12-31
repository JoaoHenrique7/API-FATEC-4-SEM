const BASE_URL = "http://localhost:3001";

const router = <T extends Record<string, string>>(routes: T): { [K in keyof T]: string } => {
	const result: { [K in keyof T]: string } = {} as T;

	for (const key in routes) {
		result[key] = `${BASE_URL}/${routes[key]}`;
	}

	return result;
};

const UserRoutes = Object.freeze(
	router({
		All: "user/get-all",
		Create: "user/create",
		OneUser: "user/get-one-user",
		Edit: "user/edit"
	}),
);

const AuthRoutes = Object.freeze(
	router({
		Login: "auth/login",
	}),
);

const TransactionRoutes = Object.freeze(
	router({
		All: "oil-transaction/get-all",
		Create: "oil-transaction/new-transaction",
	}),
);

const RegistryRoutes = Object.freeze(
	router({
		All: "registry/get-all",
		OneRegistry: "registry/get-one-registry",
		UpdateOilById: "registry/update-oil-by-id",
		UpdateQuotationById: "registry/update-quotation-by-id",
	}),
);

const URLs = {
	UserRoutes,
	AuthRoutes,
	TransactionRoutes,
	RegistryRoutes,
} as const;

export default URLs;
