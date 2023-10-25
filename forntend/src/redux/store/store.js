import { configureStore, } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlices';
import vendorReducer from '../slices/vendorSlices'

const store = configureStore({
    reducer: {
        user: userReducer,
        vendor: vendorReducer
    },
})

export default store;