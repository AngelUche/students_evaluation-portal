// jshint esversion:6
import { useState, createContext, ReactNode } from "react";

interface ShowUser {
    status: boolean
    id: number | undefined
}

interface useModalContextProps {
    showUser: { status: boolean, id: number | undefined }
    toggleUserModal: (User: ShowUser) => void
}

interface UserModalContextProviderProps {
    children: ReactNode
}

export const UserModalContext = createContext({} as useModalContextProps);

export function UserModalContextProvider({ children }: UserModalContextProviderProps) {
    const [showUser, setShowUser] = useState<ShowUser>({
        status: false,
        id: undefined
    });

    function toggleUserModal(User: ShowUser) {
        setShowUser(User);
    }

    const value = { showUser, toggleUserModal };

    return (
        <UserModalContext.Provider value={value}>{children}</UserModalContext.Provider>
    );
}