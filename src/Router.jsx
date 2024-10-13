import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Orders from "./components/cart/orders/Orders";
import Waiter from "./pages/waiter/Waiter";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/waiter" element={<Waiter />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
