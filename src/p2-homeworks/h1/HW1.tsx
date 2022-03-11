import React from 'react'
import Message, {messageDataPropsType} from "./Message";

const messageData: messageDataPropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

const message2Data: messageDataPropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={message2Data.avatar}
                name={message2Data.name}
                message={message2Data.message}
                time={message2Data.time}
            />

            <hr/>
            <hr/>
        </div>
    )

}


export default HW1
