import React from 'react'
import { useSelector } from 'react-redux'
import QuanCuoc from '../QuanCuoc'

export default function DanhSachCuoc() {
    const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc)
    return (
        <div className="mt-3">
            <div className="row">
                {danhSachCuoc.map((item, index) => {
                   return  <div className="col-4">
                        <QuanCuoc quanCuoc={item} />
                    </div>
                })}

            </div>
        </div>
    )
}
