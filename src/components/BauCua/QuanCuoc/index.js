import React from 'react'
import { useDispatch } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { datCuocAction } from '../../../redux/actions/BookingTicketActions copy';

export default function QuanCuoc(props) {
    const dispatch = useDispatch();

    const { quanCuoc } = props;

    return (
        <div className="text-center text-light" style={{ maxWidth: '200px' }}>
            <img className="w-100" src={quanCuoc.hinhAnh} alt={`${quanCuoc.name}.png`} />
            <div className="input-group bg-primary my-2 d-flex justify-content-between align-items-center rounded">
                <button type="button" className="btn btn-danger"
                    onClick={() => {
                        dispatch(datCuocAction(quanCuoc.ma, false))
                    }}
                >-</button>
                <span>{quanCuoc.diemCuoc.toLocaleString()}</span>
                <button
                  
                    type="button" className="btn btn-danger"
                    onClick={() => {
                        dispatch(datCuocAction(quanCuoc.ma, true))
                    }}
                >+</button>
            </div>
        </div>
    )
}
