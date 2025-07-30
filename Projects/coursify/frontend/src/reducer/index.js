import { createReducer } from "@reduxjs/toolkit";
import authreducer from "../slices/auth";

const rootReducer = createReducer({
    auth: authreducer
})

export default rootReducer;