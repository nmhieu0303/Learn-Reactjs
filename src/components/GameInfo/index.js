import React from 'react'
import {connect} from 'react-redux'

function GameInfo(props) {
    const {choice, winTimes,playedTimes }  = props
    return (
        <div className="text-center mt-4">
            <p className="display-6">BẠN CHỌN: <span className="text-danger">{choice==='TAI'?'Tài':(choice==='XIU'?'Xỉu':'')}</span></p>
            <p className="display-6">Số bàn thắng: <span className="text-success">{winTimes}</span></p>
            <p className="display-6">Tổng số bàn chơi: <span className="text-warning">{playedTimes}</span></p>
        </div>

    )
}
const mapStateToProps = (state) => {
    return{
        choice : state.GameXucXacReducer.choice,
        winTimes: state.GameXucXacReducer.winTimes,
        playedTimes: state.GameXucXacReducer.playedTimes
    }
}

export default connect(mapStateToProps,null)(GameInfo)
