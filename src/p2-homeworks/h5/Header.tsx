import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./RoutesComponent";
import s from './HW5.module.css'

function Header() {
    return (
        <div>

            <nav className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.headerLink}>pre junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.headerLink}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.headerLink}>super junior</NavLink>
            </nav>

        </div>
    )
}

export default Header
