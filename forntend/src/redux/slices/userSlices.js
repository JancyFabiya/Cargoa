import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'




//---------- User Register Action-------------

export const userRegisterAction = createAsyncThunk(
    "/register",
    async (reg_values, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/register",
                reg_values,
                config
            );

            console.log('data reg', data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);



//---------------User Login Action----------------

export const userLoginAction = createAsyncThunk(
    "/login",
    async (login, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/login",
                login,
                config
            );

            console.log('data login', data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


//---------------New Purchase Order Action--------------

export const newPurchaseOrderAction = createAsyncThunk(
    "/order",
    async (newOrder, { rejectWithValue, getState, dispatch }) => {
        console.log("neworderrrr",newOrder);
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/order",
                newOrder,
                config
            );

            console.log('data order', data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


//-----------view Purchase Order Action-------------

export const viewPurchaseOrderAction = createAsyncThunk(
    "/getOrders",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.get(
                "/getOrders",
                config
            );

            //   console.log('data getOrders',data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);



//--------------- Update Purchase Order Action--------------

export const updatePurchaseOrderAction = createAsyncThunk(
    "/vendor/updateOrder/:id",
    async (updateOrder, { rejectWithValue, getState, dispatch }) => {
        console.log('id', updateOrder.id);
        console.log("updateOrder", updateOrder);
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.patch(
                `/vendor/updateOrder/${updateOrder.id}`,
                updateOrder.values,
                config
            );

            console.log('data updateOrders', data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//-----------Get All Vendor-------------

export const getAllVendorAction = createAsyncThunk(
    "/getVendor",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.get(
                "/getVendor",
                config
            );

            //   console.log('data getOrders',data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//--------------Slices------------------

const userSlices = createSlice({
    name: "user",
    initialState: {
        userAuth: 'view',
    },

    extraReducers: (builder) => {


        // User registration

        builder.addCase(userRegisterAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(userRegisterAction.fulfilled, (state, action) => {
            state.loading = false;
            state.register = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(userRegisterAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        // User Login

        builder.addCase(userLoginAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(userLoginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.login = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(userLoginAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        // New Purchase Order

        builder.addCase(newPurchaseOrderAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newPurchaseOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.newOrder = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newPurchaseOrderAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

        // view Purchase Order

        builder.addCase(viewPurchaseOrderAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewPurchaseOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.getOrder = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewPurchaseOrderAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

        // Update Purchase Order
        builder.addCase(updatePurchaseOrderAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updatePurchaseOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.updateOrder = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updatePurchaseOrderAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

         // Get All Vendor
         builder.addCase(getAllVendorAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllVendorAction.fulfilled, (state, action) => {
            state.loading = false;
            state.getVendor = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllVendorAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });
    }
})

export default userSlices.reducer;