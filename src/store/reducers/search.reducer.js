import { createReducer } from "@reduxjs/toolkit"
import { searchAction } from "../actions/search.action"


const initialState = {
    search: ''
}

const searchReeducer = createReducer(initialState, (builder) => {
    builder
    .addCase(searchAction, (state, action) => {
        state.search = action.payload;
    })
})

export default searchReeducer