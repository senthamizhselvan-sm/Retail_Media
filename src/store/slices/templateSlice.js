import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  templates: [],
  currentTemplate: null,
  colorPalettes: [],
  loading: false,
  error: null,
};

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplates: (state, action) => {
      state.templates = action.payload;
    },
    setCurrentTemplate: (state, action) => {
      state.currentTemplate = action.payload;
    },
    addTemplate: (state, action) => {
      state.templates.push(action.payload);
    },
    updateTemplate: (state, action) => {
      const index = state.templates.findIndex(t => t._id === action.payload._id);
      if (index !== -1) {
        state.templates[index] = action.payload;
      }
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(t => t._id !== action.payload);
    },
    setColorPalettes: (state, action) => {
      state.colorPalettes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTemplates,
  setCurrentTemplate,
  addTemplate,
  updateTemplate,
  deleteTemplate,
  setColorPalettes,
  setLoading,
  setError,
} = templateSlice.actions;

export default templateSlice.reducer;