import React, { useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestApi} from "./RequestAPI";

const HW13 = () => {
    const [auth, setAuth] = useState<boolean>(false)
    const [servRespone,setServResponse]=useState('')

    const checkBoxCallback = (checkBoxStatus: boolean) => {
        setAuth(checkBoxStatus)
    }
    const sendRequest = ()=> {
        requestApi.post('',{success: auth})
            .then(res=>
                    setServResponse(res.data.errorText)
            )
            .catch(err=>
                setServResponse(err.message)
            )
            .finally(()=>{
                console.trace();
                setTimeout(()=>setServResponse(''), 10500)
                console.trace();
            })
    }
    return (


        <div>
            <span>Автризован?</span><SuperCheckbox checked={auth} onChangeChecked={checkBoxCallback}/>
            <br/>
            <SuperButton onClick={sendRequest}>Axios</SuperButton>

            {servRespone&&<span>Ответ с сервера: {servRespone}</span>}
        </div>
    );
};

export default HW13;
