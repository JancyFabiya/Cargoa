import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'







//-----------view Purchase Order Action-------------

export const viewPurchaseOrderAction = createAsyncThunk(
    "/vendor/getOrders",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.get(
                "/vendor/getOrders",
                config
            );

            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


//-----------view Status Purchase Order Action-------------

export const viewStatusPurchaseOrderAction = createAsyncThunk(
    "/vendor/getStatusOrders",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.get(
                "/vendor/getStatusOrders",
                config
            );

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



//--------------Slices------------------

const userSlices = createSlice({
    name: "vendor",
    initialState: {
        userAuth: 'view',
    },

    extraReducers: (builder) => {




        // view Purchase Order

        builder.addCase(viewPurchaseOrderAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewPurchaseOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.vendorgetOrder = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewPurchaseOrderAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

        // view Purchase Order Status

        builder.addCase(viewStatusPurchaseOrderAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewStatusPurchaseOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.vendorgetOrderStatus = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(viewStatusPurchaseOrderAction.rejected, (state, action) => {
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
            state.vendorupdateOrder = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updatePurchaseOrderAction.rejected, (state, action) => {
            state.loading = true;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });
    }
})

export default userSlices.reducer;