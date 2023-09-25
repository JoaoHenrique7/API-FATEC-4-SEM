import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes.route";
import "./styles/global.css";
import SessionContextProvider from "./context/Session/SessionContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<SessionContextProvider>
			<Routes />
		</SessionContextProvider>
	</React.StrictMode>,
);
