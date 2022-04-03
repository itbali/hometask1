import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        console.log(e.currentTarget.name)
        onChange&&onChange(e);
        onChangeOption&&onChangeOption(e.currentTarget.name)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( 
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                name={o}
                value={value}
                checked={value===o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
