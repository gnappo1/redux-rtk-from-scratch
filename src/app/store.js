import {configureStore} from 'redux-starter-kit';
import counterReducer from "../features/counter/CounterSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})