import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../features/form/formSlice'
import planReducer from '../features/plan/planSlice'

export const store = configureStore({
  reducer:{
    form: formReducer,
    plan: planReducer
  }
})