import React from 'react'
import styles from './style.module.scss'
import {connect} from 'react-redux'

 function Computer(props) {
     const {computer} = props;
    return (
        <div>
            <div className={styles.theThink} style={{ backgroundImage: `url('./images/GameOanTuXi/${computer}.png')` }}></div>
            <div className={styles.speech_bubble}></div>
            <img style={{ width: '250px' }} src="./images/GameOanTuXi/playerComputer.png" alt="" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        computer: state.GameOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps, null)(Computer);