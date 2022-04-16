import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [values, setValues] = useState([0, 100])

    return (
        <div>
            <hr/>
            <h1>homeworks 11</h1>

            <div>
                <span>{values[0]}</span>
                <SuperRange onChangeRange={(e) => {
                    (e < values[1])
                        ? setValues([e, values[1]])
                        : setValues([...values]);
                    console.log(values)
                }}
                            value={values[0]}
                />
            </div>

            <div>
                <span>{values[0]}</span>
                <SuperDoubleRange rtl={false} values={values} setValues={setValues} max={100} min={0}/>
                <span>{values[1]}</span>
            </div>

            <hr/>

        </div>
    )
}

export default HW11
