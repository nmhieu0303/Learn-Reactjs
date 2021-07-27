
const initialState = {
    dices: [],
    choice: '',
    winTimes: 0,
    playedTimes: 0
}

export const GameXucXacReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DO_XUC_XAC':

            // Lắt xúc xắc
            const min = Math.ceil(1);
            const max = Math.floor(7);
            const dices = Array.from({ length: 3 }, () => Math.floor(Math.random() * (max - min) + min));
            state.dices = dices;

            //Xét đúng sai
            const total = dices.reduce((total, dice) => {
                return total += dice
            }, 0)
            if ((total >= 11 && total <= 17 && state.choice === 'TAI') ||
                (total >= 4 && total <= 10 && state.choice === 'XIU')) {
                state.winTimes += 1;
            }

            //Cập nhật số lần chơi
            state.playedTimes += 1;
            return { ...state }
        case 'CHON_KET_QUA':
            state.choice = action.choice
            return { ...state }
        default:
            return state
    }
}
