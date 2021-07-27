import React from 'react'
import {connect} from 'react-redux'

function GameTuXiInfo(props) {
    const {winTimes,playedTimes }  = props
    return (
        <div className="text-center mt-4">
            <p className="display-6 text-light">Số bàn thắng: <span className="text-success">{winTimes}</span></p>
            <p className="display-6 text-light">Tổng số bàn chơi: <span className="text-warning">{playedTimes}</span></p>
        </div>

    )
}
const mapStateToProps = (state) => {
    return{
        winTimes: state.GameOanTuXiReducer.winTimes,
        playedTimes: state.GameOanTuXiReducer.playedTimes
    }
}

export default connect(mapStateToProps,null)(GameTuXiInfo)
