import React,{Component} from 'react'
import { Route,Switch,withRouter,Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Category from '../pages/category'
import Tab from '../components/common/tab/index.js'
import TabBar from '../components/common/TabBar'
import Mine from '../pages/mine'
import ShopCar from '../pages/shopcar'
import Recommed  from '../pages/recommed'
import List  from '../pages/list'
import Detail from '../pages/detail'


class LayOut extends Component{
    constructor( props ){
        super(props)
        this.state = {
            TabBack:false,
            TabBarFlag:true,
            TabFlag:true,
            arr_tabbar:['/mine','/list'],
            arr_back:['/home'],
            arr_tab:['/detail'],
            title:{
                '/home':'亲亲网',
                '/recommed':'电影院',
                '/mine':'我的',
                '/category':'分类',
                '/shopcar':'购物车',
                '/list':'详情' 
            }
        }
    }

    componentDidMount(){
        this.renderTabBack()
        this.renderTabBar()
        this.renderTab()
    }
    componentWillReceiveProps( nextprops ){
        this.renderTabBack(nextprops)
        this.renderTabBar(nextprops)
        this.renderTab(nextprops)
    }

    renderTabBack = nextprops => {
        const { pathname } = nextprops && nextprops.location || this.props.location
        const f = this.state.arr_back.some( item => item == pathname )
        if( !f ){
            this.setState({
                TabBack:true
            })
        }else{
            this.setState({
                TabBack:false
            })
        }

    }

    renderTabBar = nextprops => {
        const { pathname }= nextprops && nextprops.location || this.props.location
        const f = this.state.arr_tabbar.some( item => item == pathname )
        if( !f ){
            this.setState({
                TabBarFlag:true
            })
        }else{
            this.setState({
                TabBarFlag:false
            })
        }
    }

    renderTab = nextprops => {
        const { pathname } = nextprops && nextprops.location || this.props.location
        const f = this.state.arr_tab.some( item => item == pathname )
        if ( f ){
           this.setState({
               TabFlag:false
           })
        }else{
            this.setState({
                TabFlag:true
            })
        }
    }
    render(){
        const { TabBack,title,TabBarFlag,TabFlag} = this.state
        const { pathname } = this.props.location
        return (
            <div className = "layout">
                <Tab TabBack = { TabBack } TabFlag = { TabFlag } title = { title[pathname] } { ...this.props }/>
                <Switch>
                    <Redirect to = '/home' from = "/" exact/> 
                    <Route path = "/home" component = { Home }/>
                    <Route path = "/recommed" component = { Recommed }/>
                    <Route path = "/category" component = { Category }/>
                    <Route path = "/shopcar" component = { ShopCar }/>
                    <Route path = "/mine" component = { Mine }/>
                    <Route path = "/list" component = { List }/>
                    <Route path = "/detail" component = { Detail }></Route>

                </Switch>
                <TabBar TabBarFlag = { TabBarFlag }/>
            </div>
        )
    }
}
export default withRouter( LayOut )