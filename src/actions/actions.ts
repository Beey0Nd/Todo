// import { createAction } from "@reduxjs/toolkit"
import { ActionTypes, Id, ITodo, TFilter } from "../types/types"


// export const addTodo = createAction("ADD_TODO")
// export const setCompleted = createAction("SET_COMPLETED")
// export const removeCompleted = createAction("REMOVE_COMPLETED")
// export const setFilter = createAction("SET_FILTER")


export const addTodo = (todo: ITodo): ActionTypes => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export const setCompleted = (id: Id): ActionTypes => {
    return {
        type: "SET_COMPLETED",
        payload: id
    }
}

export const removeCompleted = (): ActionTypes => {
    return {
        type: "REMOVE_COMPLETED"
    }
}

export const setFilter = (filter: TFilter): ActionTypes => {
    return {
        type: "SET_FILTER",
        payload: filter
    }
}
