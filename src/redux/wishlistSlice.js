import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
}

const wishListSlice = createSlice({
    name : "wishList",
    initialState,
    reducers : {
        addToWishLists : (state,action) => {
            const item = action.payload;
            const existingItem = state.items.find((el) => el.id == item.id);
            if(!existingItem){
                state.items.push(item); // only add item when item was not added in wishlists
            }
        },
        removeFromWishLists : (state,action) => {
            const id = action.payload;
            state.items = state.items.filter((el) => el.id != id);
        }
    }
})

// export action creators
export const {addToWishLists,removeFromWishLists} = wishListSlice.actions;

export default wishListSlice.reducer;