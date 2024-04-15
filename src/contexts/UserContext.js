import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
    return <userContext.Provider value={{}}>{children}</userContext.Provider>;
}

export const useUserContext = () => useContext(userContext);
