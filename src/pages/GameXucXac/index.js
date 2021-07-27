import React from 'react'
import styles from './style.module.scss';
import cx from 'classnames';
import Dices from '../../components/Dices'
import GameInfo from '../../components/GameInfo'
import { connect } from 'react-redux';

function GameXucXac(props) {
    const { DoXucXac ,ChonKetQua} = props;
    return (
        <div className={styles.game} style={{ backgroundImage: "url('./images/bgGame.png')" }} >
            <h1 className="text-center pt-5 text-light display-5">Lắt xí ngầu</h1>
            <div className="container">
                <Dices />
                <div className="row justify-content-center">
                    <div className="col-md-3 col-5 text-end">
                        <button className={cx(styles.btn_control, "btn btn-primary")} onClick={()=>ChonKetQua('TAI')}>Tài</button>
                    </div>
                    <div className="col-md-3 col-5 text-start">
                        <button className={cx(styles.btn_control, "btn btn-primary")} onClick={()=>ChonKetQua('XIU')}>Xỉu</button>
                    </div>
                </div>
                <GameInfo />
                <button className={cx(styles.btn_play, "btn btn-success")} onClick={DoXucXac}>Bắt đầu</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        DoXucXac: () => {
            dispatch({ type: 'DO_XUC_XAC' });
        },
        ChonKetQua: (choice) => {
            dispatch({ type: 'CHON_KET_QUA', choice});
        }
    }
}
export default connect(null, mapDispatchToProps)(GameXucXac);

