import React from 'react'
import styles from './style.module.scss'
import { connect } from 'react-redux';

function Player(props) {
    const {choice} = props;
    return (
        <div>
            <div className={styles.theThink} style={{ backgroundImage: `url('./images/GameOanTuXi/${choice}.png')` }}></div>
            <div className={styles.speech_bubble}></div>
            <img style={{ width: '250px' }} src="./images/GameOanTuXi/player.png" alt="" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        choice: state.GameOanTuXiReducer.choice
    }
}

export default connect(mapStateToProps, null)(Player);