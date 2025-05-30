import Index from "./pages/Landing/Landing";
import Customer_Register from "./pages/Customer-Register/Customer-Register.jsx";
import Provider_Register from "./pages/Provider-Register/Provider-Register.jsx";
import Support from "./pages/Support/Support.jsx";

const routes = [
    {path: '/', element: <Index />},
    {path: '/customer-register', element: <Customer_Register />},
    {path: '/provider-register', element: <Provider_Register />},
    {path: '/support', element: <Support />}

]

export default routes;