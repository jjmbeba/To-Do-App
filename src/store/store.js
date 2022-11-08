import {configureStore} from '@reduxjs/toolkit'
import taskSlice from '../slices/taskSlice';

const store = configureStore({
    reducer: taskSlice.reducer
})

export default store;