import { useEffect, useState } from "react";
import { getCatalog } from "../services/bookService";

export const useCatalog = () => {
    let [catalog, setCatalog] = useState([]);
    useEffect(()=>{
        getCatalog()
        .then(data=>{
            setCatalog(data)
        })
    },[])
 
    return [catalog, setCatalog]
};

