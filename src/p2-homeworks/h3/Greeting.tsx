import React, {ChangeEvent, ChangeEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: any) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting = (props: GreetingPropsType) => {
    const inputClass = props.name === "" ? s.error : s.someClass // need to fix with (?:)


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNameCallback(e.currentTarget.value)
    }
    return (
        <div className={s.GreetingContainer}>
            <div><input value={props.name} onChange={setNameCallback} className={inputClass}/>
                {!!props.error && <span className={s.errorText}>{props.error}</span>}</div>
            <button onClick={props.addUser}>add</button>
            <span className={s.userCounter}>{props.totalUsers}</span>
        </div>
    )
}

export default Greeting
