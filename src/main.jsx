import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MessageProvider } from "./context/MessageProvider.jsx";

createRoot(document.getElementById("root")).render(
    <MessageProvider>
        <App />
    </MessageProvider>
);
