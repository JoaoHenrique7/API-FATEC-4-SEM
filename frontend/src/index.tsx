import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes.route";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
);
