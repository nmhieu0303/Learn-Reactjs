import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import XucXac from '../XucXac'
import './DanhSachXucXac.css'

export default function DanhSachXucXac(props) {
    const danhSachXucXac = useSelector(state => state.GameBauCuaReducer.danhSachXucXac)
    const dispatch = useDispatch();
    return (
        <div className="mt-2 d-flex justify-content-center align-items-center flex-column">
            <div className="rounded-circle bg-white plate m-3 " style={{ height: 250, width: 250, paddingRight: 50 }}>
                <div className="row" style={{ marginLeft:30}}>
                    <div className="col-12" >
                        <XucXac xucXac={danhSachXucXac[0]} style={{ marginLeft:'auto'}}/>
                    </div>
                    <div className="col-6" >
                        <XucXac xucXac={danhSachXucXac[1]} />
                    </div>
                    <div className="col-6 ">
                        <XucXac xucXac={danhSachXucXac[2]} />
                    </div>
                </div>
            </div>
            <button onClick={() => dispatch({ type: 'XOC_DIA' })} className="btn btn-primary my-3">Xốc đĩa</button>
        </div>
    )
}
