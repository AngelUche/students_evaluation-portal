// jshint esversion:6
import { useState, createContext, ReactNode } from "react";

interface useModalContextProps {
    showUser: boolean
    toggleUserModal: (bool: boolean) => void
}

interface UserModalContextProviderProps {
    children: ReactNode
}

export const UserModalContext = createContext({} as useModalContextProps);

export function UserModalContextProvider({ children }: UserModalContextProviderProps) {
    const [showUser, setShowUser] = useState<boolean>(true);

    function toggleUserModal(bool: boolean) {
        setShowUser(bool);
    }

    const value = { showUser, toggleUserModal };

    return (
        <UserModalContext.Provider value={value}>{children}</UserModalContext.Provider>
    );
}