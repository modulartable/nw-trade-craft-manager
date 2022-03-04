import { createSlice } from "@reduxjs/toolkit";

//Declare the initial state as an array with all trade skills and levels
const initialState = [
    { name: "Weaponsmithing", level: 200 },
    { name: "Armoring", level: 150 },
    { name: "Engineering", level: 50 },
    { name: "Jewelcrafting", level: 50 },
    { name: "Arcana", level: 50 },
    { name: "Cooking", level: 50 },
    { name: "Furnishing", level: 50 },
    { name: "Mining", level: 50 },
    { name: "Tracking", level: 50 },
    { name: "Fishing", level: 50 },
    { name: "Logging", level: 50 },
    { name: "Harvesting", level: 50 },
    { name: "Smelting", level: 50 },
    { name: "Stonecutting", level: 50 },
    { name: "Leatherworking", level: 50 },
    { name: "Weaving", level: 50 },
    { name: "Woodworking", level: 50 },
  ];

  //Sort the array of skills by alphetical order
export const alphabetize = (a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  } else {
    return 0;
  }
};

 //Sort the array of skills by reverse-alphetical order
export const reverseAlph = (a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return 1;
  } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return -1;
  } else {
    return 0;
  }
};

 //Sort the array of skills by ascending order
export const highest = (a, b) => {
  if (a.level < b.level) {
    return 1;
  } else if (a.level > b.level) {
    return -1;
  } else {
    return 0;
  }
};

 //Sort the array of skills by descending order
export const lowest = (a, b) => {
  if (a.level < b.level) {
    return -1;
  } else if (a.level > b.level) {
    return -1;
  } else {
    return 0;
  }
};

//Skills Slice

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    updateSkill: (state, action) => {
   state.map(el => 
        el.name === action.payload.name ? el.level = action.payload.level : ''
      );
    },
    alphabetical: (state) => {
state.sort(alphabetize);
  },
  reversealphabetical: (state) => {
  state.sort(reverseAlph);
  },
  ascending: (state) => {
  state.sort(highest);
  },
  descending: (state) => {
  state.sort(lowest);
  }
    },
  },
);

//Exports

export const { updateSkill, alphabetical, reversealphabetical, ascending, descending } = skillsSlice.actions;

export default skillsSlice.reducer;
