// jshint esversion:6
import { createContext, useState, ReactNode } from "react";

interface ShowUserProfile {
    status: boolean
    // id: number | undefined
}

// Create interface for context
interface UserProfileModalContextProps {
    showUserProfile: {
        status: boolean
    }
    toggleShowUserProfile: (UserProfile: ShowUserProfile) => void
}

// Interface for provider function
interface UserProfileModalContextProviderProps {
    children: ReactNode
}

// Create the Context with default values
export const UserProfileModalContext = createContext({} as UserProfileModalContextProps)

// Create the Context Provider for the UserProfileModal
export function UserProfileModalContextProvider({ children }: UserProfileModalContextProviderProps) {
    const [showUserProfile, setShowUserProfile] = useState({ status: true });

    // Toggle Show User Profile
    function toggleShowUserProfile({ status }: ShowUserProfile) {
        setShowUserProfile({ status });
    }

    // Set the Provider values to expose 
    const values = { showUserProfile, toggleShowUserProfile };

    // Return Provider Component
    return (
        <UserProfileModalContext.Provider value={values}>{children}</UserProfileModalContext.Provider>
    );
}