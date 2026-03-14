// MainLayout.tsx
import { Outlet } from "react-router"
import { Header } from "../components/Header"

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 w-full ">
      <Header/>
      <Outlet />
    </div>
  )
}