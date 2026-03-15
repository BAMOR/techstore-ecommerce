import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/getProducts"
import { useCart } from "../hooks/useCart"
import { useMemo, useState } from "react"
import { SearchInput } from "../components/SearchInput"


export const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5
  })

  const [searchTerm, setSearchTerm] = useState('');


  const filteredProducts = useMemo(()=> {
    if(!data) return []
    if(!searchTerm) return data

    return data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  },[data, searchTerm])

  const {dispatch} = useCart()

  return (
        <main className="max-w-7xl mx-auto px-4 py-12">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Productos Destacados</h1>
                <p className="text-slate-500 mt-2">Tecnología de última generación a tu alcance.</p>
            </header>

            <SearchInput onSearch={(term)=>setSearchTerm(term)}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts?.map(product => (
                    <div key={product.id} className="group bg-white border border-slate-100 rounded-2xl p-4 transition-all hover:shadow-xl hover:shadow-slate-200/50 flex flex-col">
                        <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center p-6">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-slate-800 line-clamp-1">{product.title}</h3>
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded text-yellow-700 text-xs font-bold">
                                    ⭐ {product.rating.toFixed(1)}
                                </div>
                            </div>
                            
                            <p className="text-2xl font-black text-slate-900 mb-4">${product.price}</p>

                            <button 
                                className="mt-auto w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                                onClick={() => dispatch({ type: "add-to-cart", payload: { item: product } })}
                            >
                                <span>Añadir al carrito</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
