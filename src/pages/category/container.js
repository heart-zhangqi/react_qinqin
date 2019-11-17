import React from 'react'
import {Link} from 'react-router-dom'
import './container.scss'

const Container = props =>{
    const renderList = list =>{
        return (list.map( item => (
            <li key ={ item.api_cid}>
                <Link 
                  to ={{
                  pathname: `/list`,
                  search: `cid=${ item.api_cid }`
                }}
                  >
                    <img src = { item.img }/>
                    <span>{ item.name }</span>
                </Link>
            </li>
        ) ))
    }
    return(
        <div className="floor">
            <h3>{ props.name}</h3>
            <ul>
                { renderList( props.list ) }
            </ul>
        </div>
    )
}
export default Container