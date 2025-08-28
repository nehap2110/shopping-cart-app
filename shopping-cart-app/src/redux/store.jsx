import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/Cartslice'



const store = configureStore({
  reducer: {

    cart : cartReducer,
   
  },
});
export default store;