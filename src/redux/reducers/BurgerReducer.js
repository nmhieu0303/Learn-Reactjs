const initialState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    prices: { salad: 10, cheese: 10, beef: 10 },
    total: 30
}

export const BurgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TANG_GIAM_SL':
            if (state.burger[action.propsBurger] === 0 && action.amount <0) {
                return { ...state };
            }
            const burger = state.burger;
            burger[action.propsBurger] += action.amount;
            state.burger = { ...burger }
            state.total = state.total + state.prices[action.propsBurger] * action.amount;
            return { ...state };
        default:
            return { ...state };
    }
}