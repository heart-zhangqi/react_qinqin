import React from 'react'
import { Tabs} from 'antd-mobile';
import Container from './container'

export default class Silder extends React.Component {
  renderContent = tab =>
    (<div style={{ overflow:'auto',height: '100%', backgroundColor: '#fff' }}>
      { tab.floors.map( (item,index) => <Container key = { index }  {...item}/>)  }
    </div>);

  render() {
    const { data } = this.props
    return (
        <Tabs tabs={data} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
           tabDirection = "vertical"
           tabBarPosition = "left"
        >
          {this.renderContent}
        </Tabs>
    );
  }
}
