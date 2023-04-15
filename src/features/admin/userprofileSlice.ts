// jshint esversion:6
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Create the state interface
interface UserProfileType {
    status: boolean
    id: string | undefined
}

// Create the initial state
const initialState: UserProfileType = {
    status: false,
    id: undefined
}

// Create the feature slice
const userProfileSlice = createSlice({
    name: "UserProfileSlice",
    initialState,
    reducers: {
        toggleShowUserProfile: (state, action: PayloadAction<UserProfileType>) => {
            const { payload } = action
            state.status = payload.status
            state.id = payload.id
        },
    }
})

// Export reducer action methods
export const { toggleShowUserProfile } = userProfileSlice.actions;

// Export slice reducer
export const UserProfileReducer = userProfileSlice.reducer;