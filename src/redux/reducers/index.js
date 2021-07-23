import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {BurgerReducer} from './BurgerReducer'
import {SinhVienReducer} from './SinhVienReducer'

//store tổng
export const rootReducer  = combineReducers({
    GioHangReducer,BurgerReducer,SinhVienReducer
})