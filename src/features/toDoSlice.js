import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    items: []
}


export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state,action) => {
            state.items.push({text : action.payload})
        },
        removeToDo: (state, action) => {
            const {payload: text} = action
            const itemIndex = state.items.find(({text: t}) => t === text)
            state.items.splice(itemIndex,1)
        },
        //clearList: (state) => {state.items.length = 0}
        clearList: (state) => {
            return {items: []}
        }
    }
})

export const {addItem, removeToDo, clearList} = toDoSlice.actions

export default toDoSlice.reducer