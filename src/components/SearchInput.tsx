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


            </div>

        </div>
    )



}