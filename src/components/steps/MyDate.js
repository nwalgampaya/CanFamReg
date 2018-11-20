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

{/* <tr>
                        <td><span>1</span></td>
                        <td><span>External lip, NOS</span></td>
                        <td><span>Left</span></td>
                        <td><span>8003</span></td>
                        <td><span>Uncertain whether benign or malignant; borderline; low malignant potential</span></td>
                        <td><span>01/18/2001</span></td>
                        <td><span>33</span></td>
                        <td><span>Pathology review (means your center's pathologist examined the tissue and may have also completed an internal review sheet;)</span></td>
                        <td><span>Specimen received</span></td>
                        <td><a href="javascript:;" id="editCancerLink4f">Edit</a></td>
					
				    </tr>
                    <tr>
                        <td><span>2</span></td>
                        <td><span>TONGUE, NOS</span></td>
                        <td><span>Right</span></td>
                        <td><span>8003</span></td>
                        <td><span>Uncertain whether benign or malignant; borderline; low malignant potential</span></td>
                        <td><span>01/30/2014</span></td>
                        <td><span>14</span></td>
                        <td><span>Pathology review (means your center's pathologist examined the tissue and may have also completed an internal review sheet;)</span></td>
                        <td><span>Permission granted by patient, pending request to hospital/clinic</span></td>
                        <td><a href="javascript:;" id="editCancerLink50">Edit</a></td>
                        
				    </tr> */}