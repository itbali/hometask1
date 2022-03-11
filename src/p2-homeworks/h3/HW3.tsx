import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users,{_id:v1(), name: name}]) // need to fix
    }

    return (
        <div>
            <hr/>
            <h1 style={{textAlign:"center"}}>homeworks 3</h1>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
        </div>
    )
}

export default HW3
