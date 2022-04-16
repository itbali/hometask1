export type state = {
    loading: boolean
}

const initState = {
    loading: false
}

type actionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: actionType): state => { // fix any
    switch (action.type) {
        case "loader": {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: 'loader', loading} as const
} // fix any