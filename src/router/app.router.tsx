import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";



export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,

        children:[
            {
            index: true,
            element: <HomePage />,
        },
        {
            path:"product/:id",
            element:<ProductPage/>
        },
        {
            path:"cart",
            element:<CartPage/>
        },
        {
            path:"*",
            element: <Navigate to={"/"} />
        },
        ],
    }

])