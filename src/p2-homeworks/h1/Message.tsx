import React from 'react'
import style from './Message.module.css'

export type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataPropsType) {
    return (
        <div className={style.message}>
            <div>
                <img className={style.avatar} src={props.avatar} alt="аватарка"/>
            </div>
            <div className={style.messageText}>
                <div>
                    <p className ={style.messageName}> {props.name}</p>
                    <p>{props.message}</p>
                </div>
                <div className={style.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
