const initialState = {
    choice: '',
    computer: '',
    winTimes: 0,
    playedTimes: 0
}

const checkPlayerWin = (player, computer) => {
    if ((player === 'keo' && computer === 'bao') ||
        (player === 'bao' && computer === 'bua') ||
        (player === 'bua' && computer === 'keo')) 
            return 1;
    else if (player ===computer) return 0;
    return -1;
}

export const GameOanTuXiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHON_KET_QUA':
            state.choice = action.choice;
            return { ...state }
        case 'BAT_DAU': {
            if (state.choice === '') {
                alert('Vui lòng chọn kéo, búa hoặc bao trước khi bắt đầu!')
                return state
            }

            const arr = ['keo', 'bua', 'bao'];
            const index = Math.floor(Math.random() * 3);
            state.computer = arr[index];

            if(checkPlayerWin(state.choice, arr[index])===1)state.winTimes+=1;
            state.playedTimes += 1;

            return { ...state }
        }
        default:
            return state
    }
}
