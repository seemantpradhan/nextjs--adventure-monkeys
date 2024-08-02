import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/app/features/api/apiSlice';
import counterReducer from '@/app/features/counter/counterSlice';
import categoryReducer from '@/app/features/category/categorySlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    category: categoryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
});


export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(apiSlice.middleware)
    
    })
}

export const store = configureStore({
    reducer: rootReducer,
})


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']