// jshint esversion:6
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Create the interface for the state
interface UserPreviewType {
    status: boolean,
    id: string | undefined
}

// Define the initial state
const initialState: UserPreviewType = {
    status: false,
    id: undefined
}

// Create the slice
const UserPreviewSlice = createSlice({
    name: "UserPreviewSlice",
    initialState,
    reducers: {
        toggleShowUserPreview: (state, action: PayloadAction<UserPreviewType>) => {
            const { payload } = action
            state.status = payload.status
            state.id = payload.id
        }
    }
})

// Export Action types
export const { toggleShowUserPreview } = UserPreviewSlice.actions

// Export slice reducer
export const UserPreviewReducer = UserPreviewSlice.reducer