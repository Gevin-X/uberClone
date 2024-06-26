import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin : (state,action)=>{
            state.origin = action.payload;
        },
        setDestination : (state,action)=>{
            state.destination = action.payload;
        },
        setTravelTimeInformation : (state,action)=>{
            state.origin = action.payload;
        },
    }
})

export const {setOrigin, setDestination,setTravelTimeInformation } =navSlice.actions; 


////  Selector  _____________ 

export const selectOrigin = (state) => state.nav.orign ; 
export const selectDestination = (state) => state.nav.destination;
export const setlectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;

export default navSlice.reducer;