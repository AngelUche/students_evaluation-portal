// jshint esversion:6
import { useState, createContext, ReactNode } from "react";

interface ShowUser {
    status: boolean
    id: number | undefined
}

interface userModalContextProps {
    showUser: { status: boolean, id: number | undefined }
    toggleUserModal: (User: ShowUser) => void
}

interface UserModalContextProviderProps {
    children: ReactNode
}

export const UserModalContext = createContext({} as userModalContextProps);

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