import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  image: '',
  subtitle: '',
  tags: [],
  sales: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateDataOnFetch: (state, payload) => ({
      ...state,
      ...payload.payload.data[0]
    }),
  },
});

export const { updateDataOnFetch } = productSlice.actions;

export default productSlice.reducer;
