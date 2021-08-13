import { SEAT_CANCEL, SEAT_SELECT } from "../types/BookingTicketTypes"

export const seatSelectAction = (ghe) =>{
    return{
        type: SEAT_SELECT,
        ghe
    }
}

export const seatCancelAction = (soGhe) =>{
    return{
        type: SEAT_CANCEL,
        soGhe
    }
}