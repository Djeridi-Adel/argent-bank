import React from "react";
import { createRoot } from "react-dom/client";

import Router from "../src/routes";
import { Provider } from "react-redux";


import "../src/utils/style/index.css"
import { store } from "./store/store";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</Provider>
);