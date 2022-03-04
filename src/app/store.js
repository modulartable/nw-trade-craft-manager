import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/skillsSlice';
import inventoryReducer from '../features/inventorytable/inventorySlice';

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    inventory: inventoryReducer,
  },
});
