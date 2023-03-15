// jshint esversion:6
import { createContext, useState, ReactNode } from "react";

export interface ShowUserProfileInterface {
    status: boolean
    id: number | undefined
}

// Create interface for context
interface UserProfileModalContextProps {
    showUserProfile: {
        status: boolean,
        id: number | undefined
    }
    toggleShowUserProfile: (UserProfile: ShowUserProfileInterface) => void
}

// Interface for provider function
interface UserProfileModalContextProviderProps {
    children: ReactNode
}

// Create the Context with default values
export const UserProfileModalContext = createContext({} as UserProfileModalContextProps)

// Create the Context Provider for the UserProfileModal
export function UserProfileModalContextProvider({ children }: UserProfileModalContextProviderProps) {
    const [showUserProfile, setShowUserProfile] = useState<ShowUserProfileInterface>({ status: true, id: undefined });

    // Toggle Show User Profile
    function toggleShowUserProfile({ status, id }: ShowUserProfileInterface) {
        setShowUserProfile({ status, id });
    }

    // Set the Provider values to expose 
    const values = { showUserProfile, toggleShowUserProfile };

    // Return Provider Component
    return (
        <UserProfileModalContext.Provider value={values}>{children}</UserProfileModalContext.Provider>
    );
}