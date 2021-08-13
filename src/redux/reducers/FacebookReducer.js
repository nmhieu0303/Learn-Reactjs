import { ADD_COMMENT } from "../types/FacebookTypes"

const initialState = {
    comments: [
        { id: 1, name: "John", content: "Hello everyone!!", avatar: "https://i.pravatar.cc/150?u=John" },
        { id: 2, name: "Yasou", content: "Hello Yasou!!", avatar: "https://i.pravatar.cc/150?u=Yasou" }
    ]
}
const FacebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            console.log(`action.item`, action.item)
            state.comments.push(action.item)
            return { ...state }
        default:
            return state
    }
}
export default FacebookReducer