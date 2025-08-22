import { createSlice } from "@reduxjs/toolkit";

// cart ka initial state
const initialState = {
    items : [], // isme cart ke sare products rahenge
}

// hamlog quantity ko initailState me nahi rakh rahe hai qki product mera object to ham usme ek property quantity ko add kar dege first time and next time uska value barha dege 

// {
//   id: 1,
//   title: "Backpack",
//   price: 100,
//   quantity: 1  // 👈 ye hum khud add kar rahe hain
// }

const cartSlice = createSlice({
    name : "cart",  // slice ka naam
    initialState,
    reducers : {
        // 1️⃣ Add to Cart
        addToCart : (state,action) => {
            // action.payload = product jo user add karna chahta hai
            const item = action.payload;
            // check karo kya product already cart me hai
            const existingItem = state.items.find((el) => el.id === item.id);
            if(existingItem){
                // agar product pehle se hai → quantity badha do
                existingItem.quantity += 1;
            }
            else{
                // agar product nahi hai → naya product add karo with quantity = 1
                state.items.push({...item,quantity : 1});
            }
        },
        // 2️⃣ Remove from Cart
        removefromCart : (state,action) => {
            const id = action.payload; // product ki id
            // filter se new array banao (jis product ki id match karegi, use remove kar do)
            state.items = state.items.filter((el) => el.id != id);
        },
        // 3️⃣ Increase Quantity
        increaseQuantity : (state,action) => {
            const id = action.payload; // product ki id
            const item = state.items.find((el) => el.id == id);
            if(item){
                item.quantity += 1; // bas quantity +1 kar do
            }
        },
        // 4️⃣ Decrease Quantity
        decreaseQuantity : (state,action) => {
            const id = action.payload; // product ki id
            const item = state.items.find((el) => el.id == id);
            if(item && item.quantity > 1){
                // agar product hai aur quantity > 1 hai → reduce karo
                item.quantity -= 1;
            }
            else{
                // agar quantity 1 hai → item remove kar do
                state.items = state.items.filter((el) => el.id != id);
            }
        },
    },
});


// action creators ko export karo
export const {addToCart,removefromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;

// reducer ko export karo
export default cartSlice.reducer;