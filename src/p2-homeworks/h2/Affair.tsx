import React, {MouseEventHandler} from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (

        <div className={s.singleAffair}>
            <b>{props.affair.name}</b>
            <span className={s.priority}><i> Приоритет: </i>
                <span>{props.affair.priority}</span></span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
