import React from 'react'
import styles from './style.module.scss';
import cx from 'classnames';
import { connect } from 'react-redux';
import GameTuXiInfo from '../../components/GameTuXiInfo';
import Player from '../../components/Player';
import Computer from '../../components/Computer';

function GameOanTuXi(props) {
    const { PlayGame, ChonKetQua } = props;
    return (
        <div className={styles.game} style={{ backgroundImage: "url('./images/GameOanTuXi/bgGame.png')" }} >
            <h1 className="text-center pt-2 text-warning display-5">OẴN TÙ XÌ</h1>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 order-md-1 col-6">
                        <Player />
                        <div className="row">
                            <div className="col-4 text-end">
                                <button className={styles.btn_item}>
                                    <img src="./images/GameOanTuXi/keo.png" alt="keo" onClick={()=>ChonKetQua('keo')} />
                                </button>
                            </div>
                            <div className="col-4">
                                <button className={styles.btn_item}>
                                    <img src="./images/GameOanTuXi/bua.png" alt="bua" onClick={()=>ChonKetQua('bua')}/>
                                </button>
                            </div>
                            <div className="col-4  text-start">
                                <button className={styles.btn_item}>
                                    <img src="./images/GameOanTuXi/bao.png" alt="bao" onClick={()=>ChonKetQua('bao')}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 order-md-2 col-12  order-3">
                        <GameTuXiInfo />
                        <button className={cx(styles.btn_play, "btn btn-success")} onClick={PlayGame}>Bắt đầu</button>
                    </div>
                    <div className="col-md-4 order-md-3 col-6">
                        <Computer />
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        PlayGame: () => {
            dispatch({ type: 'BAT_DAU' });
        },
        ChonKetQua: (choice) => {
            dispatch({ type: 'CHON_KET_QUA', choice });
        }
    }
}
export default connect(null, mapDispatchToProps)(GameOanTuXi);

