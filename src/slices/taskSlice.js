import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name:'task',
    initialState:[],
    reducers:{
        setTasks:(state,{payload}) => {
            state.push(payload);
        },
        updateState:(state,{payload}) => {
            const index = payload;
            state[index].done = !state[index].done;
        },
        deleteTask:(state,{payload}) => {
            return state.filter(({id}) => id !== payload);
        },
        deleteAll:(state) => {
            return state.filter(({done}) => !done);
        }
    }
})

export const {setTasks, updateState, deleteTask, deleteAll} = taskSlice.actions;
export default taskSlice;