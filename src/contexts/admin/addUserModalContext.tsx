// jshint esversion:6
import { createContext, ReactNode, useState } from "react";

// Interface for type of User to be added
interface AddUserInterface {
    status: boolean
    type: string | undefined
}

// Interface for the AddUserContext
interface AddUserContextProps {
    AddUserPromptStatus: { status: boolean, type: string | undefined }
    toggleAddUserPromptStatus: (status: AddUserInterface) => void
}

// Interface for the AddUserModalContext provider
interface AddUSerModalContextProviderProps {
    children: ReactNode
}

// Context for AddUserModal prompt
export const AddUserModalContext = createContext({} as AddUserContextProps)

export function AddUSerModalContextProvider({ children }: AddUSerModalContextProviderProps) {
    // Store State of Add user prompt and type of user
    const [AddUserPromptStatus, setAddUserPromptStatus] = useState<AddUserInterface>({ status: true, type: undefined });
    // Toggle Add User Prompt

    function toggleAddUserPromptStatus(status: AddUserInterface) {
        setAddUserPromptStatus(status);
    }

    const value = { AddUserPromptStatus, toggleAddUserPromptStatus }

    return (
        <AddUserModalContext.Provider value={value}>
            {children}
        </AddUserModalContext.Provider>
    );
}