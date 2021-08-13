import React, { useReducer } from 'react'

export const context = React.createContext();

const initialCart = [];
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart':
            {
                const index = state.findIndex(item => item.id === action.item.id);
                if (index !== -1) {
                    state[index].quantity += 1;
                    return [...state];
                }
                return [...state, { ...action.item, quantity: 1 }]
            }
        default:
            return state
    }
}

export default function ContextProvider(props) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart)
    const store = {
        cartReducer : [cart, dispatch]
    }
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
