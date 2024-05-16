import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimationState {
    isEnabled: boolean;
    isStarted: boolean;
}

const initialState: AnimationState = {
    isEnabled: false,
    isStarted: false,
};

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        toggleEnabled: (state) => {
            state.isEnabled = !state.isEnabled;
        },
        startAnimation: (state) => {
            state.isStarted = true;
        },
        stopAnimation: (state) => {
            state.isStarted = false;
        },
    },
});

export const { toggleEnabled, startAnimation, stopAnimation } = animationSlice.actions;
export default animationSlice.reducer;
