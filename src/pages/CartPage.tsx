
import {Link} from 'react-router'
import { useCart } from '../hooks/useCart'


export const CartPage = () => {


const {state, dispatch} = useCart()


const total = state.cart.reduce((sum, item) => sum +(item.price * item.quantity),0 )


if (state.cart.length === 0) {
        return (
            <main className="max-w-2xl mx-auto px-4 py-20 text-center">
                <div className="bg-slate-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-slate-400 text-4xl">🛒</div>
                <h1 className="text-3xl font-bold text-slate-900">Tu carrito está vacío</h1>
                <p className="text-slate-500 mt-2 mb-8">Parece que aún no has añadido nada a tu bolsa de compras.</p>
                <Link to="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
                    Explorar productos
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Carrito de compras</h1>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Lista de productos */}
                <div className="lg:col-span-2 space-y-4">
                    {state.cart.map(item => (
                        <div key={item.id} className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-6 shadow-sm">
                            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain bg-slate-50 rounded-lg p-2" />
                            
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                                <p className="text-indigo-600 font-black text-xl">${item.price}</p>
                                
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                                        <button 
                                            className="px-3 py-1 bg-slate-50 hover:bg-slate-200 transition-colors"
                                            onClick={() => dispatch({ type: "decrease-quantity", payload: { id: item.id } })}
                                        >-</button>
                                        <span className="px-4 font-bold text-slate-700">{item.quantity}</span>
                                        <button 
                                            className="px-3 py-1 bg-slate-50 hover:bg-slate-200 transition-colors"
                                            onClick={() => dispatch({ type: "add-to-cart", payload: { item } })}
                                        >+</button>
                                    </div>
                                    <button 
                                        className="text-sm font-semibold text-rose-500 hover:text-rose-700 transition-colors"
                                        onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: item.id } })}
                                    >Eliminar</button>
                                </div>
                            </div>
                            
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Subtotal</p>
                                <p className="text-xl font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen */}
                <aside className="lg:col-span-1">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-24 shadow-2xl shadow-indigo-200">
                        <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>
                        <div className="space-y-4 border-b border-slate-700 pb-6 mb-6">
                            <div className="flex justify-between text-slate-400">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <span>Envío</span>
                                <span className="text-emerald-400 font-bold">Gratis</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-end mb-8">
                            <span className="text-slate-400">Total a pagar</span>
                            <span className="text-3xl font-black text-white">${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-95 shadow-lg shadow-indigo-500/20">
                            Finalizar compra
                        </button>
                        <Link to="/" className="block text-center mt-6 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                            ← Continuar comprando
                        </Link>
                    </div>
                </aside>
            </div>
        </main>
    );
}
""