import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                title: 'Learn Redux',
                content: 'You have made good progress in the React programming language so far. Your next goal is to master Redux and make REACT, REDUX, CSS, SASS, Animation practices and projects until the Macbook arrives. After the arrival of the Macbook, learning React Native and then Flutter and becoming a mobile developer.',
                color: '#E7CF',
                id: nanoid()
            }
        ],
        editing: false,
        search: '',
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({title,content, color}) => {
                return {
                    payload: {
                        id: nanoid(),
                        content,
                        title,
                        color,
                    }
                }
            }
        },
        removeNote: (state, action) => {
            const index = state.items.findIndex((item) => item.id = action.payload)
            state.items.splice(index, 1)
        },
        editNote: (state, action) => {
            
        },
        searchNote: (state, action) => {
            const filtered = state.items.filter((item) => {
                return Object.keys(item).some((key) => 
                    item[key]
                    .toString()
                    .toLowerCase()
                    .includes(state.search.toLowerCase())
                )
            })
        }
    },
})

export const {addNote, removeNote, editNote, searchNote} = noteSlice.actions
export default noteSlice.reducer