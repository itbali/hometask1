import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
}

type AffairsType = Array<AffairType>

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairsType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairsType, filter: FilterType) : any => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter((e)=>e.priority===filter)
    // else if (filter === 'high') return affairs.filter((e)=>e.priority==='high')
    // else if (filter === 'low') return affairs.filter((e)=>e.priority==='low')
    // else if (filter === 'middle') return affairs.filter((e)=>e.priority==='middle')
}

export const deleteAffair = (affairs: AffairsType, _id: number)  => { // need to fix any
    console.log(affairs.filter((a)=>a._id!==_id))
    return affairs.filter((a)=>a._id!==_id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <h1 style={{textAlign:"center"}}>homeworks 2</h1>

            <Affairs
                filter={filter}
                filteredAffairs={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
        </div>
    )
}

export default HW2
