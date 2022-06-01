import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchRandomDogImage} from './CounterAPI'

const initialState = {
    value: 0,
    image: null,
    status: 'idle',
}

export const fetchRandomDogImageAsync = createAsyncThunk(
    'counter/fetchRandomDogImage',
    async () => {
        const response = await fetchRandomDogImage();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {state.value++},
        decrement: state => {state.value--},
        reset: state => {state.value = 0},
        incrementByAmount: (state, action) => {state.value += action.payload},
    },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomDogImageAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomDogImageAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.image = action.payload[0];
            });
    },
});

export default counterSlice.reducer
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions
