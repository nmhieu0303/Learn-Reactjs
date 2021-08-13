import React from 'react'
import DanhSachCuoc from '../../components/BauCua/DanhSachCuoc'
import DanhSachXucXac from '../../components/BauCua/DanhSachXucXac'
import DiemCuoc from '../../components/BauCua/DiemCuoc'
import './GameBauCua.css'

export default function GameBauCua() {
    return (
        <div id="gameBauCua" className="container-fluid ">
               
                <DiemCuoc/>
                <div className="row">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                        <DanhSachCuoc/>
                    </div>
                    <div className="col-12 col-md-4 order-1 order-md-2">
                        <DanhSachXucXac/>
                    </div>
                </div>
        </div>
    )
}
