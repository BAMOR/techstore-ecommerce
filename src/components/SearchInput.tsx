import { useEffect, useState } from "react";


type SearchInputProp = {
    onSearch: (term:string) => void;

}

export const SearchInput = ({onSearch}:SearchInputProp) => {

    const [searchTerm, setSearchTerm] = useState('') 

    
    useEffect(()=>{
        
        const timeOutId = setTimeout(()=>{
            onSearch(searchTerm)
        },300)

        return()=> clearTimeout(timeOutId)
    },[searchTerm,onSearch])

    return (
        <div className="max-w-2xl mx-auto mb-10">

            <div className="relative">
                <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ej: Busca Productos"
                className="w-full pl-4 py-4 bg-white border border-slate-200 rounded-2xl
                focus:outline-none focus:right-2 focus:ring-indigo-500 text-slate-800
                placeholder-slate-400 shadow-sm"
                 />



            </div>

        </div>
    )



}