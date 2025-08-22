import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Step 1: define thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // unique action type
  async () => {
    // Step 2: async kaam (API call)
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // Step 3: jo data return karoge -> wo extraReducers ke fulfilled case me chala jayega
    return data;
  }
);


const productSlice = createSlice({
  name : "products", // slice ka naam

  // Initial state
  initialState : {
    items : [], // yaha products ka data store hoga
    loading : false, // API call chal rahi hai ya nahi
    error : null, // agar error aayi toh uska message
  },

  // Normal reducers (not needed here)
  reducers : {},

   // ---------------------------
  // STEP 3: Handle thunk states
  // ---------------------------
  // thunk ke 3 states hote hain:
  // 1. pending (jab request start hoti hai)
  // 2. fulfilled (jab request success hoti hai)
  // 3. rejected (jab request fail hoti hai)


  extraReducers : (builder) => {
    builder
    // Jab API call start hoti hai
    .addCase(fetchProducts.pending,(state) => {
      state.loading = true;  // loading true
    })
    // Jab API call success hoti hai
    .addCase(fetchProducts.fulfilled,(state,action) => {
      state.loading = false; // loading false
      state.items = action.payload; // API ka data items me store
    })
    // Jab API call fail ho jati hai
    .addCase(fetchProducts.rejected,(state,action) => {
      state.loading = false; // loading false
      state.error = action.error.message; // error message save
    });
  },
})

export default productSlice.reducer;