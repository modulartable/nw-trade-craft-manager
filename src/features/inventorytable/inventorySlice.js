import { createSlice } from "@reduxjs/toolkit";
import { alphabetize, reverseAlph } from "../skills/skillsSlice";

const initialState = [
  {
    name: "Rawhide",
    quantity: 500,
    location: "Windsward",
  },
  {
    name: "Runic Leather",
    quantity: 11,
    location: "Everfall",
  },
];

//Sort the inventory array of materials by ascending order
export const highestQuantity = (a, b) => {
  if (a.quantity < b.quantity) {
    return 1;
  } else if (a.quantity > b.quantity) {
    return -1;
  } else {
    return 0;
  }
};

export const lowestQuantity = (a, b) => {
  if (a.quantity < b.quantity) {
    return -1;
  } else if (a.quantity > b.quantity) {
    return -1;
  } else {
    return 0;
  }
};

export const location = (a, b) => {
  if (a.location.toUpperCase() < b.location.toUpperCase()) {
    return -1;
  } else if (a.location.toUpperCase() > b.location.toUpperCase()) {
    return 1;
  } else {
    return 0;
  }
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    //Sorts the state in alphabetical order based on the item name
    alphabeticalInv: (state) => {
      state.sort(alphabetize);
    },
    //Sorts the state in reverse alphabetical order based on the item name
    reversealphabeticalInv: (state) => {
      state.sort(reverseAlph);
    },
    //Sorts the state based upon the highest quantity materials first
    highestInv: (state) => {
      state.sort(highestQuantity);
    },
    //Sorts the state based upon the lowest quantity materials first
    lowestInv: (state) => {
      state.sort(lowestQuantity);
    },
    //Sorts the state based upon the material's location
    locationSort: (state) => {
      state.sort(location);
    },
    //Delete action using the filer method that checks the name and location against the action.payload
    deleteMaterials: (state, action) => {
      return state.filter(
        (el) => el.name !== action.payload && el.location !== action.payload
      );
    },
    //Adds an item to the user's inventory and displays it in the total materials table
    addMaterials: (state, action) => {
      if (action.payload.quantity > 0 && action.payload.name !== '') {
      return [...state, action.payload];
      }
      else {
      window.alert("Please enter the item's name and quantity")
      }
    },
  },
});

//Exporting the reducer actions for use in other components
export const {
  alphabeticalInv,
  reversealphabeticalInv,
  highestInv,
  lowestInv,
  locationSort,
  deleteMaterials,
  addMaterials,
} = inventorySlice.actions;

//Exporting the reducer for use in the Redux store
export default inventorySlice.reducer;
