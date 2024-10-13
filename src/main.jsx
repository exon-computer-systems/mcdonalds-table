import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { MessageProvider } from "./context/MessageProvider.jsx";
import { GlobalArrayProvider } from "./context/OrdersContext.jsx";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
    <MessageProvider>
        <GlobalArrayProvider>
            <Router />
        </GlobalArrayProvider>
    </MessageProvider>
);
