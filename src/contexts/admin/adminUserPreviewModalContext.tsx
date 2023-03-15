// jshint esversion:6
import { useState, createContext, ReactNode } from "react";

interface ShowUserPreviewInterface {
    status: boolean
    id: number | undefined
}

interface userPreviewModalContextProps {
    showUserPreview: { status: boolean, id: number | undefined }
    toggleShowUserPreview: (User: ShowUserPreviewInterface) => void
}

interface UserPreviewModalContextProviderProps {
    children: ReactNode
}

export const UserPreviewModalContext = createContext({} as userPreviewModalContextProps);

export function UserPreviewModalContextProvider({ children }: UserPreviewModalContextProviderProps) {
    const [showUserPreview, setShowUserPreview] = useState<ShowUserPreviewInterface>({
        status: false,
        id: undefined
    });

    function toggleShowUserPreview(User: ShowUserPreviewInterface) {
        setShowUserPreview(User);
    }

    const value = { showUserPreview, toggleShowUserPreview };

    return (
        <UserPreviewModalContext.Provider value={value}>{children}</UserPreviewModalContext.Provider>
    );
}