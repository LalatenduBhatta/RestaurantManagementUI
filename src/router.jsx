import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import EmployeeList from "./pages/EmployeeList"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard",
                index: true,
                element: <Dashboard />
            },
            {
                path: "employee/list",
                element: <EmployeeList />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router