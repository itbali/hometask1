import {StateType} from "../HW8";

export type SortAT = ReturnType<typeof sortAC>
export type CheckAT = ReturnType<typeof checkAC>

export type ActionType = SortAT|CheckAT

export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case "SORT" : {
            if (action.payload === "up") {
               let stateCopy = [...state]
                stateCopy.sort((a, b) => a.name > b.name ? -1 : 1)
                return stateCopy
            } else {
                let stateCopy = [...state]
                stateCopy.sort((a, b) => b.name > a.name ? -1 : 1)
                return stateCopy
            }
        }
        case "CHECK":
            return state.filter(el=>el.age>=action.payload)
        default: return state
    }
}

let sortAC = (payload:"up"|"down") => {
    return ({type: "SORT",payload} as const)
}
let checkAC = (payload:number) =>{
    return ({type: "CHECK", payload} as const)
}