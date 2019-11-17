import React,{Component} from 'react'
import qs from 'querystring'
import './shopcar.scss'

class ShopCar extends Component{
    getCar = () => {
        return localStorage.getItem('shopcar') && JSON.parse(localStorage.getItem('shopcar'))||[]
    }
    renderShopCar = () => {
        const shopcar = JSON.parse(localStorage.getItem('shopcar'))
        console.log(shopcar)
        return (
            <ul>
             { shopcar &&(
                 shopcar.map(item => (
            <li className = "shopcar" key = { item.id }>
                <div className = "shopcar-left">
                    <img src = {item.pic} alt=""></img>
                </div>
                <div  className = "shopcar-right">
                    <h4>{ item.title }</h4>
                    <span className = "kucun">
                        库存：{ item.xiaoliang  }
                    </span>
                    <div className = "number">
                        <span>-</span><input type = "number" min = "1" max="10" /><span>+</span><br/>
                        <s>
                             价格：<i>{ item.jiage } </i>元
                        </s>
                    </div>
                    
                </div>
           </li>
                 ))
                
             ) ||<div>您的购物车是空的，清先加购</div>
        }

            </ul>
        )
        
    }
render(){
    // const { search } = this.props.location 
    // const { id,pic,title,jiage,yuanjia,xiaoliang } = qs.parse( search.slice(1))
        // <div></div>
    return (
            <div className = "container">
               {/* <ul>
                   <li className = "shopcar">
                        <div className = "shopcar-left">
                            <img src = {pic} alt=""></img>
                        </div>
                        <div  className = "shopcar-right">
                            <h4>{ title }</h4>
                            <span className = "kucun">
                                库存：{ xiaoliang  }
                            </span>
                            <div className = "number">
                                <span>-</span><input type = "number" min = "1" max="10" value= "1"/><span>+</span><br/>
                                <s>
                                     价格：<i>{ jiage } </i>元
                                </s>
                            </div>
                            
                        </div>
                   </li>
               </ul> */}
               { this.renderShopCar() }
            </div>
        )
    }
    
}
export default  ShopCar