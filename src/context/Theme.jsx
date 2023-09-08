import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

 export const Theme = createContext();

 export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [shadowCard,setShadowCard] = useState('');
    const [shadowImg, setShadowImg] = useState('');
    const [button, setButton] = useState('');
    const value = {
        theme,
        setTheme,
        shadowCard,
        setShadowCard,
        shadowImg,
        setShadowImg,
        button,
        setButton
    }

    return (
        <Theme.Provider value={value}>
            {children}
        </Theme.Provider>
    )
 }

/*custom hooks */

export const useThemeCustom = () => {
    const useTheme = useContext(Theme);
    return useTheme;
}
