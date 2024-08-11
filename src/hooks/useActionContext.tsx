import { useContext } from "react";
import { Context } from "../Context/Context";

export const useActionContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useActionContext must be used within an ActionProvider');
    }
    return context;
};