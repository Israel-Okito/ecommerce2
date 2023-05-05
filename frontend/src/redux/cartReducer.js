import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart,reserver',
  initialState: {
    products:[],
  },
  reducers: {
    addToCart: (state,action) => {
    const item = state.products.find(item=>item.id === action.payload.id);

    
    if(item){
        item.quantity+=action.payload.quantity;
    }else{
        state.products.push(action.payload);
    }
    
    
     
    },

    addToReserver: (state,action) => {
      const item = state.products.find(item=>item.id === action.payload.id);
  
      
      if(item){
          item.quantity+=action.payload.quantity;
      }else{
          state.products.push(action.payload);
      }
      
      
       
      },
    removeItem: (state, action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state, action) => {
        state.products = []
    }
  }
  
// Action creators are generated for each case reducer function

});

export const { addToCart,addToReserver, removeItem, resetCart} = cartSlice.actions;


export default cartSlice.reducer





// export const reserverSlice = createSlice({
//   name: 'reserver',
//   initialState: {
//     products:[],
//   },
//   reducers: {
//     addToReserver: (state,action) => {
//     const item = state.products.find(item=>item.id === action.payload.id);

    
//     if(item){
//         item.quantity+=action.payload.quantity;
//     }else{
//         state.products.push(action.payload);
//     }
    
    
     
//     },
//     removeItems: (state, action) => {
//       state.products=state.products.filter(item=>item.id !== action.payload)
//     },
//     resetReserver: (state, action) => {
//         state.products = []
//     }
//   }
// });



// // Action creators are generated for each case reducer function
// export const { addToReserver, removeItems, resetReservert} = cartSlice.actions

// export default reserverSlice.reducer
