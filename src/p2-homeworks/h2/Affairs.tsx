import React, {MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    filter: FilterType
    filteredAffairs: Array<AffairType>
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.filteredAffairs.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    const activeClass = s.filterActiveButton

    return (
        <div className={s.affairWrapper}>

            <div className={s.affairsContainer}>{mappedAffairs}</div>
            
            <div className={s.buttonsContainer}>
                <button className={`${s.filterButton} ${props.filter==='all'?s.filterActiveButton:''}`} onClick={setAll}>All</button>
                <button className={`${s.filterButton} ${props.filter==='high'?s.filterActiveButton:''}`} onClick={setHigh}>High</button>
                <button className={`${s.filterButton} ${props.filter==='middle'?s.filterActiveButton:''}`} onClick={setMiddle}>Middle</button>
                <button className={`${s.filterButton} ${props.filter==='low'?s.filterActiveButton:''}`} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
