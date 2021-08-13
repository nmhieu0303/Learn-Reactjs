import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { connect } from 'react-redux'
import { seatCancelAction } from '../../redux/actions/BookingTicketActions'


function BookingInfo(props) {
    const { seatSelected ,seatCancel} = props
    const total = seatSelected.reduce((seatSelected, item)=>{
        return seatSelected + item.gia;
    },0)
    return (
        <div>
            <ul className={styles.group_list}>
                <li className={styles.group_item}>
                    <div className={cx(styles.ghe, styles.gheDuocChon)}></div>Ghế được chọn
                </li>
                <li className={styles.group_item}>
                    <div className={cx(styles.ghe, styles.gheDangChon)}></div>Ghế đang chọn
                </li>
                <li className={styles.group_item}>
                    <div className={cx(styles.ghe)}></div>Ghế trống
                </li>
            </ul>
            <table className="table table-bordered border-light text-light">
                <thead>
                    <tr>
                        <th scope="col">Số ghế</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {seatSelected.map((item, index) => {
                       return <tr key={index}>
                            <td>{item.soGhe}</td>
                            <td>{item.gia}</td>
                            <td className='text-center'>
                                <button onClick={()=>seatCancel(item.soGhe)}>Hủy</button>
                                </td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td >Tổng tiền</td>
                        <td className="text-warning" colSpan={2}>{`${total}đ`}</td>
                    </tr>
                </tfoot>
            </table>
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
        seatCancel: (soGhe) => {
            dispatch(seatCancelAction(soGhe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo)