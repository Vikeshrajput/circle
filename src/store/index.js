import { configureStore } from "@reduxjs/toolkit";
import circleSlice from "./circle-slice";

const store = configureStore({ reducer: {circle: circleSlice}})

export default store;