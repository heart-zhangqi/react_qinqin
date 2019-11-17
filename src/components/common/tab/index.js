import React from 'react'
import './Tab.scss'

const Tab = props => {
    const { goBack } = props.history
    return (
       <div>
            { !props.TabFlag && <div className = "detail-tab">
                 <i className = "fas fa-angle-left back_detail" onClick = { goBack }></i>
                </div>}
            {  props.TabFlag &&<header>
                { props.TabBack && <i className = "fas fa-angle-left" onClick = { goBack }></i> }
             <span>{ props.title }</span>
        </header>}
       </div>
    )
}
export default Tab
