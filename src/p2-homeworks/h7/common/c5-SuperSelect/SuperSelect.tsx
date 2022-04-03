import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] | undefined = options?.map(el=>{ return <option key={Math.random()} value={el}>{el}</option>}); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange&&onChange(e);
        onChangeOption&&onChangeOption(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
