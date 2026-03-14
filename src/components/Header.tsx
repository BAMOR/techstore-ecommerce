import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";     

export const Header = () => {
    const { state } = useCart();
    const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-3 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="text-xl font-black tracking-tight text-slate-800">
                        Tech<span className="text-indigo-600">Store</span>
                    </span>
                </Link>

                <Link to="/cart" className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">
                    <ShoppingCartIcon className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};