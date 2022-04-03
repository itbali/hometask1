import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

// export type UserType =

export type SinglePerson = {
    _id:number
    name: string
    age: number
}
export type StateType = Array<SinglePerson>


const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<StateType>(initialPeople)

    const finalPeople = people.map((p: SinglePerson) => (
        <div key={p._id}>
            {p.name} is {p.age} years old
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))

    return (
        <div>
            <hr/>
            <h1>homeworks 8</h1>
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
