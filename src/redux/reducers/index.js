import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {BurgerReducer} from './BurgerReducer'

//store tổng
export const rootReducer  = combineReducers({
    GioHangReducer,BurgerReducer
})