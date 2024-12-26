import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            console.log("fetching products")
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log("data sis", data)
            return data; 
        } catch (error) {
            return rejectWithValue(error.message); 
        }
    }
);

const initialState = {
    items: [], 
    status: 'idle', 
    error: null, 
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const selectProducts = (state) => state.products.items;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

export default productSlice.reducer;
