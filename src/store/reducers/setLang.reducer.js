import { createReducer } from "@reduxjs/toolkit"
import { setLangAction } from "../actions/setLang.action"


const initialState = {
    language: 'fr'
}

const langReducer = createReducer(initialState, (builder) => {
    builder.addCase(setLangAction, (state, action) => {
        state.language = action.payload
    })
})

export default langReducer