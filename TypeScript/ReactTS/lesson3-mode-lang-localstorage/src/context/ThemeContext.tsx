import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

export const ThemeProvider =({children}:any)=>{
    const [mode,setMode] = useState<string | any>(localStorage.getItem('mode'));

    return <ThemeContext.Provider value={[mode,setMode]}>{children}</ThemeContext.Provider>
    
}
