import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'

export default class Popularity extends Component {
    constructor( props ){
        super(props)
        this.state = {
            popularity:[]
        }
    }

    componentDidMount(){
        const { search } = this.props.location
        const { cid } = qs.parse( search.slice(1) )
        axios({
            url:'/mock/list.json',
            params:{
                r: 'class/cyajaxsub',
                page: 1,
                cid,
                px: 't',
                cac_id: ''
            }
        }).then(res => {
            console.log('111',res)
            console.log('222',res.data.data.content)
            this.setState({
                popularity:res.data.data.content
            })
            console.log('33',this.state.popularity)

        })
    }

    renderList =  () => {
        return (
            this.state.popularity.map( item =>(
                <li key = {item.id}>
                   <img src = {item.pic} alt = "" />
                    <div className = "right">
                        <h4>
                             { item.d_title }
                        </h4>
                         <s className = "disprice">券后价:<s className = "redprice"><sub>￥</sub>{ item.quan_over }</s></s><br/>
                         {item.xinpin && <span className = "news">新品</span>}&nbsp;&nbsp;
                         {item.quan_jine && <span className = "ticket">券{item.quan_jine}元</span>}<br/>
                         <strong className = "sale">已售:{ item.xiaoliang }</strong>&nbsp;|&nbsp;
                        <strong className = "comment">评论:{ item.dsr }</strong>

                    </div>
                </li>
            ))
        )
}

    render() {
        return (
            <div className = "container">
                <ul className = "list">
                    { this.renderList() }
                </ul>
            </div>
        )
    }
}
