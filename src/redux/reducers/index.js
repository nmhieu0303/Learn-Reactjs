import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {BurgerReducer} from './BurgerReducer'
import {SinhVienReducer} from './SinhVienReducer'
import {GameXucXacReducer} from './GameXucXacReducer'
import {GameOanTuXiReducer} from './GameOanTuXiReducer'


//store tổng
export const rootReducer  = combineReducers({
    GioHangReducer,BurgerReducer,SinhVienReducer,GameXucXacReducer,GameOanTuXiReducer
})