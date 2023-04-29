import { useState,createContext, useEffect } from "react";

export const LangContext = createContext<any>(null);

export const LangProvider =({children}:any)=>{
    const [lang,setLang] = useState<string | any>(localStorage.getItem('lang'));
    return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
    
}