import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {BurgerReducer} from './BurgerReducer'
import {SinhVienReducer} from './SinhVienReducer'
import {GameXucXacReducer} from './GameXucXacReducer'
import {GameOanTuXiReducer} from './GameOanTuXiReducer'
import {BookingTicketReducer} from './BookingTicketReducer'
import {ToDoListReducer} from './ToDoListReducer'
import FacebookReducer from './FacebookReducer'
import GameBauCuaReducer from './GameBauCuaReducer';


//store tổng
export const rootReducer  = combineReducers({
    FacebookReducer,GioHangReducer,BurgerReducer,SinhVienReducer,GameXucXacReducer,GameOanTuXiReducer,BookingTicketReducer,ToDoListReducer,
    GameBauCuaReducer
})