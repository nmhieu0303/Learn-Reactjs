import DanhSachGhe from '../../utils/constant/danhSachGhe.json'
import { SEAT_CANCEL, SEAT_SELECT } from '../types/BookingTicketTypes';

const initialState = {
    dataSeats: DanhSachGhe,
    seatSelected: [{ soGhe: 'C6', gia: 5000 }]
}

export const BookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEAT_SELECT:
            let seatSelected = state.seatSelected;
            if (seatSelected.some(item => item.soGhe === action.ghe.soGhe)) {
                seatSelected = seatSelected.filter(item => item.soGhe !== action.ghe.soGhe)
            }
            else { seatSelected.push(action.ghe); }
            state.seatSelected = [...seatSelected];
            return { ...state }
        case SEAT_CANCEL:
            state.seatSelected = state.seatSelected.filter(item => item.soGhe !== action.soGhe)
            return { ...state }
        default:
            return state
    }
}
