import {configureStore} from '@reduxjs/toolkit';
import userSlicer from './userSlicer';

let Store = configureStore({
    reducer:{
        // slicers
        user:userSlicer
    }
})

export default Store