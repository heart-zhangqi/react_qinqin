import React from 'react'
import { NavLink } from 'react-router-dom'
import './tab.scss'

const TabList = props => {
    return (
        <ul className = "listNav">
            <li>
                <NavLink to ='/list/popularity'   activeClassName = "active">人气</NavLink>
                <NavLink to ='/list/sales'  activeClassName = "active">销量</NavLink>
                <NavLink to ='/list/newest'   activeClassName = "active">最新</NavLink>
                <NavLink to ='/list/price'   activeClassName = "active">价格</NavLink>
            </li>
        </ul>
    )
}

export default TabList
