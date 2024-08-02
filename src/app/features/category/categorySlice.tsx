import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedActivity: null,
  activityOptions: []
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updatedSelectedActivity: (state, payload) =>{
      state.selectedActivity= payload
    },
    resetActivityOptions: (state) => {
      state.activityOptions = []
    },
  },
});

export const { resetActivityOptions } = categorySlice.actions;

export default categorySlice.reducer;
