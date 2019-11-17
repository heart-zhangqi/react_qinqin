import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './addshopcar.scss'
import qs from 'querystring'

export default class Addshopcar extends Component {
    
    
    render() {
        const { search } = this.props.location 
        const { id,pic,title,jiage,yuanjia,xiaoliang } = qs.parse( search.slice(1))
        return (
            <div className = "addshopcar">
                <button>
                    <Link 
                    to ={{
                        pathname: `/shopcar`,
                        // search: `id=${ id }&pic=${ pic }&title=${ title}&jiage=${ jiage}&yuanjia=${ yuanjia }&xiaoliang=${ xiaoliang } `
                    }}
                    >加入购物车</Link>
                </button>
                <button>立即购买</button>
            </div>
        )
    }
}

