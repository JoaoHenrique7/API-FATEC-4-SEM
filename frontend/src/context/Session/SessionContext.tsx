import React, { ReactNode, createContext, useState } from "react";
import TLoginDTO from "../../@types/DTOs/LoginDTO";
import TUsuario from "../../@types/Models/TUsuario";
import { useCookies } from "react-cookie";
import Auth from "../../services/auth/Auth.service";

export type SessionContextType = {
	session: { user: TUsuario } | undefined;
	login: (credentials: TLoginDTO) => Promise<boolean>;
	logout: () => void;
	reload: () => void;
};

export const SessionContext = createContext<SessionContextType | null>(null);

type TProperties = {
	children: ReactNode;
};

function SessionContextProvider(props: TProperties): JSX.Element {
	const [cookies, setCookie, removeCookie] = useCookies(["@_user"]);
	const [session, setSession] = useState<{ user: TUsuario } | undefined>(
		cookies["@_user"] ? { user: cookies["@_user"] } : undefined,
	);

	const login = async (credentials: TLoginDTO) => {
		const response = await Auth.Login({
			email: credentials.email,
			password: credentials.password,
		});

		if (response.Ok.success && response.Ok.usuario) {
			setSession({ user: response.Ok.usuario });
			setCookie("@_user", JSON.stringify(response.Ok.usuario), { path: "/" });
			return true;
		} else {
			return false;
		}
	};

	const logout = () => {
		removeCookie("@_user", { path: "/" });
		setSession(undefined);
		window.location.href = "/sign-in";
	};

	const reload = async () => {
		const response = await Auth.Login({
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
			email: session?.user.emailUsuario!,
			password: "123456",
		});

		if (response.Ok.success && response.Ok.usuario) {
			setSession({ user: response.Ok.usuario });
			setCookie("@_user", JSON.stringify(response.Ok.usuario), { path: "/" });
			return true;
		} else {
			return false;
		}
	};

	return (
		<SessionContext.Provider value={{ session, login, logout, reload }}>
			{props.children}
		</SessionContext.Provider>
	);
}

export default SessionContextProvider;
