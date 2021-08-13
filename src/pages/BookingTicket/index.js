import React from 'react'
import styles from './style.module.scss'
import BookingInfo from '../../components/BookingInfo'
import Seats from '../../components/Seats'


export default function BookingTicket() {

    return (
        <div className={styles.bookingMovie} style={{ backgroundImage: `url('./images/BookingTicket/bgmovie.jpg')` }}>
            <div className={styles.bg_layout}>
                <div className="container">
                    <h1 className=" text-warning text-center">ĐẶT VÉ XEM PHIM</h1>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className={styles.screen}></div>
                            <Seats/>
                        </div>
                        <div className="col-12 col-md-4">
                            <h4 className="text-light text-center">DANH SÁCH GHẾ ĐƯỢC CHỌN</h4>
                            <BookingInfo/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
