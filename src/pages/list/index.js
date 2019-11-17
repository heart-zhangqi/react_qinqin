import React,{Component} from 'react'
import { Route ,Redirect,Link} from 'react-router-dom'
import axios from 'axios'
// 通过node获取url中的query
import qs from 'querystring'
import TabList from './Tab'
import Popularity from './popularity'
import Sales from './sales'
import Newest from './newest'
import Price from './price'
import  './list.scss'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount() {
        const { search } = this.props.location
        const { cid } = qs.parse( search.slice(1))//获取query
        axios({
            url:'/mock/list.json',
            params:{
                r: 'class/cyajaxsub',
                page: 1,
                cid,
                px: 't',
                cac_id:''

            }
        }).then( res => {
            this.setState({
                list: res.data.data.content
              })
        } )
    }

    renderList =  () => {
        return (
            this.state.list.map( item =>(
                <li key = {item.id}>
                   <Link 
                        to ={{
                            pathname: `/detail`,
                            search: `id=${ item.id }&pic=${ item.pic }&title=${ item.title}&jiage=${ item.jiage}&yuanjia=${ item.yuanjia }&xiaoliang=${ item.xiaoliang } `
                        }}
                   >
                   <img src = {item.pic} alt = "" />
                    <div className = "right">
                        <h4>
                             { item.d_title }
                        </h4>
                         <s className = "disprice">券后价:<s className = "redprice"><sub>￥</sub>{ item.jiage }</s></s><br/>
                         {item.xinpin && <span className = "news">新品</span>}&nbsp;&nbsp;
                         {item.quan_jine && <span className = "ticket">券{item.quan_jine}元</span>}<br/>
                         <strong className = "sale">已售:{ item.xiaoliang }</strong>&nbsp;|&nbsp;
                        <strong className = "comment">评论:{ item.dsr }万</strong>

                    </div>
                   </Link>
                </li>
            ))
        )
}
    render(){
        return (
            <div className = "container">
                <TabList/>
                {/* <Redirect to ="/list/popularity" from = "/list"></Redirect> */}
                <Route path = "/list/popularity" component={ Popularity }></Route>
                <Route path = "/list/sales" component={ Sales }></Route>
                <Route path = "/list/newset" component={ Newest }></Route>
                <Route path = "/list/price" component={ Price }></Route>
                <ul className = "list">
                    { this.renderList() }
                </ul>
            </div>
        )
    }
}

export default List