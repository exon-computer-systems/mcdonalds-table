import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Orders from "./components/cart/orders/Orders";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/orders" element={<Orders />} />
                {/* <Route path="/" element={<Waiter />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
