import React from 'react'
import styles from './style.module.scss'
import { connect } from 'react-redux'
import cx from 'classnames'
import { seatSelectAction } from '../../redux/actions/BookingTicketActions'

function Seats(props) {
    const { dataSeats, seatSelected, seatSelect } = props
    const checkSeatSelect = (soGhe) => {
        return seatSelected.some(seat => seat.soGhe === soGhe);
    }

    return (
        <div className="mt-3">
            {dataSeats.map((row, index) => {
                return <div key={index} className={styles.row}>
                    <div className={styles.rowNumber}>{row.hang}</div>
                    {index === 0 ?
                        //Check hàng đầu tiên là số cột
                        (row.danhSachGhe.map((ghe, index) => {
                            return <span className={styles.rowNumber}>{ghe.soGhe}</span>
                        })) :
                        (row.danhSachGhe.map((ghe, index) => {
                            return <button key={index}
                                className={cx(styles.ghe,
                                    ghe.daDat ? styles.gheDuocChon : '',
                                    checkSeatSelect(ghe.soGhe) ? styles.gheDangChon : '')}
                                disabled={ghe.daDat}
                                onClick={() => seatSelect(ghe)}
                            >
                                {ghe.soGhe}
                            </button>
                        }))
                    }
                </div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataSeats: state.BookingTicketReducer.dataSeats,
        seatSelected: state.BookingTicketReducer.seatSelected
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        seatSelect: (ghe) => {
            dispatch(seatSelectAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seats)