import { ADD_COMMENT } from "../types/FacebookTypes";

export const addCommentAction = (item) => ({
    type: ADD_COMMENT,
    item
})
