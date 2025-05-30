import Index from "./pages/Landing/Landing";
import Customer_Register from "./pages/Customer-Register/Customer-Register.jsx";
import Provider_Register from "./pages/Provider-Register/Provider-Register.jsx";
//import Support_Ticket from "./pages/Support-Ticket/Support_Ticket.jsx";

const routes = [
    {path: '/', element: <Index />},
    {path: '/customer-register', element: <Customer_Register />},
    {path: '/provider-register', element: <Provider_Register />},
    //{path: '/support-ticket', element: <Support_Ticket />}

]

export default routes;