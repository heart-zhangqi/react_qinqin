import React, { Component } from 'react'
import qs from 'querystring'
import './detail.scss'
// import Addshopcar from './Addshopcar'
import { Link } from 'react-router-dom'
import './addshopcar.scss'
import Count from './count'

export default class Detail extends Component {
    constructor( props ){
        super(props)
        this.state = {
            detail:[]
        }
    }
    getCar = () => {
        return localStorage.getItem('shopcar') && JSON.parse(localStorage.getItem('shopcar'))||[]
    }
    setCar = ( arr ) => {
        return localStorage.setItem( 'shopcar',JSON.stringify( arr ) )
    }
    addShopCar = () => {
        // const { getCar } = this.state
        const shopcar = this.getCar()
        const { search } = this.props.location 
        const { id,pic,title,jiage,yuanjia,xiaoliang } = qs.parse( search.slice(1))
        if( shopcar.length == 0 ){
            shopcar.push({
                id,title,yuanjia,jiage,pic,
                // num:this.num,
                f:false
            })
            this.setCar( shopcar );
        }else{
            const f = shopcar.some( item => item.id == id);
            if( f ){
                // 该商品已经存在
                shopcar.map( item => {
                    if( item.id == id ){
                        // item.num += this.num;
                        return;
                    }
                } )
                this.setCar( shopcar );
            }else{
                 shopcar.push({
                id,title,yuanjia,jiage,pic,
                // num:this.num,
                f:false
            });
            this.setCar( shopcar );
            }
        }
        console.log(shopcar)
        return 
    }

    rederCon = () =>{
        const { search } = this.props.location 
        const { id,pic,title,jiage,yuanjia,xiaoliang } = qs.parse( search.slice(1))
       

        return (
            <div >
                <img className = "detailimg" src={ pic } alt=""/>
                <div className = "detail-show">
                <h3> { title } </h3>
            
            <div className = "conent">
                <div className = "detail_left">
                    <span  className="quanhoujia">券后价：<sub>￥</sub><i>{ jiage }</i></span>
                    <br/><del className = "tianmaopjia">天猫价：{ yuanjia }</del>
                </div>
                <div className = "detail_right">
                    <span>已售<i>{ xiaoliang }</i>件</span>
                    <br/><span>包邮</span>
                    <span>运费险</span>
                </div>
            </div>
            <Count/>
                <div className="col-12-4 name">
                    <span>立即领券</span>
                </div>
            </div>
       
            <div className = "addshopcar">
                <button onClick = { this.addShopCar }>
                    <Link 
                    to ={{
                        pathname: `/shopcar`,
                        search: `id=${ id }&pic=${ pic }&title=${ title}&jiage=${ jiage}&yuanjia=${ yuanjia }&xiaoliang=${ xiaoliang } `
                    }}
                    >加入购物车</Link>
                </button>
                <button>立即购买</button>
            </div>
        </div>
        )
    }

    render() {
       
        return (
            <div className = "container detail">
              { this.rederCon () }
            </div>
        )
    }
}
