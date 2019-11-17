import React from 'react'
import { NavLink } from 'react-router-dom'
import './TabBar.scss'

const TabBar = props =>{
    const navs =  [
        {
            id: 1,
            icon: 'fa-home',
            path: '/home',
            text: '首页'
          },
          {
            id: 2,
            icon: 'fa-hand-peace',
            path: '/recommed',
            text: '推荐'
          },
          {
            id: 3,
            icon: 'fa-gifts',
            path: '/category',
            text: '分类'
          },
          {
            id: 4,
            icon: 'fa-shopping-cart',
            path: '/shopcar',
            text: '购物车'
          },
          {
            id: 5,
            icon: 'fa-user-secret',
            path: '/mine',
            text: '我的'
          }
    ]

    function renderNav(){
        return navs.map( item => (
            <li
                key = { item.id }
            >
                <NavLink
                    to = { item.path }
                    activeClassName = "active"
                >
                    <i className = { 'fas ' + item.icon }></i>
                    <span>
                        { item.text }
                    </span>
                </NavLink>
            </li>
        ))
    }

    return (
        <footer height="200px">
            <ul>
               { props.TabBarFlag && renderNav() }
            </ul>
        </footer>
    )
}
export default  TabBar