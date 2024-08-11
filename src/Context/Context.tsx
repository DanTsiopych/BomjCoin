import { createContext } from "react";
import { ContextType } from "../types/types";

const defaultContextValue = {
    actionValue: 0,
    setActionValue: () => { },
    clickedCoins: 0,
    setClickedCoins: () => { },
};

export const Context = createContext<ContextType>(defaultContextValue)