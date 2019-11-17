import React,{ Component } from 'react'
import { List, Stepper } from 'antd-mobile';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
      val1: 2,
    };
  }
  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  onChange1 = (val1) => {
    // console.log(val);
    this.setState({ val1 });
  }
  render() {
    return (
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              defaultValue = "1"
              value={this.state.val}
              onChange={this.onChange}
            />}
        >
        </List.Item>
      </List>
      )
  }
}

// ReactDOM.render(<Count />, mountNode);