import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
export default class MyDate extends Component {
    constructor() {
        super();
        this.state = {
            // date: null
            date: new Date(),
        };
    }
    // state = {
//   }
 
  // onChange(date){
  //     this.setState({ date : date})
  // }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}