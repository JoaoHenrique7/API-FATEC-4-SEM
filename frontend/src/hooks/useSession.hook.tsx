import { useContext } from "react";
import { SessionContext, SessionContextType } from "../context/Session/SessionContext";

function useSession(): SessionContextType {
	const sessionContext = useContext(SessionContext) as SessionContextType;

	if (!sessionContext) {
		throw new Error("useSession must be used within a SessionProvider");
	}
	return sessionContext;
}

export default useSession;